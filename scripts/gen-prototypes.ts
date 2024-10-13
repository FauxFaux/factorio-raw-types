import { Type } from '@sinclair/typebox';
import * as util from 'node:util';
import { Value } from '@sinclair/typebox/value';
import { pascalCase } from 'change-case';

const hacks: Record<string, string> = {
  BlueprintBookPrototype: "'inventory_size'",
  BlueprintItemPrototype: "'selection_mode' | 'alt_selection_mode'",
  DeconstructionItemPrototype: "'selection_mode' | 'alt_selection_mode'",
  InfinityContainerPrototype: "'logistic_mode'",
  LogisticContainerPrototype: "'picture'",
  TransportBeltPrototype: "'animation_set' | 'belt_animation_set'",
  UpgradeItemPrototype: "'selection_mode' | 'alt_selection_mode'",
};

// jq keys raw-110/data-raw-dump.json

const rawKeys = [
  'accumulator',
  'achievement',
  'active-defense-equipment',
  'ambient-sound',
  'ammo',
  'ammo-category',
  'ammo-turret',
  'arithmetic-combinator',
  'armor',
  'arrow',
  'artillery-flare',
  'artillery-projectile',
  'artillery-turret',
  'artillery-wagon',
  'assembling-machine',
  'autoplace-control',
  'battery-equipment',
  'beacon',
  'beam',
  'belt-immunity-equipment',
  'blueprint',
  'blueprint-book',
  'boiler',
  'build-entity-achievement',
  'burner-generator',
  'capsule',
  'car',
  'cargo-wagon',
  'character',
  'character-corpse',
  'cliff',
  'combat-robot',
  'combat-robot-count',
  'constant-combinator',
  'construct-with-robots-achievement',
  'construction-robot',
  'container',
  'copy-paste-tool',
  'corpse',
  'curved-rail',
  'custom-input',
  'damage-type',
  'decider-combinator',
  'deconstruct-with-robots-achievement',
  'deconstructible-tile-proxy',
  'deconstruction-item',
  'deliver-by-robots-achievement',
  'dont-build-entity-achievement',
  'dont-craft-manually-achievement',
  'dont-use-entity-in-energy-production-achievement',
  'editor-controller',
  'electric-energy-interface',
  'electric-pole',
  'electric-turret',
  'energy-shield-equipment',
  'entity-ghost',
  'equipment-category',
  'equipment-grid',
  'explosion',
  'finish-the-game-achievement',
  'fire',
  'fish',
  'flame-thrower-explosion',
  'fluid',
  'fluid-turret',
  'fluid-wagon',
  'flying-text',
  'font',
  'fuel-category',
  'furnace',
  'gate',
  'generator',
  'generator-equipment',
  'god-controller',
  'group-attack-achievement',
  'gui-style',
  'gun',
  'heat-interface',
  'heat-pipe',
  'highlight-box',
  'infinity-container',
  'infinity-pipe',
  'inserter',
  'item',
  'item-entity',
  'item-group',
  'item-request-proxy',
  'item-subgroup',
  'item-with-entity-data',
  'item-with-inventory',
  'item-with-label',
  'item-with-tags',
  'kill-achievement',
  'lab',
  'lamp',
  'land-mine',
  'leaf-particle',
  'linked-belt',
  'linked-container',
  'loader',
  'loader-1x1',
  'locomotive',
  'logistic-container',
  'logistic-robot',
  'map-gen-presets',
  'map-settings',
  'market',
  'mining-drill',
  'mining-tool',
  'module',
  'module-category',
  'mouse-cursor',
  'movement-bonus-equipment',
  'night-vision-equipment',
  'noise-expression',
  'noise-layer',
  'offshore-pump',
  'optimized-decorative',
  'optimized-particle',
  'particle',
  'particle-source',
  'pipe',
  'pipe-to-ground',
  'player-damaged-achievement',
  'player-port',
  'power-switch',
  'produce-achievement',
  'produce-per-hour-achievement',
  'programmable-speaker',
  'projectile',
  'pump',
  'radar',
  'rail-chain-signal',
  'rail-planner',
  'rail-remnants',
  'rail-signal',
  'reactor',
  'recipe',
  'recipe-category',
  'repair-tool',
  'research-achievement',
  'resource',
  'resource-category',
  'roboport',
  'roboport-equipment',
  'rocket-silo',
  'rocket-silo-rocket',
  'rocket-silo-rocket-shadow',
  'selection-tool',
  'shortcut',
  'simple-entity',
  'simple-entity-with-force',
  'simple-entity-with-owner',
  'smoke',
  'smoke-with-trigger',
  'solar-panel',
  'solar-panel-equipment',
  'spectator-controller',
  'speech-bubble',
  'spider-leg',
  'spider-vehicle',
  'spidertron-remote',
  'splitter',
  'sprite',
  'sticker',
  'storage-tank',
  'straight-rail',
  'stream',
  'technology',
  'tile',
  'tile-effect',
  'tile-ghost',
  'tips-and-tricks-item',
  'tips-and-tricks-item-category',
  'tool',
  'train-path-achievement',
  'train-stop',
  'transport-belt',
  'tree',
  'trigger-target-type',
  'trivial-smoke',
  'turret',
  'tutorial',
  'underground-belt',
  'unit',
  'unit-spawner',
  'upgrade-item',
  'utility-constants',
  'utility-sounds',
  'utility-sprites',
  'virtual-signal',
  'wall',
  'wind-sound',
];

