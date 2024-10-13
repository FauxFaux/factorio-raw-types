// @generated

export interface AssemblingMachinePrototype extends CraftingMachinePrototype {
  entity_info_icon_shift?: Vector;
  fixed_recipe?: RecipeID;
  gui_title_key?: string;
  ingredient_count?: number;
}
export interface CraftingMachinePrototype extends EntityWithOwnerPrototype {
  allowed_effects?: EffectTypeLimitation;
  always_draw_idle_animation?: boolean;
  animation?: Animation4Way;
  base_productivity?: number;
  crafting_categories: RecipeCategoryID[];
  crafting_speed: number;
  default_recipe_tint?: DefaultRecipeTint;
  draw_entity_info_icon_background?: boolean;
  energy_source: EnergySource;
  energy_usage: Energy;
  entity_info_icon_shift?: Vector;
  fluid_boxes?: FluidBox[];
  idle_animation?: Animation4Way;
  match_animation_speed_to_activity?: boolean;
  module_specification?: ModuleSpecification;
  return_ingredients_on_change?: boolean;
  scale_entity_info_icon?: boolean;
  shift_animation_transition_duration?: number;
  shift_animation_waypoint_stop_duration?: number;
  shift_animation_waypoints?: ShiftAnimationWaypoints;
  show_recipe_icon?: boolean;
  show_recipe_icon_on_map?: boolean;
  status_colors?: StatusColors;
  working_visualisations?: WorkingVisualisation[];
}
export interface EntityWithOwnerPrototype extends EntityWithHealthPrototype {
  allow_run_time_change_of_is_military_target?: boolean;
  is_military_target?: boolean;
}
export interface EntityWithHealthPrototype extends EntityPrototype {
  alert_when_damaged?: boolean;
  attack_reaction?: AttackReactionItem | AttackReactionItem[];
  corpse?: EntityID | EntityID[];
  create_ghost_on_death?: boolean;
  damaged_trigger_effect?: TriggerEffect;
  dying_explosion?: ExplosionDefinition | ExplosionDefinition[];
  dying_trigger_effect?: TriggerEffect;
  healing_per_tick?: number;
  hide_resistances?: boolean;
  integration_patch?: Sprite4Way;
  integration_patch_render_layer?: RenderLayer;
  loot?: LootItem[];
  max_health?: number;
  random_corpse_variation?: boolean;
  repair_sound?: Sound;
  repair_speed_modifier?: number;
  resistances?: Resistance[];
}
export interface EntityPrototype extends PrototypeBase {
  additional_pastable_entities?: EntityID[];
  alert_icon_scale?: number;
  alert_icon_shift?: Vector;
  allow_copy_paste?: boolean;
  autoplace?: AutoplaceSpecification;
  build_base_evolution_requirement?: number;
  build_grid_size?: number;
  build_sound?: Sound;
  close_sound?: Sound;
  collision_box?: BoundingBox;
  collision_mask?: CollisionMask;
  created_effect?: Trigger;
  created_smoke?: CreateTrivialSmokeEffectItem;
  drawing_box?: BoundingBox;
  emissions_per_second?: number;
  enemy_map_color?: Color;
  fast_replaceable_group?: string;
  flags?: EntityPrototypeFlags;
  friendly_map_color?: Color;
  hit_visualization_box?: BoundingBox;
  icon?: FileName;
  icon_mipmaps?: IconMipMapType;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  map_color?: Color;
  map_generator_bounding_box?: BoundingBox;
  minable?: MinableProperties;
  mined_sound?: Sound;
  mining_sound?: Sound;
  next_upgrade?: EntityID;
  open_sound?: Sound;
  order?: Order;
  placeable_by?: ItemToPlace | ItemToPlace[];
  protected_from_tile_building?: boolean;
  radius_visualisation_specification?: RadiusVisualisationSpecification;
  remains_when_mined?: EntityID | EntityID[];
  remove_decoratives?: 'automatic' | 'true' | 'false' | true | false;
  rotated_sound?: Sound;
  selectable_in_game?: boolean;
  selection_box?: BoundingBox;
  selection_priority?: number;
  shooting_cursor_size?: number;
  sticker_box?: BoundingBox;
  subgroup?: ItemSubGroupID;
  tile_height?: number;
  tile_width?: number;
  trigger_target_mask?: TriggerTargetMask;
  vehicle_impact_sound?: Sound;
  water_reflection?: WaterReflectionDefinition;
  working_sound?: WorkingSound;
}
export interface PrototypeBase {
  localised_description?: LocalisedString;
  localised_name?: LocalisedString;
  name: string;
  order?: Order;
  type: string;
}
type Vector = { x: number; y: number } | [number, number];
type RecipeID = string;
type EffectTypeLimitation =
  | ('speed' | 'productivity' | 'consumption' | 'pollution')
  | ('speed' | 'productivity' | 'consumption' | 'pollution')[];
type Animation4Way =
  | { east?: Animation; north: Animation; south?: Animation; west?: Animation }
  | Animation;
type RecipeCategoryID = string;
type DefaultRecipeTint = {
  primary?: Color;
  quaternary?: Color;
  secondary?: Color;
  tertiary?: Color;
};
type EnergySource =
  | ElectricEnergySource
  | BurnerEnergySource
  | HeatEnergySource
  | FluidEnergySource
  | VoidEnergySource;
