export interface PrototypeSpec {
  prototypes: Prototype[];
  types: Type[];
}

/* e.g.
  "name": "AccumulatorPrototype",
  "order": 0,
  "description": "Entity with energy source with specialised animation for charging/discharging. Used for the [accumulator](https://wiki.factorio.com/Accumulator) entity.",
  "examples": [
    "```\n{\n  type = \"accumulator\",\n  name = \"accumulator\",\n  icon = \"__base__/graphics/icons/accumulator.png\",\n  icon_size = 32,\n  flags = {\"placeable-neutral\", \"player-creation\"},\n  minable = {mining_time = 0.1, result = \"accumulator\"},\n  max_health = 150,\n  corpse = \"accumulator-remnants\",\n  collision_box = {{-0.9, -0.9}, {0.9, 0.9}},\n  selection_box = {{-1, -1}, {1, 1}},\n  drawing_box = {{-1, -1.5}, {1, 1}},\n  energy_source =\n  {\n    type = \"electric\",\n    buffer_capacity = \"5MJ\",\n    usage_priority = \"tertiary\",\n    input_flow_limit = \"300kW\",\n    output_flow_limit = \"300kW\"\n  },\n  picture = accumulator_picture(),\n  charge_animation = accumulator_charge(),\n\n  charge_cooldown = 30,\n  charge_light = {intensity = 0.3, size = 7, color = {r = 1.0, g = 1.0, b = 1.0}},\n  discharge_animation = accumulator_discharge(),\n  discharge_cooldown = 60,\n  discharge_light = {intensity = 0.7, size = 7, color = {r = 1.0, g = 1.0, b = 1.0}},\n  vehicle_impact_sound =  { filename = \"__base__/sound/car-metal-impact.ogg\", volume = 0.65 },\n  working_sound =\n  {\n    sound =\n    {\n      filename = \"__base__/sound/accumulator-working.ogg\",\n      volume = 1\n    },\n    idle_sound =\n    {\n      filename = \"__base__/sound/accumulator-idle.ogg\",\n      volume = 0.4\n    },\n    max_sounds_per_type = 5\n  },\n\n  circuit_wire_connection_point = circuit_connector_definitions[\"accumulator\"].points,\n  circuit_connector_sprites = circuit_connector_definitions[\"accumulator\"].sprites,\n  circuit_wire_max_distance = default_circuit_wire_max_distance,\n\n  default_output_signal = {type = \"virtual\", name = \"signal-A\"}\n}\n```"
  ],
  "parent": "EntityWithOwnerPrototype",
  "abstract": false,
  "typename": "accumulator",
  "deprecated": false,
  "properties": [
    {
      "name": "charge_animation",
      "order": 4,
      "description": "",
      "override": false,
      "type": "Animation",
      "optional": true
    },
 */
export interface Prototype {
  name: string;
  order: number;
  description: string;
  examples: string[];
  parent: string;
  abstract: boolean;
  typename: string;
  deprecated: boolean;
  properties: Property[];
}

export interface Property {
  name: string;
  order: number;
  description: string;
  override: boolean;
  type: string;
  optional: boolean;
}

/*
"name": "ActivateEquipmentCapsuleAction",
"order": 0,
"description": "",
"abstract": false,
"inline": false,
"type": {
  "complex_type": "struct"
},
"properties": [
  {
    "name": "equipment",
    "order": 1,
    "description": "Activation is only implemented for [ActiveDefenseEquipmentPrototype](prototype:ActiveDefenseEquipmentPrototype).",
    "override": false,
    "type": "EquipmentID",
    "optional": false
  },
 */
export interface Type {
  name: string;
  order: number;
  description: string;
  abstract: boolean;
  inline: boolean;
  type: unknown;
  properties: Property[];
}
