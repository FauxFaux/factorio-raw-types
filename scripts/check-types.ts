#!/usr/bin/env tsx

import { Value } from '@sinclair/typebox/value';
import { readFileSync } from 'node:fs';
import { RFluid, RItem, RRecipe } from './raw-data.js';
// import assert from 'node:assert';

function main() {
  const obj: any = JSON.parse(readFileSync('sample-data/data.json', 'utf-8'));
  for (const [name, recp] of Object.entries(obj.recipe)) {
    if (Value.Check(RRecipe, recp)) {
      // const orig = structuredClone(recp);

      // Clean fails with the Composite, alas, so we can't use this to check for unknown propertiess
      // const cleaned = Value.Clean(RRecipe, recp);
      // assert.deepEqual(orig, cleaned);
      continue;
    }
    console.log(name, recp);
    console.log([...Value.Errors(RRecipe, recp)]);
    break;
  }

  for (const [name, item] of Object.entries(obj.item)) {
    if (Value.Check(RItem, item)) {
      continue;
    }
    console.log(name, item);
    console.log([...Value.Errors(RItem, item)]);
    break;
  }
  for (const [name, item] of Object.entries(obj.fluid)) {
    if (Value.Check(RFluid, item)) {
      continue;
    }
    console.log(name, item);
    console.log([...Value.Errors(RFluid, item)]);
    break;
  }
}

main();