type Energy = string;
type FluidBox = {
  base_area?: number;
  base_level?: number;
  filter?: FluidID;
  height?: number;
  hide_connection_info?: boolean;
  maximum_temperature?: number;
  minimum_temperature?: number;
  pipe_connections: PipeConnectionDefinition[];
  pipe_covers?: Sprite4Way;
  pipe_picture?: Sprite4Way;
  production_type?: ProductionType;
  render_layer?: RenderLayer;
  secondary_draw_order?: number;
  secondary_draw_orders?: FluidBoxSecondaryDrawOrders;
};
type ModuleSpecification = {
  module_info_icon_scale?: number;
  module_info_icon_shift?: Vector;
  module_info_max_icon_rows?: number;
  module_info_max_icons_per_row?: number;
  module_info_multi_row_initial_height_modifier?: number;
  module_info_separation_multiplier?: number;
  module_slots?: ItemStackIndex;
};
type ShiftAnimationWaypoints = {
  east: Vector[];
  north: Vector[];
  south: Vector[];
  west: Vector[];
};
type StatusColors = {
  disabled?: Color;
  full_output?: Color;
  idle?: Color;
  insufficient_input?: Color;
  low_power?: Color;
  no_minable_resources?: Color;
  no_power?: Color;
  working?: Color;
};
type WorkingVisualisation = {
  align_to_waypoint?: boolean;
  always_draw?: boolean;
  animated_shift?: boolean;
  animation?: Animation;
  apply_recipe_tint?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'quaternary'
    | 'none';
  apply_tint?:
    | 'resource-color'
    | 'input-fluid-base-color'
    | 'input-fluid-flow-color'
    | 'status'
    | 'none';
  constant_speed?: boolean;
  draw_as_light?: boolean;
  draw_as_sprite?: boolean;
  east_animation?: Animation;
  east_position?: Vector;
  effect?: 'flicker' | 'uranium-glow' | 'none';
  fadeout?: boolean;
  light?: LightDefinition;
  north_animation?: Animation;
  north_position?: Vector;
  render_layer?: RenderLayer;
  secondary_draw_order?: number;
  south_animation?: Animation;
  south_position?: Vector;
  synced_fadeout?: boolean;
  west_animation?: Animation;
  west_position?: Vector;
};
type AttackReactionItem = {
  action?: Trigger;
  damage_type?: DamageTypeID;
  range: number;
  reaction_modifier?: number;
};
type EntityID = string;
type TriggerEffect =
  | (
      | DamageTriggerEffectItem
      | CreateEntityTriggerEffectItem
      | CreateExplosionTriggerEffectItem
      | CreateFireTriggerEffectItem
      | CreateSmokeTriggerEffectItem
      | CreateTrivialSmokeEffectItem
      | CreateParticleTriggerEffectItem
      | CreateStickerTriggerEffectItem
      | CreateDecorativesTriggerEffectItem
      | NestedTriggerEffectItem
      | PlaySoundTriggerEffectItem
      | PushBackTriggerEffectItem
      | DestroyCliffsTriggerEffectItem
      | ShowExplosionOnChartTriggerEffectItem
      | InsertItemTriggerEffectItem
      | ScriptTriggerEffectItem
      | SetTileTriggerEffectItem
      | InvokeTileEffectTriggerEffectItem
      | DestroyDecorativesTriggerEffectItem
      | CameraEffectTriggerEffectItem
    )
  | (
      | DamageTriggerEffectItem
      | CreateEntityTriggerEffectItem
      | CreateExplosionTriggerEffectItem
      | CreateFireTriggerEffectItem
      | CreateSmokeTriggerEffectItem
      | CreateTrivialSmokeEffectItem
      | CreateParticleTriggerEffectItem
      | CreateStickerTriggerEffectItem
      | CreateDecorativesTriggerEffectItem
      | NestedTriggerEffectItem
      | PlaySoundTriggerEffectItem
      | PushBackTriggerEffectItem
      | DestroyCliffsTriggerEffectItem
      | ShowExplosionOnChartTriggerEffectItem
      | InsertItemTriggerEffectItem
      | ScriptTriggerEffectItem
      | SetTileTriggerEffectItem
      | InvokeTileEffectTriggerEffectItem
      | DestroyDecorativesTriggerEffectItem
      | CameraEffectTriggerEffectItem
    )[];
type ExplosionDefinition = EntityID | { name: EntityID; offset?: Vector };
type Sprite4Way =
  | {
      east?: Sprite;
      north?: Sprite;
      sheet?: SpriteNWaySheet;
      sheets?: SpriteNWaySheet[];
      south?: Sprite;
      west?: Sprite;
    }
  | Sprite;
type RenderLayer =
  | 'water-tile'
  | 'ground-tile'
  | 'tile-transition'
  | 'decals'
  | 'lower-radius-visualization'
  | 'radius-visualization'
  | 'transport-belt-integration'
  | 'resource'
  | 'building-smoke'
  | 'decorative'
  | 'ground-patch'
  | 'ground-patch-higher'
  | 'ground-patch-higher2'
  | 'remnants'
  | 'floor'
  | 'transport-belt'
  | 'transport-belt-endings'
  | 'transport-belt-circuit-connector'
  | 'floor-mechanics-under-corpse'
  | 'corpse'
  | 'floor-mechanics'
  | 'item'
  | 'lower-object'
  | 'lower-object-above-shadow'
  | 'object'
  | 'higher-object-under'
  | 'higher-object-above'
  | 'item-in-inserter-hand'
  | 'wires'
  | 'wires-above'
  | 'entity-info-icon'
  | 'entity-info-icon-above'
  | 'explosion'
  | 'projectile'
  | 'smoke'
  | 'air-object'
  | 'air-entity-info-icon'
  | 'light-effect'
  | 'selection-box'
  | 'higher-selection-box'
  | 'collision-selection-box'
  | 'arrow'
  | 'cursor';
