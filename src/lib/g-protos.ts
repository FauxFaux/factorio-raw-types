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
export type ActivateEquipmentCapsuleAction = {
  equipment: EquipmentID;
  type: 'equipment-remote';
};
export type ActivityBarStyleSpecification = {
  bar?: Sprite;
  bar_background?: Sprite;
  bar_size_ratio?: number;
  bar_width?: number;
  color?: Color;
  speed?: number;
  type: 'activity_bar_style';
};
export type AdvancedMapGenSettings = {
  difficulty_settings?: MapGenPresetDifficultySettings;
  enemy_evolution?: MapGenPresetEnemyEvolutionSettings;
  enemy_expansion?: MapGenPresetEnemyExpansionSettings;
  pollution?: MapGenPresetPollutionSettings;
};
export type AggregationSpecification = {
  count_already_playing?: boolean;
  max_count: number;
  progress_threshold?: number;
  remove: boolean;
};
export type AmmoCategoryID = string;
export type AmmoDamageModifier = {
  ammo_category: AmmoCategoryID;
  infer_icon?: boolean;
  modifier: number;
  type: 'ammo-damage';
  use_icon_overlay_constant?: boolean;
};
export type AmmoSourceType = 'default' | 'player' | 'turret' | 'vehicle';
export type AmmoType = {
  action?: Trigger;
  category: AmmoCategoryID;
  clamp_position?: boolean;
  consumption_modifier?: number;
  cooldown_modifier?: number;
  energy_consumption?: Energy;
  range_modifier?: number;
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
  always_draw?: boolean;
  animation?: Animation;
  apply_tint?: boolean;
  draw_as_light?: boolean;
  draw_as_sprite?: boolean;
  render_layer?: RenderLayer;
  secondary_draw_order?: number;
};
export type AnimationFrameSequence = number[];
export type AnimationParameters = {
  animation_speed?: number;
  dice?: number;
  dice_x?: number;
  dice_y?: number;
  frame_count?: number;
  frame_sequence?: AnimationFrameSequence;
  generate_sdf?: boolean;
  height?: SpriteSizeType;
  line_length?: number;
  max_advance?: number;
  mipmap_count?: number;
  repeat_count?: number;
  run_mode?: 'forward' | 'backward' | 'forward-then-backward';
  size?: SpriteSizeType | [SpriteSizeType, SpriteSizeType];
  width?: SpriteSizeType;
};
export type AnimationSheet = {
  frame_count?: number;
  hr_version?: AnimationSheet;
  line_length?: number;
  variation_count: number;
};
export type AnimationVariations =
  | { sheet?: AnimationSheet; sheets?: AnimationSheet[] }
  | Animation
  | Animation[];
export type AnyPrototype = unknown;
export type AreaTriggerItem = {
  collision_mode?: 'distance-from-collision-box' | 'distance-from-center';
  radius: number;
  show_in_tooltip?: boolean;
  target_entities?: boolean;
  trigger_from_target?: boolean;
  type: 'area';
};
export type ArtilleryRangeModifier = {
  infer_icon?: boolean;
  type: 'artillery-range';
  use_icon_overlay_constant?: boolean;
};
export type ArtilleryRemoteCapsuleAction = {
  flare: EntityID;
  play_sound_on_failure?: boolean;
  type: 'artillery-remote';
};
export type ArtilleryTriggerDelivery = {
  direction_deviation?: number;
  projectile: EntityID;
  range_deviation?: number;
  starting_speed: number;
  starting_speed_deviation?: number;
  trigger_fired_artillery?: boolean;
  type: 'artillery';
};
export type AttackParameters =
  | ProjectileAttackParameters
  | BeamAttackParameters
  | StreamAttackParameters;
