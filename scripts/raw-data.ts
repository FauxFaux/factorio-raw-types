import { Static, Type } from '@sinclair/typebox';

const EmptyObj = Type.Record(Type.String(), Type.Never());

const RIngredient = Type.Union([
  Type.Object({
    type: Type.Optional(
      Type.Union([Type.Literal('item'), Type.Literal('fluid')]),
    ),
    name: Type.String(),
    amount: Type.Number(),
    catalyst_amount: Type.Optional(Type.Number()),
  }),
  Type.Tuple([Type.String(), Type.Number()]),
]);
export type RIngredient = Static<typeof RIngredient>;

const RResult = Type.Union([
  Type.Object({
    type: Type.Optional(
      Type.Union([Type.Literal('item'), Type.Literal('fluid')]),
    ),
    name: Type.String(),
    amount: Type.Optional(Type.Number()),
    amount_min: Type.Optional(Type.Number()),
    amount_max: Type.Optional(Type.Number()),
    catalyst_amount: Type.Optional(Type.Number()),
    fluidbox_index: Type.Optional(Type.Number()),
  }),
  Type.Tuple([Type.String(), Type.Number()]),
]);

// ingredient list, either embedded in `normal` or not
const RCraftingSetup = Type.Object({
  enabled: Type.Optional(Type.Boolean()),
  ingredients: Type.Union([Type.Array(RIngredient), EmptyObj]),
  always_show_products: Type.Optional(Type.Boolean()),
  always_show_made_in: Type.Optional(Type.Boolean()),

  result: Type.Optional(Type.String()),
  result_count: Type.Optional(Type.Number()),

  results: Type.Optional(Type.Union([Type.Array(RResult), EmptyObj])),
});
export type RCraftingSetup = Static<typeof RCraftingSetup>;

export const RRecipeWithoutCrafting = Type.Object({
  type: Type.Literal('recipe'),
  name: Type.String(),

  category: Type.Optional(Type.String()),
  order: Type.Optional(Type.String()),
  subgroup: Type.Optional(Type.String()),

  energy_required: Type.Optional(Type.Number()),
  crafting_machine_tint: Type.Optional(Type.Unknown()),
});

export const RRecipe = Type.Composite([
  RRecipeWithoutCrafting,
  Type.Partial(RCraftingSetup),
  Type.Object({
    normal: Type.Optional(RCraftingSetup),
  }),
]);

export type RRecipe = Static<typeof RRecipe>;

export const RItem = Type.Object({
  type: Type.Literal('item'),
  name: Type.String(),
  subgroup: Type.Optional(Type.String()),
  order: Type.Optional(Type.String()),
  place_result: Type.Optional(Type.String()),
  stack_size: Type.Number(),
  localised_description: Type.Optional(Type.Array(Type.Unknown())),
});
export type RItem = Static<typeof RItem>;

export const RModule = Type.Object({
  type: Type.Literal('module'),
  name: Type.String(),
  subgroup: Type.Optional(Type.String()),
  category: Type.String(),
  order: Type.Optional(Type.String()),
  stack_size: Type.Number(),

  effect: Type.Unknown(),
  tier: Type.Unknown(),
  limitation: Type.Optional(Type.Array(Type.String())),
  limitation_blacklist: Type.Optional(Type.Array(Type.String())),
  beacon_tint: Type.Optional(Type.Unknown()),
});
export type RModule = Static<typeof RModule>;

export const RCapsule = Type.Object({
  type: Type.Literal('capsule'),
  name: Type.String(),
  subgroup: Type.String(),
  order: Type.Optional(Type.String()),
  stack_size: Type.Number(),
});
export type RCapsule = Static<typeof RCapsule>;

export const RColourRGB = Type.Object({
  r: Type.Number(),
  g: Type.Number(),
  b: Type.Number(),
});

export const RColour = Type.Union([
  RColourRGB,
  Type.Record(Type.String(), Type.Never()),
]);

export const RFluid = Type.Object({
  type: Type.Literal('fluid'),
  name: Type.String(),
  default_temperature: Type.Number(),
  max_temperature: Type.Optional(Type.Number()),
  heat_capacity: Type.Optional(Type.String()),
  base_color: RColour,
  flow_color: RColour,
  order: Type.Optional(Type.String()),
  auto_barrel: Type.Optional(Type.Boolean()),
});

export type RFluid = Static<typeof RFluid>;

export interface RLocale {
  names: Record<string, string>;
  descriptions: Record<string, string>;
}
