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

  let here = protoDict['AssemblingMachinePrototype']!;
  while (here) {
    const iface = toInterface(here, typeDict);
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

  for (const ty of Object.values(typeDict)) {
    // references prototypes by name; we're only partially emitting them
    if (ty.name === 'AnyPrototype') {
      console.log('export type AnyPrototype = unknown;');
      continue;
    }

    // don't emit `type string = string;`
    if (ty.name === 'string') continue;
    console.log(toAlias(ty, typeDict));
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