export type AttackReactionItem = {
  action?: Trigger;
  damage_type?: DamageTypeID;
  range: number;
  reaction_modifier?: number;
};
export type AutoplaceControlID = string;
export type AutoplacePeak = {
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
export type AutoplaceSettings = {
  settings?: Record<EntityID | TileID | DecorativeID, FrequencySizeRichness>;
  treat_missing_as_default?: boolean;
};
export type AutoplaceSpecification =
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
export type BaseAttackParameters = {
  activation_type?: 'shoot' | 'throw' | 'consume' | 'activate';
  ammo_categories?: AmmoCategoryID[];
  ammo_category?: AmmoCategoryID;
  ammo_consumption_modifier?: number;
  ammo_type?: AmmoType;
  animation?: RotatedAnimation;
  cooldown: number;
  cooldown_deviation?: number;
  cyclic_sound?: CyclicSound;
  damage_modifier?: number;
  fire_penalty?: number;
  health_penalty?: number;
  lead_target_for_projectile_speed?: number;
  min_attack_distance?: number;
  min_range?: number;
  movement_slow_down_cooldown?: number;
  movement_slow_down_factor?: number;
  range: number;
  range_mode?: 'center-to-center' | 'bounding-box-to-bounding-box';
  rotate_penalty?: number;
  sound?: LayeredSound;
  turn_range?: number;
  use_shooter_direction?: boolean;
  warmup?: number;
};
export type BaseEnergySource = {
  emissions_per_minute?: number;
  render_no_network_icon?: boolean;
  render_no_power_icon?: boolean;
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
  bottom_margin?: number;
  bottom_padding?: number;
  effect?: 'compilatron-hologram';
  effect_opacity?: number;
  height?: number;
  horizontal_align?: HorizontalAlign;
  horizontally_squashable?: StretchRule;
  horizontally_stretchable?: StretchRule;
  ignored_by_search?: boolean;
  left_margin?: number;
  left_padding?: number;
  margin?: number;
  maximal_height?: number;
  maximal_width?: number;
  minimal_height?: number;
  minimal_width?: number;
  natural_height?: number;
  natural_size?: number | [number, number];
  natural_width?: number;
  never_hide_by_search?: boolean;
  padding?: number;
  parent?: string;
  right_margin?: number;
  right_padding?: number;
  size?: number | [number, number];
  tooltip?: LocalisedString;
  top_margin?: number;
  top_padding?: number;
  vertical_align?: VerticalAlign;
  vertically_squashable?: StretchRule;
  vertically_stretchable?: StretchRule;
  width?: number;
};
export type BeaconGraphicsSet = {
  animation_layer?: RenderLayer;
  animation_list?: AnimationElement[];
  animation_progress?: number;
  apply_module_tint?: ModuleTint;
  apply_module_tint_to_light?: ModuleTint;
  base_layer?: RenderLayer;
  draw_animation_when_idle?: boolean;
  draw_light_when_idle?: boolean;
  light?: LightDefinition;
  max_animation_progress?: number;
  min_animation_progress?: number;
  module_icons_suppressed?: boolean;
  module_tint_mode?: 'single-module' | 'mix';
  module_visualisations?: BeaconModuleVisualizations[];
  no_modules_tint?: Color;
  random_animation_offset?: boolean;
  top_layer?: RenderLayer;
};
export type BeaconModuleVisualization = {
  apply_module_tint?: ModuleTint;
  draw_as_light?: boolean;
  draw_as_sprite?: boolean;
  has_empty_slot?: boolean;
  pictures?: SpriteVariations;
  render_layer?: RenderLayer;
  secondary_draw_order?: number;
};
export type BeaconModuleVisualizations = {
  art_style: string;
  slots?: BeaconModuleVisualization[][];
  tier_offset?: number;
  use_for_empty_slots?: boolean;
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
  source_direction_count?: number;
  source_offset?: Vector;
  type: 'beam';
};
export type BeamTriggerDelivery = {
  add_to_shooter?: boolean;
  beam: EntityID;
  duration?: number;
  max_length?: number;
  source_offset?: Vector;
  type: 'beam';
};
export type BeltTraverseTipTrigger = { count?: number; type: 'belt-traverse' };
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
export type BoolModifier = { modifier: boolean };
export type BorderImageSet = {
  border_width?: number;
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
  scale?: number;
  top_end?: Sprite;
  top_left_coner?: Sprite;
  top_right_corner?: Sprite;
  top_t?: Sprite;
  vertical_line?: Sprite;
};
export type BoundingBox = [MapPosition, MapPosition];
export type BoxSpecification = {
  is_whole_box?: boolean;
  max_side_length?: number;
  side_height?: number;
  side_length?: number;
  sprite: Sprite;
};
export type BuildEntityTipTrigger = {
  build_by_dragging?: boolean;
  build_in_line?: boolean;
  consecutive?: boolean;
  count?: number;
  entity?: EntityID;
  linear_power_pole_line?: boolean;
  match_type_only?: boolean;
  type: 'build-entity';
};
export type BurnerEnergySource = {
  burnt_inventory_size?: ItemStackIndex;
  effectivity?: number;
  fuel_categories?: FuelCategoryID[];
  fuel_category?: FuelCategoryID;
  fuel_inventory_size: ItemStackIndex;
  light_flicker?: LightFlickeringDefinition;
  smoke?: SmokeSource[];
  type?: 'burner';
};
export type ButtonStyleSpecification = {
  clicked_font_color?: Color;
  clicked_vertical_offset?: number;
  default_font_color?: Color;
  disabled_font_color?: Color;
  draw_grayscale_picture?: boolean;
  draw_shadow_under_picture?: boolean;
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
  use_icon_overlay_constant?: boolean;
};
export type CharacterCraftingSpeedModifier = {
  type: 'character-crafting-speed';
  use_icon_overlay_constant?: boolean;
};
export type CharacterHealthBonusModifier = {
  type: 'character-health-bonus';
  use_icon_overlay_constant?: boolean;
};
export type CharacterInventorySlotsBonusModifier = {
  type: 'character-inventory-slots-bonus';
  use_icon_overlay_constant?: boolean;
};
export type CharacterItemDropDistanceModifier = {
  type: 'character-item-drop-distance';
  use_icon_overlay_constant?: boolean;
};
export type CharacterItemPickupDistanceModifier = {
  type: 'character-item-pickup-distance';
  use_icon_overlay_constant?: boolean;
};
export type CharacterLogisticRequestsModifier = {
  type: 'character-logistic-requests';
  use_icon_overlay_constant?: boolean;
};
export type CharacterLogisticTrashSlotsModifier = {
  type: 'character-logistic-trash-slots';
  use_icon_overlay_constant?: boolean;
};
export type CharacterLootPickupDistanceModifier = {
  type: 'character-loot-pickup-distance';
  use_icon_overlay_constant?: boolean;
};
export type CharacterMiningSpeedModifier = {
  type: 'character-mining-speed';
  use_icon_overlay_constant?: boolean;
};
export type CharacterReachDistanceModifier = {
  type: 'character-reach-distance';
  use_icon_overlay_constant?: boolean;
};
export type CharacterResourceReachDistanceModifier = {
  type: 'character-resource-reach-distance';
  use_icon_overlay_constant?: boolean;
};
export type CharacterRunningSpeedModifier = {
  type: 'character-running-speed';
  use_icon_overlay_constant?: boolean;
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
  custom_tag_scale?: number;
  custom_tag_selected_overlay_tint: Color;
  default_color_by_type?: Record<string, Color>;
  default_enemy_color: Color;
  default_friendly_color: Color;
  default_friendly_color_by_type?: Record<string, Color>;
  electric_line_minimum_absolute_width: number;
  electric_line_width: number;
  electric_lines_color: Color;
  electric_lines_color_switch_disabled: Color;
  electric_lines_color_switch_enabled: Color;
  electric_power_pole_color: Color;
  entity_ghost_color: Color;
  explosion_visualization_duration: number;
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
  zoom_threshold_to_draw_spider_path?: number;
};
export type CheckBoxStyleSpecification = {
  checkmark?: Sprite;
  disabled_checkmark?: Sprite;
  disabled_font_color?: Color;
  font?: string;
  font_color?: Color;
  intermediate_mark?: Sprite;
  text_padding?: number;
  type: 'checkbox_style';
};
export type CircuitConnectorLayer = {
  east?: RenderLayer;
  north?: RenderLayer;
  south?: RenderLayer;
  west?: RenderLayer;
};
export type CircuitConnectorSecondaryDrawOrder = {
  east?: number;
  north?: number;
  south?: number;
  west?: number;
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
  creation_distance?: number;
  creation_distance_orientation?: number;
  direction?: number;
  direction_deviation?: number;
  height?: number;
  height_deviation?: number;
  name: ParticleID;
  speed?: number;
  speed_deviation?: number;
  starting_frame_speed: number;
  starting_frame_speed_deviation?: number;
  use_source_position?: boolean;
  vertical_speed?: number;
  vertical_speed_deviation?: number;
};
export type CircularProjectileCreationSpecification = [
  RealOrientation,
  Vector,
][];
export type ClearCursorTipTrigger = { count?: number; type: 'clear-cursor' };
export type CliffPlacementSettings = {
  cliff_elevation_0?: number;
  cliff_elevation_interval?: number;
  name?: EntityID;
  richness?: MapGenSize;
};
export type ClusterTriggerItem = {
  cluster_count: number;
  distance: number;
  distance_deviation?: number;
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
  | { a?: number; b?: number; g?: number; r?: number }
  | [number, number, number]
  | [number, number, number, number];
export type ColorFilterData = {
  localised_name: LocalisedString;
  matrix: number[][];
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
  column: number;
};
export type ColumnWidth = {
  column: number;
  maximal_width?: number;
  minimal_width?: number;
  width?: number;
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
  consecutive?: boolean;
  count?: number;
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
export type CreateEntityTriggerEffectItem = {
  check_buildability?: boolean;
  entity_name: EntityID;
  offset_deviation?: BoundingBox;
  offsets?: Vector | Vector[];
  show_in_tooltip?: boolean;
  tile_collision_mask?: CollisionMask;
  trigger_created_entity?: boolean;
  type: 'create-entity';
};
export type CreateExplosionTriggerEffectItem = {
  cycle_while_moving?: boolean;
  inherit_movement_distance_from_projectile?: boolean;
  max_movement_distance?: number;
  max_movement_distance_deviation?: number;
  type: 'create-explosion';
};
export type CreateFireTriggerEffectItem = {
  initial_ground_flame_count?: number;
  type: 'create-fire';
};
export type CreateParticleTriggerEffectItem = {
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
export type CreateSmokeTriggerEffectItem = {
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
export type CreateStickerTriggerEffectItem = {
  show_in_tooltip?: boolean;
  sticker: EntityID;
  trigger_created_entity?: boolean;
  type: 'create-sticker';
};
export type CreateTrivialSmokeEffectItem = {
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
export type DamagePrototype = { amount: number; type: DamageTypeID };
export type DamageTriggerEffectItem = {
  apply_damage_to_trees?: boolean;
  damage: DamagePrototype;
  lower_damage_modifier?: number;
  lower_distance_threshold?: number;
  type: 'damage';
  upper_damage_modifier?: number;
  upper_distance_threshold?: number;
  vaporize?: boolean;
};
export type DamageTypeFilters =
  | { types: DamageTypeID | DamageTypeID[]; whitelist?: boolean }
  | DamageTypeID
  | DamageTypeID[];
export type DamageTypeID = string;
export type Data = {
  extend: (extension: unknown) => void;
  is_demo: boolean;
  raw: Record<string, Record<string, AnyPrototype>>;
};
export type DataExtendMethod = (extension: unknown) => void;
export type DaytimeColorLookupTable = [number, FileName | 'identity'][];
export type DeconstructionTimeToLiveModifier = {
  type: 'deconstruction-time-to-live';
  use_icon_overlay_constant?: boolean;
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
  play_sound_on_failure?: boolean;
  radius: number;
  timeout?: number;
  type: 'destroy-cliffs';
  uses_stack?: boolean;
};
export type DestroyCliffsTriggerEffectItem = {
  explosion?: EntityID;
  radius: number;
  type: 'destroy-cliffs';
};
export type DestroyDecorativesTriggerEffectItem = {
  decoratives_with_trigger_only?: boolean;
  from_render_layer?: RenderLayer;
  include_decals?: boolean;
  include_soft_decoratives?: boolean;
  invoke_decorative_trigger?: boolean;
  radius: number;
  to_render_layer?: RenderLayer;
  type: 'destroy-decoratives';
};
export type DifficultySettings = {
  recipe_difficulty: number;
  research_queue_setting?: 'always' | 'after-victory' | 'never';
  technology_difficulty: number;
  technology_price_multiplier?: number;
};
export type DirectTriggerItem = { filter_enabled?: boolean; type: 'direct' };
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
  selector_and_title_spacing?: number;
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
export type EffectValue = { bonus?: number };
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
      background_blur?: boolean;
      background_blur_sigma?: number;
      border?: number;
      bottom?: Sprite;
      bottom_border?: number;
      bottom_outer_border_shift?: number;
      bottom_tiling?: boolean;
      bottom_width?: SpriteSizeType;
      center?: Sprite;
      center_height?: SpriteSizeType;
      center_tiling_horizontal?: boolean;
      center_tiling_vertical?: boolean;
      center_width?: SpriteSizeType;
      corner_size?: number | [number, number];
      custom_horizontal_tiling_sizes?: number[];
      draw_type?: 'inner' | 'outer';
      filename?: FileName;
      left?: Sprite;
      left_border?: number;
      left_bottom?: Sprite;
      left_height?: SpriteSizeType;
      left_outer_border_shift?: number;
      left_tiling?: boolean;
      left_top?: Sprite;
      load_in_minimal_mode?: boolean;
      opacity?: number;
      overall_tiling_horizontal_padding?: number;
      overall_tiling_horizontal_size?: number;
      overall_tiling_horizontal_spacing?: number;
      overall_tiling_vertical_padding?: number;
      overall_tiling_vertical_size?: number;
      overall_tiling_vertical_spacing?: number;
      position?: MapPosition;
      right?: Sprite;
      right_border?: number;
      right_bottom?: Sprite;
      right_height?: SpriteSizeType;
      right_outer_border_shift?: number;
      right_tiling?: boolean;
      right_top?: Sprite;
      scale?: number;
      stretch_monolith_image_to_size?: boolean;
      tint?: Color;
      top?: Sprite;
      top_border?: number;
      top_outer_border_shift?: number;
      top_tiling?: boolean;
      top_width?: SpriteSizeType;
      type?: 'none' | 'composition';
    }
  | Sprite;
export type EmptyWidgetStyleSpecification = {
  graphical_set?: ElementImageSet;
  type: 'empty_widget_style';
};
export type EnemyEvolutionSettings = {
  destroy_factor: number;
  enabled: boolean;
  pollution_factor: number;
  time_factor: number;
};
export type EnemyExpansionSettings = {
  building_coefficient: number;
  enabled: boolean;
  enemy_building_influence_radius: number;
  friendly_base_influence_radius: number;
  max_colliding_tiles_coefficient: number;
  max_expansion_cooldown: number;
  max_expansion_distance: number;
  min_expansion_cooldown: number;
  neighbouring_base_chunk_coefficient: number;
  neighbouring_chunk_coefficient: number;
  other_base_coefficient: number;
  settler_group_max_size: number;
  settler_group_min_size: number;
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
  bottom: number;
  left: number;
  right: number;
  top: number;
};
export type EntityTransferTipTrigger = {
  count?: number;
  transfer?: 'in' | 'out';
  type: 'entity-transfer';
};
export type EquipmentCategoryID = string;
export type EquipmentGridID = string;
export type EquipmentID = string;
export type EquipmentShape = {
  height: number;
  points?: number[][];
  type: 'full' | 'manual';
  width: number;
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
export type FastBeltBendTipTrigger = { count?: number; type: 'fast-belt-bend' };
export type FastReplaceTipTrigger = {
  count?: number;
  match_type_only?: boolean;
  source?: EntityID;
  target?: EntityID;
  type: 'fast-replace';
};
export type FileName = string;
export type FlameThrowerExplosionTriggerDelivery = {
  direction_deviation?: number;
  explosion: EntityID;
  projectile_starting_speed?: number;
  speed_deviation?: number;
  starting_distance: number;
  starting_frame_fraciton_deviation?: number;
  type: 'flame-thrower';
};
export type FlowStyleSpecification = {
  horizontal_spacing?: number;
  max_on_row?: number;
  type: 'flow_style';
  vertical_spacing?: number;
};
export type FluidBox = {
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
export type FluidBoxSecondaryDrawOrders = {
  east?: number;
  north?: number;
  south?: number;
  west?: number;
};
export type FluidEnergySource = {
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
export type FluidID = string;
export type FluidIngredientPrototype = {
  amount: number;
  catalyst_amount?: number;
  fluidbox_index?: number;
  maximum_temperature?: number;
  minimum_temperature?: number;
  name: FluidID;
  temperature?: number;
  type: 'fluid';
};
export type FluidProductPrototype = {
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
export type FluidWagonConnectorGraphics = {
  load_animations: PumpConnectorGraphics;
  unload_animations: PumpConnectorGraphics;
};
export type FollowerRobotLifetimeModifier = {
  infer_icon?: boolean;
  type: 'follower-robot-lifetime';
  use_icon_overlay_constant?: boolean;
};
export type FootprintParticle = {
  particle_name?: ParticleID;
  tiles: TileID[];
  use_as_default?: boolean;
};
export type FootstepTriggerEffectItem = {
  actions?: CreateParticleTriggerEffectItem[];
  tiles: TileID[];
  use_as_default?: boolean;
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
  drag_by_title?: boolean;
  graphical_set?: ElementImageSet;
  header_background?: ElementImageSet;
  header_filler_style?: EmptyWidgetStyleSpecification;
  header_flow_style?: HorizontalFlowStyleSpecification;
  horizontal_flow_style?: HorizontalFlowStyleSpecification;
  title_style?: LabelStyleSpecification;
  type: 'frame_style';
  use_header_filler?: boolean;
  vertical_flow_style?: VerticalFlowStyleSpecification;
};
export type FrequencySizeRichness = {
  frequency?: MapGenSize;
  richness?: MapGenSize;
  size?: MapGenSize;
};
export type FuelCategoryID = string;
export type GameControllerVibrationData = {
  duration?: number;
  high_frequency_vibration_intensity?: number;
  low_frequency_vibration_intensity?: number;
  play_for?: PlayFor;
};
export type GateOverRailBuildTipTrigger = {
  count?: number;
  type: 'gate-over-rail-build';
};
export type GhostTimeToLiveModifier = {
  type: 'ghost-time-to-live';
  use_icon_overlay_constant?: boolean;
};
export type GiveItemModifier = {
  count?: ItemCountType;
  item: ItemID;
  type: 'give-item';
  use_icon_overlay_constant?: boolean;
};
export type GlowStyleSpecification = {
  image_set?: ElementImageSet;
  type: 'glow_style';
};
export type GraphStyleSpecification = {
  background_color?: Color;
  data_line_highlight_distance?: number;
  graph_right_margin?: number;
  graph_top_margin?: number;
  grid_lines_color?: Color;
  guide_lines_color?: Color;
  horizontal_label_style?: LabelStyleSpecification;
  horizontal_labels_margin?: number;
  line_colors?: Color[];
  minimal_horizontal_label_spacing?: number;
  minimal_vertical_label_spacing?: number;
  selection_dot_radius?: number;
  type: 'graph_style';
  vertical_label_style?: LabelStyleSpecification;
  vertical_labels_margin?: number;
};
export type GroupAttackTipTrigger = { count?: number; type: 'group-attack' };
export type GunShift4Way = {
  east?: Vector;
  north: Vector;
  south?: Vector;
  west?: Vector;
};
export type GunSpeedModifier = {
  ammo_category: AmmoCategoryID;
  infer_icon?: boolean;
  modifier: number;
  type: 'gun-speed';
  use_icon_overlay_constant?: boolean;
};
export type HeatBuffer = {
  connections?: HeatConnection[];
  default_temperature?: number;
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
};
export type HeatConnection = { direction: Direction; position: MapPosition };
export type HeatEnergySource = {
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
export type HorizontalAlign = 'left' | 'center' | 'right';
export type HorizontalFlowStyleSpecification = {
  horizontal_spacing?: number;
  type: 'horizontal_flow_style';
};
export type HorizontalScrollBarStyleSpecification = {
  type: 'horizontal_scrollbar_style';
};
export type IconData = {
  icon: FileName;
  icon_mipmaps?: IconMipMapType;
  icon_size?: SpriteSizeType;
  scale?: number;
  shift?: Vector;
  tint?: Color;
};
export type IconMipMapType = number;
export type ImageStyleSpecification = {
  graphical_set?: ElementImageSet;
  stretch_image_to_widget_size?: boolean;
  type: 'image_style';
};
export type IngredientPrototype =
  | ItemIngredientPrototype
  | FluidIngredientPrototype;
export type InsertItemTriggerEffectItem = {
  count?: number;
  item: ItemID;
  type: 'insert-item';
};
export type InserterStackSizeBonusModifier = {
  infer_icon?: boolean;
  type: 'inserter-stack-size-bonus';
  use_icon_overlay_constant?: boolean;
};
export type InstantTriggerDelivery = { type: 'instant' };
export type InterruptibleSound = { fade_ticks?: number; sound: Sound };
export type InvokeTileEffectTriggerEffectItem = {
  tile_collision_mask?: CollisionMask;
  type: 'invoke-tile-trigger';
};
export type ItemCountType = number;
export type ItemGroupID = string;
export type ItemID = string;
export type ItemIngredientPrototype =
  | { amount: number; catalyst_amount?: number; name: ItemID; type?: 'item' }
  | [ItemID, number];
export type ItemProductPrototype =
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
export type ItemStackIndex = number;
export type ItemSubGroupID = string;
export type ItemToPlace = { count: number; item: ItemID };
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
  single_line?: boolean;
  type: 'label_style';
  underlined?: boolean;
};
export type LaboratoryProductivityModifier = {
  infer_icon?: boolean;
  type: 'laboratory-productivity';
  use_icon_overlay_constant?: boolean;
};
export type LaboratorySpeedModifier = {
  infer_icon?: boolean;
  type: 'laboratory-speed';
  use_icon_overlay_constant?: boolean;
};
export type LayeredSound = { layers: Sound[] } | Sound;
export type LightDefinition =
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
export type LightFlickeringDefinition = {
  border_fix_speed?: number;
  color?: Color;
  derivation_change_deviation?: number;
  derivation_change_frequency?: number;
  light_intensity_to_size_coefficient?: number;
  maximum_intensity?: number;
  minimum_intensity?: number;
  minimum_light_size?: number;
};
export type LimitChestTipTrigger = { count?: number; type: 'limit-chest' };
export type LineStyleSpecification = {
  border?: BorderImageSet;
  type: 'line_style';
};
export type LineTriggerItem = {
  range: number;
  range_effects?: TriggerEffect;
  type: 'line';
  width: number;
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
export type LocalisedString = string | number | boolean | LocalisedString[];
export type LootItem = {
  count_max?: number;
  count_min?: number;
  item: ItemID;
  probability?: number;
};
export type LowPowerTipTrigger = { count?: number; type: 'low-power' };
export type ManualTransferTipTrigger = {
  count?: number;
  type: 'manual-transfer';
};
export type ManualWireDragTipTrigger = {
  count?: number;
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
  decorative_editor_selection_preview_radius: number;
  decorative_editor_selection_preview_tint: Color;
  force_editor_select_area_color: Color;
  script_editor_drag_area_color: Color;
  script_editor_select_area_color: Color;
  tile_editor_area_selection_color: Color;
  tile_editor_selection_preview_radius: number;
  tile_editor_selection_preview_tint: Color;
};
export type MapGenPreset = {
  advanced_settings?: AdvancedMapGenSettings;
  basic_settings?: MapGenSettings;
  default?: boolean;
  order: Order;
};
export type MapGenPresetDifficultySettings = {
  recipe_difficulty?: number;
  research_queue_setting?: 'always' | 'after-victory' | 'never';
  technology_difficulty?: number;
  technology_price_multiplier?: number;
};
export type MapGenPresetEnemyEvolutionSettings = {
  destroy_factor?: number;
  enabled?: boolean;
  pollution_factor?: number;
  time_factor?: number;
};
export type MapGenPresetEnemyExpansionSettings = {
  enabled?: boolean;
  max_expansion_cooldown?: number;
  max_expansion_distance?: number;
  min_expansion_cooldown?: number;
  settler_group_max_size?: number;
  settler_group_min_size?: number;
};
export type MapGenPresetPollutionSettings = {
  ageing?: number;
  diffusion_ratio?: number;
  enabled?: boolean;
  enemy_attack_pollution_consumption_modifier?: number;
  min_pollution_to_damage_trees?: number;
  pollution_restored_per_tree_damage?: number;
};
export type MapGenSettings = {
  autoplace_controls?: Record<AutoplaceControlID, FrequencySizeRichness>;
  autoplace_settings?: Record<
    'entity' | 'tile' | 'decorative',
    AutoplaceSettings
  >;
  cliff_settings?: CliffPlacementSettings;
  default_enable_all_autoplace_controls?: boolean;
  height?: number;
  peaceful_mode?: boolean;
  property_expression_names?: Record<string, string | boolean | number>;
  seed?: number;
  starting_area?: MapGenSize;
  starting_points?: MapPosition[];
  terrain_segmentation?: MapGenSize;
  water?: MapGenSize;
  width?: number;
};
export type MapGenSize =
  | number
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
export type MapPosition = { x: number; y: number } | [number, number];
export type MaterialAmountType = number;
export type MaxFailedAttemptsPerTickPerConstructionQueueModifier = {
  type: 'max-failed-attempts-per-tick-per-construction-queue';
  use_icon_overlay_constant?: boolean;
};
export type MaxSuccessfulAttemptsPerTickPerConstructionQueueModifier = {
  type: 'max-successful-attempts-per-tick-per-construction-queue';
  use_icon_overlay_constant?: boolean;
};
export type MaximumFollowingRobotsCountModifier = {
  infer_icon?: boolean;
  type: 'maximum-following-robots-count';
  use_icon_overlay_constant?: boolean;
};
export type MinableProperties = {
  count?: number;
  fluid_amount?: number;
  mining_particle?: ParticleID;
  mining_time: number;
  mining_trigger?: Trigger;
  required_fluid?: FluidID;
  result?: ItemID;
  results?: ProductPrototype[];
};
export type MinimapStyleSpecification = { type: 'minimap_style' };
export type MiningDrillGraphicsSet = {
  always_draw_idle_animation?: boolean;
  animation?: Animation4Way;
  animation_progress?: number;
  circuit_connector_layer?: RenderLayer | CircuitConnectorLayer;
  circuit_connector_secondary_draw_order?:
    | number
    | CircuitConnectorSecondaryDrawOrder;
  default_recipe_tint?: DefaultRecipeTint;
  drilling_vertical_movement_duration?: number;
  idle_animation?: Animation4Way;
  max_animation_progress?: number;
  min_animation_progress?: number;
  shift_animation_transition_duration?: number;
  shift_animation_waypoint_stop_duration?: number;
  shift_animation_waypoints?: ShiftAnimationWaypoints;
  status_colors?: StatusColors;
  working_visualisations?: WorkingVisualisation[];
};
export type MiningDrillProductivityBonusModifier = {
  infer_icon?: boolean;
  type: 'mining-drill-productivity-bonus';
  use_icon_overlay_constant?: boolean;
};
export type ModSetting = { value: number | number | boolean | string | Color };
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
  module_info_icon_scale?: number;
  module_info_icon_shift?: Vector;
  module_info_max_icon_rows?: number;
  module_info_max_icons_per_row?: number;
  module_info_multi_row_initial_height_modifier?: number;
  module_info_separation_multiplier?: number;
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
  literal_value: boolean;
  type: 'literal-boolean';
};
export type NoiseLiteralExpression = {
  literal_value: NoiseExpression;
  type: 'literal-expression';
};
export type NoiseLiteralNumber = {
  literal_value: number;
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
  use_icon_overlay_constant?: boolean;
};
export type OffshorePumpGraphicsSet = {
  animation: Animation4Way;
  base_pictures?: Sprite4Way;
  base_render_layer?: RenderLayer;
  fluid_animation?: Animation4Way;
  glass_pictures?: Sprite4Way;
  underwater_layer_offset?: number;
  underwater_pictures?: Sprite4Way;
};
export type OrTipTrigger = { triggers: TipTrigger[]; type: 'or' };
export type Order = string;
export type OrientedCliffPrototype = {
  collision_bounding_box: BoundingBox;
  fill_volume: number;
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
  less_than: number;
};
export type ParticleID = string;
export type PasteEntitySettingsTipTrigger = {
  count?: number;
  match_type_only?: boolean;
  source?: EntityID;
  target?: EntityID;
  type: 'paste-entity-settings';
};
export type PathFinderSettings = {
  cache_accept_path_end_distance_ratio: number;
  cache_accept_path_start_distance_ratio: number;
  cache_max_connect_to_cache_steps_multiplier: number;
  cache_path_end_distance_rating_multiplier: number;
  cache_path_start_distance_rating_multiplier: number;
  direct_distance_to_consider_short_request: number;
  enemy_with_different_destination_collision_penalty: number;
  extended_collision_penalty: number;
  fwd2bwd_ratio: number;
  general_entity_collision_penalty: number;
  general_entity_subsequent_collision_penalty: number;
  goal_pressure_ratio: number;
  ignore_moving_enemy_collision_distance: number;
  long_cache_min_cacheable_distance: number;
  long_cache_size: number;
  max_clients_to_accept_any_new_request: number;
  max_clients_to_accept_short_new_request: number;
  max_steps_worked_per_tick: number;
  max_work_done_per_tick: number;
  min_steps_to_check_path_find_termination: number;
  negative_cache_accept_path_end_distance_ratio: number;
  negative_cache_accept_path_start_distance_ratio: number;
  overload_levels: number[];
  overload_multipliers: number[];
  short_cache_min_algo_steps_to_cache: number;
  short_cache_min_cacheable_distance: number;
  short_cache_size: number;
  short_request_max_steps: number;
  short_request_ratio: number;
  stale_enemy_with_same_destination_collision_penalty: number;
  start_to_goal_cost_multiplier_to_terminate_path_find: number;
  use_path_cache: boolean;
};
export type PipeConnectionDefinition = {
  max_underground_distance?: number;
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
  condition_size: number;
  result: TileID;
};
export type PlaceEquipmentTipTrigger = {
  count?: number;
  equipment?: EquipmentID;
  type: 'place-equipment';
};
export type PlayFor = 'character_actions' | 'everything';
export type PlaySoundTriggerEffectItem = {
  audible_distance_modifier?: number;
  max_distance?: number;
  min_distance?: number;
  play_on_target_position?: boolean;
  sound: Sound;
  type: 'play-sound';
  volume_modifier?: number;
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
  ageing: number;
  diffusion_ratio: number;
  enabled: boolean;
  enemy_attack_pollution_consumption_modifier: number;
  expected_max_per_chunk: number;
  max_pollution_to_restore_trees: number;
  min_pollution_to_damage_trees: number;
  min_to_diffuse: number;
  min_to_show_per_chunk: number;
  pollution_per_tree_damage: number;
  pollution_restored_per_tree_damage: number;
  pollution_with_max_forest_damage: number;
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
  bar_width?: number;
  color?: Color;
  embed_text_in_bar?: boolean;
  filled_font_color?: Color;
  font?: string;
  font_color?: Color;
  other_colors?: OtherColors[];
  side_text_padding?: number;
  type: 'progressbar_style';
};
export type ProjectileAttackParameters = {
  projectile_center?: Vector;
  projectile_creation_distance?: number;
  projectile_creation_parameters?: CircularProjectileCreationSpecification;
  projectile_orientation_offset?: number;
  shell_particle?: CircularParticleCreationSpecification;
  type: 'projectile';
};
export type ProjectileTriggerDelivery = {
  direction_deviation?: number;
  max_range?: number;
  min_range?: number;
  projectile: EntityID;
  range_deviation?: number;
  starting_speed: number;
  starting_speed_deviation?: number;
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
export type PushBackTriggerEffectItem = { distance: number; type: 'push-back' };
export type RadioButtonStyleSpecification = {
  disabled_font_color?: Color;
  font?: string;
  font_color?: Color;
  text_padding?: number;
  type: 'radiobutton_style';
};
export type RadiusVisualisationSpecification = {
  distance?: number;
  draw_in_cursor?: boolean;
  draw_on_selection?: boolean;
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
export type RealOrientation = number;
export type RecipeCategoryID = string;
export type RecipeData = {
  allow_as_intermediate?: boolean;
  allow_decomposition?: boolean;
  allow_inserter_overload?: boolean;
  allow_intermediates?: boolean;
  always_show_made_in?: boolean;
  always_show_products?: boolean;
  emissions_multiplier?: number;
  enabled?: boolean;
  energy_required?: number;
  hidden?: boolean;
  hide_from_player_crafting?: boolean;
  hide_from_stats?: boolean;
  ingredients: IngredientPrototype[];
  main_product?: string;
  overload_multiplier?: number;
  requester_paste_multiplier?: number;
  result?: ItemID;
  result_count?: number;
  results?: ProductPrototype[];
  show_amount_in_title?: boolean;
  unlock_results?: boolean;
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
  decrease?: number;
  percent?: number;
  type: DamageTypeID;
};
export type ResourceCategoryID = string;
export type RichTextSetting = 'enabled' | 'disabled' | 'highlight';
export type RotatedAnimation = {
  apply_projection?: boolean;
  axially_symmetrical?: boolean;
  counterclockwise?: boolean;
  direction_count?: number;
  filename?: FileName;
  filenames?: FileName[];
  hr_version?: RotatedAnimation;
  layers?: RotatedAnimation[];
  lines_per_file?: number;
  middle_orientation?: RealOrientation;
  orientation_range?: number;
  slice?: number;
  still_frame?: number;
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
  allow_low_quality_rotation?: boolean;
  apply_projection?: boolean;
  axially_symmetrical?: boolean;
  back_equals_front?: boolean;
  counterclockwise?: boolean;
  direction_count?: number;
  filename?: FileName;
  filenames?: FileName[];
  generate_sdf?: boolean;
  hr_version?: RotatedSprite;
  layers?: RotatedSprite[];
  line_length?: number;
  lines_per_file?: number;
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
  dont_force_clipping_rect_for_contents?: boolean;
  extra_bottom_margin_when_activated?: number;
  extra_bottom_padding_when_activated?: number;
  extra_left_margin_when_activated?: number;
  extra_left_padding_when_activated?: number;
  extra_margin_when_activated?: number;
  extra_padding_when_activated?: number;
  extra_right_margin_when_activated?: number;
  extra_right_padding_when_activated?: number;
  extra_top_margin_when_activated?: number;
  extra_top_padding_when_activated?: number;
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
  consecutive?: boolean;
  count?: number;
  entity?: EntityID;
  match_type_only?: boolean;
  type: 'set-filter';
};
export type SetLogisticRequestTipTrigger = {
  count?: number;
  logistic_chest_only?: boolean;
  type: 'set-logistic-request';
};
export type SetRecipeTipTrigger = {
  consecutive?: boolean;
  machine?: EntityID;
  recipe?: RecipeID;
  type: 'set-recipe';
  uses_fluid?: boolean;
};
export type SetTileTriggerEffectItem = {
  apply_projection?: boolean;
  radius: number;
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
export type ShiftBuildTipTrigger = { count?: number; type: 'shift-build' };
export type ShowExplosionOnChartTriggerEffectItem = {
  scale: number;
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
export type SimpleModifier = { modifier: number };
export type SimulationDefinition = {
  checkboard?: boolean;
  generate_map?: boolean;
  init?: string;
  init_file?: FileName;
  init_update_count?: number;
  length?: number;
  mods?: string[];
  override_volume?: boolean;
  save?: FileName;
  update?: string;
  update_file?: FileName;
  volume_modifier?: number;
};
export type SliderStyleSpecification = {
  button?: ButtonStyleSpecification;
  draw_notches?: boolean;
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
export type Sound =
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
export type SoundDefinition = {
  filename: FileName;
  max_speed?: number;
  min_speed?: number;
  preload?: boolean;
  speed?: number;
  volume?: number;
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
  | { evolution_factor: number; spawn_weight: number }
  | [number, number];
export type SpeechBubbleStyleSpecification = {
  arrow_graphical_set?: ElementImageSet;
  arrow_indent?: number;
  close_color?: Color;
  frame_style?: FrameStyleSpecification;
  label_style?: LabelStyleSpecification;
  pass_through_mouse?: boolean;
  type: 'speech_bubble_style';
};
export type SpiderEnginePrototype = {
  legs: SpiderLegSpecification | SpiderLegSpecification[];
  military_target?: string;
};
export type SpiderLegGraphicsSet = {
  joint?: Sprite;
  joint_shadow?: Sprite;
  joint_turn_offset?: number;
  lower_part?: SpiderLegPart;
  lower_part_shadow?: SpiderLegPart;
  lower_part_water_reflection?: SpiderLegPart;
  upper_part?: SpiderLegPart;
  upper_part_shadow?: SpiderLegPart;
  upper_part_water_reflection?: SpiderLegPart;
};
export type SpiderLegPart = {
  bottom_end?: Sprite;
  bottom_end_length?: number;
  middle?: Sprite;
  middle_offset_from_bottom?: number;
  middle_offset_from_top?: number;
  top_end?: Sprite;
  top_end_length?: number;
};
export type SpiderLegSpecification = {
  blocking_legs: number[];
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
  autopilot_path_visualisation_line_width?: number;
  autopilot_path_visualisation_on_map_line_width?: number;
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
  frames?: number;
  generate_sdf?: boolean;
  hr_version?: SpriteNWaySheet;
};
export type SpriteParameters = {
  apply_runtime_tint?: boolean;
  blend_mode?: BlendMode;
  draw_as_glow?: boolean;
  draw_as_light?: boolean;
  draw_as_shadow?: boolean;
  filename: FileName;
  flags?: SpriteFlags;
  generate_sdf?: boolean;
  height?: SpriteSizeType;
  load_in_minimal_mode?: boolean;
  mipmap_count?: number;
  position?: [SpriteSizeType, SpriteSizeType];
  premul_alpha?: boolean;
  priority?: SpritePriority;
  scale?: number;
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
  line_length?: number;
  repeat_count?: number;
  variation_count?: number;
};
export type SpriteSizeType = number;
export type SpriteVariations = { sheet: SpriteSheet } | SpriteSheet | Sprite[];
export type StackInserterCapacityBonusModifier = {
  infer_icon?: boolean;
  type: 'stack-inserter-capacity-bonus';
  use_icon_overlay_constant?: boolean;
};
export type StackTransferTipTrigger = {
  count?: number;
  transfer?: 'stack' | 'inventory' | 'whole-inventory';
  type: 'stack-transfer';
};
export type StateSteeringSettings = {
  force_unit_fuzzy_goto_behavior: boolean;
  radius: number;
  separation_factor: number;
  separation_force: number;
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
  fluid_consumption?: number;
  fluids?: StreamFluidProperties[];
  gun_barrel_length?: number;
  gun_center_shift?: Vector | GunShift4Way;
  projectile_creation_parameters?: CircularProjectileCreationSpecification;
  type: 'stream';
};
export type StreamFluidProperties = { damage_modifier?: number; type: FluidID };
export type StreamTriggerDelivery = {
  source_offset?: Vector;
  stream: EntityID;
  type: 'stream';
};
export type StretchRule = 'on' | 'off' | 'auto' | 'stretch_and_expand';
export type Stripe = {
  filename: FileName;
  height_in_frames: number;
  width_in_frames: number;
  x?: number;
  y?: number;
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
  left_button_position?: number;
  middle_button_position?: number;
  right_button_position?: number;
  type: 'switch_style';
};
export type TabStyleSpecification = {
  badge_font?: string;
  badge_horizontal_spacing?: number;
  default_badge_font_color?: Color;
  default_badge_graphical_set?: ElementImageSet;
  default_font_color?: Color;
  default_graphical_set?: ElementImageSet;
  disabled_badge_font_color?: Color;
  disabled_badge_graphical_set?: ElementImageSet;
  disabled_font_color?: Color;
  disabled_graphical_set?: ElementImageSet;
  draw_grayscale_picture?: boolean;
  font?: string;
  game_controller_selected_hover_graphical_set?: ElementImageSet;
  hover_badge_graphical_set?: ElementImageSet;
  hover_graphical_set?: ElementImageSet;
  left_click_sound?: Sound;
  left_edge_selected_graphical_set?: ElementImageSet;
  override_graphics_on_edges?: boolean;
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
  vertical_spacing?: number;
};
export type TableStyleSpecification = {
  apply_row_graphical_set_per_column?: boolean;
  background_graphical_set?: ElementImageSet;
  border?: BorderImageSet;
  bottom_cell_padding?: number;
  cell_padding?: number;
  clicked_graphical_set?: ElementImageSet;
  column_alignments?: ColumnAlignment[];
  column_graphical_set?: ElementImageSet;
  column_ordering_ascending_button_style?: ButtonStyleSpecification;
  column_ordering_descending_button_style?: ButtonStyleSpecification;
  column_widths?: ColumnWidth[];
  default_row_graphical_set?: ElementImageSet;
  even_row_graphical_set?: ElementImageSet;
  horizontal_line_color?: Color;
  horizontal_spacing?: number;
  hovered_graphical_set?: ElementImageSet;
  hovered_row_color?: Color;
  inactive_column_ordering_ascending_button_style?: ButtonStyleSpecification;
  inactive_column_ordering_descending_button_style?: ButtonStyleSpecification;
  left_cell_padding?: number;
  odd_row_graphical_set?: ElementImageSet;
  right_cell_padding?: number;
  selected_clicked_graphical_set?: ElementImageSet;
  selected_graphical_set?: ElementImageSet;
  selected_hovered_graphical_set?: ElementImageSet;
  selected_row_color?: Color;
  top_cell_padding?: number;
  type: 'table_style';
  vertical_line_color?: Color;
  vertical_spacing?: number;
};
export type TechnologyData = {
  effects?: Modifier[];
  enabled?: boolean;
  hidden?: boolean;
  ignore_tech_cost_multiplier?: boolean;
  max_level?: number | 'infinite';
  prerequisites?: TechnologyID[];
  unit: TechnologyUnit;
  upgrade?: boolean;
  visible_when_disabled?: boolean;
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
  ingredient_icon_overlap?: number;
  ingredient_icon_size?: number;
  ingredients_height?: number;
  ingredients_padding?: number;
  level_band?: ElementImageSet;
  level_band_height?: number;
  level_band_width?: number;
  level_font?: string;
  level_font_color?: Color;
  level_offset_x?: number;
  level_offset_y?: number;
  level_range_band?: ElementImageSet;
  level_range_font?: string;
  level_range_font_color?: Color;
  level_range_offset_x?: number;
  level_range_offset_y?: number;
  progress_bar?: ElementImageSet;
  progress_bar_background?: ElementImageSet;
  progress_bar_color?: Color;
  progress_bar_height?: number;
  progress_bar_shadow?: ElementImageSet;
  type: 'technology_slot_style';
};
export type TechnologyUnit = {
  count?: number;
  count_formula?: string;
  ingredients: IngredientPrototype[];
  time: number;
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
  uses_stack?: boolean;
};
export type TileAndAlpha = { alpha: number; tile: TileID };
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
  count: number;
  hr_version?: TileSprite;
  line_length?: number;
  picture: FileName;
  scale?: number;
  x?: SpriteSizeType;
  y?: SpriteSizeType;
};
export type TileSpriteWithProbability = {
  probability?: number;
  size: number;
  weights?: number[];
};
export type TileTransitionSprite = {
  count: number;
  hr_version?: TileTransitionSprite;
  picture: FileName;
  scale?: number;
  tall?: boolean;
  x?: SpriteSizeType;
  y?: SpriteSizeType;
};
export type TileTransitions = {
  apply_effect_color_to_overlay?: boolean;
  background_layer_group?: TileRenderLayer;
  background_layer_offset?: number;
  effect_mask?: Animation;
  empty_transitions?: boolean;
  inner_corner?: TileTransitionSprite;
  inner_corner_background?: TileTransitionSprite;
  inner_corner_background_mask?: TileTransitionSprite;
  inner_corner_effect_map?: TileTransitionSprite;
  inner_corner_mask?: TileTransitionSprite;
  inner_corner_weights?: number[];
  layer?: number;
  masked_background_layer_offset?: number;
  masked_overlay_layer_offset?: number;
  o_transition?: TileSprite;
  o_transition_background?: TileSprite;
  o_transition_background_mask?: TileSprite;
  o_transition_effect_map?: TileSprite;
  o_transition_mask?: TileSprite;
  offset_background_layer_by_tile_layer?: boolean;
  outer_corner?: TileTransitionSprite;
  outer_corner_background?: TileTransitionSprite;
  outer_corner_background_mask?: TileTransitionSprite;
  outer_corner_effect_map?: TileTransitionSprite;
  outer_corner_mask?: TileTransitionSprite;
  outer_corner_weights?: number[];
  overlay_layer_group?: TileRenderLayer;
  overlay_layer_offset?: number;
  side?: TileTransitionSprite;
  side_background?: TileTransitionSprite;
  side_background_mask?: TileTransitionSprite;
  side_effect_map?: TileTransitionSprite;
  side_mask?: TileTransitionSprite;
  side_weights?: number[];
  u_transition?: TileTransitionSprite;
  u_transition_background?: TileTransitionSprite;
  u_transition_background_mask?: TileTransitionSprite;
  u_transition_effect_map?: TileTransitionSprite;
  u_transition_mask?: TileTransitionSprite;
  u_transition_weights?: number[];
  water_patch?: Sprite;
};
export type TileTransitionsBetweenTransitions = {
  transition_group1: number;
  transition_group2: number;
};
export type TileTransitionsToTiles = {
  to_tiles: TileID[];
  transition_group: number;
};
export type TileTransitionsVariants = {
  main: TileSpriteWithProbability[];
  material_background?: TileSprite;
};
export type TimeElapsedTipTrigger = { ticks: number; type: 'time-elapsed' };
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
  infer_icon?: boolean;
  type: 'train-braking-force-bonus';
  use_icon_overlay_constant?: boolean;
};
export type TrainPathFinderConstants = {
  signal_reserved_by_circuit_network_penalty: number;
  stopped_manually_controlled_train_penalty: number;
  stopped_manually_controlled_train_without_passenger_penalty: number;
  train_arriving_to_signal_penalty: number;
  train_arriving_to_station_penalty: number;
  train_auto_without_schedule_penalty: number;
  train_in_station_penalty: number;
  train_in_station_with_no_other_valid_stops_in_schedule: number;
  train_stop_penalty: number;
  train_waiting_at_signal_penalty: number;
  train_waiting_at_signal_tick_multiplier_penalty: number;
  train_with_no_path_penalty: number;
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
  east_index?: number;
  ending_east_index?: number;
  ending_north_index?: number;
  ending_patch?: Sprite4Way;
  ending_south_index?: number;
  ending_west_index?: number;
  ends_with_stopper?: boolean;
  north_index?: number;
  south_index?: number;
  starting_east_index?: number;
  starting_north_index?: number;
  starting_south_index?: number;
  starting_west_index?: number;
  west_index?: number;
};
export type TransportBeltAnimationSetWithCorners = {
  east_to_north_index?: number;
  east_to_south_index?: number;
  north_to_east_index?: number;
  north_to_west_index?: number;
  south_to_east_index?: number;
  south_to_west_index?: number;
  west_to_north_index?: number;
  west_to_south_index?: number;
};
export type TransportBeltConnectorFrame = {
  frame_back_patch?: SpriteVariations;
  frame_front_patch?: SpriteVariations;
  frame_main: AnimationVariations;
  frame_main_scanner: Animation;
  frame_main_scanner_cross_horizontal_end_shift: Vector;
  frame_main_scanner_cross_horizontal_rotation: RealOrientation;
  frame_main_scanner_cross_horizontal_start_shift: Vector;
  frame_main_scanner_cross_horizontal_y_scale: number;
  frame_main_scanner_cross_vertical_end_shift: Vector;
  frame_main_scanner_cross_vertical_rotation: RealOrientation;
  frame_main_scanner_cross_vertical_start_shift: Vector;
  frame_main_scanner_cross_vertical_y_scale: number;
  frame_main_scanner_horizontal_end_shift: Vector;
  frame_main_scanner_horizontal_rotation: RealOrientation;
  frame_main_scanner_horizontal_start_shift: Vector;
  frame_main_scanner_horizontal_y_scale: number;
  frame_main_scanner_movement_speed: number;
  frame_main_scanner_nw_ne: Animation;
  frame_main_scanner_sw_se: Animation;
  frame_main_scanner_vertical_end_shift: Vector;
  frame_main_scanner_vertical_rotation: RealOrientation;
  frame_main_scanner_vertical_start_shift: Vector;
  frame_main_scanner_vertical_y_scale: number;
  frame_shadow: AnimationVariations;
};
export type TreeVariation = {
  branch_generation: CreateParticleTriggerEffectItem;
  disable_shadow_distortion_beginning_at_frame?: number;
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
  affects_target?: boolean;
  damage_type_filters?: DamageTypeFilters;
  probability?: number;
  repeat_count?: number;
  repeat_count_deviation?: number;
  show_in_tooltip?: boolean;
};
export type TriggerItem = {
  action_delivery?: TriggerDelivery | TriggerDelivery[];
  collision_mask?: CollisionMask;
  entity_flags?: EntityPrototypeFlags;
  force?: ForceCondition;
  ignore_collision_condition?: boolean;
  probability?: number;
  repeat_count?: number;
  trigger_target_mask?: TriggerTargetMask;
};
export type TriggerTargetMask = string[];
export type TrivialSmokeID = string;
export type TurretAttackModifier = {
  infer_icon?: boolean;
  modifier: number;
  turret_id: EntityID;
  type: 'turret-attack';
  use_icon_overlay_constant?: boolean;
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
  allow_try_return_to_spawner?: boolean;
  destroy_when_commands_fail?: boolean;
  do_separation?: boolean;
  path_resolution_modifier?: number;
};
export type UnitAlternativeFrameSequence = {
  attacking_animation_speed: number;
  attacking_frame_sequence: number[];
  back_to_walk_animation_speed: number;
  back_to_walk_frame_sequence: number[];
  cooldown_animation_speed: number;
  cooldown_frame_sequence: number[];
  prepared_animation_speed: number;
  prepared_frame_sequence: number[];
  warmup2_frame_sequence: number[];
  warmup_animation_speed: number;
  warmup_frame_sequence: number[];
};
export type UnitGroupSettings = {
  max_gathering_unit_groups: number;
  max_group_gathering_time: number;
  max_group_member_fallback_factor: number;
  max_group_radius: number;
  max_group_slowdown_factor: number;
  max_member_slowdown_when_ahead: number;
  max_member_speedup_when_behind: number;
  max_unit_group_size: number;
  max_wait_time_for_late_members: number;
  member_disown_distance: number;
  min_group_gathering_time: number;
  min_group_radius: number;
  tick_tolerance_when_member_arrives: number;
};
export type UnitSpawnDefinition =
  | { spawn_points: SpawnPoint[]; unit: EntityID }
  | [EntityID, SpawnPoint[]];
export type UnlockRecipeModifier = {
  recipe: RecipeID;
  type: 'unlock-recipe';
  use_icon_overlay_constant?: boolean;
};
export type UnlockRecipeTipTrigger = {
  recipe: RecipeID;
  type: 'unlock-recipe';
};
export type UseConfirmTipTrigger = { count?: number; type: 'use-confirm' };
export type UseOnSelfCapsuleAction = {
  attack_parameters: AttackParameters;
  type: 'use-on-self';
  uses_stack?: boolean;
};
export type UsePipetteTipTrigger = { count?: number; type: 'use-pipette' };
export type Vector = { x: number; y: number } | [number, number];
export type Vector3D =
  | { x: number; y: number; z: number }
  | [number, number, number];
export type VectorRotation = { frames: Vector[]; render_layer?: RenderLayer };
export type VerticalAlign = 'top' | 'center' | 'bottom';
export type VerticalFlowStyleSpecification = {
  type: 'vertical_flow_style';
  vertical_spacing?: number;
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
  orientation_to_variation?: boolean;
  pictures?: SpriteVariations;
  rotate?: boolean;
};
export type WireConnectionPoint = { shadow: WirePosition; wire: WirePosition };
export type WirePosition = { copper?: Vector; green?: Vector; red?: Vector };
export type WorkerRobotBatteryModifier = {
  infer_icon?: boolean;
  type: 'worker-robot-battery';
  use_icon_overlay_constant?: boolean;
};
export type WorkerRobotSpeedModifier = {
  infer_icon?: boolean;
  type: 'worker-robot-speed';
  use_icon_overlay_constant?: boolean;
};
export type WorkerRobotStorageModifier = {
  infer_icon?: boolean;
  type: 'worker-robot-storage';
  use_icon_overlay_constant?: boolean;
};
export type WorkingSound =
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
export type WorkingVisualisation = {
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
export type ZoomToWorldBlueprintEnabledModifier = {
  type: 'zoom-to-world-blueprint-enabled';
  use_icon_overlay_constant?: boolean;
};
export type ZoomToWorldDeconstructionPlannerEnabledModifier = {
  type: 'zoom-to-world-deconstruction-planner-enabled';
  use_icon_overlay_constant?: boolean;
};
export type ZoomToWorldEnabledModifier = {
  type: 'zoom-to-world-enabled';
  use_icon_overlay_constant?: boolean;
};
export type ZoomToWorldGhostBuildingEnabledModifier = {
  type: 'zoom-to-world-ghost-building-enabled';
  use_icon_overlay_constant?: boolean;
};
export type ZoomToWorldSelectionToolEnabledModifier = {
  type: 'zoom-to-world-selection-tool-enabled';
  use_icon_overlay_constant?: boolean;
};
export type ZoomToWorldUpgradePlannerEnabledModifier = {
  type: 'zoom-to-world-upgrade-planner-enabled';
  use_icon_overlay_constant?: boolean;
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