type LootItem = {
  count_max?: number;
  count_min?: number;
  item: ItemID;
  probability?: number;
};
type Sound =
  | {
      aggregation?: AggregationSpecification;
      allow_random_repeat?: boolean;
      audible_distance_modifier?: number;
      filename?: FileName;
      game_controller_vibration_data?: GameControllerVibrationData;
      max_speed?: number;
      min_speed?: number;
      preload?: boolean;
      speed?: number;
      variations?: SoundDefinition | SoundDefinition[];
      volume?: number;
    }
  | SoundDefinition[];
type Resistance = { decrease?: number; percent?: number; type: DamageTypeID };
type AutoplaceSpecification =
  | {
      control?: AutoplaceControlID;
      coverage?: number;
      default_enabled?: boolean;
      force?: 'enemy' | 'player' | 'neutral' | string;
      max_probability?: number;
      order?: Order;
      peaks?: AutoplacePeak[];
      placement_density?: number;
      probability_expression?: NoiseExpression;
      random_probability_penalty?: number;
      richness_base?: number;
      richness_expression?: NoiseExpression;
      richness_multiplier?: number;
      richness_multiplier_distance_bonus?: number;
      sharpness?: number;
      starting_area_amount?: number;
      starting_area_size?: number;
      tile_restriction?: TileIDRestriction[];
    }
  | AutoplacePeak;
type BoundingBox = [MapPosition, MapPosition];
type CollisionMask = (
  | CollisionMaskLayer
  | 'not-colliding-with-itself'
  | 'consider-tile-transitions'
  | 'colliding-with-tiles-only'
)[];
type Trigger =
  | (DirectTriggerItem | AreaTriggerItem | LineTriggerItem | ClusterTriggerItem)
  | (
      | DirectTriggerItem
      | AreaTriggerItem
      | LineTriggerItem
      | ClusterTriggerItem
    )[];
type CreateTrivialSmokeEffectItem = {
  initial_height?: number;
  max_radius?: number;
  offset_deviation?: BoundingBox;
  offsets?: Vector | Vector[];
  smoke_name: TrivialSmokeID;
  speed?: Vector;
  speed_from_center?: number;
  speed_from_center_deviation?: number;
  speed_multiplier?: number;
  speed_multiplier_deviation?: number;
  starting_frame?: number;
  starting_frame_deviation?: number;
  starting_frame_speed?: number;
  starting_frame_speed_deviation?: number;
  type: 'create-trivial-smoke';
};
type Color =
  | { a?: number; b?: number; g?: number; r?: number }
  | [number, number, number]
  | [number, number, number, number];
type EntityPrototypeFlags = (
  | 'not-rotatable'
  | 'placeable-neutral'
  | 'placeable-player'
  | 'placeable-enemy'
  | 'placeable-off-grid'
  | 'player-creation'
  | 'building-direction-8-way'
  | 'filter-directions'
  | 'fast-replaceable-no-build-while-moving'
  | 'breaths-air'
  | 'not-repairable'
  | 'not-on-map'
  | 'not-deconstructable'
  | 'not-blueprintable'
  | 'hidden'
  | 'hide-alt-info'
  | 'fast-replaceable-no-cross-type-while-moving'
  | 'no-gap-fill-while-building'
  | 'not-flammable'
  | 'no-automated-item-removal'
  | 'no-automated-item-insertion'
  | 'no-copy-paste'
  | 'not-selectable-in-game'
  | 'not-upgradable'
  | 'not-in-kill-statistics'
  | 'not-in-made-in'
)[];
type FileName = string;
type IconMipMapType = number;
type SpriteSizeType = number;
type IconData = {
  icon: FileName;
  icon_mipmaps?: IconMipMapType;
  icon_size?: SpriteSizeType;
  scale?: number;
  shift?: Vector;
  tint?: Color;
};
type MinableProperties = {
  count?: number;
  fluid_amount?: number;
  mining_particle?: ParticleID;
  mining_time: number;
  mining_trigger?: Trigger;
  required_fluid?: FluidID;
  result?: ItemID;
  results?: ProductPrototype[];
};
type Order = string;
type ItemToPlace = { count: number; item: ItemID };
type RadiusVisualisationSpecification = {
  distance?: number;
  draw_in_cursor?: boolean;
  draw_on_selection?: boolean;
  offset?: Vector;
  sprite?: Sprite;
};
type ItemSubGroupID = string;
type TriggerTargetMask = string[];
type WaterReflectionDefinition = {
  orientation_to_variation?: boolean;
  pictures?: SpriteVariations;
  rotate?: boolean;
};
type WorkingSound =
  | {
      activate_sound?: Sound;
      apparent_volume?: number;
      audible_distance_modifier?: number;
      deactivate_sound?: Sound;
      fade_in_ticks?: number;
      fade_out_ticks?: number;
      idle_sound?: Sound;
      match_progress_to_activity?: boolean;
      match_speed_to_activity?: boolean;
      match_volume_to_activity?: boolean;
      max_sounds_per_type?: number;
      persistent?: boolean;
      probability?: number;
      sound: Sound;
      use_doppler_shift?: boolean;
    }
  | Sound;
