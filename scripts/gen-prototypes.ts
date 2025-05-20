import { Type } from '@sinclair/typebox';
import * as util from 'node:util';
import { Value } from '@sinclair/typebox/value';

const hacks: Record<string, string> = {
  BlueprintBookPrototype: "'inventory_size'",
  BlueprintItemPrototype: "'selection_mode' | 'alt_selection_mode'",
  DeconstructionItemPrototype: "'selection_mode' | 'alt_selection_mode'",
  EquipmentGhostPrototype: "'categories' | 'energy_source' | 'shape'",
  InventoryBonusEquipmentPrototype: "'energy_source'",
  InfinityContainerPrototype: "'logistic_mode'",
  LogisticContainerPrototype: "'picture'",
  TransportBeltPrototype: "'animation_set' | 'belt_animation_set'",
  UpgradeItemPrototype: "'selection_mode' | 'alt_selection_mode'",
};

interface Type {
  name: string;
  abstract?: boolean;
  description: string;

  type: unknown;
  options?: unknown[];
  properties?: PropSpec[];

  parent?: string;
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
  typename?: string;
  abstract?: boolean;
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
  if (ty.type === 'builtin') {
    const aliasTo = builtInMapping(ty.name);
    if (ty.name === aliasTo) {
      return `// built-in built-in: ${ty.name}`;
    }
    return `export type ${ty.name} = ${aliasTo};`;
  }

  let body = tsType(typeDict, ty.type, ty.properties);
  if (ty.parent) {
    //return `export interface ${ty.name} extends ${ty.parent} ${body};`;
    body = `${ty.parent} & ${body}`;
  }

  return `export type ${ty.name} = ${body};`;
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

  const seenRawData = new Set<string>();
  console.log('export interface RawData {');
  for (const proto of prototypes) {
    if (!proto.typename) {
      if (!proto.abstract) {
        console.log(`  // ???: Record<???, ${proto.name}>;`);
      }
      continue;
    }

    const withId = proto.name.replace(/Prototype$/, '') + 'ID';
    let key: string = 'string';
    if (typeDict[withId]) {
      key = withId;
    }

    const render = `'${proto.typename}': Record<${key}, ${proto.name}>;`;

    if (!seenRawData.has(proto.typename)) {
      console.log(`  ${render}`);
    } else {
      console.log(`  // ${render} // duplicate key`);
    }
    seenRawData.add(proto.typename);
  }
  console.log('}');
  console.log(
    `export const allKeys: (keyof RawData)[] = ["${[...seenRawData].sort().join('", "')}"];`,
  );
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
    case 'boolean':
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
    if (type.endsWith('_t')) {
      return builtInMapping(type.substring(0, type.length - 2));
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

  const TypeTypeRef = Type.Object({
    complex_type: Type.Literal('type'),
    value: Type.Object({
      complex_type: Type.String(),
    }),
  });

  if (Value.Check(TypeTypeRef, type)) {
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

  if (type === 'defines.inventory') {
    return 'unknown /* defines.inventory */';
  }

  if (type === 'EmptyWidgetStyle') {
    return 'unknown /* EmptyWidgetStyle */';
  }

  // ~ 2.0.28 splits DamageTriggerEffectItem into DamageTileTriggerEffectItem
  // and DamageEntityTriggerEffectItem, but has invalid types for both of them,
  // so just assume they're alises
  if (type === 'DamageEntityTriggerEffectItem') {
    return 'DamageTileTriggerEffectItem /* LIE */';
  }

  throw new Error(`unrecognised type: ${util.format(type)}`);
}

await main();

export {};
