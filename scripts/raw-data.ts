import { Static, Type } from '@sinclair/typebox';

const EmptyObj = Type.Record(Type.String(), Type.Never());

const RLocalisedString = Type.Union([
  Type.String(),
  Type.Number(),
  Type.Boolean(),
  // Inner type is `this`, but TS is angry it's an infinite type.
  Type.Array(Type.Unknown()),
]);

// https://lua-api.factorio.com/latest/prototypes/PrototypeBase.html#type
// jq keys raw-script-output/data-raw-dump.json | jq '.[]' | sed 's/^/Type.Literal(/; s/$/),/'
const RKnownType = Type.Union([
  Type.Literal('accumulator'),
  Type.Literal('achievement'),
  Type.Literal('active-defense-equipment'),
  Type.Literal('ambient-sound'),
  Type.Literal('ammo'),
  Type.Literal('ammo-category'),
  Type.Literal('ammo-turret'),
  Type.Literal('animation'),
  Type.Literal('arithmetic-combinator'),
  Type.Literal('armor'),
  Type.Literal('arrow'),
  Type.Literal('artillery-flare'),
  Type.Literal('artillery-projectile'),
  Type.Literal('artillery-turret'),
  Type.Literal('artillery-wagon'),
  Type.Literal('assembling-machine'),
  Type.Literal('autoplace-control'),
  Type.Literal('battery-equipment'),
  Type.Literal('beacon'),
  Type.Literal('beam'),
  Type.Literal('belt-immunity-equipment'),
  Type.Literal('blueprint'),
  Type.Literal('blueprint-book'),
  Type.Literal('boiler'),
  Type.Literal('build-entity-achievement'),
  Type.Literal('burner-generator'),
  Type.Literal('capsule'),
  Type.Literal('car'),
  Type.Literal('cargo-wagon'),
  Type.Literal('character'),
  Type.Literal('character-corpse'),
  Type.Literal('cliff'),
  Type.Literal('combat-robot'),
  Type.Literal('combat-robot-count'),
  Type.Literal('constant-combinator'),
  Type.Literal('construct-with-robots-achievement'),
  Type.Literal('construction-robot'),
  Type.Literal('container'),
  Type.Literal('copy-paste-tool'),
  Type.Literal('corpse'),
  Type.Literal('curved-rail'),
  Type.Literal('custom-input'),
  Type.Literal('damage-type'),
  Type.Literal('decider-combinator'),
  Type.Literal('deconstruct-with-robots-achievement'),
  Type.Literal('deconstructible-tile-proxy'),
  Type.Literal('deconstruction-item'),
  Type.Literal('deliver-by-robots-achievement'),
  Type.Literal('dont-build-entity-achievement'),
  Type.Literal('dont-craft-manually-achievement'),
  Type.Literal('dont-use-entity-in-energy-production-achievement'),
  Type.Literal('editor-controller'),
  Type.Literal('electric-energy-interface'),
  Type.Literal('electric-pole'),
  Type.Literal('electric-turret'),
  Type.Literal('energy-shield-equipment'),
  Type.Literal('entity-ghost'),
  Type.Literal('equipment-category'),
  Type.Literal('equipment-grid'),
  Type.Literal('explosion'),
  Type.Literal('finish-the-game-achievement'),
  Type.Literal('fire'),
  Type.Literal('fish'),
  Type.Literal('flame-thrower-explosion'),
  Type.Literal('fluid'),
  Type.Literal('fluid-turret'),
  Type.Literal('fluid-wagon'),
  Type.Literal('flying-text'),
  Type.Literal('font'),
  Type.Literal('fuel-category'),
  Type.Literal('furnace'),
  Type.Literal('gate'),
  Type.Literal('generator'),
  Type.Literal('generator-equipment'),
  Type.Literal('god-controller'),
  Type.Literal('group-attack-achievement'),
  Type.Literal('gui-style'),
  Type.Literal('gun'),
  Type.Literal('heat-interface'),
  Type.Literal('heat-pipe'),
  Type.Literal('highlight-box'),
  Type.Literal('infinity-container'),
  Type.Literal('infinity-pipe'),
  Type.Literal('inserter'),
  Type.Literal('item'),
  Type.Literal('item-entity'),
  Type.Literal('item-group'),
  Type.Literal('item-request-proxy'),
  Type.Literal('item-subgroup'),
  Type.Literal('item-with-entity-data'),
  Type.Literal('item-with-inventory'),
  Type.Literal('item-with-label'),
  Type.Literal('item-with-tags'),
  Type.Literal('kill-achievement'),
  Type.Literal('lab'),
  Type.Literal('lamp'),
  Type.Literal('land-mine'),
  Type.Literal('leaf-particle'),
  Type.Literal('linked-belt'),
  Type.Literal('linked-container'),
  Type.Literal('loader'),
  Type.Literal('loader-1x1'),
  Type.Literal('locomotive'),
  Type.Literal('logistic-container'),
  Type.Literal('logistic-robot'),
  Type.Literal('map-gen-presets'),
  Type.Literal('map-settings'),
  Type.Literal('market'),
  Type.Literal('mining-drill'),
  Type.Literal('mining-tool'),
  Type.Literal('module'),
  Type.Literal('module-category'),
  Type.Literal('mouse-cursor'),
  Type.Literal('movement-bonus-equipment'),
  Type.Literal('night-vision-equipment'),
  Type.Literal('noise-expression'),
  Type.Literal('noise-layer'),
  Type.Literal('offshore-pump'),
  Type.Literal('optimized-decorative'),
  Type.Literal('optimized-particle'),
  Type.Literal('particle'),
  Type.Literal('particle-source'),
  Type.Literal('pipe'),
  Type.Literal('pipe-to-ground'),
  Type.Literal('player-damaged-achievement'),
  Type.Literal('player-port'),
  Type.Literal('power-switch'),
  Type.Literal('produce-achievement'),
  Type.Literal('produce-per-hour-achievement'),
  Type.Literal('programmable-speaker'),
  Type.Literal('projectile'),
  Type.Literal('pump'),
  Type.Literal('radar'),
  Type.Literal('rail-chain-signal'),
  Type.Literal('rail-planner'),
  Type.Literal('rail-remnants'),
  Type.Literal('rail-signal'),
  Type.Literal('reactor'),
  Type.Literal('recipe'),
  Type.Literal('recipe-category'),
  Type.Literal('repair-tool'),
  Type.Literal('research-achievement'),
  Type.Literal('resource'),
  Type.Literal('resource-category'),
  Type.Literal('roboport'),
  Type.Literal('roboport-equipment'),
  Type.Literal('rocket-silo'),
  Type.Literal('rocket-silo-rocket'),
  Type.Literal('rocket-silo-rocket-shadow'),
  Type.Literal('selection-tool'),
  Type.Literal('shortcut'),
  Type.Literal('simple-entity'),
  Type.Literal('simple-entity-with-force'),
  Type.Literal('simple-entity-with-owner'),
  Type.Literal('smoke'),
  Type.Literal('smoke-with-trigger'),
  Type.Literal('solar-panel'),
  Type.Literal('solar-panel-equipment'),
  Type.Literal('sound'),
  Type.Literal('spectator-controller'),
  Type.Literal('speech-bubble'),
  Type.Literal('spider-leg'),
  Type.Literal('spider-vehicle'),
  Type.Literal('spidertron-remote'),
  Type.Literal('splitter'),
  Type.Literal('sprite'),
  Type.Literal('sticker'),
  Type.Literal('storage-tank'),
  Type.Literal('straight-rail'),
  Type.Literal('stream'),
  Type.Literal('technology'),
  Type.Literal('tile'),
  Type.Literal('tile-effect'),
  Type.Literal('tile-ghost'),
  Type.Literal('tips-and-tricks-item'),
  Type.Literal('tips-and-tricks-item-category'),
  Type.Literal('tool'),
  Type.Literal('train-path-achievement'),
  Type.Literal('train-stop'),
  Type.Literal('transport-belt'),
  Type.Literal('tree'),
  Type.Literal('trigger-target-type'),
  Type.Literal('trivial-smoke'),
  Type.Literal('turret'),
  Type.Literal('tutorial'),
  Type.Literal('underground-belt'),
  Type.Literal('unit'),
  Type.Literal('unit-spawner'),
  Type.Literal('upgrade-item'),
  Type.Literal('utility-constants'),
  Type.Literal('utility-sounds'),
  Type.Literal('utility-sprites'),
  Type.Literal('virtual-signal'),
  Type.Literal('wall'),
  Type.Literal('wind-sound'),
]);
export type RKnownType = Static<typeof RKnownType>;

export const RPrototypeBase = Type.Object({
  type: RKnownType,
  name: Type.String(),
  order: Type.Optional(Type.String()),
  subgroup: Type.Optional(Type.String()),
  localised_name: Type.Optional(RLocalisedString),
  localised_description: Type.Optional(RLocalisedString),
});
export type RPrototypeBase = Static<typeof RPrototypeBase>;

// doesn't exist in the real world, but is the shared properties between e.g. base-items (i.e. real items and capsules), and fluids
export const RCraftable = Type.Composite([
  RPrototypeBase,
  Type.Object({
    // required in the docs
    stack_size: Type.Optional(
      Type.Number({
        minimum: 1,
      }),
    ),

    subgroup: Type.Optional(Type.String()),
  }),
]);

// https://lua-api.factorio.com/latest/prototypes/ItemPrototype.html
export const RItemPrototype = Type.Composite([RPrototypeBase, RCraftable]);
export type RItemPrototype = Static<typeof RItemPrototype>;

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
