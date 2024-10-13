export interface AssemblingMachinePrototype extends CraftingMachinePrototype {
  entity_info_icon_shift?: Vector;
  fixed_recipe?: RecipeID;
  gui_title_key?: string;
  ingredient_count?: uint8;
}
export interface CraftingMachinePrototype extends EntityWithOwnerPrototype {
  allowed_effects?: EffectTypeLimitation;
  always_draw_idle_animation?: bool;
  animation?: Animation4Way;
  base_productivity?: float;
  crafting_categories: RecipeCategoryID[];
  crafting_speed: double;
  default_recipe_tint?: DefaultRecipeTint;
  draw_entity_info_icon_background?: bool;
  energy_source: EnergySource;
  energy_usage: Energy;
  entity_info_icon_shift?: Vector;
  fluid_boxes?: FluidBox[];
  idle_animation?: Animation4Way;
  match_animation_speed_to_activity?: bool;
  module_specification?: ModuleSpecification;
  return_ingredients_on_change?: bool;
  scale_entity_info_icon?: bool;
  shift_animation_transition_duration?: uint16;
  shift_animation_waypoint_stop_duration?: uint16;
  shift_animation_waypoints?: ShiftAnimationWaypoints;
  show_recipe_icon?: bool;
  show_recipe_icon_on_map?: bool;
  status_colors?: StatusColors;
  working_visualisations?: WorkingVisualisation[];
}
export interface EntityWithOwnerPrototype extends EntityWithHealthPrototype {
  allow_run_time_change_of_is_military_target?: bool;
  is_military_target?: bool;
}
export interface EntityWithHealthPrototype extends EntityPrototype {
  alert_when_damaged?: bool;
  attack_reaction?: AttackReactionItem | AttackReactionItem[];
  corpse?: EntityID | EntityID[];
  create_ghost_on_death?: bool;
  damaged_trigger_effect?: TriggerEffect;
  dying_explosion?: ExplosionDefinition | ExplosionDefinition[];
  dying_trigger_effect?: TriggerEffect;
  healing_per_tick?: float;
  hide_resistances?: bool;
  integration_patch?: Sprite4Way;
  integration_patch_render_layer?: RenderLayer;
  loot?: LootItem[];
  max_health?: float;
  random_corpse_variation?: bool;
  repair_sound?: Sound;
  repair_speed_modifier?: float;
  resistances?: Resistance[];
}
export interface EntityPrototype extends PrototypeBase {
  additional_pastable_entities?: EntityID[];
  alert_icon_scale?: float;
  alert_icon_shift?: Vector;
  allow_copy_paste?: bool;
  autoplace?: AutoplaceSpecification;
  build_base_evolution_requirement?: double;
  build_grid_size?: uint8;
  build_sound?: Sound;
  close_sound?: Sound;
  collision_box?: BoundingBox;
  collision_mask?: CollisionMask;
  created_effect?: Trigger;
  created_smoke?: CreateTrivialSmokeEffectItem;
  drawing_box?: BoundingBox;
  emissions_per_second?: double;
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
  protected_from_tile_building?: bool;
  radius_visualisation_specification?: RadiusVisualisationSpecification;
  remains_when_mined?: EntityID | EntityID[];
  remove_decoratives?: 'automatic' | 'true' | 'false' | true | false;
  rotated_sound?: Sound;
  selectable_in_game?: bool;
  selection_box?: BoundingBox;
  selection_priority?: uint8;
  shooting_cursor_size?: float;
  sticker_box?: BoundingBox;
  subgroup?: ItemSubGroupID;
  tile_height?: uint32;
  tile_width?: uint32;
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
export type ActivateEquipmentCapsuleAction = {
  equipment: EquipmentID;
  type: 'equipment-remote';
};
export type ActivityBarStyleSpecification = {
  bar?: Sprite;
  bar_background?: Sprite;
  bar_size_ratio?: float;
  bar_width?: uint32;
  color?: Color;
  speed?: float;
  type: 'activity_bar_style';
};
export type AdvancedMapGenSettings = {
  difficulty_settings?: MapGenPresetDifficultySettings;
  enemy_evolution?: MapGenPresetEnemyEvolutionSettings;
  enemy_expansion?: MapGenPresetEnemyExpansionSettings;
  pollution?: MapGenPresetPollutionSettings;
};
export type AggregationSpecification = {
  count_already_playing?: bool;
  max_count: uint32;
  progress_threshold?: float;
  remove: bool;
};
export type AmmoCategoryID = string;
export type AmmoDamageModifier = {
  ammo_category: AmmoCategoryID;
  infer_icon?: bool;
  modifier: double;
  type: 'ammo-damage';
  use_icon_overlay_constant?: bool;
};
export type AmmoSourceType = 'default' | 'player' | 'turret' | 'vehicle';
export type AmmoType = {
  action?: Trigger;
  category: AmmoCategoryID;
  clamp_position?: bool;
  consumption_modifier?: float;
  cooldown_modifier?: double;
  energy_consumption?: Energy;
  range_modifier?: double;
  source_type?: AmmoSourceType;
  target_type?: 'entity' | 'position' | 'direction';
};
export type AndTipTrigger = { triggers: TipTrigger[]; type: 'and' };
export type AnimatedVector = {
  direction_shift?: DirectionShift;
  render_layer?: RenderLayer;
  rotations: VectorRotation[];
};
export type Animation = {
  filename?: FileName;
  hr_version?: Animation;
  layers?: Animation[];
  stripes?: Stripe[];
};
export type Animation4Way =
  | { east?: Animation; north: Animation; south?: Animation; west?: Animation }
  | Animation;
export type AnimationElement = {
  always_draw?: bool;
  animation?: Animation;
  apply_tint?: bool;
  draw_as_light?: bool;
  draw_as_sprite?: bool;
  render_layer?: RenderLayer;
  secondary_draw_order?: int8;
};
export type AnimationFrameSequence = uint16[];
export type AnimationParameters = {
  animation_speed?: float;
  dice?: uint8;
  dice_x?: uint8;
  dice_y?: uint8;
  frame_count?: uint32;
  frame_sequence?: AnimationFrameSequence;
  generate_sdf?: bool;
  height?: SpriteSizeType;
  line_length?: uint32;
  max_advance?: float;
  mipmap_count?: uint8;
  repeat_count?: uint8;
  run_mode?: 'forward' | 'backward' | 'forward-then-backward';
  size?: SpriteSizeType | [SpriteSizeType, SpriteSizeType];
  width?: SpriteSizeType;
};
export type AnimationSheet = {
  frame_count?: uint32;
  hr_version?: AnimationSheet;
  line_length?: uint32;
  variation_count: uint32;
};
export type AnimationVariations =
  | { sheet?: AnimationSheet; sheets?: AnimationSheet[] }
  | Animation
  | Animation[];
export type AnyPrototype = unknown;
export type AreaTriggerItem = {
  collision_mode?: 'distance-from-collision-box' | 'distance-from-center';
  radius: double;
  show_in_tooltip?: bool;
  target_entities?: bool;
  trigger_from_target?: bool;
  type: 'area';
};
export type ArtilleryRangeModifier = {
  infer_icon?: bool;
  type: 'artillery-range';
  use_icon_overlay_constant?: bool;
};
export type ArtilleryRemoteCapsuleAction = {
  flare: EntityID;
  play_sound_on_failure?: bool;
  type: 'artillery-remote';
};
export type ArtilleryTriggerDelivery = {
  direction_deviation?: float;
  projectile: EntityID;
  range_deviation?: float;
  starting_speed: float;
  starting_speed_deviation?: float;
  trigger_fired_artillery?: bool;
  type: 'artillery';
};
export type AttackParameters =
  | ProjectileAttackParameters
  | BeamAttackParameters
  | StreamAttackParameters;
export type AttackReactionItem = {
  action?: Trigger;
  damage_type?: DamageTypeID;
  range: float;
  reaction_modifier?: float;
};
export type AutoplaceControlID = string;
export type AutoplacePeak = {
  aux_max_range?: double;
  aux_optimal?: double;
  aux_range?: double;
  aux_top_property_limit?: double;
  distance_max_range?: double;
  distance_optimal?: double;
  distance_range?: double;
  distance_top_property_limit?: double;
  elevation_max_range?: double;
  elevation_optimal?: double;
  elevation_range?: double;
  elevation_top_property_limit?: double;
  influence?: double;
  max_influence?: double;
  min_influence?: double;
  noise_layer?: NoiseLayerID;
  noise_octaves_difference?: double;
  noise_persistence?: double;
  noise_scale?: double;
  richness_influence?: double;
  starting_area_weight_max_range?: double;
  starting_area_weight_optimal?: double;
  starting_area_weight_range?: double;
  starting_area_weight_top_property_limit?: double;
  temperature_max_range?: double;
  temperature_optimal?: double;
  temperature_range?: double;
  temperature_top_property_limit?: double;
  tier_from_start_max_range?: double;
  tier_from_start_optimal?: double;
  tier_from_start_range?: double;
  tier_from_start_top_property_limit?: double;
  water_max_range?: double;
  water_optimal?: double;
  water_range?: double;
  water_top_property_limit?: double;
};
export type AutoplaceSettings = {
  settings?: Record<EntityID | TileID | DecorativeID, FrequencySizeRichness>;
  treat_missing_as_default?: bool;
};
export type AutoplaceSpecification =
  | {
      control?: AutoplaceControlID;
      coverage?: double;
      default_enabled?: bool;
      force?: 'enemy' | 'player' | 'neutral' | string;
      max_probability?: double;
      order?: Order;
      peaks?: AutoplacePeak[];
      placement_density?: uint32;
      probability_expression?: NoiseExpression;
      random_probability_penalty?: double;
      richness_base?: double;
      richness_expression?: NoiseExpression;
      richness_multiplier?: double;
      richness_multiplier_distance_bonus?: double;
      sharpness?: double;
      starting_area_amount?: uint32;
      starting_area_size?: uint32;
      tile_restriction?: TileIDRestriction[];
    }
  | AutoplacePeak;
export type BaseAttackParameters = {
  activation_type?: 'shoot' | 'throw' | 'consume' | 'activate';
  ammo_categories?: AmmoCategoryID[];
  ammo_category?: AmmoCategoryID;
  ammo_consumption_modifier?: float;
  ammo_type?: AmmoType;
  animation?: RotatedAnimation;
  cooldown: float;
  cooldown_deviation?: float;
  cyclic_sound?: CyclicSound;
  damage_modifier?: float;
  fire_penalty?: float;
  health_penalty?: float;
  lead_target_for_projectile_speed?: float;
  min_attack_distance?: float;
  min_range?: float;
  movement_slow_down_cooldown?: float;
  movement_slow_down_factor?: double;
  range: float;
  range_mode?: 'center-to-center' | 'bounding-box-to-bounding-box';
  rotate_penalty?: float;
  sound?: LayeredSound;
  turn_range?: float;
  use_shooter_direction?: bool;
  warmup?: uint32;
};
export type BaseEnergySource = {
  emissions_per_minute?: double;
  render_no_network_icon?: bool;
  render_no_power_icon?: bool;
};
export type BaseModifier = {
  icon?: FileName;
  icon_mipmaps?: IconMipMapType;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
};
export type BaseNamedNoiseExpressions =
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
export type BaseStyleSpecification = {
  bottom_margin?: int16;
  bottom_padding?: int16;
  effect?: 'compilatron-hologram';
  effect_opacity?: float;
  height?: uint32;
  horizontal_align?: HorizontalAlign;
  horizontally_squashable?: StretchRule;
  horizontally_stretchable?: StretchRule;
  ignored_by_search?: bool;
  left_margin?: int16;
  left_padding?: int16;
  margin?: int16;
  maximal_height?: uint32;
  maximal_width?: uint32;
  minimal_height?: uint32;
  minimal_width?: uint32;
  natural_height?: uint32;
  natural_size?: uint32 | [uint32, uint32];
  natural_width?: uint32;
  never_hide_by_search?: bool;
  padding?: int16;
  parent?: string;
  right_margin?: int16;
  right_padding?: int16;
  size?: uint32 | [uint32, uint32];
  tooltip?: LocalisedString;
  top_margin?: int16;
  top_padding?: int16;
  vertical_align?: VerticalAlign;
  vertically_squashable?: StretchRule;
  vertically_stretchable?: StretchRule;
  width?: uint32;
};
export type BeaconGraphicsSet = {
  animation_layer?: RenderLayer;
  animation_list?: AnimationElement[];
  animation_progress?: float;
  apply_module_tint?: ModuleTint;
  apply_module_tint_to_light?: ModuleTint;
  base_layer?: RenderLayer;
  draw_animation_when_idle?: bool;
  draw_light_when_idle?: bool;
  light?: LightDefinition;
  max_animation_progress?: float;
  min_animation_progress?: float;
  module_icons_suppressed?: bool;
  module_tint_mode?: 'single-module' | 'mix';
  module_visualisations?: BeaconModuleVisualizations[];
  no_modules_tint?: Color;
  random_animation_offset?: bool;
  top_layer?: RenderLayer;
};
export type BeaconModuleVisualization = {
  apply_module_tint?: ModuleTint;
  draw_as_light?: bool;
  draw_as_sprite?: bool;
  has_empty_slot?: bool;
  pictures?: SpriteVariations;
  render_layer?: RenderLayer;
  secondary_draw_order?: int8;
};
export type BeaconModuleVisualizations = {
  art_style: string;
  slots?: BeaconModuleVisualization[][];
  tier_offset?: int32;
  use_for_empty_slots?: bool;
};
export type BeaconVisualizationTints = {
  primary?: Color;
  quaternary?: Color;
  secondary?: Color;
  tertiary?: Color;
};
export type BeamAnimationSet = {
  body?: AnimationVariations;
  ending?: Animation;
  head?: Animation;
  start?: Animation;
  tail?: Animation;
};
export type BeamAttackParameters = {
  source_direction_count?: uint32;
  source_offset?: Vector;
  type: 'beam';
};
export type BeamTriggerDelivery = {
  add_to_shooter?: bool;
  beam: EntityID;
  duration?: uint32;
  max_length?: uint32;
  source_offset?: Vector;
  type: 'beam';
};
export type BeltTraverseTipTrigger = { count?: uint32; type: 'belt-traverse' };
export type BlendMode =
  | 'normal'
  | 'additive'
  | 'additive-soft'
  | 'multiplicative'
  | 'multiplicative-with-alpha'
  | 'overwrite';
export type BoilerFire = {
  east?: Animation;
  north?: Animation;
  south?: Animation;
  west?: Animation;
};
export type BoilerFireGlow = {
  east?: Animation;
  north?: Animation;
  south?: Animation;
  west?: Animation;
};
export type BoilerPatch = {
  east?: Sprite;
  north?: Sprite;
  south?: Sprite;
  west?: Sprite;
};
export type BoilerStructure = {
  east: Animation;
  north: Animation;
  south: Animation;
  west: Animation;
};
export type BonusGuiOrdering = {
  artillery_range: Order;
  character: Order;
  follower_robots: Order;
  inserter: Order;
  mining_productivity: Order;
  research_speed: Order;
  stack_inserter: Order;
  train_braking_force: Order;
  turret_attack: Order;
  worker_robots: Order;
};
export type BoolModifier = { modifier: bool };
export type BorderImageSet = {
  border_width?: uint32;
  bottom_end?: Sprite;
  bottom_left_corner?: Sprite;
  bottom_right_corner?: Sprite;
  bottom_t?: Sprite;
  cross?: Sprite;
  horizontal_line?: Sprite;
  left_end?: Sprite;
  left_t?: Sprite;
  right_end?: Sprite;
  right_t?: Sprite;
  scale?: double;
  top_end?: Sprite;
  top_left_coner?: Sprite;
  top_right_corner?: Sprite;
  top_t?: Sprite;
  vertical_line?: Sprite;
};
export type BoundingBox = [MapPosition, MapPosition];
export type BoxSpecification = {
  is_whole_box?: bool;
  max_side_length?: double;
  side_height?: double;
  side_length?: double;
  sprite: Sprite;
};
export type BuildEntityTipTrigger = {
  build_by_dragging?: bool;
  build_in_line?: bool;
  consecutive?: bool;
  count?: uint32;
  entity?: EntityID;
  linear_power_pole_line?: bool;
  match_type_only?: bool;
  type: 'build-entity';
};
export type BurnerEnergySource = {
  burnt_inventory_size?: ItemStackIndex;
  effectivity?: double;
  fuel_categories?: FuelCategoryID[];
  fuel_category?: FuelCategoryID;
  fuel_inventory_size: ItemStackIndex;
  light_flicker?: LightFlickeringDefinition;
  smoke?: SmokeSource[];
  type?: 'burner';
};
export type ButtonStyleSpecification = {
  clicked_font_color?: Color;
  clicked_vertical_offset?: uint32;
  default_font_color?: Color;
  disabled_font_color?: Color;
  draw_grayscale_picture?: bool;
  draw_shadow_under_picture?: bool;
  font?: string;
  hovered_font_color?: Color;
  icon_horizontal_align?: HorizontalAlign;
  pie_progress_color?: Color;
  selected_clicked_font_color?: Color;
  selected_font_color?: Color;
  selected_hovered_font_color?: Color;
  strikethrough_color?: Color;
  type: 'button_style';
};
export type CameraEffectTriggerEffectItem = {
  delay?: uint8;
  duration: uint8;
  ease_in_duration?: uint8;
  ease_out_duration?: uint8;
  effect: string;
  full_strength_max_distance?: uint16;
  max_distance?: uint16;
  strength?: float;
  type: 'camera-effect';
};
export type CameraStyleSpecification = { type: 'camera_style' };
export type CapsuleAction =
  | ThrowCapsuleAction
  | ActivateEquipmentCapsuleAction
  | UseOnSelfCapsuleAction
  | DestroyCliffsCapsuleAction
  | ArtilleryRemoteCapsuleAction;
export type CharacterArmorAnimation = {
  armors?: ItemID[];
  flipped_shadow_running_with_gun?: RotatedAnimation;
  idle: RotatedAnimation;
  idle_with_gun: RotatedAnimation;
  mining_with_tool: RotatedAnimation;
  running: RotatedAnimation;
  running_with_gun: RotatedAnimation;
};
export type CharacterBuildDistanceModifier = {
  type: 'character-build-distance';
  use_icon_overlay_constant?: bool;
};
export type CharacterCraftingSpeedModifier = {
  type: 'character-crafting-speed';
  use_icon_overlay_constant?: bool;
};
export type CharacterHealthBonusModifier = {
  type: 'character-health-bonus';
  use_icon_overlay_constant?: bool;
};
export type CharacterInventorySlotsBonusModifier = {
  type: 'character-inventory-slots-bonus';
  use_icon_overlay_constant?: bool;
};
export type CharacterItemDropDistanceModifier = {
  type: 'character-item-drop-distance';
  use_icon_overlay_constant?: bool;
};
export type CharacterItemPickupDistanceModifier = {
  type: 'character-item-pickup-distance';
  use_icon_overlay_constant?: bool;
};
export type CharacterLogisticRequestsModifier = {
  type: 'character-logistic-requests';
  use_icon_overlay_constant?: bool;
};
export type CharacterLogisticTrashSlotsModifier = {
  type: 'character-logistic-trash-slots';
  use_icon_overlay_constant?: bool;
};
export type CharacterLootPickupDistanceModifier = {
  type: 'character-loot-pickup-distance';
  use_icon_overlay_constant?: bool;
};
export type CharacterMiningSpeedModifier = {
  type: 'character-mining-speed';
  use_icon_overlay_constant?: bool;
};
export type CharacterReachDistanceModifier = {
  type: 'character-reach-distance';
  use_icon_overlay_constant?: bool;
};
export type CharacterResourceReachDistanceModifier = {
  type: 'character-resource-reach-distance';
  use_icon_overlay_constant?: bool;
};
export type CharacterRunningSpeedModifier = {
  type: 'character-running-speed';
  use_icon_overlay_constant?: bool;
};
export type ChartUtilityConstants = {
  artillery_range_color: Color;
  blue_signal_color: Color;
  chart_construction_robot_color: Color;
  chart_deconstruct_tint: Color;
  chart_logistic_robot_color: Color;
  chart_mobile_construction_robot_color: Color;
  chart_personal_construction_robot_color: Color;
  chart_train_stop_disabled_text_color: Color;
  chart_train_stop_full_text_color: Color;
  chart_train_stop_text_color: Color;
  custom_tag_scale?: float;
  custom_tag_selected_overlay_tint: Color;
  default_color_by_type?: Record<string, Color>;
  default_enemy_color: Color;
  default_friendly_color: Color;
  default_friendly_color_by_type?: Record<string, Color>;
  electric_line_minimum_absolute_width: float;
  electric_line_width: float;
  electric_lines_color: Color;
  electric_lines_color_switch_disabled: Color;
  electric_lines_color_switch_enabled: Color;
  electric_power_pole_color: Color;
  entity_ghost_color: Color;
  explosion_visualization_duration: uint32;
  green_signal_color: Color;
  pollution_color: Color;
  rail_color: Color;
  red_signal_color: Color;
  resource_outline_selection_color: Color;
  switch_color: Color;
  train_current_path_outline_color: Color;
  train_path_color: Color;
  train_preview_path_outline_color: Color;
  turret_range_color: Color;
  vehicle_inner_color: Color;
  vehicle_outer_color: Color;
  vehicle_outer_color_selected: Color;
  vehicle_wagon_connection_color: Color;
  yellow_signal_color: Color;
  zoom_threshold_to_draw_spider_path?: double;
};
export type CheckBoxStyleSpecification = {
  checkmark?: Sprite;
  disabled_checkmark?: Sprite;
  disabled_font_color?: Color;
  font?: string;
  font_color?: Color;
  intermediate_mark?: Sprite;
  text_padding?: uint32;
  type: 'checkbox_style';
};
export type CircuitConnectorLayer = {
  east?: RenderLayer;
  north?: RenderLayer;
  south?: RenderLayer;
  west?: RenderLayer;
};
export type CircuitConnectorSecondaryDrawOrder = {
  east?: int8;
  north?: int8;
  south?: int8;
  west?: int8;
};
export type CircuitConnectorSprites = {
  blue_led_light_offset?: Vector;
  connector_main?: Sprite;
  connector_shadow?: Sprite;
  led_blue: Sprite;
  led_blue_off?: Sprite;
  led_green: Sprite;
  led_light: LightDefinition;
  led_red: Sprite;
  red_green_led_light_offset?: Vector;
  wire_pins?: Sprite;
  wire_pins_shadow?: Sprite;
};
export type CircularParticleCreationSpecification = {
  center?: Vector;
  creation_distance?: double;
  creation_distance_orientation?: double;
  direction?: float;
  direction_deviation?: float;
  height?: float;
  height_deviation?: float;
  name: ParticleID;
  speed?: float;
  speed_deviation?: float;
  starting_frame_speed: float;
  starting_frame_speed_deviation?: float;
  use_source_position?: bool;
  vertical_speed?: float;
  vertical_speed_deviation?: float;
};
export type CircularProjectileCreationSpecification = [
  RealOrientation,
  Vector,
][];
export type ClearCursorTipTrigger = { count?: uint32; type: 'clear-cursor' };
export type CliffPlacementSettings = {
  cliff_elevation_0?: float;
  cliff_elevation_interval?: float;
  name?: EntityID;
  richness?: MapGenSize;
};
export type ClusterTriggerItem = {
  cluster_count: uint32;
  distance: float;
  distance_deviation?: float;
  type: 'cluster';
};
export type CollisionMask = (
  | CollisionMaskLayer
  | 'not-colliding-with-itself'
  | 'consider-tile-transitions'
  | 'colliding-with-tiles-only'
)[];
export type CollisionMaskLayer =
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
export type Color =
  | { a?: float; b?: float; g?: float; r?: float }
  | [float, float, float]
  | [float, float, float, float];
export type ColorFilterData = {
  localised_name: LocalisedString;
  matrix: float[][];
  name: string;
};
export type ColumnAlignment = {
  alignment:
    | 'center'
    | 'left'
    | 'right'
    | 'top-left'
    | 'middle-left'
    | 'bottom-left'
    | 'top-center'
    | 'middle-center'
    | 'bottom-center'
    | 'top-right'
    | 'middle-right'
    | 'bottom-right';
  column: uint32;
};
export type ColumnWidth = {
  column: uint32;
  maximal_width?: int32;
  minimal_width?: int32;
  width?: int32;
};
export type ConnectableEntityGraphics = {
  corner_left_down: SpriteVariations;
  corner_left_up: SpriteVariations;
  corner_right_down: SpriteVariations;
  corner_right_up: SpriteVariations;
  cross: SpriteVariations;
  ending_down: SpriteVariations;
  ending_left: SpriteVariations;
  ending_right: SpriteVariations;
  ending_up: SpriteVariations;
  single: SpriteVariations;
  straight_horizontal: SpriteVariations;
  straight_vertical: SpriteVariations;
  t_down: SpriteVariations;
  t_left: SpriteVariations;
  t_right: SpriteVariations;
  t_up: SpriteVariations;
};
export type ConstantNoiseBoolean = NoiseLiteralBoolean | ConstantNoiseNumber;
export type ConstantNoiseNumber = NoiseNumber;
export type ConsumingType = 'none' | 'game-only';
export type CraftItemTipTrigger = {
  consecutive?: bool;
  count?: uint32;
  event_type:
    | 'crafting-of-single-item-ordered'
    | 'crafting-of-multiple-items-ordered'
    | 'crafting-finished';
  item?: ItemID;
  type: 'craft-item';
};
export type CraftingMachineTint = {
  primary?: Color;
  quaternary?: Color;
  secondary?: Color;
  tertiary?: Color;
};
export type CreateDecorativesTriggerEffectItem = {
  apply_projection?: bool;
  decorative: DecorativeID;
  radius_curve?: float;
  spawn_max: uint16;
  spawn_max_radius: float;
  spawn_min?: uint16;
  spawn_min_radius: float;
  spread_evenly?: bool;
  type: 'create-decorative';
};
export type CreateEntityTriggerEffectItem = {
  check_buildability?: bool;
  entity_name: EntityID;
  offset_deviation?: BoundingBox;
  offsets?: Vector | Vector[];
  show_in_tooltip?: bool;
  tile_collision_mask?: CollisionMask;
  trigger_created_entity?: bool;
  type: 'create-entity';
};
export type CreateExplosionTriggerEffectItem = {
  cycle_while_moving?: bool;
  inherit_movement_distance_from_projectile?: bool;
  max_movement_distance?: float;
  max_movement_distance_deviation?: float;
  type: 'create-explosion';
};
export type CreateFireTriggerEffectItem = {
  initial_ground_flame_count?: uint8;
  type: 'create-fire';
};
export type CreateParticleTriggerEffectItem = {
  frame_speed?: float;
  frame_speed_deviation?: float;
  initial_height: float;
  initial_height_deviation?: float;
  initial_vertical_speed?: float;
  initial_vertical_speed_deviation?: float;
  offset_deviation?: BoundingBox;
  offsets?: Vector | Vector[];
  particle_name: ParticleID;
  rotate_offsets?: bool;
  show_in_tooltip?: bool;
  speed_from_center?: float;
  speed_from_center_deviation?: float;
  tail_length?: uint8;
  tail_length_deviation?: uint8;
  tail_width?: float;
  tile_collision_mask?: CollisionMask;
  type: 'create-particle';
};
export type CreateSmokeTriggerEffectItem = {
  initial_height?: float;
  speed?: Vector;
  speed_from_center?: float;
  speed_from_center_deviation?: float;
  speed_multiplier?: float;
  speed_multiplier_deviation?: float;
  starting_frame?: float;
  starting_frame_deviation?: float;
  starting_frame_speed?: float;
  starting_frame_speed_deviation?: float;
  type: 'create-smoke';
};
export type CreateStickerTriggerEffectItem = {
  show_in_tooltip?: bool;
  sticker: EntityID;
  trigger_created_entity?: bool;
  type: 'create-sticker';
};
export type CreateTrivialSmokeEffectItem = {
  initial_height?: float;
  max_radius?: float;
  offset_deviation?: BoundingBox;
  offsets?: Vector | Vector[];
  smoke_name: TrivialSmokeID;
  speed?: Vector;
  speed_from_center?: float;
  speed_from_center_deviation?: float;
  speed_multiplier?: float;
  speed_multiplier_deviation?: float;
  starting_frame?: float;
  starting_frame_deviation?: float;
  starting_frame_speed?: float;
  starting_frame_speed_deviation?: float;
  type: 'create-trivial-smoke';
};
export type CursorBoxSpecification = {
  blueprint_snap_rectangle: BoxSpecification[];
  copy: BoxSpecification[];
  electricity: BoxSpecification[];
  logistics: BoxSpecification[];
  not_allowed: BoxSpecification[];
  pair: BoxSpecification[];
  regular: BoxSpecification[];
  train_visualization: BoxSpecification[];
};
export type CursorBoxType =
  | 'entity'
  | 'electricity'
  | 'copy'
  | 'not-allowed'
  | 'pair'
  | 'logistics'
  | 'train-visualization'
  | 'blueprint-snap-rectangle';
export type CyclicSound = {
  begin_sound?: Sound;
  end_sound?: Sound;
  middle_sound?: Sound;
};
export type DamagePrototype = { amount: float; type: DamageTypeID };
export type DamageTriggerEffectItem = {
  apply_damage_to_trees?: bool;
  damage: DamagePrototype;
  lower_damage_modifier?: float;
  lower_distance_threshold?: uint16;
  type: 'damage';
  upper_damage_modifier?: float;
  upper_distance_threshold?: uint16;
  vaporize?: bool;
};
export type DamageTypeFilters =
  | { types: DamageTypeID | DamageTypeID[]; whitelist?: bool }
  | DamageTypeID
  | DamageTypeID[];
export type DamageTypeID = string;
export type Data = {
  extend: DataExtendMethod;
  is_demo: bool;
  raw: Record<string, Record<string, AnyPrototype>>;
};
export type DataExtendMethod = (extension: unknown) => void;
export type DaytimeColorLookupTable = [double, FileName | 'identity'][];
export type DeconstructionTimeToLiveModifier = {
  type: 'deconstruction-time-to-live';
  use_icon_overlay_constant?: bool;
};
export type DecorativeID = string;
export type DefaultRecipeTint = {
  primary?: Color;
  quaternary?: Color;
  secondary?: Color;
  tertiary?: Color;
};
export type DependenciesMetTipTrigger = { type: 'dependencies-met' };
export type DestroyCliffsCapsuleAction = {
  attack_parameters: AttackParameters;
  play_sound_on_failure?: bool;
  radius: float;
  timeout?: uint32;
  type: 'destroy-cliffs';
  uses_stack?: bool;
};
export type DestroyCliffsTriggerEffectItem = {
  explosion?: EntityID;
  radius: float;
  type: 'destroy-cliffs';
};
export type DestroyDecorativesTriggerEffectItem = {
  decoratives_with_trigger_only?: bool;
  from_render_layer?: RenderLayer;
  include_decals?: bool;
  include_soft_decoratives?: bool;
  invoke_decorative_trigger?: bool;
  radius: float;
  to_render_layer?: RenderLayer;
  type: 'destroy-decoratives';
};
export type DifficultySettings = {
  recipe_difficulty: uint8;
  research_queue_setting?: 'always' | 'after-victory' | 'never';
  technology_difficulty: uint8;
  technology_price_multiplier?: double;
};
export type DirectTriggerItem = { filter_enabled?: bool; type: 'direct' };
export type Direction = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type DirectionShift = {
  east?: Vector;
  north?: Vector;
  south?: Vector;
  west?: Vector;
};
export type DistanceFromNearestPointArguments = {
  maximum_distance?: ConstantNoiseNumber;
  points: NoiseArray;
  x: NoiseNumber;
  y: NoiseNumber;
};
export type DoubleSliderStyleSpecification = { type: 'double_slider_style' };
export type DropDownStyleSpecification = {
  button_style?: ButtonStyleSpecification;
  icon?: Sprite;
  list_box_style?: ListBoxStyleSpecification;
  opened_sound?: Sound;
  selector_and_title_spacing?: int16;
  type: 'dropdown_style';
};
export type Effect = {
  consumption?: EffectValue;
  pollution?: EffectValue;
  productivity?: EffectValue;
  speed?: EffectValue;
};
export type EffectTypeLimitation =
  | ('speed' | 'productivity' | 'consumption' | 'pollution')
  | ('speed' | 'productivity' | 'consumption' | 'pollution')[];
export type EffectValue = { bonus?: double };
export type ElectricEnergySource = {
  buffer_capacity?: Energy;
  drain?: Energy;
  input_flow_limit?: Energy;
  output_flow_limit?: Energy;
  type?: 'electric';
  usage_priority: ElectricUsagePriority;
};
export type ElectricUsagePriority =
  | 'primary-input'
  | 'primary-output'
  | 'secondary-input'
  | 'secondary-output'
  | 'tertiary'
  | 'solar'
  | 'lamp';
export type ElementImageSet =
  | {
      base?: ElementImageSetLayer;
      glow?: ElementImageSetLayer;
      shadow?: ElementImageSetLayer;
    }
  | ElementImageSetLayer;
export type ElementImageSetLayer =
  | {
      background_blur?: bool;
      background_blur_sigma?: float;
      border?: int32;
      bottom?: Sprite;
      bottom_border?: int32;
      bottom_outer_border_shift?: int32;
      bottom_tiling?: bool;
      bottom_width?: SpriteSizeType;
      center?: Sprite;
      center_height?: SpriteSizeType;
      center_tiling_horizontal?: bool;
      center_tiling_vertical?: bool;
      center_width?: SpriteSizeType;
      corner_size?: uint16 | [uint16, uint16];
      custom_horizontal_tiling_sizes?: uint32[];
      draw_type?: 'inner' | 'outer';
      filename?: FileName;
      left?: Sprite;
      left_border?: int32;
      left_bottom?: Sprite;
      left_height?: SpriteSizeType;
      left_outer_border_shift?: int32;
      left_tiling?: bool;
      left_top?: Sprite;
      load_in_minimal_mode?: bool;
      opacity?: double;
      overall_tiling_horizontal_padding?: uint16;
      overall_tiling_horizontal_size?: uint16;
      overall_tiling_horizontal_spacing?: uint16;
      overall_tiling_vertical_padding?: uint16;
      overall_tiling_vertical_size?: uint16;
      overall_tiling_vertical_spacing?: uint16;
      position?: MapPosition;
      right?: Sprite;
      right_border?: int32;
      right_bottom?: Sprite;
      right_height?: SpriteSizeType;
      right_outer_border_shift?: int32;
      right_tiling?: bool;
      right_top?: Sprite;
      scale?: double;
      stretch_monolith_image_to_size?: bool;
      tint?: Color;
      top?: Sprite;
      top_border?: int32;
      top_outer_border_shift?: int32;
      top_tiling?: bool;
      top_width?: SpriteSizeType;
      type?: 'none' | 'composition';
    }
  | Sprite;
export type EmptyWidgetStyleSpecification = {
  graphical_set?: ElementImageSet;
  type: 'empty_widget_style';
};
export type EnemyEvolutionSettings = {
  destroy_factor: double;
  enabled: bool;
  pollution_factor: double;
  time_factor: double;
};
export type EnemyExpansionSettings = {
  building_coefficient: double;
  enabled: bool;
  enemy_building_influence_radius: uint32;
  friendly_base_influence_radius: uint32;
  max_colliding_tiles_coefficient: double;
  max_expansion_cooldown: uint32;
  max_expansion_distance: uint32;
  min_expansion_cooldown: uint32;
  neighbouring_base_chunk_coefficient: double;
  neighbouring_chunk_coefficient: double;
  other_base_coefficient: double;
  settler_group_max_size: uint32;
  settler_group_min_size: uint32;
};
export type Energy = string;
export type EnergySource =
  | ElectricEnergySource
  | BurnerEnergySource
  | HeatEnergySource
  | FluidEnergySource
  | VoidEnergySource;
export type EntityID = string;
export type EntityPrototypeFlags = (
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
export type EntityRendererSearchBoxLimits = {
  bottom: uint8;
  left: uint8;
  right: uint8;
  top: uint8;
};
export type EntityTransferTipTrigger = {
  count?: uint32;
  transfer?: 'in' | 'out';
  type: 'entity-transfer';
};
export type EquipmentCategoryID = string;
export type EquipmentGridID = string;
export type EquipmentID = string;
export type EquipmentShape = {
  height: uint32;
  points?: uint32[][];
  type: 'full' | 'manual';
  width: uint32;
};
export type ExplosionDefinition =
  | EntityID
  | { name: EntityID; offset?: Vector };
export type FactorioBasisNoiseArguments = {
  input_scale?: ConstantNoiseNumber;
  output_scale?: ConstantNoiseNumber;
  seed0: ConstantNoiseNumber;
  seed1: ConstantNoiseNumber;
  x: NoiseNumber;
  y: NoiseNumber;
};
export type FactorioMultioctaveNoiseArguments = {
  input_scale?: ConstantNoiseNumber;
  octaves: ConstantNoiseNumber;
  output_scale?: ConstantNoiseNumber;
  persistence: ConstantNoiseNumber;
  seed0: ConstantNoiseNumber;
  seed1: ConstantNoiseNumber;
  x: NoiseNumber;
  y: NoiseNumber;
};
export type FactorioQuickMultioctaveNoiseArguments = {
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
export type FastBeltBendTipTrigger = { count?: uint32; type: 'fast-belt-bend' };
export type FastReplaceTipTrigger = {
  count?: uint32;
  match_type_only?: bool;
  source?: EntityID;
  target?: EntityID;
  type: 'fast-replace';
};
export type FileName = string;
export type FlameThrowerExplosionTriggerDelivery = {
  direction_deviation?: double;
  explosion: EntityID;
  projectile_starting_speed?: double;
  speed_deviation?: double;
  starting_distance: double;
  starting_frame_fraciton_deviation?: double;
  type: 'flame-thrower';
};
export type FlowStyleSpecification = {
  horizontal_spacing?: int32;
  max_on_row?: int32;
  type: 'flow_style';
  vertical_spacing?: int32;
};
export type FluidBox = {
  base_area?: double;
  base_level?: float;
  filter?: FluidID;
  height?: double;
  hide_connection_info?: bool;
  maximum_temperature?: double;
  minimum_temperature?: double;
  pipe_connections: PipeConnectionDefinition[];
  pipe_covers?: Sprite4Way;
  pipe_picture?: Sprite4Way;
  production_type?: ProductionType;
  render_layer?: RenderLayer;
  secondary_draw_order?: int8;
  secondary_draw_orders?: FluidBoxSecondaryDrawOrders;
};
export type FluidBoxSecondaryDrawOrders = {
  east?: int8;
  north?: int8;
  south?: int8;
  west?: int8;
};
export type FluidEnergySource = {
  burns_fluid?: bool;
  destroy_non_fuel_fluid?: bool;
  effectivity?: double;
  fluid_box: FluidBox;
  fluid_usage_per_tick?: double;
  light_flicker?: LightFlickeringDefinition;
  maximum_temperature?: double;
  scale_fluid_usage?: bool;
  smoke?: SmokeSource[];
  type: 'fluid';
};
export type FluidID = string;
export type FluidIngredientPrototype = {
  amount: double;
  catalyst_amount?: double;
  fluidbox_index?: uint32;
  maximum_temperature?: double;
  minimum_temperature?: double;
  name: FluidID;
  temperature?: double;
  type: 'fluid';
};
export type FluidProductPrototype = {
  amount?: double;
  amount_max?: MaterialAmountType;
  amount_min?: MaterialAmountType;
  catalyst_amount?: double;
  fluidbox_index?: uint32;
  name: FluidID;
  probability?: double;
  show_details_in_recipe_tooltip?: bool;
  temperature?: double;
  type: 'fluid';
};
export type FluidWagonConnectorGraphics = {
  load_animations: PumpConnectorGraphics;
  unload_animations: PumpConnectorGraphics;
};
export type FollowerRobotLifetimeModifier = {
  infer_icon?: bool;
  type: 'follower-robot-lifetime';
  use_icon_overlay_constant?: bool;
};
export type FootprintParticle = {
  particle_name?: ParticleID;
  tiles: TileID[];
  use_as_default?: bool;
};
export type FootstepTriggerEffectItem = {
  actions?: CreateParticleTriggerEffectItem[];
  tiles: TileID[];
  use_as_default?: bool;
};
export type FootstepTriggerEffectList = FootstepTriggerEffectItem[];
export type ForceCondition =
  | 'all'
  | 'enemy'
  | 'ally'
  | 'friend'
  | 'not-friend'
  | 'same'
  | 'not-same';
export type FrameStyleSpecification = {
  background_graphical_set?: ElementImageSet;
  border?: BorderImageSet;
  drag_by_title?: bool;
  graphical_set?: ElementImageSet;
  header_background?: ElementImageSet;
  header_filler_style?: EmptyWidgetStyleSpecification;
  header_flow_style?: HorizontalFlowStyleSpecification;
  horizontal_flow_style?: HorizontalFlowStyleSpecification;
  title_style?: LabelStyleSpecification;
  type: 'frame_style';
  use_header_filler?: bool;
  vertical_flow_style?: VerticalFlowStyleSpecification;
};
export type FrequencySizeRichness = {
  frequency?: MapGenSize;
  richness?: MapGenSize;
  size?: MapGenSize;
};
export type FuelCategoryID = string;
export type GameControllerVibrationData = {
  duration?: uint32;
  high_frequency_vibration_intensity?: float;
  low_frequency_vibration_intensity?: float;
  play_for?: PlayFor;
};
export type GateOverRailBuildTipTrigger = {
  count?: uint32;
  type: 'gate-over-rail-build';
};
export type GhostTimeToLiveModifier = {
  type: 'ghost-time-to-live';
  use_icon_overlay_constant?: bool;
};
export type GiveItemModifier = {
  count?: ItemCountType;
  item: ItemID;
  type: 'give-item';
  use_icon_overlay_constant?: bool;
};
export type GlowStyleSpecification = {
  image_set?: ElementImageSet;
  type: 'glow_style';
};
export type GraphStyleSpecification = {
  background_color?: Color;
  data_line_highlight_distance?: uint32;
  graph_right_margin?: uint32;
  graph_top_margin?: uint32;
  grid_lines_color?: Color;
  guide_lines_color?: Color;
  horizontal_label_style?: LabelStyleSpecification;
  horizontal_labels_margin?: uint32;
  line_colors?: Color[];
  minimal_horizontal_label_spacing?: uint32;
  minimal_vertical_label_spacing?: uint32;
  selection_dot_radius?: uint32;
  type: 'graph_style';
  vertical_label_style?: LabelStyleSpecification;
  vertical_labels_margin?: uint32;
};
export type GroupAttackTipTrigger = { count?: uint32; type: 'group-attack' };
export type GunShift4Way = {
  east?: Vector;
  north: Vector;
  south?: Vector;
  west?: Vector;
};
export type GunSpeedModifier = {
  ammo_category: AmmoCategoryID;
  infer_icon?: bool;
  modifier: double;
  type: 'gun-speed';
  use_icon_overlay_constant?: bool;
};
export type HeatBuffer = {
  connections?: HeatConnection[];
  default_temperature?: double;
  heat_glow?: Sprite4Way;
  heat_picture?: Sprite4Way;
  heat_pipe_covers?: Sprite4Way;
  max_temperature: double;
  max_transfer: Energy;
  min_temperature_gradient?: double;
  min_working_temperature?: double;
  minimum_glow_temperature?: float;
  pipe_covers?: Sprite4Way;
  specific_heat: Energy;
};
export type HeatConnection = { direction: Direction; position: MapPosition };
export type HeatEnergySource = {
  connections?: HeatConnection[];
  default_temperature?: double;
  emissions_per_minute?: double;
  heat_glow?: Sprite4Way;
  heat_picture?: Sprite4Way;
  heat_pipe_covers?: Sprite4Way;
  max_temperature: double;
  max_transfer: Energy;
  min_temperature_gradient?: double;
  min_working_temperature?: double;
  minimum_glow_temperature?: float;
  pipe_covers?: Sprite4Way;
  specific_heat: Energy;
  type: 'heat';
};
export type HorizontalAlign = 'left' | 'center' | 'right';
export type HorizontalFlowStyleSpecification = {
  horizontal_spacing?: int32;
  type: 'horizontal_flow_style';
};
export type HorizontalScrollBarStyleSpecification = {
  type: 'horizontal_scrollbar_style';
};
export type IconData = {
  icon: FileName;
  icon_mipmaps?: IconMipMapType;
  icon_size?: SpriteSizeType;
  scale?: double;
  shift?: Vector;
  tint?: Color;
};
export type IconMipMapType = uint8;
export type ImageStyleSpecification = {
  graphical_set?: ElementImageSet;
  stretch_image_to_widget_size?: bool;
  type: 'image_style';
};
export type IngredientPrototype =
  | ItemIngredientPrototype
  | FluidIngredientPrototype;
export type InsertItemTriggerEffectItem = {
  count?: uint32;
  item: ItemID;
  type: 'insert-item';
};
export type InserterStackSizeBonusModifier = {
  infer_icon?: bool;
  type: 'inserter-stack-size-bonus';
  use_icon_overlay_constant?: bool;
};
export type InstantTriggerDelivery = { type: 'instant' };
export type InterruptibleSound = { fade_ticks?: uint32; sound: Sound };
export type InvokeTileEffectTriggerEffectItem = {
  tile_collision_mask?: CollisionMask;
  type: 'invoke-tile-trigger';
};
export type ItemCountType = uint32;
export type ItemGroupID = string;
export type ItemID = string;
export type ItemIngredientPrototype =
  | { amount: uint16; catalyst_amount?: uint16; name: ItemID; type?: 'item' }
  | [ItemID, uint16];
export type ItemProductPrototype =
  | {
      amount?: uint16;
      amount_max?: uint16;
      amount_min?: uint16;
      catalyst_amount?: uint16;
      name: ItemID;
      probability?: double;
      show_details_in_recipe_tooltip?: bool;
      type?: 'item';
    }
  | [ItemID, uint16];
export type ItemPrototypeFlags = (
  | 'draw-logistic-overlay'
  | 'hidden'
  | 'always-show'
  | 'hide-from-bonus-gui'
  | 'hide-from-fuel-tooltip'
  | 'not-stackable'
  | 'can-extend-inventory'
  | 'primary-place-result'
  | 'mod-openable'
  | 'only-in-cursor'
  | 'spawnable'
)[];
export type ItemStackIndex = uint16;
export type ItemSubGroupID = string;
export type ItemToPlace = { count: uint32; item: ItemID };
export type LabelStyleSpecification = {
  clicked_font_color?: Color;
  disabled_font_color?: Color;
  font?: string;
  font_color?: Color;
  game_controller_hovered_font_color?: Color;
  hovered_font_color?: Color;
  rich_text_highlight_error_color?: Color;
  rich_text_highlight_ok_color?: Color;
  rich_text_highlight_warning_color?: Color;
  rich_text_setting?: RichTextSetting;
  single_line?: bool;
  type: 'label_style';
  underlined?: bool;
};
export type LaboratoryProductivityModifier = {
  infer_icon?: bool;
  type: 'laboratory-productivity';
  use_icon_overlay_constant?: bool;
};
export type LaboratorySpeedModifier = {
  infer_icon?: bool;
  type: 'laboratory-speed';
  use_icon_overlay_constant?: bool;
};
export type LayeredSound = { layers: Sound[] } | Sound;
export type LightDefinition =
  | {
      add_perspective?: bool;
      color?: Color;
      intensity: float;
      minimum_darkness?: float;
      picture?: Sprite;
      rotation_shift?: RealOrientation;
      shift?: Vector;
      size: float;
      source_orientation_offset?: RealOrientation;
      type?: 'basic' | 'oriented';
    }
  | {
      add_perspective?: bool;
      color?: Color;
      intensity: float;
      minimum_darkness?: float;
      picture?: Sprite;
      rotation_shift?: RealOrientation;
      shift?: Vector;
      size: float;
      source_orientation_offset?: RealOrientation;
      type?: 'basic' | 'oriented';
    }[];
export type LightFlickeringDefinition = {
  border_fix_speed?: float;
  color?: Color;
  derivation_change_deviation?: float;
  derivation_change_frequency?: float;
  light_intensity_to_size_coefficient?: float;
  maximum_intensity?: float;
  minimum_intensity?: float;
  minimum_light_size?: float;
};
export type LimitChestTipTrigger = { count?: uint32; type: 'limit-chest' };
export type LineStyleSpecification = {
  border?: BorderImageSet;
  type: 'line_style';
};
export type LineTriggerItem = {
  range: double;
  range_effects?: TriggerEffect;
  type: 'line';
  width: double;
};
export type LinkedBeltStructure = {
  back_patch?: Sprite4Way;
  direction_in: Sprite4Way;
  direction_in_side_loading?: Sprite4Way;
  direction_out: Sprite4Way;
  direction_out_side_loading?: Sprite4Way;
  front_patch?: Sprite4Way;
};
export type LinkedGameControl =
  | 'action-bar-select-page-1'
  | 'action-bar-select-page-10'
  | 'action-bar-select-page-2'
  | 'action-bar-select-page-3'
  | 'action-bar-select-page-4'
  | 'action-bar-select-page-5'
  | 'action-bar-select-page-6'
  | 'action-bar-select-page-7'
  | 'action-bar-select-page-8'
  | 'action-bar-select-page-9'
  | 'activate-tooltip'
  | 'add-station'
  | 'add-temporary-station'
  | 'alt-zoom-in'
  | 'alt-zoom-out'
  | 'build'
  | 'build-ghost'
  | 'build-with-obstacle-avoidance'
  | 'cancel-craft'
  | 'cancel-craft-5'
  | 'cancel-craft-all'
  | 'clear-cursor'
  | 'confirm-gui'
  | 'confirm-message'
  | 'connect-train'
  | 'controller-gui-crafting-tab'
  | 'controller-gui-logistics-tab'
  | 'copy'
  | 'copy-entity-settings'
  | 'craft'
  | 'craft-5'
  | 'craft-all'
  | 'cursor-split'
  | 'cut'
  | 'cycle-blueprint-backwards'
  | 'cycle-blueprint-forwards'
  | 'cycle-clipboard-backwards'
  | 'cycle-clipboard-forwards'
  | 'debug-reset-zoom'
  | 'debug-reset-zoom-2x'
  | 'debug-toggle-atlas-gui'
  | 'debug-toggle-basic'
  | 'debug-toggle-debug-settings'
  | 'decrease-ui-scale'
  | 'disconnect-train'
  | 'drag-map'
  | 'drop-cursor'
  | 'editor-clone-item'
  | 'editor-delete-item'
  | 'editor-next-variation'
  | 'editor-previous-variation'
  | 'editor-remove-scripting-object'
  | 'editor-reset-speed'
  | 'editor-set-clone-brush-destination'
  | 'editor-set-clone-brush-source'
  | 'editor-speed-down'
  | 'editor-speed-up'
  | 'editor-switch-to-surface'
  | 'editor-tick-once'
  | 'editor-toggle-pause'
  | 'fast-entity-split'
  | 'fast-entity-transfer'
  | 'flip-blueprint-horizontal'
  | 'flip-blueprint-vertical'
  | 'focus-search'
  | 'increase-ui-scale'
  | 'inventory-split'
  | 'inventory-transfer'
  | 'larger-terrain-building-area'
  | 'logistic-networks'
  | 'mine'
  | 'move-down'
  | 'move-left'
  | 'move-right'
  | 'move-up'
  | 'next-active-quick-bar'
  | 'next-player-in-replay'
  | 'next-weapon'
  | 'open-character-gui'
  | 'open-gui'
  | 'open-item'
  | 'open-prototype-explorer-gui'
  | 'open-prototypes-gui'
  | 'open-technology-gui'
  | 'open-trains-gui'
  | 'order-to-follow'
  | 'paste'
  | 'paste-entity-settings'
  | 'pause-game'
  | 'pick-item'
  | 'pick-items'
  | 'place-in-chat'
  | 'place-ping'
  | 'previous-active-quick-bar'
  | 'previous-mod'
  | 'previous-technology'
  | 'production-statistics'
  | 'quick-bar-button-1'
  | 'quick-bar-button-1-secondary'
  | 'quick-bar-button-10'
  | 'quick-bar-button-10-secondary'
  | 'quick-bar-button-2'
  | 'quick-bar-button-2-secondary'
  | 'quick-bar-button-3'
  | 'quick-bar-button-3-secondary'
  | 'quick-bar-button-4'
  | 'quick-bar-button-4-secondary'
  | 'quick-bar-button-5'
  | 'quick-bar-button-5-secondary'
  | 'quick-bar-button-6'
  | 'quick-bar-button-6-secondary'
  | 'quick-bar-button-7'
  | 'quick-bar-button-7-secondary'
  | 'quick-bar-button-8'
  | 'quick-bar-button-8-secondary'
  | 'quick-bar-button-9'
  | 'quick-bar-button-9-secondary'
  | 'remove-pole-cables'
  | 'reset-ui-scale'
  | 'reverse-rotate'
  | 'reverse-select'
  | 'alt-reverse-select'
  | 'rotate'
  | 'rotate-active-quick-bars'
  | 'select-for-blueprint'
  | 'select-for-cancel-deconstruct'
  | 'shoot-enemy'
  | 'shoot-selected'
  | 'show-info'
  | 'smaller-terrain-building-area'
  | 'smart-pipette'
  | 'stack-split'
  | 'stack-transfer'
  | 'toggle-blueprint-library'
  | 'toggle-console'
  | 'toggle-driving'
  | 'toggle-filter'
  | 'toggle-gui-debug'
  | 'toggle-gui-glows'
  | 'toggle-gui-shadows'
  | 'toggle-gui-style-view'
  | 'toggle-map'
  | 'toggle-menu'
  | 'undo'
  | 'zoom-in'
  | 'zoom-out';
export type ListBoxStyleSpecification = {
  item_style?: ButtonStyleSpecification;
  scroll_pane_style?: ScrollPaneStyleSpecification;
  type: 'list_box_style';
};
export type LoaderStructure = {
  back_patch?: Sprite4Way;
  direction_in: Sprite4Way;
  direction_out: Sprite4Way;
  front_patch?: Sprite4Way;
};
export type LocalisedString = string | double | bool | LocalisedString[];
export type LootItem = {
  count_max?: double;
  count_min?: double;
  item: ItemID;
  probability?: double;
};
export type LowPowerTipTrigger = { count?: uint32; type: 'low-power' };
export type ManualTransferTipTrigger = {
  count?: uint32;
  type: 'manual-transfer';
};
export type ManualWireDragTipTrigger = {
  count?: uint32;
  type: 'manual-wire-drag';
};
export type MapEditorConstants = {
  cliff_editor_remove_cliffs_color: Color;
  clone_editor_brush_cursor_preview_tint: Color;
  clone_editor_brush_destination_color: Color;
  clone_editor_brush_source_color: Color;
  clone_editor_brush_world_preview_tint: Color;
  clone_editor_copy_destination_allowed_color: Color;
  clone_editor_copy_destination_not_allowed_color: Color;
  clone_editor_copy_source_color: Color;
  decorative_editor_selection_preview_radius: uint8;
  decorative_editor_selection_preview_tint: Color;
  force_editor_select_area_color: Color;
  script_editor_drag_area_color: Color;
  script_editor_select_area_color: Color;
  tile_editor_area_selection_color: Color;
  tile_editor_selection_preview_radius: uint8;
  tile_editor_selection_preview_tint: Color;
};
export type MapGenPreset = {
  advanced_settings?: AdvancedMapGenSettings;
  basic_settings?: MapGenSettings;
  default?: bool;
  order: Order;
};
export type MapGenPresetDifficultySettings = {
  recipe_difficulty?: uint8;
  research_queue_setting?: 'always' | 'after-victory' | 'never';
  technology_difficulty?: uint8;
  technology_price_multiplier?: double;
};
export type MapGenPresetEnemyEvolutionSettings = {
  destroy_factor?: double;
  enabled?: bool;
  pollution_factor?: double;
  time_factor?: double;
};
export type MapGenPresetEnemyExpansionSettings = {
  enabled?: bool;
  max_expansion_cooldown?: uint32;
  max_expansion_distance?: uint32;
  min_expansion_cooldown?: uint32;
  settler_group_max_size?: uint32;
  settler_group_min_size?: uint32;
};
export type MapGenPresetPollutionSettings = {
  ageing?: double;
  diffusion_ratio?: double;
  enabled?: bool;
  enemy_attack_pollution_consumption_modifier?: double;
  min_pollution_to_damage_trees?: double;
  pollution_restored_per_tree_damage?: double;
};
export type MapGenSettings = {
  autoplace_controls?: Record<AutoplaceControlID, FrequencySizeRichness>;
  autoplace_settings?: Record<
    'entity' | 'tile' | 'decorative',
    AutoplaceSettings
  >;
  cliff_settings?: CliffPlacementSettings;
  default_enable_all_autoplace_controls?: bool;
  height?: uint32;
  peaceful_mode?: bool;
  property_expression_names?: Record<string, string | bool | double>;
  seed?: uint32;
  starting_area?: MapGenSize;
  starting_points?: MapPosition[];
  terrain_segmentation?: MapGenSize;
  water?: MapGenSize;
  width?: uint32;
};
export type MapGenSize =
  | float
  | 'none'
  | 'very-low'
  | 'very-small'
  | 'very-poor'
  | 'low'
  | 'small'
  | 'poor'
  | 'normal'
  | 'medium'
  | 'regular'
  | 'high'
  | 'big'
  | 'good'
  | 'very-high'
  | 'very-big'
  | 'very-good';
export type MapPosition = { x: double; y: double } | [double, double];
export type MaterialAmountType = double;
export type MaxFailedAttemptsPerTickPerConstructionQueueModifier = {
  type: 'max-failed-attempts-per-tick-per-construction-queue';
  use_icon_overlay_constant?: bool;
};
export type MaxSuccessfulAttemptsPerTickPerConstructionQueueModifier = {
  type: 'max-successful-attempts-per-tick-per-construction-queue';
  use_icon_overlay_constant?: bool;
};
export type MaximumFollowingRobotsCountModifier = {
  infer_icon?: bool;
  type: 'maximum-following-robots-count';
  use_icon_overlay_constant?: bool;
};
export type MinableProperties = {
  count?: uint16;
  fluid_amount?: double;
  mining_particle?: ParticleID;
  mining_time: double;
  mining_trigger?: Trigger;
  required_fluid?: FluidID;
  result?: ItemID;
  results?: ProductPrototype[];
};
export type MinimapStyleSpecification = { type: 'minimap_style' };
export type MiningDrillGraphicsSet = {
  always_draw_idle_animation?: bool;
  animation?: Animation4Way;
  animation_progress?: float;
  circuit_connector_layer?: RenderLayer | CircuitConnectorLayer;
  circuit_connector_secondary_draw_order?:
    | int8
    | CircuitConnectorSecondaryDrawOrder;
  default_recipe_tint?: DefaultRecipeTint;
  drilling_vertical_movement_duration?: uint16;
  idle_animation?: Animation4Way;
  max_animation_progress?: float;
  min_animation_progress?: float;
  shift_animation_transition_duration?: uint16;
  shift_animation_waypoint_stop_duration?: uint16;
  shift_animation_waypoints?: ShiftAnimationWaypoints;
  status_colors?: StatusColors;
  working_visualisations?: WorkingVisualisation[];
};
export type MiningDrillProductivityBonusModifier = {
  infer_icon?: bool;
  type: 'mining-drill-productivity-bonus';
  use_icon_overlay_constant?: bool;
};
export type ModSetting = { value: int32 | double | bool | string | Color };
export type Modifier =
  | InserterStackSizeBonusModifier
  | StackInserterCapacityBonusModifier
  | LaboratorySpeedModifier
  | LaboratoryProductivityModifier
  | MaximumFollowingRobotsCountModifier
  | WorkerRobotSpeedModifier
  | WorkerRobotStorageModifier
  | WorkerRobotBatteryModifier
  | FollowerRobotLifetimeModifier
  | GhostTimeToLiveModifier
  | DeconstructionTimeToLiveModifier
  | TurretAttackModifier
  | AmmoDamageModifier
  | ArtilleryRangeModifier
  | GiveItemModifier
  | GunSpeedModifier
  | UnlockRecipeModifier
  | CharacterCraftingSpeedModifier
  | CharacterMiningSpeedModifier
  | CharacterRunningSpeedModifier
  | CharacterBuildDistanceModifier
  | CharacterItemDropDistanceModifier
  | CharacterReachDistanceModifier
  | CharacterResourceReachDistanceModifier
  | CharacterItemPickupDistanceModifier
  | CharacterLootPickupDistanceModifier
  | CharacterInventorySlotsBonusModifier
  | CharacterHealthBonusModifier
  | CharacterLogisticRequestsModifier
  | CharacterLogisticTrashSlotsModifier
  | MaxFailedAttemptsPerTickPerConstructionQueueModifier
  | MaxSuccessfulAttemptsPerTickPerConstructionQueueModifier
  | MiningDrillProductivityBonusModifier
  | TrainBrakingForceBonusModifier
  | ZoomToWorldEnabledModifier
  | ZoomToWorldGhostBuildingEnabledModifier
  | ZoomToWorldBlueprintEnabledModifier
  | ZoomToWorldDeconstructionPlannerEnabledModifier
  | ZoomToWorldUpgradePlannerEnabledModifier
  | ZoomToWorldSelectionToolEnabledModifier
  | NothingModifier;
export type Mods = Record<string, string>;
export type ModuleCategoryID = string;
export type ModuleSpecification = {
  module_info_icon_scale?: float;
  module_info_icon_shift?: Vector;
  module_info_max_icon_rows?: uint8;
  module_info_max_icons_per_row?: uint8;
  module_info_multi_row_initial_height_modifier?: float;
  module_info_separation_multiplier?: float;
  module_slots?: ItemStackIndex;
};
export type ModuleTint =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'none';
export type MouseCursorID = string;
export type NestedTriggerEffectItem = {
  action: Trigger;
  type: 'nested-result';
};
export type NoiseArray =
  | NoiseVariable
  | NoiseArrayConstruction
  | NoiseFunctionOffsetPoints;
export type NoiseArrayConstruction = {
  type: 'array-construction';
  value_expressions: NoiseExpression[];
};
export type NoiseExpression =
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
export type NoiseFunctionAbsoluteValue = {
  arguments: [NoiseNumber];
  function_name: 'absolute-value';
  type: 'function-application';
};
export type NoiseFunctionAdd = {
  arguments: NoiseNumber[];
  function_name: 'add';
  type: 'function-application';
};
export type NoiseFunctionApplication =
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
export type NoiseFunctionAtan2 = {
  arguments: [NoiseNumber, NoiseNumber];
  function_name: 'atan2';
  type: 'function-application';
};
export type NoiseFunctionAutoplaceProbability = {
  arguments: [NoiseLiteralObject];
  function_name: 'autoplace-probability';
  type: 'function-application';
};
export type NoiseFunctionAutoplaceRichness = {
  arguments: [NoiseLiteralObject];
  function_name: 'autoplace-richness';
  type: 'function-application';
};
export type NoiseFunctionBitwiseAnd = {
  arguments: NoiseNumber[];
  function_name: 'bitwise-and';
  type: 'function-application';
};
export type NoiseFunctionBitwiseNot = {
  arguments: [NoiseNumber];
  function_name: 'bitwise-not';
  type: 'function-application';
};
export type NoiseFunctionBitwiseOr = {
  arguments: NoiseNumber[];
  function_name: 'bitwise-or';
  type: 'function-application';
};
export type NoiseFunctionBitwiseXor = {
  arguments: NoiseNumber[];
  function_name: 'bitwise-xor';
  type: 'function-application';
};
export type NoiseFunctionCeil = {
  arguments: [NoiseNumber];
  function_name: 'ceil';
  type: 'function-application';
};
export type NoiseFunctionClamp = {
  arguments: [NoiseNumber, NoiseNumber, NoiseNumber];
  function_name: 'clamp';
  type: 'function-application';
};
export type NoiseFunctionCompileTimeLog = {
  arguments: NoiseExpression[];
  function_name: 'compile-time-log';
  type: 'function-application';
};
export type NoiseFunctionCos = {
  arguments: [NoiseNumber];
  function_name: 'cos';
  type: 'function-application';
};
export type NoiseFunctionDistanceFromNearestPoint = {
  arguments: DistanceFromNearestPointArguments;
  function_name: 'distance-from-nearest-point';
  type: 'function-application';
};
export type NoiseFunctionDivide = {
  arguments: [NoiseNumber, NoiseNumber];
  function_name: 'divide';
  type: 'function-application';
};
export type NoiseFunctionEquals = {
  arguments: [NoiseNumber, NoiseNumber];
  function_name: 'equals';
  type: 'function-application';
};
export type NoiseFunctionExponentiate = {
  arguments: [NoiseNumber, NoiseNumber];
  function_name: 'exponentiate';
  type: 'function-application';
};
export type NoiseFunctionFactorioBasisNoise = {
  arguments: FactorioBasisNoiseArguments;
  function_name: 'factorio-basis-noise';
  type: 'function-application';
};
export type NoiseFunctionFactorioMultioctaveNoise = {
  arguments: FactorioMultioctaveNoiseArguments;
  function_name: 'factorio-multioctave-noise';
  type: 'function-application';
};
export type NoiseFunctionFactorioQuickMultioctaveNoise = {
  arguments: FactorioQuickMultioctaveNoiseArguments;
  function_name: 'factorio-quick-multioctave-noise';
  type: 'function-application';
};
export type NoiseFunctionFloor = {
  arguments: [NoiseNumber];
  function_name: 'floor';
  type: 'function-application';
};
export type NoiseFunctionLessOrEqual = {
  arguments: [NoiseNumber, NoiseNumber];
  function_name: 'less-or-equal';
  type: 'function-application';
};
export type NoiseFunctionLessThan = {
  arguments: [NoiseNumber, NoiseNumber];
  function_name: 'less-than';
  type: 'function-application';
};
export type NoiseFunctionLog2 = {
  arguments: [NoiseNumber];
  function_name: 'log2';
  type: 'function-application';
};
export type NoiseFunctionModulo = {
  arguments: [NoiseNumber, NoiseNumber];
  function_name: 'modulo';
  type: 'function-application';
};
export type NoiseFunctionMultiply = {
  arguments: NoiseNumber[];
  function_name: 'multiply';
  type: 'function-application';
};
export type NoiseFunctionNoiseLayerNameToID = {
  arguments: [NoiseLiteralString];
  function_name: 'noise-layer-name-to-id';
  type: 'function-application';
};
export type NoiseFunctionOffsetPoints = {
  arguments: [NoiseArray, NoiseArray];
  function_name: 'offset-points';
  type: 'function-application';
};
export type NoiseFunctionRandomPenalty = {
  arguments: RandomPenaltyArguments;
  function_name: 'random-penalty';
  type: 'function-application';
};
export type NoiseFunctionRidge = {
  arguments: [NoiseNumber, NoiseNumber, NoiseNumber];
  function_name: 'ridge';
  type: 'function-application';
};
export type NoiseFunctionSin = {
  arguments: [NoiseNumber];
  function_name: 'sin';
  type: 'function-application';
};
export type NoiseFunctionSpotNoise = {
  arguments: SpotNoiseArguments;
  function_name: 'spot-noise';
  type: 'function-application';
};
export type NoiseFunctionSubtract = {
  arguments: [NoiseNumber, NoiseNumber];
  function_name: 'subtract';
  type: 'function-application';
};
export type NoiseFunctionTerrace = {
  arguments: [
    NoiseNumber,
    ConstantNoiseNumber,
    ConstantNoiseNumber,
    NoiseNumber,
  ];
  function_name: 'terrace';
  type: 'function-application';
};
export type NoiseIfElseChain = {
  arguments: NoiseExpression[];
  type: 'if-else-chain';
};
export type NoiseLayerID = string;
export type NoiseLiteralBoolean = {
  literal_value: bool;
  type: 'literal-boolean';
};
export type NoiseLiteralExpression = {
  literal_value: NoiseExpression;
  type: 'literal-expression';
};
export type NoiseLiteralNumber = {
  literal_value: float;
  type: 'literal-number';
};
export type NoiseLiteralObject = {
  literal_value: AutoplaceSpecification;
  type: 'literal-object';
};
export type NoiseLiteralString = {
  literal_value: string;
  type: 'literal-string';
};
export type NoiseNumber =
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
export type NoiseProcedureDelimiter = {
  expression: NoiseExpression;
  type: 'procedure-delimiter';
};
export type NoiseVariable = {
  type: 'variable';
  variable_name:
    | 'x'
    | 'y'
    | NoiseVariableConstants
    | BaseNamedNoiseExpressions
    | string;
};
export type NoiseVariableConstants =
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
export type NothingModifier = {
  effect_description?: LocalisedString;
  type: 'nothing';
  use_icon_overlay_constant?: bool;
};
export type OffshorePumpGraphicsSet = {
  animation: Animation4Way;
  base_pictures?: Sprite4Way;
  base_render_layer?: RenderLayer;
  fluid_animation?: Animation4Way;
  glass_pictures?: Sprite4Way;
  underwater_layer_offset?: int8;
  underwater_pictures?: Sprite4Way;
};
export type OrTipTrigger = { triggers: TipTrigger[]; type: 'or' };
export type Order = string;
export type OrientedCliffPrototype = {
  collision_bounding_box: BoundingBox;
  fill_volume: uint32;
  pictures: SpriteVariations;
};
export type OrientedCliffPrototypeSet = {
  east_to_none: OrientedCliffPrototype;
  east_to_north: OrientedCliffPrototype;
  east_to_south: OrientedCliffPrototype;
  east_to_west: OrientedCliffPrototype;
  none_to_east: OrientedCliffPrototype;
  none_to_north: OrientedCliffPrototype;
  none_to_south: OrientedCliffPrototype;
  none_to_west: OrientedCliffPrototype;
  north_to_east: OrientedCliffPrototype;
  north_to_none: OrientedCliffPrototype;
  north_to_south: OrientedCliffPrototype;
  north_to_west: OrientedCliffPrototype;
  south_to_east: OrientedCliffPrototype;
  south_to_none: OrientedCliffPrototype;
  south_to_north: OrientedCliffPrototype;
  south_to_west: OrientedCliffPrototype;
  west_to_east: OrientedCliffPrototype;
  west_to_none: OrientedCliffPrototype;
  west_to_north: OrientedCliffPrototype;
  west_to_south: OrientedCliffPrototype;
};
export type OtherColors = {
  bar?: ElementImageSet;
  color?: Color;
  less_than: double;
};
export type ParticleID = string;
export type PasteEntitySettingsTipTrigger = {
  count?: uint32;
  match_type_only?: bool;
  source?: EntityID;
  target?: EntityID;
  type: 'paste-entity-settings';
};
export type PathFinderSettings = {
  cache_accept_path_end_distance_ratio: double;
  cache_accept_path_start_distance_ratio: double;
  cache_max_connect_to_cache_steps_multiplier: uint32;
  cache_path_end_distance_rating_multiplier: double;
  cache_path_start_distance_rating_multiplier: double;
  direct_distance_to_consider_short_request: uint32;
  enemy_with_different_destination_collision_penalty: double;
  extended_collision_penalty: double;
  fwd2bwd_ratio: uint32;
  general_entity_collision_penalty: double;
  general_entity_subsequent_collision_penalty: double;
  goal_pressure_ratio: double;
  ignore_moving_enemy_collision_distance: double;
  long_cache_min_cacheable_distance: double;
  long_cache_size: uint32;
  max_clients_to_accept_any_new_request: uint32;
  max_clients_to_accept_short_new_request: uint32;
  max_steps_worked_per_tick: double;
  max_work_done_per_tick: uint32;
  min_steps_to_check_path_find_termination: uint32;
  negative_cache_accept_path_end_distance_ratio: double;
  negative_cache_accept_path_start_distance_ratio: double;
  overload_levels: uint32[];
  overload_multipliers: double[];
  short_cache_min_algo_steps_to_cache: uint32;
  short_cache_min_cacheable_distance: double;
  short_cache_size: uint32;
  short_request_max_steps: uint32;
  short_request_ratio: double;
  stale_enemy_with_same_destination_collision_penalty: double;
  start_to_goal_cost_multiplier_to_terminate_path_find: double;
  use_path_cache: bool;
};
export type PipeConnectionDefinition = {
  max_underground_distance?: uint32;
  position?: Vector;
  positions?: Vector[];
  type?: 'input' | 'input-output' | 'output';
};
export type PipePictures = {
  corner_down_left: Sprite;
  corner_down_right: Sprite;
  corner_up_left: Sprite;
  corner_up_right: Sprite;
  cross: Sprite;
  ending_down: Sprite;
  ending_left: Sprite;
  ending_right: Sprite;
  ending_up: Sprite;
  fluid_background: Sprite;
  gas_flow: Animation;
  high_temperature_flow: Sprite;
  horizontal_window_background: Sprite;
  low_temperature_flow: Sprite;
  middle_temperature_flow: Sprite;
  straight_horizontal: Sprite;
  straight_horizontal_window: Sprite;
  straight_vertical: Sprite;
  straight_vertical_single: Sprite;
  straight_vertical_window: Sprite;
  t_down: Sprite;
  t_left: Sprite;
  t_right: Sprite;
  t_up: Sprite;
  vertical_window_background: Sprite;
};
export type PipeToGroundPictures = {
  down: Sprite;
  left: Sprite;
  right: Sprite;
  up: Sprite;
};
export type PlaceAsTile = {
  condition: CollisionMask;
  condition_size: int32;
  result: TileID;
};
export type PlaceEquipmentTipTrigger = {
  count?: uint32;
  equipment?: EquipmentID;
  type: 'place-equipment';
};
export type PlayFor = 'character_actions' | 'everything';
export type PlaySoundTriggerEffectItem = {
  audible_distance_modifier?: float;
  max_distance?: float;
  min_distance?: float;
  play_on_target_position?: bool;
  sound: Sound;
  type: 'play-sound';
  volume_modifier?: float;
};
export type PlayerColorData = {
  chat_color: Color;
  name: string;
  player_color: Color;
};
export type PlayerInputMethodFilter =
  | 'all'
  | 'keyboard_and_mouse'
  | 'game_controller';
export type PollutionSettings = {
  ageing: double;
  diffusion_ratio: double;
  enabled: bool;
  enemy_attack_pollution_consumption_modifier: double;
  expected_max_per_chunk: double;
  max_pollution_to_restore_trees: double;
  min_pollution_to_damage_trees: double;
  min_to_diffuse: double;
  min_to_show_per_chunk: double;
  pollution_per_tree_damage: double;
  pollution_restored_per_tree_damage: double;
  pollution_with_max_forest_damage: double;
};
export type ProductPrototype = ItemProductPrototype | FluidProductPrototype;
export type ProductionType =
  | 'None'
  | 'none'
  | 'input'
  | 'input-output'
  | 'output';
export type ProgrammableSpeakerInstrument = {
  name: string;
  notes: ProgrammableSpeakerNote[];
};
export type ProgrammableSpeakerNote = { name: string; sound: Sound };
export type ProgressBarStyleSpecification = {
  bar?: ElementImageSet;
  bar_background?: ElementImageSet;
  bar_width?: uint32;
  color?: Color;
  embed_text_in_bar?: bool;
  filled_font_color?: Color;
  font?: string;
  font_color?: Color;
  other_colors?: OtherColors[];
  side_text_padding?: int16;
  type: 'progressbar_style';
};
export type ProjectileAttackParameters = {
  projectile_center?: Vector;
  projectile_creation_distance?: float;
  projectile_creation_parameters?: CircularProjectileCreationSpecification;
  projectile_orientation_offset?: float;
  shell_particle?: CircularParticleCreationSpecification;
  type: 'projectile';
};
export type ProjectileTriggerDelivery = {
  direction_deviation?: float;
  max_range?: double;
  min_range?: double;
  projectile: EntityID;
  range_deviation?: float;
  starting_speed: float;
  starting_speed_deviation?: float;
  type: 'projectile';
};
export type PumpConnectorGraphics = {
  east: PumpConnectorGraphicsAnimation[];
  north: PumpConnectorGraphicsAnimation[];
  south: PumpConnectorGraphicsAnimation[];
  west: PumpConnectorGraphicsAnimation[];
};
export type PumpConnectorGraphicsAnimation = {
  connector?: Animation;
  connector_shadow?: Animation;
  standup_base?: Animation;
  standup_shadow?: Animation;
  standup_top?: Animation;
};
export type PushBackTriggerEffectItem = { distance: float; type: 'push-back' };
export type RadioButtonStyleSpecification = {
  disabled_font_color?: Color;
  font?: string;
  font_color?: Color;
  text_padding?: uint32;
  type: 'radiobutton_style';
};
export type RadiusVisualisationSpecification = {
  distance?: double;
  draw_in_cursor?: bool;
  draw_on_selection?: bool;
  offset?: Vector;
  sprite?: Sprite;
};
export type RailPictureSet = {
  curved_rail_horizontal_left_bottom: RailPieceLayers;
  curved_rail_horizontal_left_top: RailPieceLayers;
  curved_rail_horizontal_right_bottom: RailPieceLayers;
  curved_rail_horizontal_right_top: RailPieceLayers;
  curved_rail_vertical_left_bottom: RailPieceLayers;
  curved_rail_vertical_left_top: RailPieceLayers;
  curved_rail_vertical_right_bottom: RailPieceLayers;
  curved_rail_vertical_right_top: RailPieceLayers;
  rail_endings: Sprite8Way;
  straight_rail_diagonal_left_bottom: RailPieceLayers;
  straight_rail_diagonal_left_top: RailPieceLayers;
  straight_rail_diagonal_right_bottom: RailPieceLayers;
  straight_rail_diagonal_right_top: RailPieceLayers;
  straight_rail_horizontal: RailPieceLayers;
  straight_rail_vertical: RailPieceLayers;
};
export type RailPieceLayers = {
  backplates: SpriteVariations;
  metals: SpriteVariations;
  segment_visualisation_continuing_back?: Sprite;
  segment_visualisation_continuing_front?: Sprite;
  segment_visualisation_ending_back?: Sprite;
  segment_visualisation_ending_front?: Sprite;
  segment_visualisation_middle?: Sprite;
  stone_path: SpriteVariations;
  stone_path_background?: SpriteVariations;
  ties: SpriteVariations;
};
export type RandomPenaltyArguments = {
  amplitude?: ConstantNoiseNumber;
  seed?: ConstantNoiseNumber;
  source: NoiseNumber;
  x: NoiseNumber;
  y: NoiseNumber;
};
export type RealOrientation = float;
export type RecipeCategoryID = string;
export type RecipeData = {
  allow_as_intermediate?: bool;
  allow_decomposition?: bool;
  allow_inserter_overload?: bool;
  allow_intermediates?: bool;
  always_show_made_in?: bool;
  always_show_products?: bool;
  emissions_multiplier?: double;
  enabled?: bool;
  energy_required?: double;
  hidden?: bool;
  hide_from_player_crafting?: bool;
  hide_from_stats?: bool;
  ingredients: IngredientPrototype[];
  main_product?: string;
  overload_multiplier?: uint32;
  requester_paste_multiplier?: uint32;
  result?: ItemID;
  result_count?: uint16;
  results?: ProductPrototype[];
  show_amount_in_title?: bool;
  unlock_results?: bool;
};
export type RecipeID = string;
export type RenderLayer =
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
export type ResearchTechnologyTipTrigger = {
  technology: TechnologyID;
  type: 'research';
};
export type Resistance = {
  decrease?: float;
  percent?: float;
  type: DamageTypeID;
};
export type ResourceCategoryID = string;
export type RichTextSetting = 'enabled' | 'disabled' | 'highlight';
export type RotatedAnimation = {
  apply_projection?: bool;
  axially_symmetrical?: bool;
  counterclockwise?: bool;
  direction_count?: uint32;
  filename?: FileName;
  filenames?: FileName[];
  hr_version?: RotatedAnimation;
  layers?: RotatedAnimation[];
  lines_per_file?: uint32;
  middle_orientation?: RealOrientation;
  orientation_range?: float;
  slice?: uint32;
  still_frame?: uint32;
  stripes?: Stripe[];
};
export type RotatedAnimation4Way =
  | {
      east?: RotatedAnimation;
      north: RotatedAnimation;
      south?: RotatedAnimation;
      west?: RotatedAnimation;
    }
  | RotatedAnimation;
export type RotatedAnimationVariations = RotatedAnimation | RotatedAnimation[];
export type RotatedSprite = {
  allow_low_quality_rotation?: bool;
  apply_projection?: bool;
  axially_symmetrical?: bool;
  back_equals_front?: bool;
  counterclockwise?: bool;
  direction_count?: uint16;
  filename?: FileName;
  filenames?: FileName[];
  generate_sdf?: bool;
  hr_version?: RotatedSprite;
  layers?: RotatedSprite[];
  line_length?: uint32;
  lines_per_file?: uint64;
  slice?: SpriteSizeType;
  slice_x?: SpriteSizeType;
  slice_y?: SpriteSizeType;
};
export type ScriptTriggerEffectItem = { effect_id: string; type: 'script' };
export type ScrollBarStyleSpecification = {
  background_graphical_set?: ElementImageSet;
  thumb_button_style?: ButtonStyleSpecification;
};
export type ScrollPaneStyleSpecification = {
  background_graphical_set?: ElementImageSet;
  dont_force_clipping_rect_for_contents?: bool;
  extra_bottom_margin_when_activated?: int32;
  extra_bottom_padding_when_activated?: int32;
  extra_left_margin_when_activated?: int32;
  extra_left_padding_when_activated?: int32;
  extra_margin_when_activated?: int32;
  extra_padding_when_activated?: int32;
  extra_right_margin_when_activated?: int32;
  extra_right_padding_when_activated?: int32;
  extra_top_margin_when_activated?: int32;
  extra_top_padding_when_activated?: int32;
  graphical_set?: ElementImageSet;
  horizontal_scrollbar_style?: HorizontalScrollBarStyleSpecification;
  type: 'scroll_pane_style';
  vertical_flow_style?: VerticalFlowStyleSpecification;
  vertical_scrollbar_style?: VerticalScrollBarStyleSpecification;
};
export type SelectionModeFlags =
  | (
      | 'blueprint'
      | 'deconstruct'
      | 'cancel-deconstruct'
      | 'items'
      | 'trees'
      | 'buildable-type'
      | 'nothing'
      | 'items-to-place'
      | 'any-entity'
      | 'any-tile'
      | 'same-force'
      | 'not-same-force'
      | 'friend'
      | 'enemy'
      | 'upgrade'
      | 'cancel-upgrade'
      | 'downgrade'
      | 'entity-with-health'
      | 'entity-with-force'
      | 'is-military-target'
      | 'entity-with-owner'
      | 'avoid-rolling-stock'
      | 'entity-ghost'
      | 'tile-ghost'
    )
  | (
      | 'blueprint'
      | 'deconstruct'
      | 'cancel-deconstruct'
      | 'items'
      | 'trees'
      | 'buildable-type'
      | 'nothing'
      | 'items-to-place'
      | 'any-entity'
      | 'any-tile'
      | 'same-force'
      | 'not-same-force'
      | 'friend'
      | 'enemy'
      | 'upgrade'
      | 'cancel-upgrade'
      | 'downgrade'
      | 'entity-with-health'
      | 'entity-with-force'
      | 'is-military-target'
      | 'entity-with-owner'
      | 'avoid-rolling-stock'
      | 'entity-ghost'
      | 'tile-ghost'
    )[];
export type SequenceTipTrigger = { triggers: TipTrigger[]; type: 'sequence' };
export type SetFilterTipTrigger = {
  consecutive?: bool;
  count?: uint32;
  entity?: EntityID;
  match_type_only?: bool;
  type: 'set-filter';
};
export type SetLogisticRequestTipTrigger = {
  count?: uint32;
  logistic_chest_only?: bool;
  type: 'set-logistic-request';
};
export type SetRecipeTipTrigger = {
  consecutive?: bool;
  machine?: EntityID;
  recipe?: RecipeID;
  type: 'set-recipe';
  uses_fluid?: bool;
};
export type SetTileTriggerEffectItem = {
  apply_projection?: bool;
  radius: float;
  tile_collision_mask?: CollisionMask;
  tile_name: TileID;
  type: 'set-tile';
};
export type Settings = { startup: Record<string, ModSetting> };
export type ShiftAnimationWaypoints = {
  east: Vector[];
  north: Vector[];
  south: Vector[];
  west: Vector[];
};
export type ShiftBuildTipTrigger = { count?: uint32; type: 'shift-build' };
export type ShowExplosionOnChartTriggerEffectItem = {
  scale: float;
  type: 'show-explosion-on-chart';
};
export type SignalColorMapping = {
  color: Color;
  name: VirtualSignalID | ItemID | FluidID;
  type: 'virtual' | 'item' | 'fluid';
};
export type SignalIDConnector = {
  name: VirtualSignalID | ItemID | FluidID;
  type: 'virtual' | 'item' | 'fluid';
};
export type SimpleModifier = { modifier: double };
export type SimulationDefinition = {
  checkboard?: bool;
  generate_map?: bool;
  init?: string;
  init_file?: FileName;
  init_update_count?: uint32;
  length?: uint32;
  mods?: string[];
  override_volume?: bool;
  save?: FileName;
  update?: string;
  update_file?: FileName;
  volume_modifier?: float;
};
export type SliderStyleSpecification = {
  button?: ButtonStyleSpecification;
  draw_notches?: bool;
  empty_bar?: ElementImageSet;
  empty_bar_disabled?: ElementImageSet;
  full_bar?: ElementImageSet;
  full_bar_disabled?: ElementImageSet;
  high_button?: ButtonStyleSpecification;
  notch?: ElementImageSet;
  type: 'slider_style';
};
export type SmokeSource = {
  deviation?: MapPosition;
  east_position?: Vector;
  frequency: double;
  height?: float;
  height_deviation?: float;
  name: TrivialSmokeID;
  north_position?: Vector;
  offset?: double;
  position?: Vector;
  slow_down_factor?: uint8;
  south_position?: Vector;
  starting_frame?: uint16;
  starting_frame_deviation?: double;
  starting_frame_speed?: uint16;
  starting_frame_speed_deviation?: double;
  starting_vertical_speed?: float;
  starting_vertical_speed_deviation?: float;
  vertical_speed_slowdown?: float;
  west_position?: Vector;
};
export type Sound =
  | {
      aggregation?: AggregationSpecification;
      allow_random_repeat?: bool;
      audible_distance_modifier?: double;
      filename?: FileName;
      game_controller_vibration_data?: GameControllerVibrationData;
      max_speed?: float;
      min_speed?: float;
      preload?: bool;
      speed?: float;
      variations?: SoundDefinition | SoundDefinition[];
      volume?: float;
    }
  | SoundDefinition[];
export type SoundDefinition = {
  filename: FileName;
  max_speed?: float;
  min_speed?: float;
  preload?: bool;
  speed?: float;
  volume?: float;
};
export type SoundType =
  | 'game-effect'
  | 'gui-effect'
  | 'ambient'
  | 'environment'
  | 'walking'
  | 'alert'
  | 'wind';
export type SpawnPoint =
  | { evolution_factor: double; spawn_weight: double }
  | [double, double];
export type SpeechBubbleStyleSpecification = {
  arrow_graphical_set?: ElementImageSet;
  arrow_indent?: double;
  close_color?: Color;
  frame_style?: FrameStyleSpecification;
  label_style?: LabelStyleSpecification;
  pass_through_mouse?: bool;
  type: 'speech_bubble_style';
};
export type SpiderEnginePrototype = {
  legs: SpiderLegSpecification | SpiderLegSpecification[];
  military_target?: string;
};
export type SpiderLegGraphicsSet = {
  joint?: Sprite;
  joint_shadow?: Sprite;
  joint_turn_offset?: float;
  lower_part?: SpiderLegPart;
  lower_part_shadow?: SpiderLegPart;
  lower_part_water_reflection?: SpiderLegPart;
  upper_part?: SpiderLegPart;
  upper_part_shadow?: SpiderLegPart;
  upper_part_water_reflection?: SpiderLegPart;
};
export type SpiderLegPart = {
  bottom_end?: Sprite;
  bottom_end_length?: float;
  middle?: Sprite;
  middle_offset_from_bottom?: float;
  middle_offset_from_top?: float;
  top_end?: Sprite;
  top_end_length?: float;
};
export type SpiderLegSpecification = {
  blocking_legs: uint32[];
  ground_position: Vector;
  leg: EntityID;
  leg_hit_the_ground_trigger?: TriggerEffect;
  mount_position: Vector;
};
export type SpiderVehicleGraphicsSet = {
  animation?: RotatedAnimation;
  autopilot_destination_on_map_visualisation?: Animation;
  autopilot_destination_queue_on_map_visualisation?: Animation;
  autopilot_destination_queue_visualisation?: Animation;
  autopilot_destination_visualisation?: Animation;
  autopilot_destination_visualisation_render_layer?: RenderLayer;
  autopilot_path_visualisation_line_width?: float;
  autopilot_path_visualisation_on_map_line_width?: float;
  base_animation?: RotatedAnimation;
  base_render_layer?: RenderLayer;
  eye_light?: LightDefinition;
  light?: LightDefinition;
  light_positions?: Vector[][];
  render_layer?: RenderLayer;
  shadow_animation?: RotatedAnimation;
  shadow_base_animation?: RotatedAnimation;
};
export type SpotNoiseArguments = {
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
export type Sprite = {
  filename?: FileName;
  hr_version?: Sprite;
  layers?: Sprite[];
  slice?: SpriteSizeType;
  slice_x?: SpriteSizeType;
  slice_y?: SpriteSizeType;
};
export type Sprite4Way =
  | {
      east?: Sprite;
      north?: Sprite;
      sheet?: SpriteNWaySheet;
      sheets?: SpriteNWaySheet[];
      south?: Sprite;
      west?: Sprite;
    }
  | Sprite;
export type Sprite8Way = {
  east?: Sprite;
  north?: Sprite;
  north_east?: Sprite;
  north_west?: Sprite;
  sheet?: SpriteNWaySheet;
  sheets?: SpriteNWaySheet[];
  south?: Sprite;
  south_east?: Sprite;
  south_west?: Sprite;
  west?: Sprite;
};
export type SpriteFlags = (
  | 'no-crop'
  | 'not-compressed'
  | 'always-compressed'
  | 'mipmap'
  | 'linear-minification'
  | 'linear-magnification'
  | 'linear-mip-level'
  | 'alpha-mask'
  | 'no-scale'
  | 'mask'
  | 'icon'
  | 'gui'
  | 'gui-icon'
  | 'light'
  | 'terrain'
  | 'terrain-effect-map'
  | 'shadow'
  | 'smoke'
  | 'decal'
  | 'low-object'
  | 'trilinear-filtering'
  | 'group=none'
  | 'group=terrain'
  | 'group=shadow'
  | 'group=smoke'
  | 'group=decal'
  | 'group=low-object'
  | 'group=gui'
  | 'group=icon'
  | 'group=icon-background'
  | 'compressed'
)[];
export type SpriteNWaySheet = {
  frames?: uint32;
  generate_sdf?: bool;
  hr_version?: SpriteNWaySheet;
};
export type SpriteParameters = {
  apply_runtime_tint?: bool;
  blend_mode?: BlendMode;
  draw_as_glow?: bool;
  draw_as_light?: bool;
  draw_as_shadow?: bool;
  filename: FileName;
  flags?: SpriteFlags;
  generate_sdf?: bool;
  height?: SpriteSizeType;
  load_in_minimal_mode?: bool;
  mipmap_count?: uint8;
  position?: [SpriteSizeType, SpriteSizeType];
  premul_alpha?: bool;
  priority?: SpritePriority;
  scale?: double;
  shift?: Vector;
  size?: SpriteSizeType | [SpriteSizeType, SpriteSizeType];
  tint?: Color;
  width?: SpriteSizeType;
  x?: SpriteSizeType;
  y?: SpriteSizeType;
};
export type SpritePriority =
  | 'extra-high-no-scale'
  | 'extra-high'
  | 'high'
  | 'medium'
  | 'low'
  | 'very-low'
  | 'no-atlas';
export type SpriteSheet = {
  hr_version?: SpriteSheet;
  layers?: SpriteSheet[];
  line_length?: uint32;
  repeat_count?: uint32;
  variation_count?: uint32;
};
export type SpriteSizeType = int16;
export type SpriteVariations = { sheet: SpriteSheet } | SpriteSheet | Sprite[];
export type StackInserterCapacityBonusModifier = {
  infer_icon?: bool;
  type: 'stack-inserter-capacity-bonus';
  use_icon_overlay_constant?: bool;
};
export type StackTransferTipTrigger = {
  count?: uint32;
  transfer?: 'stack' | 'inventory' | 'whole-inventory';
  type: 'stack-transfer';
};
export type StateSteeringSettings = {
  force_unit_fuzzy_goto_behavior: bool;
  radius: double;
  separation_factor: double;
  separation_force: double;
};
export type StatusColors = {
  disabled?: Color;
  full_output?: Color;
  idle?: Color;
  insufficient_input?: Color;
  low_power?: Color;
  no_minable_resources?: Color;
  no_power?: Color;
  working?: Color;
};
export type SteeringSettings = {
  default: StateSteeringSettings;
  moving: StateSteeringSettings;
};
export type StorageTankPictures = {
  flow_sprite: Sprite;
  fluid_background: Sprite;
  gas_flow: Animation;
  picture: Sprite4Way;
  window_background: Sprite;
};
export type StreamAttackParameters = {
  fluid_consumption?: float;
  fluids?: StreamFluidProperties[];
  gun_barrel_length?: float;
  gun_center_shift?: Vector | GunShift4Way;
  projectile_creation_parameters?: CircularProjectileCreationSpecification;
  type: 'stream';
};
export type StreamFluidProperties = { damage_modifier?: double; type: FluidID };
export type StreamTriggerDelivery = {
  source_offset?: Vector;
  stream: EntityID;
  type: 'stream';
};
export type StretchRule = 'on' | 'off' | 'auto' | 'stretch_and_expand';
export type Stripe = {
  filename: FileName;
  height_in_frames: uint32;
  width_in_frames: uint32;
  x?: uint32;
  y?: uint32;
};
export type StyleSpecification =
  | ActivityBarStyleSpecification
  | ButtonStyleSpecification
  | CameraStyleSpecification
  | CheckBoxStyleSpecification
  | DropDownStyleSpecification
  | FlowStyleSpecification
  | FrameStyleSpecification
  | GraphStyleSpecification
  | HorizontalFlowStyleSpecification
  | LineStyleSpecification
  | ImageStyleSpecification
  | LabelStyleSpecification
  | ListBoxStyleSpecification
  | ProgressBarStyleSpecification
  | RadioButtonStyleSpecification
  | HorizontalScrollBarStyleSpecification
  | VerticalScrollBarStyleSpecification
  | ScrollPaneStyleSpecification
  | SliderStyleSpecification
  | SwitchStyleSpecification
  | TableStyleSpecification
  | TabStyleSpecification
  | TextBoxStyleSpecification
  | VerticalFlowStyleSpecification
  | TabbedPaneStyleSpecification
  | EmptyWidgetStyleSpecification
  | MinimapStyleSpecification
  | TechnologySlotStyleSpecification
  | GlowStyleSpecification
  | SpeechBubbleStyleSpecification
  | DoubleSliderStyleSpecification;
export type StyleWithClickableGraphicalSetSpecification = {
  clicked_graphical_set?: ElementImageSet;
  default_graphical_set?: ElementImageSet;
  disabled_graphical_set?: ElementImageSet;
  hovered_graphical_set?: ElementImageSet;
  left_click_sound?: Sound;
  selected_clicked_graphical_set?: ElementImageSet;
  selected_graphical_set?: ElementImageSet;
  selected_hovered_graphical_set?: ElementImageSet;
};
export type SwitchStyleSpecification = {
  active_label?: LabelStyleSpecification;
  button?: ButtonStyleSpecification;
  default_background?: Sprite;
  disabled_background?: Sprite;
  hover_background?: Sprite;
  inactive_label?: LabelStyleSpecification;
  left_button_position?: uint32;
  middle_button_position?: uint32;
  right_button_position?: uint32;
  type: 'switch_style';
};
export type TabStyleSpecification = {
  badge_font?: string;
  badge_horizontal_spacing?: int16;
  default_badge_font_color?: Color;
  default_badge_graphical_set?: ElementImageSet;
  default_font_color?: Color;
  default_graphical_set?: ElementImageSet;
  disabled_badge_font_color?: Color;
  disabled_badge_graphical_set?: ElementImageSet;
  disabled_font_color?: Color;
  disabled_graphical_set?: ElementImageSet;
  draw_grayscale_picture?: bool;
  font?: string;
  game_controller_selected_hover_graphical_set?: ElementImageSet;
  hover_badge_graphical_set?: ElementImageSet;
  hover_graphical_set?: ElementImageSet;
  left_click_sound?: Sound;
  left_edge_selected_graphical_set?: ElementImageSet;
  override_graphics_on_edges?: bool;
  press_badge_graphical_set?: ElementImageSet;
  press_graphical_set?: ElementImageSet;
  right_edge_selected_graphical_set?: ElementImageSet;
  selected_badge_font_color?: Color;
  selected_badge_graphical_set?: ElementImageSet;
  selected_font_color?: Color;
  selected_graphical_set?: ElementImageSet;
  type: 'tab_style';
};
export type TabbedPaneStyleSpecification = {
  tab_container?: HorizontalFlowStyleSpecification;
  tab_content_frame?: FrameStyleSpecification;
  type: 'tabbed_pane_style';
  vertical_spacing?: uint32;
};
export type TableStyleSpecification = {
  apply_row_graphical_set_per_column?: bool;
  background_graphical_set?: ElementImageSet;
  border?: BorderImageSet;
  bottom_cell_padding?: int16;
  cell_padding?: int16;
  clicked_graphical_set?: ElementImageSet;
  column_alignments?: ColumnAlignment[];
  column_graphical_set?: ElementImageSet;
  column_ordering_ascending_button_style?: ButtonStyleSpecification;
  column_ordering_descending_button_style?: ButtonStyleSpecification;
  column_widths?: ColumnWidth[];
  default_row_graphical_set?: ElementImageSet;
  even_row_graphical_set?: ElementImageSet;
  horizontal_line_color?: Color;
  horizontal_spacing?: int32;
  hovered_graphical_set?: ElementImageSet;
  hovered_row_color?: Color;
  inactive_column_ordering_ascending_button_style?: ButtonStyleSpecification;
  inactive_column_ordering_descending_button_style?: ButtonStyleSpecification;
  left_cell_padding?: int16;
  odd_row_graphical_set?: ElementImageSet;
  right_cell_padding?: int16;
  selected_clicked_graphical_set?: ElementImageSet;
  selected_graphical_set?: ElementImageSet;
  selected_hovered_graphical_set?: ElementImageSet;
  selected_row_color?: Color;
  top_cell_padding?: int16;
  type: 'table_style';
  vertical_line_color?: Color;
  vertical_spacing?: int32;
};
export type TechnologyData = {
  effects?: Modifier[];
  enabled?: bool;
  hidden?: bool;
  ignore_tech_cost_multiplier?: bool;
  max_level?: uint32 | 'infinite';
  prerequisites?: TechnologyID[];
  unit: TechnologyUnit;
  upgrade?: bool;
  visible_when_disabled?: bool;
};
export type TechnologyID = string;
export type TechnologySlotStyleSpecification = {
  clicked_ingredients_background?: ElementImageSet;
  clicked_overlay?: ElementImageSet;
  default_background_shadow?: ElementImageSet;
  default_ingredients_background?: ElementImageSet;
  disabled_ingredients_background?: ElementImageSet;
  highlighted_graphical_set?: ElementImageSet;
  highlighted_ingredients_background?: ElementImageSet;
  hovered_ingredients_background?: ElementImageSet;
  hovered_level_band?: ElementImageSet;
  hovered_level_font_color?: Color;
  hovered_level_range_band?: ElementImageSet;
  hovered_level_range_font_color?: Color;
  ingredient_icon_overlap?: uint32;
  ingredient_icon_size?: uint32;
  ingredients_height?: uint32;
  ingredients_padding?: uint32;
  level_band?: ElementImageSet;
  level_band_height?: uint32;
  level_band_width?: uint32;
  level_font?: string;
  level_font_color?: Color;
  level_offset_x?: int32;
  level_offset_y?: int32;
  level_range_band?: ElementImageSet;
  level_range_font?: string;
  level_range_font_color?: Color;
  level_range_offset_x?: int32;
  level_range_offset_y?: int32;
  progress_bar?: ElementImageSet;
  progress_bar_background?: ElementImageSet;
  progress_bar_color?: Color;
  progress_bar_height?: uint32;
  progress_bar_shadow?: ElementImageSet;
  type: 'technology_slot_style';
};
export type TechnologyUnit = {
  count?: uint64;
  count_formula?: string;
  ingredients: IngredientPrototype[];
  time: double;
};
export type TextBoxStyleSpecification = {
  active_background?: ElementImageSet;
  default_background?: ElementImageSet;
  disabled_background?: ElementImageSet;
  disabled_font_color?: Color;
  font?: string;
  font_color?: Color;
  game_controller_hovered_background?: ElementImageSet;
  rich_text_highlight_error_color?: Color;
  rich_text_highlight_ok_color?: Color;
  rich_text_highlight_warning_color?: Color;
  rich_text_setting?: RichTextSetting;
  selected_rich_text_highlight_error_color?: Color;
  selected_rich_text_highlight_ok_color?: Color;
  selected_rich_text_highlight_warning_color?: Color;
  selection_background_color?: Color;
  type: 'textbox_style';
};
export type ThrowCapsuleAction = {
  attack_parameters: AttackParameters;
  type: 'throw';
  uses_stack?: bool;
};
export type TileAndAlpha = { alpha: float; tile: TileID };
export type TileBuildSound = { large?: Sound; medium?: Sound; small?: Sound };
export type TileID = string;
export type TileIDRestriction = TileID | [TileID, TileID];
export type TileRenderLayer =
  | 'zero'
  | 'water'
  | 'water-overlay'
  | 'ground'
  | 'top';
export type TileSprite = {
  count: uint32;
  hr_version?: TileSprite;
  line_length?: uint32;
  picture: FileName;
  scale?: float;
  x?: SpriteSizeType;
  y?: SpriteSizeType;
};
export type TileSpriteWithProbability = {
  probability?: double;
  size: uint32;
  weights?: double[];
};
export type TileTransitionSprite = {
  count: uint32;
  hr_version?: TileTransitionSprite;
  picture: FileName;
  scale?: float;
  tall?: bool;
  x?: SpriteSizeType;
  y?: SpriteSizeType;
};
export type TileTransitions = {
  apply_effect_color_to_overlay?: bool;
  background_layer_group?: TileRenderLayer;
  background_layer_offset?: int8;
  effect_mask?: Animation;
  empty_transitions?: bool;
  inner_corner?: TileTransitionSprite;
  inner_corner_background?: TileTransitionSprite;
  inner_corner_background_mask?: TileTransitionSprite;
  inner_corner_effect_map?: TileTransitionSprite;
  inner_corner_mask?: TileTransitionSprite;
  inner_corner_weights?: float[];
  layer?: uint8;
  masked_background_layer_offset?: int8;
  masked_overlay_layer_offset?: int8;
  o_transition?: TileSprite;
  o_transition_background?: TileSprite;
  o_transition_background_mask?: TileSprite;
  o_transition_effect_map?: TileSprite;
  o_transition_mask?: TileSprite;
  offset_background_layer_by_tile_layer?: bool;
  outer_corner?: TileTransitionSprite;
  outer_corner_background?: TileTransitionSprite;
  outer_corner_background_mask?: TileTransitionSprite;
  outer_corner_effect_map?: TileTransitionSprite;
  outer_corner_mask?: TileTransitionSprite;
  outer_corner_weights?: float[];
  overlay_layer_group?: TileRenderLayer;
  overlay_layer_offset?: int8;
  side?: TileTransitionSprite;
  side_background?: TileTransitionSprite;
  side_background_mask?: TileTransitionSprite;
  side_effect_map?: TileTransitionSprite;
  side_mask?: TileTransitionSprite;
  side_weights?: float[];
  u_transition?: TileTransitionSprite;
  u_transition_background?: TileTransitionSprite;
  u_transition_background_mask?: TileTransitionSprite;
  u_transition_effect_map?: TileTransitionSprite;
  u_transition_mask?: TileTransitionSprite;
  u_transition_weights?: float[];
  water_patch?: Sprite;
};
export type TileTransitionsBetweenTransitions = {
  transition_group1: uint8;
  transition_group2: uint8;
};
export type TileTransitionsToTiles = {
  to_tiles: TileID[];
  transition_group: uint8;
};
export type TileTransitionsVariants = {
  main: TileSpriteWithProbability[];
  material_background?: TileSprite;
};
export type TimeElapsedTipTrigger = { ticks: uint32; type: 'time-elapsed' };
export type TipStatus =
  | 'locked'
  | 'optional'
  | 'dependencies-not-met'
  | 'unlocked'
  | 'suggested'
  | 'not-to-be-suggested'
  | 'completed-without-tutorial'
  | 'completed';
export type TipTrigger =
  | OrTipTrigger
  | AndTipTrigger
  | SequenceTipTrigger
  | DependenciesMetTipTrigger
  | TimeElapsedTipTrigger
  | ResearchTechnologyTipTrigger
  | UnlockRecipeTipTrigger
  | CraftItemTipTrigger
  | BuildEntityTipTrigger
  | ManualTransferTipTrigger
  | StackTransferTipTrigger
  | EntityTransferTipTrigger
  | SetRecipeTipTrigger
  | SetFilterTipTrigger
  | LimitChestTipTrigger
  | UsePipetteTipTrigger
  | SetLogisticRequestTipTrigger
  | UseConfirmTipTrigger
  | LowPowerTipTrigger
  | PasteEntitySettingsTipTrigger
  | FastReplaceTipTrigger
  | GroupAttackTipTrigger
  | FastBeltBendTipTrigger
  | BeltTraverseTipTrigger
  | PlaceEquipmentTipTrigger
  | ClearCursorTipTrigger
  | ShiftBuildTipTrigger
  | GateOverRailBuildTipTrigger
  | ManualWireDragTipTrigger;
export type TrainBrakingForceBonusModifier = {
  infer_icon?: bool;
  type: 'train-braking-force-bonus';
  use_icon_overlay_constant?: bool;
};
export type TrainPathFinderConstants = {
  signal_reserved_by_circuit_network_penalty: uint32;
  stopped_manually_controlled_train_penalty: uint32;
  stopped_manually_controlled_train_without_passenger_penalty: uint32;
  train_arriving_to_signal_penalty: uint32;
  train_arriving_to_station_penalty: uint32;
  train_auto_without_schedule_penalty: uint32;
  train_in_station_penalty: uint32;
  train_in_station_with_no_other_valid_stops_in_schedule: uint32;
  train_stop_penalty: uint32;
  train_waiting_at_signal_penalty: uint32;
  train_waiting_at_signal_tick_multiplier_penalty: float;
  train_with_no_path_penalty: uint32;
};
export type TrainStopDrawingBoxes = {
  east: BoundingBox;
  north: BoundingBox;
  south: BoundingBox;
  west: BoundingBox;
};
export type TrainStopLight = {
  light: LightDefinition;
  picture: Sprite4Way;
  red_picture: Sprite4Way;
};
export type TransportBeltAnimationSet = {
  animation_set: RotatedAnimation;
  east_index?: uint8;
  ending_east_index?: uint8;
  ending_north_index?: uint8;
  ending_patch?: Sprite4Way;
  ending_south_index?: uint8;
  ending_west_index?: uint8;
  ends_with_stopper?: bool;
  north_index?: uint8;
  south_index?: uint8;
  starting_east_index?: uint8;
  starting_north_index?: uint8;
  starting_south_index?: uint8;
  starting_west_index?: uint8;
  west_index?: uint8;
};
export type TransportBeltAnimationSetWithCorners = {
  east_to_north_index?: uint8;
  east_to_south_index?: uint8;
  north_to_east_index?: uint8;
  north_to_west_index?: uint8;
  south_to_east_index?: uint8;
  south_to_west_index?: uint8;
  west_to_north_index?: uint8;
  west_to_south_index?: uint8;
};
export type TransportBeltConnectorFrame = {
  frame_back_patch?: SpriteVariations;
  frame_front_patch?: SpriteVariations;
  frame_main: AnimationVariations;
  frame_main_scanner: Animation;
  frame_main_scanner_cross_horizontal_end_shift: Vector;
  frame_main_scanner_cross_horizontal_rotation: RealOrientation;
  frame_main_scanner_cross_horizontal_start_shift: Vector;
  frame_main_scanner_cross_horizontal_y_scale: float;
  frame_main_scanner_cross_vertical_end_shift: Vector;
  frame_main_scanner_cross_vertical_rotation: RealOrientation;
  frame_main_scanner_cross_vertical_start_shift: Vector;
  frame_main_scanner_cross_vertical_y_scale: float;
  frame_main_scanner_horizontal_end_shift: Vector;
  frame_main_scanner_horizontal_rotation: RealOrientation;
  frame_main_scanner_horizontal_start_shift: Vector;
  frame_main_scanner_horizontal_y_scale: float;
  frame_main_scanner_movement_speed: float;
  frame_main_scanner_nw_ne: Animation;
  frame_main_scanner_sw_se: Animation;
  frame_main_scanner_vertical_end_shift: Vector;
  frame_main_scanner_vertical_rotation: RealOrientation;
  frame_main_scanner_vertical_start_shift: Vector;
  frame_main_scanner_vertical_y_scale: float;
  frame_shadow: AnimationVariations;
};
export type TreeVariation = {
  branch_generation: CreateParticleTriggerEffectItem;
  disable_shadow_distortion_beginning_at_frame?: uint32;
  leaf_generation: CreateParticleTriggerEffectItem;
  leaves: Animation;
  normal?: Animation;
  overlay?: Animation;
  shadow?: Animation;
  trunk: Animation;
  water_reflection?: WaterReflectionDefinition;
};
export type Trigger =
  | (DirectTriggerItem | AreaTriggerItem | LineTriggerItem | ClusterTriggerItem)
  | (
      | DirectTriggerItem
      | AreaTriggerItem
      | LineTriggerItem
      | ClusterTriggerItem
    )[];
export type TriggerDelivery =
  | InstantTriggerDelivery
  | ProjectileTriggerDelivery
  | FlameThrowerExplosionTriggerDelivery
  | BeamTriggerDelivery
  | StreamTriggerDelivery
  | ArtilleryTriggerDelivery;
export type TriggerDeliveryItem = {
  source_effects?: TriggerEffect;
  target_effects?: TriggerEffect;
};
export type TriggerEffect =
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
export type TriggerEffectItem = {
  affects_target?: bool;
  damage_type_filters?: DamageTypeFilters;
  probability?: float;
  repeat_count?: uint16;
  repeat_count_deviation?: uint16;
  show_in_tooltip?: bool;
};
export type TriggerItem = {
  action_delivery?: TriggerDelivery | TriggerDelivery[];
  collision_mask?: CollisionMask;
  entity_flags?: EntityPrototypeFlags;
  force?: ForceCondition;
  ignore_collision_condition?: bool;
  probability?: float;
  repeat_count?: uint32;
  trigger_target_mask?: TriggerTargetMask;
};
export type TriggerTargetMask = string[];
export type TrivialSmokeID = string;
export type TurretAttackModifier = {
  infer_icon?: bool;
  modifier: double;
  turret_id: EntityID;
  type: 'turret-attack';
  use_icon_overlay_constant?: bool;
};
export type UndergroundBeltStructure = {
  back_patch?: Sprite4Way;
  direction_in: Sprite4Way;
  direction_in_side_loading?: Sprite4Way;
  direction_out: Sprite4Way;
  direction_out_side_loading?: Sprite4Way;
  front_patch?: Sprite4Way;
};
export type UnitAISettings = {
  allow_try_return_to_spawner?: bool;
  destroy_when_commands_fail?: bool;
  do_separation?: bool;
  path_resolution_modifier?: int8;
};
export type UnitAlternativeFrameSequence = {
  attacking_animation_speed: float;
  attacking_frame_sequence: uint16[];
  back_to_walk_animation_speed: float;
  back_to_walk_frame_sequence: uint16[];
  cooldown_animation_speed: float;
  cooldown_frame_sequence: uint16[];
  prepared_animation_speed: float;
  prepared_frame_sequence: uint16[];
  warmup2_frame_sequence: uint16[];
  warmup_animation_speed: float;
  warmup_frame_sequence: uint16[];
};
export type UnitGroupSettings = {
  max_gathering_unit_groups: uint32;
  max_group_gathering_time: uint32;
  max_group_member_fallback_factor: double;
  max_group_radius: double;
  max_group_slowdown_factor: double;
  max_member_slowdown_when_ahead: double;
  max_member_speedup_when_behind: double;
  max_unit_group_size: uint32;
  max_wait_time_for_late_members: uint32;
  member_disown_distance: double;
  min_group_gathering_time: uint32;
  min_group_radius: double;
  tick_tolerance_when_member_arrives: uint32;
};
export type UnitSpawnDefinition =
  | { spawn_points: SpawnPoint[]; unit: EntityID }
  | [EntityID, SpawnPoint[]];
export type UnlockRecipeModifier = {
  recipe: RecipeID;
  type: 'unlock-recipe';
  use_icon_overlay_constant?: bool;
};
export type UnlockRecipeTipTrigger = {
  recipe: RecipeID;
  type: 'unlock-recipe';
};
export type UseConfirmTipTrigger = { count?: uint32; type: 'use-confirm' };
export type UseOnSelfCapsuleAction = {
  attack_parameters: AttackParameters;
  type: 'use-on-self';
  uses_stack?: bool;
};
export type UsePipetteTipTrigger = { count?: uint32; type: 'use-pipette' };
export type Vector = { x: double; y: double } | [double, double];
export type Vector3D = { x: float; y: float; z: float } | [float, float, float];
export type VectorRotation = { frames: Vector[]; render_layer?: RenderLayer };
export type VerticalAlign = 'top' | 'center' | 'bottom';
export type VerticalFlowStyleSpecification = {
  type: 'vertical_flow_style';
  vertical_spacing?: int32;
};
export type VerticalScrollBarStyleSpecification = {
  type: 'vertical_scrollbar_style';
};
export type VirtualSignalID = string;
export type VoidEnergySource = { type: 'void' };
export type WallPictures = {
  corner_left_down: SpriteVariations;
  corner_right_down: SpriteVariations;
  ending_left: SpriteVariations;
  ending_right: SpriteVariations;
  filling?: SpriteVariations;
  gate_connection_patch?: Sprite4Way;
  single: SpriteVariations;
  straight_horizontal: SpriteVariations;
  straight_vertical: SpriteVariations;
  t_up: SpriteVariations;
  water_connection_patch?: Sprite4Way;
};
export type WaterReflectionDefinition = {
  orientation_to_variation?: bool;
  pictures?: SpriteVariations;
  rotate?: bool;
};
export type WireConnectionPoint = { shadow: WirePosition; wire: WirePosition };
export type WirePosition = { copper?: Vector; green?: Vector; red?: Vector };
export type WorkerRobotBatteryModifier = {
  infer_icon?: bool;
  type: 'worker-robot-battery';
  use_icon_overlay_constant?: bool;
};
export type WorkerRobotSpeedModifier = {
  infer_icon?: bool;
  type: 'worker-robot-speed';
  use_icon_overlay_constant?: bool;
};
export type WorkerRobotStorageModifier = {
  infer_icon?: bool;
  type: 'worker-robot-storage';
  use_icon_overlay_constant?: bool;
};
export type WorkingSound =
  | {
      activate_sound?: Sound;
      apparent_volume?: float;
      audible_distance_modifier?: double;
      deactivate_sound?: Sound;
      fade_in_ticks?: uint32;
      fade_out_ticks?: uint32;
      idle_sound?: Sound;
      match_progress_to_activity?: bool;
      match_speed_to_activity?: bool;
      match_volume_to_activity?: bool;
      max_sounds_per_type?: uint8;
      persistent?: bool;
      probability?: double;
      sound: Sound;
      use_doppler_shift?: bool;
    }
  | Sound;
export type WorkingVisualisation = {
  align_to_waypoint?: bool;
  always_draw?: bool;
  animated_shift?: bool;
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
  constant_speed?: bool;
  draw_as_light?: bool;
  draw_as_sprite?: bool;
  east_animation?: Animation;
  east_position?: Vector;
  effect?: 'flicker' | 'uranium-glow' | 'none';
  fadeout?: bool;
  light?: LightDefinition;
  north_animation?: Animation;
  north_position?: Vector;
  render_layer?: RenderLayer;
  secondary_draw_order?: int8;
  south_animation?: Animation;
  south_position?: Vector;
  synced_fadeout?: bool;
  west_animation?: Animation;
  west_position?: Vector;
};
export type ZoomToWorldBlueprintEnabledModifier = {
  type: 'zoom-to-world-blueprint-enabled';
  use_icon_overlay_constant?: bool;
};
export type ZoomToWorldDeconstructionPlannerEnabledModifier = {
  type: 'zoom-to-world-deconstruction-planner-enabled';
  use_icon_overlay_constant?: bool;
};
export type ZoomToWorldEnabledModifier = {
  type: 'zoom-to-world-enabled';
  use_icon_overlay_constant?: bool;
};
export type ZoomToWorldGhostBuildingEnabledModifier = {
  type: 'zoom-to-world-ghost-building-enabled';
  use_icon_overlay_constant?: bool;
};
export type ZoomToWorldSelectionToolEnabledModifier = {
  type: 'zoom-to-world-selection-tool-enabled';
  use_icon_overlay_constant?: bool;
};
export type ZoomToWorldUpgradePlannerEnabledModifier = {
  type: 'zoom-to-world-upgrade-planner-enabled';
  use_icon_overlay_constant?: bool;
};
export type bool = boolean;
export type double = number;
export type float = number;
export type int16 = number;
export type int32 = number;
export type int8 = number;
export type uint16 = number;
export type uint32 = number;
export type uint64 = number;
export type uint8 = number;