type LocalisedString = string | number | boolean | LocalisedString[];
type Animation = {
  filename?: FileName;
  hr_version?: Animation;
  layers?: Animation[];
  stripes?: Stripe[];
};
type ElectricEnergySource = {
  buffer_capacity?: Energy;
  drain?: Energy;
  input_flow_limit?: Energy;
  output_flow_limit?: Energy;
  type?: 'electric';
  usage_priority: ElectricUsagePriority;
};
type BurnerEnergySource = {
  burnt_inventory_size?: ItemStackIndex;
  effectivity?: number;
  fuel_categories?: FuelCategoryID[];
  fuel_category?: FuelCategoryID;
  fuel_inventory_size: ItemStackIndex;
  light_flicker?: LightFlickeringDefinition;
  smoke?: SmokeSource[];
  type?: 'burner';
};
type HeatEnergySource = {
  connections?: HeatConnection[];
  default_temperature?: number;
  emissions_per_minute?: number;
  heat_glow?: Sprite4Way;
  heat_picture?: Sprite4Way;
  heat_pipe_covers?: Sprite4Way;
  max_temperature: number;
  max_transfer: Energy;
  min_temperature_gradient?: number;
  min_working_temperature?: number;
  minimum_glow_temperature?: number;
  pipe_covers?: Sprite4Way;
  specific_heat: Energy;
  type: 'heat';
};
type FluidEnergySource = {
  burns_fluid?: boolean;
  destroy_non_fuel_fluid?: boolean;
  effectivity?: number;
  fluid_box: FluidBox;
  fluid_usage_per_tick?: number;
  light_flicker?: LightFlickeringDefinition;
  maximum_temperature?: number;
  scale_fluid_usage?: boolean;
  smoke?: SmokeSource[];
  type: 'fluid';
};
type VoidEnergySource = { type: 'void' };
type FluidID = string;
type PipeConnectionDefinition = {
  max_underground_distance?: number;
  position?: Vector;
  positions?: Vector[];
  type?: 'input' | 'input-output' | 'output';
};
type ProductionType = 'None' | 'none' | 'input' | 'input-output' | 'output';
type FluidBoxSecondaryDrawOrders = {
  east?: number;
  north?: number;
  south?: number;
  west?: number;
};
type ItemStackIndex = number;
type LightDefinition =
  | {
      add_perspective?: boolean;
      color?: Color;
      intensity: number;
      minimum_darkness?: number;
      picture?: Sprite;
      rotation_shift?: RealOrientation;
      shift?: Vector;
      size: number;
      source_orientation_offset?: RealOrientation;
      type?: 'basic' | 'oriented';
    }
  | {
      add_perspective?: boolean;
      color?: Color;
      intensity: number;
      minimum_darkness?: number;
      picture?: Sprite;
      rotation_shift?: RealOrientation;
      shift?: Vector;
      size: number;
      source_orientation_offset?: RealOrientation;
      type?: 'basic' | 'oriented';
    }[];
