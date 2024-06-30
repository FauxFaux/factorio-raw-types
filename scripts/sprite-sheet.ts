#!/usr/bin/env tsx

import spritesmith from 'spritesmith';
import { readFileSync } from 'fs';
import { JCraftable, JRecipe } from '@/lib/j-types';
import { existsSync, writeFileSync } from 'node:fs';
import { mkdtemp, rm } from 'node:fs/promises';
import sharp from 'sharp';
import { createHash } from 'node:crypto';

async function main() {
  const root = 'raw-script-output';
  type Path = string;
  type Colon = ['craft' | 'recipe' | 'tech', string];
  const wanted: Record<string, Colon[]> = {};

  const addWanted = (path: Path, type: Colon) => {
    if (!wanted[path]) wanted[path] = [];
    wanted[path].push(type);
  };

  const exists = (name: string) => existsSync(`${root}/${name}.png`);

  for (const r of JSON.parse(
    readFileSync('data/recipes.json', 'utf-8'),
  ) as JRecipe[]) {
    const guess = `recipe/${r.id}`;
    if (exists(guess)) addWanted(guess, ['recipe', r.id]);
    else throw new Error(`Missing recipe image: ${r.id}`);
  }

  outer: for (const r of JSON.parse(
    readFileSync('data/craftables.json', 'utf-8'),
  ) as JCraftable[]) {
    for (const cat of ['fluid', 'item', 'entity']) {
      const guess = `${cat}/${r.id}`;
      if (exists(guess)) {
        addWanted(guess, ['craft', r.id]);
        continue outer;
      }
    }
    console.log(`Missing craftable image: ${r.id}`);
  }

  const tmp = await mkdtemp('sprites-');

  const pathHashes: Record<string, string[]> = {};
  for (const [path, types] of Object.entries(wanted)) {
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
    for (const realPath of pathHashes[hash]) {
      for (const colon of wanted[realPath]) {
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
