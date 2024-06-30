#!/usr/bin/env tsx

import { readFileSync, writeFileSync } from 'node:fs';
import {
  RCraftable,
  RCraftingSetup,
  RIngredient,
  RKnownType,
  RLocale,
  RPrototypeBase,
} from './raw-data';
import assert from 'node:assert';
import { Value } from '@sinclair/typebox/value';

function stripType(colon: CraftId) {
  return colon.split(':')[1];
}

function main() {
  const obj: Record<string, Record<string, RPrototypeBase>> = JSON.parse(
    readFileSync('sample-data/data.json', 'utf-8'),
  );

  const loadLocale = (name: string): RLocale => {
    return JSON.parse(
      readFileSync(`raw-script-output/${name}-locale.json`, 'utf-8'),
    );
  };

  const locale = {
    item: loadLocale('item'),
    fluid: loadLocale('fluid'),
  } as const;

  const craftables: JCraftable[] = [];

  const loadCraftable = (locale: RLocale, type: RKnownType) => {
    for (const [origKey, thing] of Object.entries(obj[type])) {
      if (!Value.Check(RCraftable, thing)) {
        console.log(thing);
        throw new Error('bad thing');
      }

      assert.equal(thing.name, origKey);
      craftables.push({
        id: thing.name,
        type,
        human: locale.names[thing.name],
        description: locale.descriptions[thing.name],
        order: thing.order,
        subGroup: thing.subgroup,
        stackSize: thing.stack_size,
      });
    }
  };

  loadCraftable(locale.fluid, 'fluid');
  loadCraftable(locale.item, 'ammo');
  loadCraftable(locale.item, 'armor');
  loadCraftable(locale.item, 'artillery-wagon');
  loadCraftable(locale.item, 'capsule');
  loadCraftable(locale.item, 'car');
  loadCraftable(locale.item, 'cargo-wagon');
  loadCraftable(locale.item, 'fluid-wagon');
  loadCraftable(locale.item, 'gun');
  loadCraftable(locale.item, 'item');
  loadCraftable(locale.item, 'locomotive');
  loadCraftable(locale.item, 'mining-tool');
  loadCraftable(locale.item, 'module');
  loadCraftable(locale.item, 'rail-planner');
  loadCraftable(locale.item, 'repair-tool');
  loadCraftable(locale.item, 'selection-tool');
  loadCraftable(locale.item, 'spider-vehicle');
  loadCraftable(locale.item, 'spidertron-remote');
  loadCraftable(locale.item, 'tool');

  // TODO: normalise to css (currently has 0-255 and 0-1)?
  // baseColor:
  //   'r' in fluid.base_color
  //     ? [fluid.base_color.r, fluid.base_color.g, fluid.base_color.b]
  //     : undefined,

  const validIds = new Set(craftables.map((c) => c.id));
  // const nameLookupData: Record<string, Colon> = {};
  // for (const colon of craftables) {
  //   const rawName = stripType(colon.colon);
  //   if (rawName in nameLookupData) {
  //     throw new Error(
  //       `duplicate name: ${colon.colon} -> ${nameLookupData[rawName]}`,
  //     );
  //   }
  //   nameLookupData[rawName] = colon.colon;
  // }

  const nameLookup = (name: string) => {
    if (validIds.has(name)) {
      return name;
    }
    throw new Error(`missing name: ${name}`);
  };

  const recipes: JRecipe[] = [];
  for (const [origKey, recp] of Object.entries(obj.recipe)) {
    assert.equal(recp.name, origKey);

    // no, we need to, like, ban recipes that make junk
    if (
      recp.name.startsWith('textplate-') ||
      recp.name.startsWith('dect-alien-')
    )
      continue;

    const craft = ('normal' in recp ? recp.normal : recp) as RCraftingSetup;
    const cand: JRecipe = {
      name: recp.name,
      ing: fixIng(nameLookup, craft.ingredients),
      results: fixResults(nameLookup, craft),
    };

    // ban recipes that make junk
    if (cand.results.some(([colon]) => !validIds.has(colon))) {
      console.log('makes invalid item', cand);
      continue;
    }

    recipes.push(cand);
  }

  const lessCraftables = craftables.filter((c) => {
    // TODO: data size hack?
    if (
      [
        'textplates',
        'landscaping',
        'landscaping-trees',
        'landscaping-rocks',
        'ruins',
        'kr-decorations-1',
      ].includes(c.subGroup!)
    ) {
      return false;
    }

    return true;
  });

  const survivingIds = new Set(lessCraftables.map((c) => c.id));

  const lessRecipes = recipes.filter(
    (r) => ![...r.results, ...r.ing].some(([id]) => !survivingIds.has(id)),
  );

  writeFileSync('data/craftables.json', JSON.stringify(lessCraftables));
  writeFileSync('data/recipes.json', JSON.stringify(lessRecipes));
}

function coalesce<T>(arg: T[] | Record<string, never>): T[] {
  if (!Array.isArray(arg)) {
    assert.equal('{}', JSON.stringify(arg));
    return [];
  }
  return arg;
}

function fixIng(
  nameLookup: (name: string) => CraftId,
  ings: RCraftingSetup['ingredients'],
): JIng[] {
  return coalesce(ings).map((ing) => {
    // TODO: nope: these can be modules, or capsules, or who knows what
    if (Array.isArray(ing)) {
      assert.equal(2, ing.length);
      const [item, amount] = ing;
      return [nameLookup(item), amount];
    }
    const id = nameLookup(ing.name);
    if (ing.catalyst_amount) {
      return [id, ing.amount, { cat: ing.catalyst_amount }];
    }
    return [id, ing.amount];
  });
}

function fixResults(
  nameLookup: (name: string) => CraftId,
  craft: RCraftingSetup,
): JIng[] {
  if (craft.results) {
    return fixIng(nameLookup, craft.results as RIngredient[]);
  }

  if (craft.result) {
    return [[nameLookup(craft.result), craft.result_count ?? 1]];
  }

  throw new Error('no results');
}

type JColour = [number, number, number];

type CraftId = string;

interface JCraftable {
  id: CraftId;
  type: RKnownType;
  human: string;
  description?: string;
  order?: string;
  subGroup?: string;
  stackSize?: number;
  // baseColor?: JColour;
}

type JIng = [
  CraftId,
  number,
  {
    cat?: number;
    // min temp, max temp?
  }?,
];

interface JRecipe {
  name: string;
  category?: string;
  order?: string;
  subgroup?: string;

  ing: JIng[];
  results: JIng[];
}

main();