type DamageTypeID = string;
type DamageTriggerEffectItem = {
  apply_damage_to_trees?: boolean;
  damage: DamagePrototype;
  lower_damage_modifier?: number;
  lower_distance_threshold?: number;
  type: 'damage';
  upper_damage_modifier?: number;
  upper_distance_threshold?: number;
  vaporize?: boolean;
};
type CreateEntityTriggerEffectItem = {
  check_buildability?: boolean;
  entity_name: EntityID;
  offset_deviation?: BoundingBox;
  offsets?: Vector | Vector[];
  show_in_tooltip?: boolean;
  tile_collision_mask?: CollisionMask;
  trigger_created_entity?: boolean;
  type: 'create-entity';
};
type CreateExplosionTriggerEffectItem = {
  cycle_while_moving?: boolean;
  inherit_movement_distance_from_projectile?: boolean;
  max_movement_distance?: number;
  max_movement_distance_deviation?: number;
  type: 'create-explosion';
};
type CreateFireTriggerEffectItem = {
  initial_ground_flame_count?: number;
  type: 'create-fire';
};
type CreateSmokeTriggerEffectItem = {
  initial_height?: number;
  speed?: Vector;
  speed_from_center?: number;
  speed_from_center_deviation?: number;
  speed_multiplier?: number;
  speed_multiplier_deviation?: number;
  starting_frame?: number;
  starting_frame_deviation?: number;
  starting_frame_speed?: number;
  starting_frame_speed_deviation?: number;
  type: 'create-smoke';
};
type CreateParticleTriggerEffectItem = {
  frame_speed?: number;
  frame_speed_deviation?: number;
  initial_height: number;
  initial_height_deviation?: number;
  initial_vertical_speed?: number;
  initial_vertical_speed_deviation?: number;
  offset_deviation?: BoundingBox;
  offsets?: Vector | Vector[];
  particle_name: ParticleID;
  rotate_offsets?: boolean;
  show_in_tooltip?: boolean;
  speed_from_center?: number;
  speed_from_center_deviation?: number;
  tail_length?: number;
  tail_length_deviation?: number;
  tail_width?: number;
  tile_collision_mask?: CollisionMask;
  type: 'create-particle';
};
type CreateStickerTriggerEffectItem = {
  show_in_tooltip?: boolean;
  sticker: EntityID;
  trigger_created_entity?: boolean;
  type: 'create-sticker';
};
type CreateDecorativesTriggerEffectItem = {
  apply_projection?: boolean;
  decorative: DecorativeID;
  radius_curve?: number;
  spawn_max: number;
  spawn_max_radius: number;
  spawn_min?: number;
  spawn_min_radius: number;
  spread_evenly?: boolean;
  type: 'create-decorative';
};
type NestedTriggerEffectItem = { action: Trigger; type: 'nested-result' };
type PlaySoundTriggerEffectItem = {
  audible_distance_modifier?: number;
  max_distance?: number;
  min_distance?: number;
  play_on_target_position?: boolean;
  sound: Sound;
  type: 'play-sound';
  volume_modifier?: number;
};
type PushBackTriggerEffectItem = { distance: number; type: 'push-back' };
type DestroyCliffsTriggerEffectItem = {
  explosion?: EntityID;
  radius: number;
  type: 'destroy-cliffs';
};
type ShowExplosionOnChartTriggerEffectItem = {
  scale: number;
  type: 'show-explosion-on-chart';
};
type InsertItemTriggerEffectItem = {
  count?: number;
  item: ItemID;
  type: 'insert-item';
};
type ScriptTriggerEffectItem = { effect_id: string; type: 'script' };
type SetTileTriggerEffectItem = {
  apply_projection?: boolean;
  radius: number;
  tile_collision_mask?: CollisionMask;
  tile_name: TileID;
  type: 'set-tile';
};
type InvokeTileEffectTriggerEffectItem = {
  tile_collision_mask?: CollisionMask;
  type: 'invoke-tile-trigger';
};
type DestroyDecorativesTriggerEffectItem = {
  decoratives_with_trigger_only?: boolean;
  from_render_layer?: RenderLayer;
  include_decals?: boolean;
  include_soft_decoratives?: boolean;
  invoke_decorative_trigger?: boolean;
  radius: number;
  to_render_layer?: RenderLayer;
  type: 'destroy-decoratives';
};
type CameraEffectTriggerEffectItem = {
  delay?: number;
  duration: number;
  ease_in_duration?: number;
  ease_out_duration?: number;
  effect: string;
  full_strength_max_distance?: number;
  max_distance?: number;
  strength?: number;
  type: 'camera-effect';
};
type Sprite = {
  filename?: FileName;
  hr_version?: Sprite;
  layers?: Sprite[];
  slice?: SpriteSizeType;
  slice_x?: SpriteSizeType;
  slice_y?: SpriteSizeType;
};
type SpriteNWaySheet = {
  frames?: number;
  generate_sdf?: boolean;
  hr_version?: SpriteNWaySheet;
};
type ItemID = string;
type AggregationSpecification = {
  count_already_playing?: boolean;
  max_count: number;
  progress_threshold?: number;
  remove: boolean;
};
type GameControllerVibrationData = {
  duration?: number;
  high_frequency_vibration_intensity?: number;
  low_frequency_vibration_intensity?: number;
  play_for?: PlayFor;
};
type SoundDefinition = {
  filename: FileName;
  max_speed?: number;
  min_speed?: number;
  preload?: boolean;
  speed?: number;
  volume?: number;
};
type AutoplaceControlID = string;
type AutoplacePeak = {
  aux_max_range?: number;
  aux_optimal?: number;
  aux_range?: number;
  aux_top_property_limit?: number;
  distance_max_range?: number;
  distance_optimal?: number;
  distance_range?: number;
  distance_top_property_limit?: number;
  elevation_max_range?: number;
  elevation_optimal?: number;
  elevation_range?: number;
  elevation_top_property_limit?: number;
  influence?: number;
  max_influence?: number;
  min_influence?: number;
  noise_layer?: NoiseLayerID;
  noise_octaves_difference?: number;
  noise_persistence?: number;
  noise_scale?: number;
  richness_influence?: number;
  starting_area_weight_max_range?: number;
  starting_area_weight_optimal?: number;
  starting_area_weight_range?: number;
  starting_area_weight_top_property_limit?: number;
  temperature_max_range?: number;
  temperature_optimal?: number;
  temperature_range?: number;
  temperature_top_property_limit?: number;
  tier_from_start_max_range?: number;
  tier_from_start_optimal?: number;
  tier_from_start_range?: number;
  tier_from_start_top_property_limit?: number;
  water_max_range?: number;
  water_optimal?: number;
  water_range?: number;
  water_top_property_limit?: number;
};
type NoiseExpression =
  | NoiseVariable
  | NoiseFunctionApplication
  | NoiseLiteralBoolean
  | NoiseLiteralNumber
  | NoiseLiteralString
  | NoiseLiteralObject
  | NoiseLiteralExpression
  | NoiseArrayConstruction
  | NoiseProcedureDelimiter
  | NoiseIfElseChain;
type TileIDRestriction = TileID | [TileID, TileID];
type MapPosition = { x: number; y: number } | [number, number];
type CollisionMaskLayer =
  | 'ground-tile'
  | 'water-tile'
  | 'resource-layer'
  | 'doodad-layer'
  | 'floor-layer'
  | 'item-layer'
  | 'ghost-layer'
  | 'object-layer'
  | 'player-layer'
  | 'train-layer'
  | 'rail-layer'
  | 'transport-belt-layer';
