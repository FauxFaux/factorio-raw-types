import { Type } from '@sinclair/typebox';
import * as util from 'node:util';
import { Value } from '@sinclair/typebox/value';

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
  usedTypes: Set<string>,
): Interface {
  return {
    name: pro.name,
    extends: pro.parent,
    properties: pro.properties.map((v) => toProp(v, typeDict, usedTypes)),
  };
}

function toProp(
  v: PropSpec,
  typeDict: Record<string, Type>,
  usedTypes: Set<string>,
) {
  return {
    name: v.name,
    type: tsType(typeDict, v.type, usedTypes),
    optional: v.optional,
  };
}

function toAlias(
  ty: Type,
  typeDict: Record<string, Type>,
  usedTypes: Set<string>,
) {
  return `type ${ty.name} = ${tsType(typeDict, ty.type, usedTypes, ty.properties)};`;
}

async function main() {
  const { default: doc } = await import('../data/prototype-api.json');

  // infers string, not the actual string literal type :(
  // type Name = (typeof doc)['prototypes'][number]['name'];

  const prototypes: Prototype[] = doc.prototypes;

  const types: Type[] = doc.types;

  const protoDict: Record<string, Prototype> = Object.fromEntries(
    prototypes.map((p) => [p.name, p]),
  );
  const typeDict: Record<string, Type> = Object.fromEntries(
    types.map((t) => [t.name, t]),
  );

  const used = new Set<string>();
  const emitted = new Set<string>();

  let here = protoDict['AssemblingMachinePrototype']!;
  while (here) {
    const iface = toInterface(here, typeDict, used);
    console.log(
      `export interface ${iface.name} ${iface.extends ? `extends ${iface.extends} ` : ''}{`,
    );
    for (const prop of iface.properties) {
      console.log(`  ${prop.name}${prop.optional ? '?' : ''}: ${prop.type};`);
    }
    console.log('}');
    if (!here.parent) break;
    here = protoDict[here.parent]!;
  }

  while (true) {
    const toEmit: Type[] = [];
    for (const name of used) {
      if (emitted.has(name)) continue;
      const ty = typeDict[name];
      if (!ty) throw new Error(`missing type: ${name}`);
      toEmit.push(ty);
      emitted.add(name);
    }
    if (!toEmit.length) break;
    for (const ty of toEmit) {
      console.log(toAlias(ty, typeDict, used));
    }
  }
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

function tsType(
  typesDict: Record<string, Type>,
  type: unknown,
  usedTypes: Set<string>,
  externalProps?: PropSpec[],
): string {
  if (typeof type === 'string') {
    switch (type) {
      case 'uint8':
      case 'int8':
      case 'uint16':
      case 'int16':
      case 'uint32':
      case 'int32':
      case 'float':
      case 'double':
        return 'number';
      case 'bool':
        return 'boolean';
      case 'string':
        return 'string';
    }
    const found = typesDict[type];
    if (found) {
      if (found.type === 'builtin') {
        throw new Error(`missing mapping for builtin type: ${type}`);
      }
      usedTypes.add(type);
      return type;
    }
  }

  const Array = Type.Object({
    complex_type: Type.Literal('array'),
    value: Type.Unknown(),
  });

  if (Value.Check(Array, type)) {
    return `${tsType(typesDict, type.value, usedTypes, externalProps)}[]`;
  }

  const Union = Type.Object({
    complex_type: Type.Literal('union'),
    options: Type.Array(Type.Unknown()),
    full_format: Type.Optional(Type.Boolean()),
  });

  if (Value.Check(Union, type)) {
    return (
      '(' +
      type.options
        .map((v) => tsType(typesDict, v, usedTypes, externalProps))
        .join(' | ') +
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
        .map((v) => toProp(v, typesDict, usedTypes))
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
    return `[${type.values.map((v) => tsType(typesDict, v, usedTypes)).join(', ')}]`;
  }

  const TypeRef = Type.Object({
    complex_type: Type.Literal('type'),
    value: Type.String(),
  });

  if (Value.Check(TypeRef, type)) {
    return tsType(typesDict, type.value, usedTypes);
  }

  throw new Error(`unrecognised type: ${util.format(type)}`);
}

await main();

export {};
