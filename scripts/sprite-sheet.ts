#!/usr/bin/env tsx

import spritesmith from 'spritesmith';
import { existsSync, writeFileSync } from 'node:fs';
import { mkdtemp, rm } from 'node:fs/promises';
import sharp from 'sharp';
import { createHash } from 'node:crypto';
import { RawData } from '../src/prototypes.js';

async function main() {
  const root = 'raw-script-output';
  type Path = string;
  type Colon = ['craft' | 'recipe' | 'tech', string];
  const wanted: Record<string, Colon[]> = {};

  const data = (await import('../sample-data/data.json')) as unknown as RawData;

  const sounds =
    data['ambient-sound']['aquilo-1']?.variable_sound?.layers[0]?.variants[0];
  if (sounds && 'game_controller_vibration_data' in sounds) {
    return sounds.game_controller_vibration_data
      ?.high_frequency_vibration_intensity;
  }

  const addWanted = (path: Path, type: Colon) => {
    if (!wanted[path]) wanted[path] = [];
    wanted[path].push(type);
  };

  const exists = (name: string) => existsSync(`${root}/${name}.png`);

  for (const r of Object.values(data.recipe)) {
    const guess = `recipe/${r.name}`;
    if (exists(guess)) addWanted(guess, ['recipe', r.name]);
    else console.log(`Missing recipe image: ${r.name}`);
  }

  const categories: (keyof RawData)[] = [
    'fluid',
    'ammo',
    'armor',
    'artillery-wagon',
    'capsule',
    'car',
    'cargo-wagon',
    'fluid-wagon',
    'gun',
    'item',
    'locomotive',
    'module',
    'rail-planner',
    'repair-tool',
    'selection-tool',
    'spider-vehicle',
    'spidertron-remote',
    'tool',
  ];

  for (const cat of categories) {
    item: for (const r of Object.values(data[cat])) {
      for (const sub of ['fluid', 'item', 'entity']) {
        // r.icon is the internal filename, not the exported one, maybe we should just be reading those anyway?
        const guess = `${sub}/${r.name}`;
        if (exists(guess)) {
          addWanted(guess, ['craft', r.name]);
          continue item;
        }
      }
      console.log(`Missing craftable image: ${r.name}`);
    }
  }

  const tmp = await mkdtemp('sprites-');

  const pathHashes: Record<string, string[]> = {};
  for (const [path] of Object.entries(wanted)) {
    const hash = createHash('sha512');
    const buf = await sharp(`${root}/${path}.png`).resize(32).toBuffer();
    hash.update(buf);
    const digest = hash.digest('hex').slice(0, 32);
    if (!pathHashes[digest]) {
      pathHashes[digest] = [];
      writeFileSync(`${tmp}/${digest}.png`, buf);
    }
    pathHashes[digest].push(path);
  }

  const src = Object.keys(pathHashes).map((digest) => `${tmp}/${digest}.png`);

  const result = await new Promise<spritesmith.SpritesmithResult>(
    (resolve, reject) =>
      spritesmith.run(
        {
          src,
          exportOpts: {
            format: 'png',
          },
        },
        (err, result) => (err ? reject(err) : resolve(result)),
      ),
  );

  await sharp(result.image).toFile('data/icons.webp');

  await rm(tmp, { recursive: true, force: true });

  const out: Record<string, [number, number]> = {};

  for (const [fakePath, props] of Object.entries(result.coordinates)) {
    const fakePng = fakePath.substring(tmp.length + 1);
    const hash = fakePng.slice(0, fakePng.length - 4);
    for (const realPath of pathHashes[hash]!) {
      for (const colon of wanted[realPath]!) {
        out[`${colon[0]}:${colon[1]}`] = [props.x, props.y];
      }
    }
  }

  writeFileSync('data/icons.json', JSON.stringify(out));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