type DirectTriggerItem = { filter_enabled?: boolean; type: 'direct' };
type AreaTriggerItem = {
  collision_mode?: 'distance-from-collision-box' | 'distance-from-center';
  radius: number;
  show_in_tooltip?: boolean;
  target_entities?: boolean;
  trigger_from_target?: boolean;
  type: 'area';
};
type LineTriggerItem = {
  range: number;
  range_effects?: TriggerEffect;
  type: 'line';
  width: number;
};
type ClusterTriggerItem = {
  cluster_count: number;
  distance: number;
  distance_deviation?: number;
  type: 'cluster';
};
type TrivialSmokeID = string;
type ParticleID = string;
type ProductPrototype = ItemProductPrototype | FluidProductPrototype;
type SpriteVariations = { sheet: SpriteSheet } | SpriteSheet | Sprite[];
type Stripe = {
  filename: FileName;
  height_in_frames: number;
  width_in_frames: number;
  x?: number;
  y?: number;
};
type ElectricUsagePriority =
  | 'primary-input'
  | 'primary-output'
  | 'secondary-input'
  | 'secondary-output'
  | 'tertiary'
  | 'solar'
  | 'lamp';
type FuelCategoryID = string;
type LightFlickeringDefinition = {
  border_fix_speed?: number;
  color?: Color;
  derivation_change_deviation?: number;
  derivation_change_frequency?: number;
  light_intensity_to_size_coefficient?: number;
  maximum_intensity?: number;
  minimum_intensity?: number;
  minimum_light_size?: number;
};
type SmokeSource = {
  deviation?: MapPosition;
  east_position?: Vector;
  frequency: number;
  height?: number;
  height_deviation?: number;
  name: TrivialSmokeID;
  north_position?: Vector;
  offset?: number;
  position?: Vector;
  slow_down_factor?: number;
  south_position?: Vector;
  starting_frame?: number;
  starting_frame_deviation?: number;
  starting_frame_speed?: number;
  starting_frame_speed_deviation?: number;
  starting_vertical_speed?: number;
  starting_vertical_speed_deviation?: number;
  vertical_speed_slowdown?: number;
  west_position?: Vector;
};
type HeatConnection = { direction: Direction; position: MapPosition };
type RealOrientation = number;
type DamagePrototype = { amount: number; type: DamageTypeID };
type DecorativeID = string;
type TileID = string;
type PlayFor = 'character_actions' | 'everything';
type NoiseLayerID = string;
type NoiseVariable = {
  type: 'variable';
  variable_name:
    | 'x'
    | 'y'
    | NoiseVariableConstants
    | BaseNamedNoiseExpressions
    | string;
};
type NoiseFunctionApplication =
  | NoiseFunctionAdd
  | NoiseFunctionSubtract
  | NoiseFunctionMultiply
  | NoiseFunctionDivide
  | NoiseFunctionExponentiate
  | NoiseFunctionAbsoluteValue
  | NoiseFunctionClamp
  | NoiseFunctionCompileTimeLog
  | NoiseFunctionDistanceFromNearestPoint
  | NoiseFunctionRidge
  | NoiseFunctionTerrace
  | NoiseFunctionModulo
  | NoiseFunctionFloor
  | NoiseFunctionCeil
  | NoiseFunctionBitwiseAnd
  | NoiseFunctionBitwiseOr
  | NoiseFunctionBitwiseXor
  | NoiseFunctionBitwiseNot
  | NoiseFunctionSin
  | NoiseFunctionCos
  | NoiseFunctionAtan2
  | NoiseFunctionLessThan
  | NoiseFunctionLessOrEqual
  | NoiseFunctionEquals
  | NoiseFunctionFactorioBasisNoise
  | NoiseFunctionFactorioQuickMultioctaveNoise
  | NoiseFunctionRandomPenalty
  | NoiseFunctionLog2
  | NoiseFunctionNoiseLayerNameToID
  | NoiseFunctionAutoplaceProbability
  | NoiseFunctionAutoplaceRichness
  | NoiseFunctionOffsetPoints
  | NoiseFunctionFactorioMultioctaveNoise
  | NoiseFunctionSpotNoise;
type NoiseLiteralBoolean = { literal_value: boolean; type: 'literal-boolean' };
type NoiseLiteralNumber = { literal_value: number; type: 'literal-number' };
type NoiseLiteralString = { literal_value: string; type: 'literal-string' };
type NoiseLiteralObject = {
  literal_value: AutoplaceSpecification;
  type: 'literal-object';
};
type NoiseLiteralExpression = {
  literal_value: NoiseExpression;
  type: 'literal-expression';
};
type NoiseArrayConstruction = {
  type: 'array-construction';
  value_expressions: NoiseExpression[];
};
type NoiseProcedureDelimiter = {
  expression: NoiseExpression;
  type: 'procedure-delimiter';
};
type NoiseIfElseChain = { arguments: NoiseExpression[]; type: 'if-else-chain' };
type ItemProductPrototype =
  | {
      amount?: number;
      amount_max?: number;
      amount_min?: number;
      catalyst_amount?: number;
      name: ItemID;
      probability?: number;
      show_details_in_recipe_tooltip?: boolean;
      type?: 'item';
    }
  | [ItemID, number];
type FluidProductPrototype = {
  amount?: number;
  amount_max?: MaterialAmountType;
  amount_min?: MaterialAmountType;
  catalyst_amount?: number;
  fluidbox_index?: number;
  name: FluidID;
  probability?: number;
  show_details_in_recipe_tooltip?: boolean;
  temperature?: number;
  type: 'fluid';
};
type SpriteSheet = {
  hr_version?: SpriteSheet;
  layers?: SpriteSheet[];
  line_length?: number;
  repeat_count?: number;
  variation_count?: number;
};
type Direction = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
type NoiseVariableConstants =
  | string
  | 'map_seed'
  | 'map_width'
  | 'map_height'
  | 'water_level'
  | 'finite_water_level'
  | 'wlc_elevation_minimum'
  | 'wlc_elevation_offset'
  | 'cliff_elevation_offset'
  | 'cliff_elevation_interval'
  | 'control-setting:cliffs:richness:multiplier'
  | 'terrace_elevation_offset'
  | 'terrace_elevation_interval'
  | 'starting_area_radius'
  | 'starting_positions'
  | 'starting_lake_positions'
  | 'peaceful_mode';
