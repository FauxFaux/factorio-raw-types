#!/usr/bin/env tsx

import { readFileSync, writeFileSync } from 'node:fs';
import {
  RCapsule,
  RCraftingSetup,
  RFluid,
  RIngredient,
  RItem,
  RLocale,
  RModule,
  RRecipe,
} from './raw-data';
import assert from 'node:assert';

function stripType(colon: Colon) {
  return colon.split(':')[1];
}

function main() {
  const obj: {
    item: Record<string, RItem>;
    fluid: Record<string, RFluid>;
    recipe: Record<string, RRecipe>;
    module: Record<string, RModule>;
    capsule: Record<string, RCapsule>;
  } = JSON.parse(readFileSync('sample-data/data.json', 'utf-8'));

  const fluidLocale: RLocale = JSON.parse(
    readFileSync('raw-script-output/fluid-locale.json', 'utf-8'),
  );
  const itemLocale: RLocale = JSON.parse(
    readFileSync('raw-script-output/item-locale.json', 'utf-8'),
  );

  const colons: JColon[] = [];
  for (const [origKey, item] of Object.entries(obj.item)) {
    assert.equal(item.name, origKey);

    // TODO: data size hack?
    if (
      [
        'textplates',
        'landscaping',
        'landscaping-trees',
        'landscaping-rocks',
        'ruins',
        'kr-decorations-1',
      ].includes(item.subgroup!)
    )
      continue;
    colons.push({
      colon: `item:${item.name}`,
      human: itemLocale.names[item.name],
      description: itemLocale.descriptions[item.name],
      order: item.order,
      stackSize: item.stack_size,
      subGroup: item.subgroup,
    });
  }
  for (const [origKey, module] of Object.entries(obj.module)) {
    assert.equal(module.name, origKey);
    colons.push({
      colon: `capsule:${module.name}`,
      human: itemLocale.names[module.name],
      description: itemLocale.descriptions[module.name],
      order: module.order,
      stackSize: module.stack_size,
      subGroup: module.subgroup,
    });
  }

  for (const [origKey, capsule] of Object.entries(obj.capsule)) {
    assert.equal(capsule.name, origKey);
    colons.push({
      colon: `capsule:${capsule.name}`,
      human: itemLocale.names[capsule.name],
      description: itemLocale.descriptions[capsule.name],
      order: capsule.order,
      stackSize: capsule.stack_size,
      subGroup: capsule.subgroup,
    });
  }

  for (const [origKey, fluid] of Object.entries(obj.fluid)) {
    assert.equal(fluid.name, origKey);
    colons.push({
      colon: `fluid:${fluid.name}`,
      human: fluidLocale.names[fluid.name],
      description: fluidLocale.descriptions[fluid.name],
      order: fluid.order,
      // TODO: normalise to css (currently has 0-255 and 0-1)?
      baseColor:
        'r' in fluid.base_color
          ? [fluid.base_color.r, fluid.base_color.g, fluid.base_color.b]
          : undefined,
    });
  }

  const validColons = new Set(colons.map((c) => c.colon));
  const nameLookupData: Record<string, Colon> = {};
  for (const colon of colons) {
    const rawName = stripType(colon.colon);
    if (rawName in nameLookupData) {
      throw new Error(`duplicate name: ${rawName}`);
    }
    nameLookupData[rawName] = colon.colon;
  }

  const nameLookup = (name: string) => {
    if (name in nameLookupData) {
      return nameLookupData[name];
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
    if (cand.results.some(([colon]) => !validColons.has(colon))) {
      console.log(cand);
      continue;
    }

    recipes.push(cand);
  }

  writeFileSync('data/colons.json', JSON.stringify(colons));
  writeFileSync('data/recipes.json', JSON.stringify(recipes));
}

function coalesce<T>(arg: T[] | Record<string, never>): T[] {
  if (!Array.isArray(arg)) {
    assert.equal('{}', JSON.stringify(arg));
    return [];
  }
  return arg;
}

function fixIng(
  nameLookup: (name: string) => Colon,
  ings: RCraftingSetup['ingredients'],
): JIng[] {
  return coalesce(ings).map((ing) => {
    // TODO: nope: these can be modules, or capsules, or who knows what
    if (Array.isArray(ing)) {
      assert.equal(2, ing.length);
      const [item, amount] = ing;
      return [nameLookup(item), amount];
    }
    const colon = `${ing.type ?? 'item'}:${ing.name}`;
    if (ing.catalyst_amount) {
      return [colon, ing.amount, { cat: ing.catalyst_amount }];
    }
    return [colon, ing.amount];
  });
}

function fixResults(
  nameLookup: (name: string) => Colon,
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

type Colon = string;

interface JColon {
  colon: Colon;
  human: string;
  description?: string;
  order?: string;
  subGroup?: string;
  stackSize?: number;
  baseColor?: JColour;
}

type JIng = [
  Colon,
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
