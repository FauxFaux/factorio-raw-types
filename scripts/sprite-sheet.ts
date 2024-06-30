#!/usr/bin/env tsx

import spritesmith from 'spritesmith';
import { mkdirSync, readFileSync } from 'fs';
import { JRecipe } from '@/lib/j-types';
import { existsSync } from 'node:fs';
import { mkdtemp } from 'node:fs/promises';
import sharp from 'sharp';

async function main() {
  const root = 'raw-script-output';
  const wanted: string[] = [];
  const recps: JRecipe[] = JSON.parse(
    readFileSync('data/recipes.json', 'utf-8'),
  );
  const exists = (name: string) => existsSync(`${root}/${name}.png`);
  for (const r of recps) {
    if (exists(`recipe/${r.id}`)) wanted.push(`recipe/${r.id}.png`);
    else throw new Error(`Missing recipe image: ${r.id}`);
  }

  const tmp = await mkdtemp('sprites-');
  mkdirSync(`${tmp}/recipe`, { recursive: true });
  const src: string[] = [];
  for (const w of wanted) {
    const img = sharp(`${root}/${w}`);
    const fileOut = `${tmp}/${w}`;
    await img.resize(32).toFile(fileOut);
    src.push(fileOut);
  }

  const result = await new Promise<spritesmith.SpritesmithResult>(
    (resolve, reject) =>
      spritesmith.run(
        {
          src,
        },
        (err, result) => (err ? reject(err) : resolve(result)),
      ),
  );

  await sharp(result.image).toFile('data/recipe-sheet.webp');

  console.log(result);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