type BaseNamedNoiseExpressions =
  | 'distance'
  | 'tier_from_start'
  | 'tier'
  | 'starting_area_weight'
  | 'moisture'
  | 'aux'
  | 'temperature'
  | 'elevation'
  | 'cliffiness'
  | 'enemy-base-intensity'
  | 'enemy-base-frequency'
  | 'enemy-base-radius';
type NoiseFunctionAdd = {
  arguments: NoiseNumber[];
  function_name: 'add';
  type: 'function-application';
};
type NoiseFunctionSubtract = {
  arguments: [NoiseNumber, NoiseNumber];
  function_name: 'subtract';
  type: 'function-application';
};
type NoiseFunctionMultiply = {
  arguments: NoiseNumber[];
  function_name: 'multiply';
  type: 'function-application';
};
type NoiseFunctionDivide = {
  arguments: [NoiseNumber, NoiseNumber];
  function_name: 'divide';
  type: 'function-application';
};
type NoiseFunctionExponentiate = {
  arguments: [NoiseNumber, NoiseNumber];
  function_name: 'exponentiate';
  type: 'function-application';
};
type NoiseFunctionAbsoluteValue = {
  arguments: [NoiseNumber];
  function_name: 'absolute-value';
  type: 'function-application';
};
type NoiseFunctionClamp = {
  arguments: [NoiseNumber, NoiseNumber, NoiseNumber];
  function_name: 'clamp';
  type: 'function-application';
};
type NoiseFunctionCompileTimeLog = {
  arguments: NoiseExpression[];
  function_name: 'compile-time-log';
  type: 'function-application';
};
type NoiseFunctionDistanceFromNearestPoint = {
  arguments: DistanceFromNearestPointArguments;
  function_name: 'distance-from-nearest-point';
  type: 'function-application';
};
type NoiseFunctionRidge = {
  arguments: [NoiseNumber, NoiseNumber, NoiseNumber];
  function_name: 'ridge';
  type: 'function-application';
};
type NoiseFunctionTerrace = {
  arguments: [
    NoiseNumber,
    ConstantNoiseNumber,
    ConstantNoiseNumber,
    NoiseNumber,
  ];
  function_name: 'terrace';
  type: 'function-application';
};
type NoiseFunctionModulo = {
  arguments: [NoiseNumber, NoiseNumber];
  function_name: 'modulo';
  type: 'function-application';
};
type NoiseFunctionFloor = {
  arguments: [NoiseNumber];
  function_name: 'floor';
  type: 'function-application';
};
type NoiseFunctionCeil = {
  arguments: [NoiseNumber];
  function_name: 'ceil';
  type: 'function-application';
};
type NoiseFunctionBitwiseAnd = {
  arguments: NoiseNumber[];
  function_name: 'bitwise-and';
  type: 'function-application';
};
type NoiseFunctionBitwiseOr = {
  arguments: NoiseNumber[];
  function_name: 'bitwise-or';
  type: 'function-application';
};
type NoiseFunctionBitwiseXor = {
  arguments: NoiseNumber[];
  function_name: 'bitwise-xor';
  type: 'function-application';
};
type NoiseFunctionBitwiseNot = {
  arguments: [NoiseNumber];
  function_name: 'bitwise-not';
  type: 'function-application';
};
type NoiseFunctionSin = {
  arguments: [NoiseNumber];
  function_name: 'sin';
  type: 'function-application';
};
type NoiseFunctionCos = {
  arguments: [NoiseNumber];
  function_name: 'cos';
  type: 'function-application';
};
type NoiseFunctionAtan2 = {
  arguments: [NoiseNumber, NoiseNumber];
  function_name: 'atan2';
  type: 'function-application';
};
type NoiseFunctionLessThan = {
  arguments: [NoiseNumber, NoiseNumber];
  function_name: 'less-than';
  type: 'function-application';
};
type NoiseFunctionLessOrEqual = {
  arguments: [NoiseNumber, NoiseNumber];
  function_name: 'less-or-equal';
  type: 'function-application';
};
type NoiseFunctionEquals = {
  arguments: [NoiseNumber, NoiseNumber];
  function_name: 'equals';
  type: 'function-application';
};
type NoiseFunctionFactorioBasisNoise = {
  arguments: FactorioBasisNoiseArguments;
  function_name: 'factorio-basis-noise';
  type: 'function-application';
};
type NoiseFunctionFactorioQuickMultioctaveNoise = {
  arguments: FactorioQuickMultioctaveNoiseArguments;
  function_name: 'factorio-quick-multioctave-noise';
  type: 'function-application';
};
type NoiseFunctionRandomPenalty = {
  arguments: RandomPenaltyArguments;
  function_name: 'random-penalty';
  type: 'function-application';
};
type NoiseFunctionLog2 = {
  arguments: [NoiseNumber];
  function_name: 'log2';
  type: 'function-application';
};
type NoiseFunctionNoiseLayerNameToID = {
  arguments: [NoiseLiteralString];
  function_name: 'noise-layer-name-to-id';
  type: 'function-application';
};
type NoiseFunctionAutoplaceProbability = {
  arguments: [NoiseLiteralObject];
  function_name: 'autoplace-probability';
  type: 'function-application';
};
type NoiseFunctionAutoplaceRichness = {
  arguments: [NoiseLiteralObject];
  function_name: 'autoplace-richness';
  type: 'function-application';
};
type NoiseFunctionOffsetPoints = {
  arguments: [NoiseArray, NoiseArray];
  function_name: 'offset-points';
  type: 'function-application';
};
type NoiseFunctionFactorioMultioctaveNoise = {
  arguments: FactorioMultioctaveNoiseArguments;
  function_name: 'factorio-multioctave-noise';
  type: 'function-application';
};
type NoiseFunctionSpotNoise = {
  arguments: SpotNoiseArguments;
  function_name: 'spot-noise';
  type: 'function-application';
};
type MaterialAmountType = number;
type NoiseNumber =
  | NoiseVariable
  | NoiseFunctionApplication
  | NoiseLiteralNumber
  | NoiseProcedureDelimiter
  | NoiseIfElseChain
  | NoiseFunctionAdd
  | NoiseFunctionSubtract
  | NoiseFunctionMultiply
  | NoiseFunctionDivide
  | NoiseFunctionExponentiate
  | NoiseFunctionFactorioQuickMultioctaveNoise
  | NoiseFunctionFactorioMultioctaveNoise
  | NoiseFunctionDistanceFromNearestPoint
  | NoiseFunctionFactorioBasisNoise
  | NoiseFunctionAbsoluteValue
  | NoiseFunctionClamp
  | NoiseFunctionRidge
  | NoiseFunctionTerrace
  | NoiseFunctionSpotNoise
  | NoiseFunctionRandomPenalty
  | NoiseFunctionLog2
  | NoiseFunctionModulo
  | NoiseFunctionFloor
  | NoiseFunctionCeil
  | NoiseFunctionBitwiseAnd
  | NoiseFunctionBitwiseOr
  | NoiseFunctionBitwiseXor
  | NoiseFunctionBitwiseNot
  | NoiseFunctionSin
  | NoiseFunctionAtan2
  | NoiseFunctionCos
  | NoiseFunctionLessThan
  | NoiseFunctionLessOrEqual
  | NoiseFunctionEquals
  | NoiseFunctionCompileTimeLog
  | NoiseFunctionNoiseLayerNameToID
  | NoiseFunctionAutoplaceProbability
  | NoiseFunctionAutoplaceRichness;
