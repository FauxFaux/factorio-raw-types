import { Static, Type } from '@sinclair/typebox';

const RIngredient = Type.Union([
  Type.Object({
    type: Type.Union([Type.Literal('item'), Type.Literal('fluid')]),
    name: Type.String(),
    amount: Type.Number(),
    catalyst_amount: Type.Optional(Type.Number()),
  }),
  Type.Tuple([Type.String(), Type.Number()]),
]);
export type RIngredient = Static<typeof RIngredient>;

// ingredient list, either embedded in `normal` or not
const RCraftingSetup = Type.Composite([
  Type.Object({
    enabled: Type.Boolean(),
    ingredients: Type.Array(RIngredient),
    always_show_products: Type.Optional(Type.Boolean()),
    always_show_made_in: Type.Optional(Type.Boolean()),
  }),
  Type.Union([
    Type.Object({
      results: Type.Array(RIngredient),
      // TODO: amount_min, amount_max, probability
    }),
    Type.Object({
      result: Type.String(),
      result_count: Type.Number(),
    }),
  ]),
]);
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
  Type.Union([
    RCraftingSetup,
    Type.Object({
      normal: RCraftingSetup,
    }),
  ]),
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

export const RColourRGB = Type.Object({
  r: Type.Number(),
  g: Type.Number(),
  b: Type.Number(),
});

export const RColour = Type.Union([RColourRGB, Type.Object({})]);

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