interface Type {
  name: string;
  abstract?: boolean;
  description: string;

  type: unknown;
  options?: unknown[];
  properties?: PropSpec[];
}

type Literal =
  | {
      complex_type: string;
      value?: unknown;
    }
  | string;

interface PropSpec {
  name: string;
  description: string;
  optional?: boolean;
  order?: number;
  override?: boolean;
  // lots more than literals in here sometimes
  type: Literal;
  default?: Literal;
}

interface Prototype {
  name: string;
  description: string;
  optional?: boolean;
  override?: boolean;
  type?: string;
  order?: number;
  deprecated?: boolean;
  parent?: string;
  default?:
    | {
        complex_type: string;
        value: unknown;
      }
    | string;
  properties: PropSpec[];
}

function toInterface(
  pro: Prototype,
  typeDict: Record<string, Type>,
): Interface {
  return {
    name: pro.name,
    extends: pro.parent,
    properties: pro.properties.map((v) => toProp(v, typeDict, undefined)),
  };
}

function toProp(
  v: PropSpec,
  typeDict: Record<string, Type>,
  externalProps: PropSpec[] | undefined,
) {
  return {
    name: v.name,
    type: tsType(typeDict, v.type, externalProps),
    optional: v.optional,
  };
}

function toAlias(ty: Type, typeDict: Record<string, Type>) {
  const val =
    ty.type === 'builtin'
      ? builtInMapping(ty.name)
      : tsType(typeDict, ty.type, ty.properties);
  return `export type ${ty.name} = ${val};`;
}

async function main() {
  const { default: doc } = await import('../data/prototype-api.json');

  const prototypes: Prototype[] = doc.prototypes;
  const types: Type[] = doc.types;

  const typeDict: Record<string, Type> = Object.fromEntries(
    types.map((t) => [t.name, t]),
  );

  for (const proto of prototypes) {
    const iface = toInterface(proto, typeDict);
    if (iface.properties.length === 0 && iface.extends) {
      console.log(`export type ${iface.name} = ${iface.extends};`);
      continue;
    }

    const omits = hacks[iface.name];
    const extension = iface.extends
      ? `extends ${omits ? `Omit<${iface.extends}, ${omits}>` : iface.extends} `
      : '';
    console.log(`export interface ${iface.name} ${extension}{`);
    for (const prop of iface.properties) {
      console.log(`  ${prop.name}${prop.optional ? '?' : ''}: ${prop.type};`);
    }
    console.log('}');
  }

  for (const ty of Object.values(typeDict)) {
    // hack; to avoid passing prototypes through the rest of it
    if (ty.name === 'AnyPrototype') {
      console.log(
        `export type AnyPrototype = ${prototypes.map(({ name }) => name).join(' | ')};`,
      );
      continue;
    }

    // don't emit `type string = string;`
    if (ty.name === 'string') continue;
    console.log(toAlias(ty, typeDict));
  }

  const haveProtos = new Set(prototypes.map((v) => v.name));
  console.log('export interface RawData {');
  for (const key of rawKeys) {
    const pas = pascalCase(key);
    let chosen = 'unknown';
    const withProto = pas + 'Prototype';
    if (haveProtos.has(withProto)) {
      chosen = withProto;
    } else if (haveProtos.has(pas)) {
      chosen = pas;
    }

    const withId = pas + 'ID';
    if (typeDict[withId]) {
      chosen = `Record<${withId}, ${chosen}>`;
    } else {
      chosen = `Record<string, ${chosen}>`;
    }

    console.log(`  '${key}': ${chosen};`);
  }
  console.log('}');
}