type DistanceFromNearestPointArguments = {
  maximum_distance?: ConstantNoiseNumber;
  points: NoiseArray;
  x: NoiseNumber;
  y: NoiseNumber;
};
type ConstantNoiseNumber = NoiseNumber;
type FactorioBasisNoiseArguments = {
  input_scale?: ConstantNoiseNumber;
  output_scale?: ConstantNoiseNumber;
  seed0: ConstantNoiseNumber;
  seed1: ConstantNoiseNumber;
  x: NoiseNumber;
  y: NoiseNumber;
};
type FactorioQuickMultioctaveNoiseArguments = {
  input_scale?: ConstantNoiseNumber;
  octave_input_scale_multiplier?: ConstantNoiseNumber;
  octave_output_scale_multiplier?: ConstantNoiseNumber;
  octave_seed0_shift?: ConstantNoiseNumber;
  octaves: ConstantNoiseNumber;
  output_scale?: ConstantNoiseNumber;
  seed0: ConstantNoiseNumber;
  seed1: ConstantNoiseNumber;
  x: NoiseNumber;
  y: NoiseNumber;
};
type RandomPenaltyArguments = {
  amplitude?: ConstantNoiseNumber;
  seed?: ConstantNoiseNumber;
  source: NoiseNumber;
  x: NoiseNumber;
  y: NoiseNumber;
};
type NoiseArray =
  | NoiseVariable
  | NoiseArrayConstruction
  | NoiseFunctionOffsetPoints;
type FactorioMultioctaveNoiseArguments = {
  input_scale?: ConstantNoiseNumber;
  octaves: ConstantNoiseNumber;
  output_scale?: ConstantNoiseNumber;
  persistence: ConstantNoiseNumber;
  seed0: ConstantNoiseNumber;
  seed1: ConstantNoiseNumber;
  x: NoiseNumber;
  y: NoiseNumber;
};
type SpotNoiseArguments = {
  basement_value: ConstantNoiseNumber;
  candidate_point_count?: ConstantNoiseNumber;
  candidate_spot_count?: ConstantNoiseNumber;
  comment?: NoiseLiteralString;
  density_expression: NoiseLiteralExpression;
  hard_region_target_quantity?: ConstantNoiseBoolean;
  maximum_spot_basement_radius: ConstantNoiseNumber;
  region_size?: ConstantNoiseNumber;
  seed0: ConstantNoiseNumber;
  seed1: ConstantNoiseNumber;
  skip_offset?: ConstantNoiseNumber;
  skip_span?: ConstantNoiseNumber;
  spot_favorability_expression: NoiseLiteralExpression;
  spot_quantity_expression: NoiseLiteralExpression;
  spot_radius_expression: NoiseLiteralExpression;
  suggested_minimum_candidate_point_spacing?: ConstantNoiseNumber;
  x: NoiseNumber;
  y: NoiseNumber;
};
type ConstantNoiseBoolean = NoiseLiteralBoolean | ConstantNoiseNumber;