interface Interface {
  name: string;
  extends?: string;
  properties: {
    name: string;
    type: string;
    optional?: boolean;
  }[];
}

function builtInMapping(type: string): string {
  switch (type) {
    case 'uint8':
    case 'int8':
    case 'uint16':
    case 'int16':
    case 'uint32':
    case 'int32':
    case 'uint64':
    case 'int64':
    case 'float':
    case 'double':
      return 'number';
    case 'bool':
      return 'boolean';
    case 'string':
      return 'string';
    case 'DataExtendMethod':
      return '(extension: unknown) => void';
    default:
      throw new Error(`missing mapping for builtin type: ${type}`);
  }
}

function tsType(
  typesDict: Record<string, Type>,
  type: unknown,
  externalProps: PropSpec[] | undefined,
): string {
  if (typeof type === 'string') {
    const found = typesDict[type];
    if (found) {
      return type;
    }
  }

  const Array = Type.Object({
    complex_type: Type.Literal('array'),
    value: Type.Unknown(),
  });

  if (Value.Check(Array, type)) {
    return `${tsType(typesDict, type.value, externalProps)}[]`;
  }

  const Union = Type.Object({
    complex_type: Type.Literal('union'),
    options: Type.Array(Type.Unknown()),
    full_format: Type.Optional(Type.Boolean()),
  });

  if (Value.Check(Union, type)) {
    return (
      '(' +
      type.options.map((v) => tsType(typesDict, v, externalProps)).join(' | ') +
      ')'
    );
  }

  const Literal = Type.Object({
    complex_type: Type.Literal('literal'),
    value: Type.Unknown([Type.String(), Type.Boolean()]),
  });

  if (Value.Check(Literal, type)) {
    return `${JSON.stringify(type.value)}`;
  }

  const Struct = Type.Object({
    complex_type: Type.Literal('struct'),
  });

  if (Value.Check(Struct, type) && externalProps) {
    return (
      '{' +
      externalProps
        .map((v) => toProp(v, typesDict, externalProps))
        .map((v) => `  ${v.name}${v.optional ? '?' : ''}: ${v.type};`)
        .join('\n') +
      '}'
    );
  }

  const Tuple = Type.Object({
    complex_type: Type.Literal('tuple'),
    values: Type.Array(Type.Unknown()),
  });

  if (Value.Check(Tuple, type)) {
    return `[${type.values.map((v) => tsType(typesDict, v, externalProps)).join(', ')}]`;
  }

  const TypeRef = Type.Object({
    complex_type: Type.Literal('type'),
    value: Type.String(),
  });

  if (Value.Check(TypeRef, type)) {
    return tsType(typesDict, type.value, externalProps);
  }

  const Dictionary = Type.Object({
    complex_type: Type.Literal('dictionary'),
    key: Type.Unknown(),
    value: Type.Unknown(),
  });

  if (Value.Check(Dictionary, type)) {
    return `Record<${tsType(typesDict, type.key, externalProps)}, ${tsType(typesDict, type.value, externalProps)}>`;
  }

  throw new Error(`unrecognised type: ${util.format(type)}`);
}

await main();

export {};
