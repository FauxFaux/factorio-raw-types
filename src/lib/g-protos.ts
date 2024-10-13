export interface AccumulatorPrototype extends EntityWithOwnerPrototype {
  charge_animation?: Animation;
  charge_cooldown: uint16;
  charge_light?: LightDefinition;
  circuit_connector_sprites?: CircuitConnectorSprites;
  circuit_wire_connection_point?: WireConnectionPoint;
  circuit_wire_max_distance?: double;
  default_output_signal?: SignalIDConnector;
  discharge_animation?: Animation;
  discharge_cooldown: uint16;
  discharge_light?: LightDefinition;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  energy_source: ElectricEnergySource;
  picture?: Sprite;
}
export interface AchievementPrototype extends PrototypeBase {
  allowed_without_fight?: bool;
  hidden?: bool;
  icon?: FileName;
  icon_mipmaps?: IconMipMapType;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  steam_stats_name?: string;
}
export interface ActiveDefenseEquipmentPrototype extends EquipmentPrototype {
  attack_parameters: AttackParameters;
  automatic: bool;
}
export interface AmbientSound {
  name: string;
  sound: Sound;
  track_type:
    | 'menu-track'
    | 'main-track'
    | 'early-game'
    | 'late-game'
    | 'interlude';
  type: 'ambient-sound';
  weight?: double;
}
export interface AmmoCategory extends PrototypeBase {
  bonus_gui_order?: Order;
}
export interface AmmoItemPrototype extends ItemPrototype {
  ammo_type: AmmoType | AmmoType[];
  magazine_size?: float;
  reload_time?: float;
}
export interface AmmoTurretPrototype extends TurretPrototype {
  automated_ammo_count: ItemCountType;
  entity_info_icon_shift?: Vector;
  inventory_size: ItemStackIndex;
}
export interface AnimationPrototype {
  animation_speed?: float;
  apply_runtime_tint?: bool;
  blend_mode?: BlendMode;
  dice?: uint8;
  dice_x?: uint8;
  dice_y?: uint8;
  draw_as_glow?: bool;
  draw_as_light?: bool;
  draw_as_shadow?: bool;
  filename?: FileName;
  flags?: SpriteFlags;
  frame_count?: uint32;
  frame_sequence?: AnimationFrameSequence;
  generate_sdf?: bool;
  height?: SpriteSizeType;
  hr_version?: Animation;
  layers?: Animation[];
  line_length?: uint32;
  load_in_minimal_mode?: bool;
  max_advance?: float;
  mipmap_count?: uint8;
  name: string;
  position?: [SpriteSizeType, SpriteSizeType];
  premul_alpha?: bool;
  priority?: SpritePriority;
  repeat_count?: uint8;
  run_mode?: 'forward' | 'backward' | 'forward-then-backward';
  scale?: double;
  shift?: Vector;
  size?: SpriteSizeType | [SpriteSizeType, SpriteSizeType];
  stripes?: Stripe[];
  tint?: Color;
  type: 'animation';
  width?: SpriteSizeType;
  x?: SpriteSizeType;
  y?: SpriteSizeType;
}
export interface ArithmeticCombinatorPrototype extends CombinatorPrototype {
  and_symbol_sprites?: Sprite4Way;
  divide_symbol_sprites?: Sprite4Way;
  left_shift_symbol_sprites?: Sprite4Way;
  minus_symbol_sprites?: Sprite4Way;
  modulo_symbol_sprites?: Sprite4Way;
  multiply_symbol_sprites?: Sprite4Way;
  or_symbol_sprites?: Sprite4Way;
  plus_symbol_sprites?: Sprite4Way;
  power_symbol_sprites?: Sprite4Way;
  right_shift_symbol_sprites?: Sprite4Way;
  xor_symbol_sprites?: Sprite4Way;
}
export interface ArmorPrototype extends ToolPrototype {
  equipment_grid?: EquipmentGridID;
  inventory_size_bonus?: ItemStackIndex;
  resistances?: Resistance[];
}
export interface ArrowPrototype extends EntityPrototype {
  arrow_picture: Sprite;
  blinking?: bool;
  circle_picture?: Sprite;
  collision_mask?: CollisionMask;
}
export interface ArtilleryFlarePrototype extends EntityPrototype {
  collision_mask?: CollisionMask;
  creation_shift?: Vector;
  early_death_ticks?: uint32;
  ended_in_water_trigger_effect?: TriggerEffect;
  initial_frame_speed?: float;
  initial_height?: float;
  initial_speed?: Vector;
  initial_vertical_speed?: float;
  life_time: uint16;
  map_color: Color;
  movement_modifier?: double;
  movement_modifier_when_on_ground?: double;
  pictures: AnimationVariations;
  regular_trigger_effect?: TriggerEffect;
  regular_trigger_effect_frequency?: uint32;
  render_layer?: RenderLayer;
  render_layer_when_on_ground?: RenderLayer;
  selection_priority?: uint8;
  shadows?: AnimationVariations;
  shot_category?: AmmoCategoryID;
  shots_per_flare?: uint32;
}
export interface ArtilleryProjectilePrototype extends EntityPrototype {
  action?: Trigger;
  chart_picture?: Sprite;
  collision_box?: BoundingBox;
  collision_mask?: CollisionMask;
  final_action?: Trigger;
  height_from_ground?: float;
  map_color: Color;
  picture?: Sprite;
  reveal_map: bool;
  rotatable?: bool;
  shadow?: Sprite;
}
export interface ArtilleryTurretPrototype extends EntityWithOwnerPrototype {
  alert_when_attacking?: bool;
  ammo_stack_limit: ItemCountType;
  automated_ammo_count: ItemCountType;
  base_picture?: Animation4Way;
  base_picture_render_layer?: RenderLayer;
  base_picture_secondary_draw_order?: uint8;
  base_shift?: Vector;
  cannon_barrel_light_direction?: Vector3D;
  cannon_barrel_pictures?: RotatedSprite;
  cannon_barrel_recoil_shiftings?: Vector3D[];
  cannon_barrel_recoil_shiftings_load_correction_matrix?: Vector3D[];
  cannon_base_pictures?: RotatedSprite;
  cannon_parking_frame_count?: uint16;
  cannon_parking_speed?: float;
  disable_automatic_firing?: bool;
  gun: ItemID;
  inventory_size: ItemStackIndex;
  is_military_target?: bool;
  manual_range_modifier: double;
  rotating_sound?: InterruptibleSound;
  rotating_stopped_sound?: Sound;
  turn_after_shooting_cooldown?: uint16;
  turret_rotation_speed: double;
}
export interface ArtilleryWagonPrototype extends RollingStockPrototype {
  ammo_stack_limit: ItemCountType;
  cannon_barrel_light_direction?: Vector3D;
  cannon_barrel_pictures?: RotatedSprite;
  cannon_barrel_recoil_shiftings?: Vector3D[];
  cannon_barrel_recoil_shiftings_load_correction_matrix?: Vector3D[];
  cannon_base_pictures?: RotatedSprite;
  cannon_base_shiftings?: Vector[];
  cannon_parking_frame_count?: uint16;
  cannon_parking_speed?: float;
  disable_automatic_firing?: bool;
  gun: ItemID;
  inventory_size: ItemStackIndex;
  manual_range_modifier: double;
  rotating_sound?: InterruptibleSound;
  rotating_stopped_sound?: Sound;
  turn_after_shooting_cooldown?: uint16;
  turret_rotation_speed: double;
}
export interface AssemblingMachinePrototype extends CraftingMachinePrototype {
  entity_info_icon_shift?: Vector;
  fixed_recipe?: RecipeID;
  gui_title_key?: string;
  ingredient_count?: uint8;
}
export interface AutoplaceControl extends PrototypeBase {
  can_be_disabled?: bool;
  category: 'resource' | 'terrain' | 'enemy';
  richness?: bool;
}
export type BatteryEquipmentPrototype = EquipmentPrototype;
export interface BeaconPrototype extends EntityWithOwnerPrototype {
  allowed_effects?: EffectTypeLimitation;
  animation?: Animation;
  base_picture?: Animation;
  distribution_effectivity: double;
  energy_source: ElectricEnergySource | VoidEnergySource;
  energy_usage: Energy;
  graphics_set?: BeaconGraphicsSet;
  module_specification: ModuleSpecification;
  radius_visualisation_picture?: Sprite;
  supply_area_distance: double;
}
export interface BeamPrototype extends EntityPrototype {
  action?: Trigger;
  action_triggered_automatically?: bool;
  body: AnimationVariations;
  body_light?: AnimationVariations;
  collision_mask?: CollisionMask;
  damage_interval: uint32;
  ending?: Animation;
  ending_light?: Animation;
  ground_light_animations?: BeamAnimationSet;
  head: Animation;
  head_light?: Animation;
  light_animations?: BeamAnimationSet;
  random_end_animation_rotation?: bool;
  random_target_offset?: bool;
  start?: Animation;
  start_light?: Animation;
  tail: Animation;
  tail_light?: Animation;
  target_offset?: Vector;
  transparent_start_end_animations?: bool;
  width: double;
}
export interface BeltImmunityEquipmentPrototype extends EquipmentPrototype {
  energy_consumption: Energy;
}
export interface BlueprintBookPrototype
  extends Omit<ItemWithInventoryPrototype, 'inventory_size'> {
  draw_label_for_cursor_render?: bool;
  inventory_size: ItemStackIndex | 'dynamic';
  stack_size: 1;
}
export interface BlueprintItemPrototype
  extends Omit<
    SelectionToolPrototype,
    'selection_mode' | 'alt_selection_mode'
  > {
  alt_entity_filter_mode?: 'whitelist' | 'blacklist';
  alt_entity_filters?: EntityID[];
  alt_entity_type_filters?: string[];
  alt_selection_mode?: SelectionModeFlags;
  alt_tile_filter_mode?: 'whitelist' | 'blacklist';
  alt_tile_filters?: TileID[];
  always_include_tiles?: bool;
  draw_label_for_cursor_render?: bool;
  entity_filter_mode?: 'whitelist' | 'blacklist';
  entity_filters?: EntityID[];
  entity_type_filters?: string[];
  selection_mode?: SelectionModeFlags;
  stack_size: 1;
  tile_filter_mode?: 'whitelist' | 'blacklist';
  tile_filters?: TileID[];
}
export interface BoilerPrototype extends EntityWithOwnerPrototype {
  burning_cooldown: uint16;
  energy_consumption: Energy;
  energy_source: EnergySource;
  fire: BoilerFire;
  fire_flicker_enabled?: bool;
  fire_glow: BoilerFireGlow;
  fire_glow_flicker_enabled?: bool;
  fluid_box: FluidBox;
  mode?: 'heat-water-inside' | 'output-to-separate-pipe';
  output_fluid_box: FluidBox;
  patch?: BoilerPatch;
  structure: BoilerStructure;
  target_temperature: double;
}
export interface BuildEntityAchievementPrototype extends AchievementPrototype {
  amount?: uint32;
  limited_to_one_game?: bool;
  to_build: EntityID;
  until_second?: uint32;
}
export interface BurnerGeneratorPrototype extends EntityWithOwnerPrototype {
  always_draw_idle_animation?: bool;
  animation?: Animation4Way;
  burner: BurnerEnergySource;
  energy_source: ElectricEnergySource;
  idle_animation?: Animation4Way;
  max_power_output: Energy;
  min_perceived_performance?: double;
  performance_to_sound_speedup?: double;
}
export interface CapsulePrototype extends ItemPrototype {
  capsule_action: CapsuleAction;
  radius_color?: Color;
}
export interface CarPrototype extends VehiclePrototype {
  animation: RotatedAnimation;
  collision_mask?: CollisionMask;
  consumption: Energy;
  darkness_to_render_light_animation?: float;
  effectivity: double;
  energy_source: BurnerEnergySource | VoidEnergySource;
  guns?: ItemID[];
  has_belt_immunity?: bool;
  immune_to_cliff_impacts?: bool;
  immune_to_rock_impacts?: bool;
  immune_to_tree_impacts?: bool;
  inventory_size: ItemStackIndex;
  light?: LightDefinition;
  light_animation?: RotatedAnimation;
  render_layer?: RenderLayer;
  rotation_speed: double;
  sound_no_fuel?: Sound;
  tank_driving?: bool;
  track_particle_triggers?: FootstepTriggerEffectList;
  turret_animation?: RotatedAnimation;
  turret_return_timeout?: uint32;
  turret_rotation_speed?: float;
}
export interface CargoWagonPrototype extends RollingStockPrototype {
  inventory_size: ItemStackIndex;
}
export interface CharacterCorpsePrototype extends EntityPrototype {
  armor_picture_mapping?: Record<ItemID, int32>;
  collision_mask?: CollisionMask;
  picture?: Animation;
  pictures?: AnimationVariations;
  render_layer?: RenderLayer;
  time_to_live: uint32;
}
export interface CharacterPrototype extends EntityWithOwnerPrototype {
  animations: CharacterArmorAnimation[];
  build_distance: uint32;
  character_corpse?: EntityID;
  collision_mask?: CollisionMask;
  crafting_categories?: RecipeCategoryID[];
  damage_hit_tint: Color;
  distance_per_frame: double;
  drop_item_distance: uint32;
  eat: Sound;
  enter_vehicle_distance?: double;
  footprint_particles?: FootprintParticle[];
  footstep_particle_triggers?: FootstepTriggerEffectList;
  has_belt_immunity?: bool;
  heartbeat: Sound;
  inventory_size: ItemStackIndex;
  is_military_target?: bool;
  item_pickup_distance: double;
  left_footprint_frames?: float[];
  left_footprint_offset?: Vector;
  light?: LightDefinition;
  loot_pickup_distance: double;
  maximum_corner_sliding_distance: double;
  mining_categories?: ResourceCategoryID[];
  mining_speed: double;
  mining_with_tool_particles_animation_positions: float[];
  reach_distance: uint32;
  reach_resource_distance: double;
  respawn_time?: uint32;
  right_footprint_frames?: float[];
  right_footprint_offset?: Vector;
  running_sound_animation_positions: float[];
  running_speed: double;
  synced_footstep_particle_triggers?: FootstepTriggerEffectList;
  ticks_to_keep_aiming_direction: uint32;
  ticks_to_keep_gun: uint32;
  ticks_to_stay_in_combat: uint32;
  tool_attack_distance?: double;
  tool_attack_result?: Trigger;
}
export interface CliffPrototype extends EntityPrototype {
  cliff_explosive?: ItemID;
  cliff_height?: float;
  collision_mask?: CollisionMask;
  grid_offset: Vector;
  grid_size: Vector;
  orientations: OrientedCliffPrototypeSet;
}
export interface CombatRobotCountAchievementPrototype
  extends AchievementPrototype {
  count?: uint32;
}
export interface CombatRobotPrototype extends FlyingRobotPrototype {
  attack_parameters: AttackParameters;
  destroy_action?: Trigger;
  follows_player?: bool;
  friction?: double;
  idle: RotatedAnimation;
  in_motion: RotatedAnimation;
  light?: LightDefinition;
  range_from_player?: double;
  shadow_idle: RotatedAnimation;
  shadow_in_motion: RotatedAnimation;
  time_to_live: uint32;
}
export interface CombinatorPrototype extends EntityWithOwnerPrototype {
  active_energy_usage: Energy;
  activity_led_hold_time?: uint8;
  activity_led_light?: LightDefinition;
  activity_led_light_offsets: [Vector, Vector, Vector, Vector];
  activity_led_sprites?: Sprite4Way;
  circuit_wire_max_distance?: double;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  energy_source: ElectricEnergySource | VoidEnergySource;
  input_connection_bounding_box: BoundingBox;
  input_connection_points: [
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
  ];
  output_connection_bounding_box: BoundingBox;
  output_connection_points: [
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
  ];
  screen_light?: LightDefinition;
  screen_light_offsets: [Vector, Vector, Vector, Vector];
  sprites?: Sprite4Way;
}
export interface ConstantCombinatorPrototype extends EntityWithOwnerPrototype {
  activity_led_light?: LightDefinition;
  activity_led_light_offsets: [Vector, Vector, Vector, Vector];
  activity_led_sprites?: Sprite4Way;
  circuit_wire_connection_points: [
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
  ];
  circuit_wire_max_distance?: double;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  item_slot_count: uint32;
  sprites?: Sprite4Way;
}
export interface ConstructWithRobotsAchievementPrototype
  extends AchievementPrototype {
  amount?: uint32;
  limited_to_one_game: bool;
  more_than_manually?: bool;
}
export interface ConstructionRobotPrototype
  extends RobotWithLogisticInterfacePrototype {
  collision_box?: BoundingBox;
  construction_vector: Vector;
  repairing_sound?: Sound;
  shadow_working?: RotatedAnimation;
  smoke?: Animation;
  sparks?: AnimationVariations;
  working?: RotatedAnimation;
  working_light?: LightDefinition;
}
export interface ContainerPrototype extends EntityWithOwnerPrototype {
  circuit_connector_sprites?: CircuitConnectorSprites;
  circuit_wire_connection_point?: WireConnectionPoint;
  circuit_wire_max_distance?: double;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  enable_inventory_bar?: bool;
  inventory_size: ItemStackIndex;
  inventory_type?: 'with_bar' | 'with_filters_and_bar';
  picture: Sprite;
  scale_info_icons?: bool;
}
export interface CopyPasteToolPrototype extends SelectionToolPrototype {
  alt_entity_filter_mode?: 'whitelist' | 'blacklist';
  alt_entity_filters?: EntityID[];
  alt_entity_type_filters?: string[];
  alt_tile_filter_mode?: 'whitelist' | 'blacklist';
  alt_tile_filters?: TileID[];
  always_include_tiles?: bool;
  cuts?: bool;
  entity_filter_mode?: 'whitelist' | 'blacklist';
  entity_filters?: EntityID[];
  entity_type_filters?: string[];
  stack_size: 1;
  tile_filter_mode?: 'whitelist' | 'blacklist';
  tile_filters?: TileID[];
}
export interface CorpsePrototype extends EntityPrototype {
  animation?: RotatedAnimationVariations;
  animation_overlay?: RotatedAnimationVariations;
  animation_overlay_final_render_layer?: RenderLayer;
  animation_overlay_render_layer?: RenderLayer;
  animation_render_layer?: RenderLayer;
  collision_mask?: CollisionMask;
  direction_shuffle?: uint16[][];
  dying_speed?: float;
  final_render_layer?: RenderLayer;
  ground_patch?: AnimationVariations;
  ground_patch_fade_in_delay?: float;
  ground_patch_fade_in_speed?: float;
  ground_patch_fade_out_duration?: float;
  ground_patch_fade_out_start?: float;
  ground_patch_higher?: AnimationVariations;
  ground_patch_render_layer?: RenderLayer;
  remove_on_entity_placement?: bool;
  remove_on_tile_placement?: bool;
  shuffle_directions_at_frame?: uint8;
  splash?: AnimationVariations;
  splash_render_layer?: RenderLayer;
  splash_speed?: float;
  time_before_removed?: uint32;
  time_before_shading_off?: uint32;
  use_tile_color_for_ground_patch_tint?: bool;
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
export interface CurvedRailPrototype extends RailPrototype {
  bending_type?: 'turn';
}
export interface CustomInputPrototype extends PrototypeBase {
  action?:
    | 'lua'
    | 'spawn-item'
    | 'toggle-personal-roboport'
    | 'toggle-personal-logistic-requests'
    | 'toggle-equipment-movement-bonus';
  alternative_key_sequence?: string;
  consuming?: ConsumingType;
  controller_alternative_key_sequence?: string;
  controller_key_sequence?: string;
  enabled?: bool;
  enabled_while_in_cutscene?: bool;
  enabled_while_spectating?: bool;
  include_selected_prototype?: bool;
  item_to_spawn?: ItemID;
  key_sequence: string;
  linked_game_control?: LinkedGameControl;
  name: string;
}
export interface DamageType extends PrototypeBase {
  hidden?: bool;
}
export interface DeciderCombinatorPrototype extends CombinatorPrototype {
  equal_symbol_sprites?: Sprite4Way;
  greater_or_equal_symbol_sprites?: Sprite4Way;
  greater_symbol_sprites?: Sprite4Way;
  less_or_equal_symbol_sprites?: Sprite4Way;
  less_symbol_sprites?: Sprite4Way;
  not_equal_symbol_sprites?: Sprite4Way;
}
export interface DeconstructWithRobotsAchievementPrototype
  extends AchievementPrototype {
  amount: uint32;
}
export interface DeconstructibleTileProxyPrototype extends EntityPrototype {
  collision_mask?: CollisionMask;
}
export interface DeconstructionItemPrototype
  extends Omit<
    SelectionToolPrototype,
    'selection_mode' | 'alt_selection_mode'
  > {
  alt_entity_filter_mode?: 'whitelist' | 'blacklist';
  alt_entity_filters?: EntityID[];
  alt_entity_type_filters?: string[];
  alt_selection_mode?: SelectionModeFlags;
  alt_tile_filter_mode?: 'whitelist' | 'blacklist';
  alt_tile_filters?: TileID[];
  always_include_tiles?: bool;
  entity_filter_count?: ItemStackIndex;
  entity_filter_mode?: 'whitelist' | 'blacklist';
  entity_filters?: EntityID[];
  entity_type_filters?: string[];
  selection_mode?: SelectionModeFlags;
  stack_size: 1;
  tile_filter_count?: ItemStackIndex;
  tile_filter_mode?: 'whitelist' | 'blacklist';
  tile_filters?: TileID[];
}
export interface DecorativePrototype extends PrototypeBase {
  autoplace?: AutoplaceSpecification;
  collision_box?: BoundingBox;
  collision_mask?: CollisionMask;
  decal_overdraw_priority?: uint16;
  grows_through_rail_path?: bool;
  pictures: SpriteVariations;
  render_layer?: RenderLayer;
  tile_layer?: int16;
  trigger_effect?: TriggerEffect;
  walking_sound?: Sound;
}
export interface DeliverByRobotsAchievementPrototype
  extends AchievementPrototype {
  amount: MaterialAmountType;
}
export interface DontBuildEntityAchievementPrototype
  extends AchievementPrototype {
  amount?: uint32;
  dont_build: EntityID | EntityID[];
}
export interface DontCraftManuallyAchievementPrototype
  extends AchievementPrototype {
  amount: MaterialAmountType;
}
export interface DontUseEntityInEnergyProductionAchievementPrototype
  extends AchievementPrototype {
  excluded: EntityID | EntityID[];
  included?: EntityID | EntityID[];
  last_hour_only?: bool;
  minimum_energy_produced?: Energy;
}
export interface EditorControllerPrototype {
  adjust_speed_based_off_zoom: bool;
  enable_flash_light: bool;
  fill_built_entity_energy_buffers: bool;
  generate_neighbor_chunks: bool;
  gun_inventory_size: ItemStackIndex;
  instant_blueprint_building: bool;
  instant_deconstruction: bool;
  instant_rail_planner: bool;
  instant_upgrading: bool;
  inventory_size: ItemStackIndex;
  item_pickup_distance: double;
  loot_pickup_distance: double;
  mining_speed: double;
  movement_speed: double;
  name: string;
  placed_corpses_never_expire: bool;
  render_as_day: bool;
  show_additional_entity_info_gui: bool;
  show_character_tab_in_controller_gui: bool;
  show_entity_health_bars: bool;
  show_entity_tags: bool;
  show_hidden_entities: bool;
  show_infinity_filters_in_controller_gui: bool;
  show_status_icons: bool;
  type: 'editor-controller';
}
export interface ElectricEnergyInterfacePrototype
  extends EntityWithOwnerPrototype {
  allow_copy_paste?: bool;
  animation?: Animation;
  animations?: Animation4Way;
  continuous_animation?: bool;
  energy_production?: Energy;
  energy_source: ElectricEnergySource;
  energy_usage?: Energy;
  gui_mode?: 'all' | 'none' | 'admins';
  light?: LightDefinition;
  picture?: Sprite;
  pictures?: Sprite4Way;
  render_layer?: RenderLayer;
}
export interface ElectricPolePrototype extends EntityWithOwnerPrototype {
  active_picture?: Sprite;
  connection_points: WireConnectionPoint[];
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  light?: LightDefinition;
  maximum_wire_distance?: double;
  pictures: RotatedSprite;
  radius_visualisation_picture?: Sprite;
  supply_area_distance: double;
  track_coverage_during_build_by_moving?: bool;
}
export interface ElectricTurretPrototype extends TurretPrototype {
  energy_source: ElectricEnergySource | VoidEnergySource;
}
export interface EnemySpawnerPrototype extends EntityWithOwnerPrototype {
  allow_run_time_change_of_is_military_target?: false;
  animations: AnimationVariations;
  call_for_help_radius: double;
  dying_sound?: Sound;
  integration?: SpriteVariations;
  is_military_target?: true;
  max_count_of_owned_units: uint32;
  max_darkness_to_spawn?: float;
  max_friends_around_to_spawn: uint32;
  max_richness_for_spawn_shift: double;
  max_spawn_shift: double;
  min_darkness_to_spawn?: float;
  pollution_absorption_absolute: double;
  pollution_absorption_proportional: double;
  random_animation_offset?: bool;
  result_units: UnitSpawnDefinition[];
  spawn_decoration?:
    | CreateDecorativesTriggerEffectItem
    | CreateDecorativesTriggerEffectItem[];
  spawn_decorations_on_expansion?: bool;
  spawning_cooldown: [double, double];
  spawning_radius: double;
  spawning_spacing: double;
}
export interface EnergyShieldEquipmentPrototype extends EquipmentPrototype {
  energy_per_shield: Energy;
  max_shield_value: float;
}
export interface EntityGhostPrototype extends EntityPrototype {
  collision_mask?: CollisionMask;
  large_build_sound?: Sound;
  medium_build_sound?: Sound;
}
export interface EntityParticlePrototype extends EntityPrototype {
  collision_mask?: CollisionMask;
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
export interface EntityWithOwnerPrototype extends EntityWithHealthPrototype {
  allow_run_time_change_of_is_military_target?: bool;
  is_military_target?: bool;
}
export type EquipmentCategory = PrototypeBase;
export interface EquipmentGridPrototype extends PrototypeBase {
  equipment_categories: EquipmentCategoryID[];
  height: uint32;
  locked?: bool;
  width: uint32;
}
export interface EquipmentPrototype extends PrototypeBase {
  background_border_color?: Color;
  background_color?: Color;
  categories: EquipmentCategoryID[];
  energy_source: ElectricEnergySource;
  grabbed_background_color?: Color;
  shape: EquipmentShape;
  sprite: Sprite;
  take_result?: ItemID;
}
export interface ExplosionPrototype extends EntityPrototype {
  animations: AnimationVariations;
  beam?: bool;
  collision_mask?: CollisionMask;
  correct_rotation?: bool;
  fade_in_duration?: uint8;
  fade_out_duration?: uint8;
  height?: float;
  light?: LightDefinition;
  light_intensity_factor_final?: float;
  light_intensity_factor_initial?: float;
  light_intensity_peak_end_progress?: float;
  light_intensity_peak_start_progress?: float;
  light_size_factor_final?: float;
  light_size_factor_initial?: float;
  light_size_peak_end_progress?: float;
  light_size_peak_start_progress?: float;
  render_layer?: RenderLayer;
  rotate?: bool;
  scale?: float;
  scale_animation_speed?: bool;
  scale_deviation?: float;
  scale_end?: float;
  scale_in_duration?: uint8;
  scale_increment_per_tick?: float;
  scale_initial?: float;
  scale_initial_deviation?: float;
  scale_out_duration?: uint8;
  smoke?: TrivialSmokeID;
  smoke_count?: uint16;
  smoke_slow_down_factor?: float;
  sound?: Sound;
}
export interface FinishTheGameAchievementPrototype
  extends AchievementPrototype {
  until_second?: uint32;
}
export interface FireFlamePrototype extends EntityPrototype {
  add_fuel_cooldown?: uint32;
  burnt_patch_alpha_default?: float;
  burnt_patch_alpha_variations?: TileAndAlpha[];
  burnt_patch_lifetime?: uint32;
  burnt_patch_pictures?: SpriteVariations;
  collision_mask?: CollisionMask;
  damage_multiplier_decrease_per_tick?: float;
  damage_multiplier_increase_per_added_fuel?: float;
  damage_per_tick: DamagePrototype;
  delay_between_initial_flames?: uint32;
  fade_in_duration?: uint32;
  fade_out_duration?: uint32;
  flame_alpha?: float;
  flame_alpha_deviation?: float;
  initial_flame_count?: uint8;
  initial_lifetime?: uint32;
  initial_render_layer?: RenderLayer;
  lifetime_increase_by?: uint32;
  lifetime_increase_cooldown?: uint32;
  light?: LightDefinition;
  limit_overlapping_particles?: bool;
  maximum_damage_multiplier?: float;
  maximum_lifetime?: uint32;
  maximum_spread_count?: uint16;
  on_damage_tick_effect?: Trigger;
  on_fuel_added_action?: Trigger;
  particle_alpha?: float;
  particle_alpha_blend_duration?: uint16;
  particle_alpha_deviation?: float;
  pictures?: AnimationVariations;
  render_layer?: RenderLayer;
  secondary_picture_fade_out_duration?: uint32;
  secondary_picture_fade_out_start?: uint32;
  secondary_pictures?: AnimationVariations;
  secondary_render_layer?: RenderLayer;
  small_tree_fire_pictures?: AnimationVariations;
  smoke?: SmokeSource[];
  smoke_fade_in_duration?: uint32;
  smoke_fade_out_duration?: uint32;
  smoke_source_pictures?: AnimationVariations;
  spawn_entity?: EntityID;
  spread_delay: uint32;
  spread_delay_deviation: uint32;
  tree_dying_factor?: float;
  uses_alternative_behavior?: bool;
}
export interface FishPrototype extends EntityWithHealthPrototype {
  collision_mask?: CollisionMask;
  pictures: SpriteVariations;
}
export interface FlameThrowerExplosionPrototype extends ExplosionPrototype {
  damage: DamagePrototype;
  height?: float;
  slow_down_factor: double;
}
export interface FluidPrototype extends PrototypeBase {
  auto_barrel?: bool;
  base_color: Color;
  default_temperature: double;
  emissions_multiplier?: double;
  flow_color: Color;
  fuel_value?: Energy;
  gas_temperature?: double;
  heat_capacity?: Energy;
  hidden?: bool;
  icon?: FileName;
  icon_mipmaps?: IconMipMapType;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  max_temperature?: double;
  subgroup?: ItemSubGroupID;
}
export interface FluidStreamPrototype extends EntityPrototype {
  action?: Trigger;
  collision_mask?: CollisionMask;
  ground_light?: LightDefinition;
  initial_action?: Trigger;
  oriented_particle?: bool;
  particle?: Animation;
  particle_alpha_per_part?: float;
  particle_buffer_size?: uint32;
  particle_end_alpha?: float;
  particle_fade_out_duration?: uint16;
  particle_fade_out_threshold?: float;
  particle_horizontal_speed: float;
  particle_horizontal_speed_deviation: float;
  particle_loop_exit_threshold?: float;
  particle_loop_frame_count?: uint16;
  particle_scale_per_part?: float;
  particle_spawn_interval: uint16;
  particle_spawn_timeout?: uint16;
  particle_start_alpha?: float;
  particle_start_scale?: float;
  particle_vertical_acceleration: float;
  progress_to_create_smoke?: float;
  shadow?: Animation;
  shadow_scale_enabled?: bool;
  smoke_sources?: SmokeSource[];
  special_neutral_target_damage?: DamagePrototype;
  spine_animation?: Animation;
  stream_light?: LightDefinition;
  target_position_deviation?: double;
  width?: float;
}
export interface FluidTurretPrototype extends TurretPrototype {
  activation_buffer_ratio: float;
  attack_parameters: StreamAttackParameters;
  attacking_muzzle_animation_shift?: AnimatedVector;
  ending_attack_muzzle_animation_shift?: AnimatedVector;
  enough_fuel_indicator_light?: LightDefinition;
  enough_fuel_indicator_picture?: Sprite4Way;
  fluid_box: FluidBox;
  fluid_buffer_input_flow: float;
  fluid_buffer_size: float;
  folded_muzzle_animation_shift?: AnimatedVector;
  folding_muzzle_animation_shift?: AnimatedVector;
  muzzle_animation?: Animation;
  muzzle_light?: LightDefinition;
  not_enough_fuel_indicator_light?: LightDefinition;
  not_enough_fuel_indicator_picture?: Sprite4Way;
  out_of_ammo_alert_icon?: Sprite;
  prepared_muzzle_animation_shift?: AnimatedVector;
  preparing_muzzle_animation_shift?: AnimatedVector;
  starting_attack_muzzle_animation_shift?: AnimatedVector;
  turret_base_has_direction: true;
}
export interface FluidWagonPrototype extends RollingStockPrototype {
  capacity: double;
  tank_count?: uint8;
}
export interface FlyingRobotPrototype extends EntityWithOwnerPrototype {
  collision_mask?: CollisionMask;
  energy_per_move?: Energy;
  energy_per_tick?: Energy;
  is_military_target?: bool;
  max_energy?: Energy;
  max_speed?: double;
  max_to_charge?: float;
  min_to_charge?: float;
  speed: double;
  speed_multiplier_when_out_of_energy?: float;
}
export interface FlyingTextPrototype extends EntityPrototype {
  collision_mask?: CollisionMask;
  speed: float;
  text_alignment?: 'left' | 'center' | 'right';
  time_to_live: uint32;
}
export interface FontPrototype {
  border?: bool;
  border_color?: Color;
  filtered?: bool;
  from: string;
  name: string;
  size: int32;
  spacing?: float;
  type: 'font';
}
export type FuelCategory = PrototypeBase;
export interface FurnacePrototype extends CraftingMachinePrototype {
  cant_insert_at_source_message_key?: string;
  entity_info_icon_shift?: Vector;
  result_inventory_size: ItemStackIndex;
  source_inventory_size: ItemStackIndex;
}
export interface GatePrototype extends EntityWithOwnerPrototype {
  activation_distance: double;
  close_sound: Sound;
  collision_mask?: CollisionMask;
  fadeout_interval?: uint32;
  horizontal_animation: Animation;
  horizontal_rail_animation_left: Animation;
  horizontal_rail_animation_right: Animation;
  horizontal_rail_base: Animation;
  open_sound: Sound;
  opened_collision_mask?: CollisionMask;
  opening_speed: float;
  timeout_to_close: uint32;
  vertical_animation: Animation;
  vertical_rail_animation_left: Animation;
  vertical_rail_animation_right: Animation;
  vertical_rail_base: Animation;
  wall_patch: Animation;
}
export interface GeneratorEquipmentPrototype extends EquipmentPrototype {
  burner?: BurnerEnergySource;
  power: Energy;
}
export interface GeneratorPrototype extends EntityWithOwnerPrototype {
  burns_fluid?: bool;
  destroy_non_fuel_fluid?: bool;
  effectivity?: double;
  energy_source: ElectricEnergySource;
  fluid_box: FluidBox;
  fluid_usage_per_tick: double;
  horizontal_animation?: Animation;
  max_power_output?: Energy;
  maximum_temperature: double;
  min_perceived_performance?: double;
  performance_to_sound_speedup?: double;
  scale_fluid_usage?: bool;
  smoke?: SmokeSource[];
  vertical_animation?: Animation;
}
export interface GodControllerPrototype {
  crafting_categories?: RecipeCategoryID[];
  inventory_size: ItemStackIndex;
  item_pickup_distance: double;
  loot_pickup_distance: double;
  mining_categories?: ResourceCategoryID[];
  mining_speed: double;
  movement_speed: double;
  name: string;
  type: 'god-controller';
}
export interface GroupAttackAchievementPrototype extends AchievementPrototype {
  amount?: uint32;
}
export interface GuiStyle extends PrototypeBase {
  default_sprite_priority?: SpritePriority;
  default_sprite_scale?: double;
  default_tileset?: FileName;
}
export interface GunPrototype extends ItemPrototype {
  attack_parameters: AttackParameters;
}
export interface HeatInterfacePrototype extends EntityWithOwnerPrototype {
  gui_mode?: 'all' | 'none' | 'admins';
  heat_buffer: HeatBuffer;
  picture?: Sprite;
}
export interface HeatPipePrototype extends EntityWithOwnerPrototype {
  collision_mask?: CollisionMask;
  connection_sprites: ConnectableEntityGraphics;
  heat_buffer: HeatBuffer;
  heat_glow_sprites: ConnectableEntityGraphics;
}
export interface HighlightBoxEntityPrototype extends EntityPrototype {
  collision_mask?: CollisionMask;
}
export interface InfinityContainerPrototype
  extends Omit<LogisticContainerPrototype, 'logistic_mode'> {
  erase_contents_when_mined: bool;
  gui_mode?: 'all' | 'none' | 'admins';
  inventory_size: ItemStackIndex;
  logistic_mode?:
    | 'active-provider'
    | 'passive-provider'
    | 'requester'
    | 'storage'
    | 'buffer';
  render_not_in_network_icon?: bool;
}
export interface InfinityPipePrototype extends PipePrototype {
  gui_mode?: 'all' | 'none' | 'admins';
}
export interface InserterPrototype extends EntityWithOwnerPrototype {
  allow_burner_leech?: bool;
  allow_custom_vectors?: bool;
  chases_belt_items?: bool;
  circuit_connector_sprites?: [
    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites,
  ];
  circuit_wire_connection_points?: [
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
  ];
  circuit_wire_max_distance?: double;
  default_stack_control_input_signal?: SignalIDConnector;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  draw_held_item?: bool;
  draw_inserter_arrow?: bool;
  energy_per_movement?: Energy;
  energy_per_rotation?: Energy;
  energy_source: EnergySource;
  extension_speed: double;
  filter_count?: uint8;
  hand_base_picture: Sprite;
  hand_base_shadow: Sprite;
  hand_closed_picture: Sprite;
  hand_closed_shadow: Sprite;
  hand_open_picture: Sprite;
  hand_open_shadow: Sprite;
  hand_size?: double;
  insert_position: Vector;
  pickup_position: Vector;
  platform_picture: Sprite4Way;
  rotation_speed: double;
  stack?: bool;
  stack_size_bonus?: uint8;
  use_easter_egg?: bool;
}
export interface ItemEntityPrototype extends EntityPrototype {
  collision_box?: BoundingBox;
  collision_mask?: CollisionMask;
}
export interface ItemGroup extends PrototypeBase {
  icon?: FileName;
  icon_mipmaps?: IconMipMapType;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  order_in_recipe?: Order;
}
export interface ItemPrototype extends PrototypeBase {
  burnt_result?: ItemID;
  close_sound?: Sound;
  dark_background_icon?: FileName;
  dark_background_icons?: IconData[];
  default_request_amount?: ItemCountType;
  flags?: ItemPrototypeFlags;
  fuel_acceleration_multiplier?: double;
  fuel_category?: FuelCategoryID;
  fuel_emissions_multiplier?: double;
  fuel_glow_color?: Color;
  fuel_top_speed_multiplier?: double;
  fuel_value?: Energy;
  icon?: FileName;
  icon_mipmaps?: IconMipMapType;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  open_sound?: Sound;
  pictures?: SpriteVariations;
  place_as_tile?: PlaceAsTile;
  place_result?: EntityID;
  placed_as_equipment_result?: EquipmentID;
  rocket_launch_product?: ItemProductPrototype;
  rocket_launch_products?: ItemProductPrototype[];
  stack_size: ItemCountType;
  subgroup?: ItemSubGroupID;
  wire_count?: ItemCountType;
}
export interface ItemRequestProxyPrototype extends EntityPrototype {
  collision_mask?: CollisionMask;
  picture: Sprite;
  use_target_entity_alert_icon_shift?: bool;
}
export interface ItemSubGroup extends PrototypeBase {
  group: ItemGroupID;
}
export interface ItemWithEntityDataPrototype extends ItemPrototype {
  icon_tintable?: FileName;
  icon_tintable_mask?: FileName;
  icon_tintable_masks?: IconData[];
  icon_tintables?: IconData[];
}
export interface ItemWithInventoryPrototype extends ItemWithLabelPrototype {
  extends_inventory_by_default?: bool;
  filter_message_key?: string;
  filter_mode?: 'blacklist' | 'whitelist';
  insertion_priority_mode?:
    | 'default'
    | 'never'
    | 'always'
    | 'when-manually-filtered';
  inventory_size: ItemStackIndex;
  item_filters?: ItemID[];
  item_group_filters?: ItemGroupID[];
  item_subgroup_filters?: ItemSubGroupID[];
  stack_size: 1;
}
export interface ItemWithLabelPrototype extends ItemPrototype {
  default_label_color?: Color;
  draw_label_for_cursor_render?: bool;
}
export type ItemWithTagsPrototype = ItemWithLabelPrototype;
export interface KillAchievementPrototype extends AchievementPrototype {
  amount?: uint32;
  damage_type?: DamageTypeID;
  in_vehicle?: bool;
  personally?: bool;
  to_kill?: EntityID;
  type_to_kill?: string;
}
export interface LabPrototype extends EntityWithOwnerPrototype {
  allowed_effects?: EffectTypeLimitation;
  base_productivity?: float;
  energy_source: EnergySource;
  energy_usage: Energy;
  entity_info_icon_shift?: Vector;
  inputs: ItemID[];
  light?: LightDefinition;
  module_specification?: ModuleSpecification;
  off_animation: Animation;
  on_animation: Animation;
  researching_speed?: double;
}
export interface LampPrototype extends EntityWithOwnerPrototype {
  always_on?: bool;
  circuit_connector_sprites?: CircuitConnectorSprites;
  circuit_wire_connection_point?: WireConnectionPoint;
  circuit_wire_max_distance?: double;
  darkness_for_all_lamps_off?: float;
  darkness_for_all_lamps_on?: float;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  energy_source: ElectricEnergySource | VoidEnergySource;
  energy_usage_per_tick: Energy;
  glow_color_intensity?: float;
  glow_render_mode?: 'additive' | 'multiplicative';
  glow_size?: float;
  light?: LightDefinition;
  light_when_colored?: LightDefinition;
  picture_off: Sprite;
  picture_on: Sprite;
  signal_to_color_mapping?: SignalColorMapping[];
}
export interface LandMinePrototype extends EntityWithOwnerPrototype {
  action?: Trigger;
  ammo_category?: AmmoCategoryID;
  collision_mask?: CollisionMask;
  force_die_on_attack?: bool;
  is_military_target?: bool;
  picture_safe: Sprite;
  picture_set: Sprite;
  picture_set_enemy?: Sprite;
  timeout?: uint32;
  trigger_collision_mask?: CollisionMask;
  trigger_force?: ForceCondition;
  trigger_radius: double;
}
export type LeafParticlePrototype = EntityParticlePrototype;
export interface LinkedBeltPrototype extends TransportBeltConnectablePrototype {
  allow_blueprint_connection?: bool;
  allow_clone_connection?: bool;
  allow_side_loading?: bool;
  collision_mask?: CollisionMask;
  structure: LinkedBeltStructure;
  structure_render_layer?: RenderLayer;
}
export interface LinkedContainerPrototype extends EntityWithOwnerPrototype {
  circuit_connector_sprites?: CircuitConnectorSprites;
  circuit_wire_connection_point?: WireConnectionPoint;
  circuit_wire_max_distance?: double;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  gui_mode?: 'all' | 'none' | 'admins';
  inventory_size: ItemStackIndex;
  inventory_type?: 'with_bar' | 'with_filters_and_bar';
  picture?: Sprite;
  scale_info_icons?: bool;
}
export type Loader1x1Prototype = LoaderPrototype;
export type Loader1x2Prototype = LoaderPrototype;
export interface LoaderPrototype extends TransportBeltConnectablePrototype {
  allow_container_interaction?: bool;
  allow_rail_interaction?: bool;
  belt_length?: double;
  collision_mask?: CollisionMask;
  container_distance?: double;
  energy_per_item?: Energy;
  energy_source?:
    | ElectricEnergySource
    | HeatEnergySource
    | FluidEnergySource
    | VoidEnergySource;
  filter_count: uint8;
  structure: LoaderStructure;
  structure_render_layer?: RenderLayer;
}
export interface LocomotivePrototype extends RollingStockPrototype {
  darkness_to_render_light_animation?: float;
  energy_source: BurnerEnergySource | VoidEnergySource;
  front_light?: LightDefinition;
  front_light_pictures?: RotatedSprite;
  max_power: Energy;
  max_snap_to_train_stop_distance?: float;
  reversing_power_modifier: double;
}
export interface LogisticContainerPrototype
  extends Omit<ContainerPrototype, 'picture'> {
  animation?: Animation;
  animation_sound?: Sound;
  landing_location_offset?: Vector;
  logistic_mode:
    | 'active-provider'
    | 'passive-provider'
    | 'requester'
    | 'storage'
    | 'buffer';
  max_logistic_slots?: uint16;
  opened_duration?: uint8;
  picture?: Sprite;
  render_not_in_network_icon?: bool;
  use_exact_mode?: bool;
}
export interface LogisticRobotPrototype
  extends RobotWithLogisticInterfacePrototype {
  collision_box?: BoundingBox;
  idle_with_cargo?: RotatedAnimation;
  in_motion_with_cargo?: RotatedAnimation;
  shadow_idle_with_cargo?: RotatedAnimation;
  shadow_in_motion_with_cargo?: RotatedAnimation;
}
export interface MapGenPresets {
  name: string;
  type: 'map-gen-presets';
}
export interface MapSettings {
  difficulty_settings: DifficultySettings;
  enemy_evolution: EnemyEvolutionSettings;
  enemy_expansion: EnemyExpansionSettings;
  max_failed_behavior_count: uint32;
  name: string;
  path_finder: PathFinderSettings;
  pollution: PollutionSettings;
  steering: SteeringSettings;
  type: 'map-settings';
  unit_group: UnitGroupSettings;
}
export interface MarketPrototype extends EntityWithOwnerPrototype {
  allow_access_to_all_forces?: bool;
  picture: Sprite;
}
export interface MiningDrillPrototype extends EntityWithOwnerPrototype {
  allowed_effects?: EffectTypeLimitation;
  animations?: Animation4Way;
  base_picture?: Sprite4Way;
  base_productivity?: float;
  base_render_layer?: RenderLayer;
  circuit_connector_sprites?: [
    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites,
  ];
  circuit_wire_connection_points?: [
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
  ];
  circuit_wire_max_distance?: double;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  energy_source: EnergySource;
  energy_usage: Energy;
  graphics_set?: MiningDrillGraphicsSet;
  input_fluid_box?: FluidBox;
  mining_speed: double;
  module_specification?: ModuleSpecification;
  monitor_visualization_tint?: Color;
  output_fluid_box?: FluidBox;
  radius_visualisation_picture?: Sprite;
  resource_categories: ResourceCategoryID[];
  resource_searching_radius: double;
  vector_to_place_result: Vector;
  wet_mining_graphics_set?: MiningDrillGraphicsSet;
}
export type MiningToolPrototype = ToolPrototype;
export type ModuleCategory = PrototypeBase;
export interface ModulePrototype extends ItemPrototype {
  art_style?: string;
  beacon_tint?: BeaconVisualizationTints;
  category: ModuleCategoryID;
  effect: Effect;
  limitation?: RecipeID[];
  limitation_blacklist?: RecipeID[];
  limitation_message_key?: string;
  requires_beacon_alt_mode?: bool;
  tier: uint32;
}
export interface MouseCursor {
  filename?: FileName;
  hot_pixel_x?: int16;
  hot_pixel_y?: int16;
  name: string;
  system_cursor?:
    | 'arrow'
    | 'i-beam'
    | 'crosshair'
    | 'wait-arrow'
    | 'size-all'
    | 'no'
    | 'hand';
  type: 'mouse-cursor';
}
export interface MovementBonusEquipmentPrototype extends EquipmentPrototype {
  energy_consumption: Energy;
  movement_bonus: double;
}
export interface NamedNoiseExpression extends PrototypeBase {
  expression: NoiseExpression;
  intended_property?: string;
  order?: Order;
}
export interface NightVisionEquipmentPrototype extends EquipmentPrototype {
  activate_sound?: Sound;
  color_lookup: DaytimeColorLookupTable;
  darkness_to_turn_on?: float;
  deactivate_sound?: Sound;
  energy_input: Energy;
}
export type NoiseLayer = PrototypeBase;
export interface OffshorePumpPrototype extends EntityWithOwnerPrototype {
  adjacent_tile_collision_box?: BoundingBox;
  adjacent_tile_collision_mask?: CollisionMask;
  adjacent_tile_collision_test?: CollisionMask;
  always_draw_fluid?: bool;
  center_collision_mask?: CollisionMask;
  check_bounding_box_collides_with_tiles?: bool;
  circuit_connector_sprites?: [
    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites,
  ];
  circuit_wire_connection_points?: [
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
  ];
  circuit_wire_max_distance?: double;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  fluid: FluidID;
  fluid_box: FluidBox;
  fluid_box_tile_collision_test?: CollisionMask;
  graphics_set?: OffshorePumpGraphicsSet;
  min_perceived_performance?: float;
  picture?: Animation4Way;
  placeable_position_visualization?: Sprite;
  pumping_speed: float;
  remove_on_tile_collision?: bool;
}
export interface ParticlePrototype extends PrototypeBase {
  draw_shadow_when_on_ground?: bool;
  ended_in_water_trigger_effect?: TriggerEffect;
  ended_on_ground_trigger_effect?: TriggerEffect;
  fade_away_duration?: uint16;
  life_time: uint16;
  mining_particle_frame_speed?: float;
  movement_modifier?: float;
  movement_modifier_when_on_ground?: float;
  pictures: AnimationVariations;
  regular_trigger_effect?: TriggerEffect;
  regular_trigger_effect_frequency?: uint32;
  render_layer?: RenderLayer;
  render_layer_when_on_ground?: RenderLayer;
  shadows?: AnimationVariations;
  vertical_acceleration?: float;
}
export interface ParticleSourcePrototype extends EntityPrototype {
  collision_mask?: CollisionMask;
  height: float;
  height_deviation?: float;
  horizontal_speed: float;
  horizontal_speed_deviation?: float;
  particle?: ParticleID;
  smoke?: SmokeSource[];
  time_before_start: float;
  time_before_start_deviation?: float;
  time_to_live: float;
  time_to_live_deviation?: float;
  vertical_speed: float;
  vertical_speed_deviation?: float;
}
export interface PipePrototype extends EntityWithOwnerPrototype {
  fluid_box: FluidBox;
  horizontal_window_bounding_box: BoundingBox;
  pictures: PipePictures;
  vertical_window_bounding_box: BoundingBox;
}
export interface PipeToGroundPrototype extends EntityWithOwnerPrototype {
  draw_fluid_icon_override?: bool;
  fluid_box: FluidBox;
  pictures: PipeToGroundPictures;
}
export interface PlayerDamagedAchievementPrototype
  extends AchievementPrototype {
  minimum_damage: float;
  should_survive: bool;
  type_of_dealer?: string;
}
export interface PlayerPortPrototype extends EntityWithOwnerPrototype {
  animation: Animation;
  collision_mask?: CollisionMask;
  is_military_target?: bool;
}
export interface PowerSwitchPrototype extends EntityWithOwnerPrototype {
  circuit_wire_connection_point: WireConnectionPoint;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  led_off: Sprite;
  led_on: Sprite;
  left_wire_connection_point: WireConnectionPoint;
  overlay_loop: Animation;
  overlay_start: Animation;
  overlay_start_delay: uint8;
  power_on_animation: Animation;
  right_wire_connection_point: WireConnectionPoint;
  wire_max_distance?: double;
}
export interface ProduceAchievementPrototype extends AchievementPrototype {
  amount: MaterialAmountType;
  fluid_product?: FluidID;
  item_product?: ItemID;
  limited_to_one_game: bool;
}
export interface ProducePerHourAchievementPrototype
  extends AchievementPrototype {
  amount: MaterialAmountType;
  fluid_product?: FluidID;
  item_product?: ItemID;
}
export interface ProgrammableSpeakerPrototype extends EntityWithOwnerPrototype {
  audible_distance_modifier?: float;
  circuit_connector_sprites?: CircuitConnectorSprites;
  circuit_wire_connection_point?: WireConnectionPoint;
  circuit_wire_max_distance?: double;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  energy_source: ElectricEnergySource | VoidEnergySource;
  energy_usage_per_tick: Energy;
  instruments: ProgrammableSpeakerInstrument[];
  maximum_polyphony: uint32;
  sprite: Sprite;
}
export interface ProjectilePrototype extends EntityPrototype {
  acceleration: double;
  action?: Trigger;
  animation?: AnimationVariations;
  collision_mask?: CollisionMask;
  direction_only?: bool;
  enable_drawing_with_mask?: bool;
  final_action?: Trigger;
  force_condition?: ForceCondition;
  height?: double;
  hit_at_collision_position?: bool;
  hit_collision_mask?: CollisionMask;
  light?: LightDefinition;
  max_speed?: double;
  piercing_damage?: float;
  rotatable?: bool;
  shadow?: AnimationVariations;
  smoke?: SmokeSource[];
  speed_modifier?: Vector;
  turn_speed?: float;
  turning_speed_increases_exponentially_with_projectile_speed?: bool;
}
export interface PrototypeBase {
  localised_description?: LocalisedString;
  localised_name?: LocalisedString;
  name: string;
  order?: Order;
  type: string;
}
export interface PumpPrototype extends EntityWithOwnerPrototype {
  animations: Animation4Way;
  circuit_connector_sprites?: [
    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites,
  ];
  circuit_wire_connection_points?: [
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
  ];
  circuit_wire_max_distance?: double;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  energy_source: EnergySource;
  energy_usage: Energy;
  fluid_animation?: Animation4Way;
  fluid_box: FluidBox;
  fluid_wagon_connector_alignment_tolerance?: double;
  fluid_wagon_connector_frame_count?: uint8;
  fluid_wagon_connector_graphics?: FluidWagonConnectorGraphics;
  fluid_wagon_connector_speed?: double;
  glass_pictures?: Sprite4Way;
  pumping_speed: double;
}
export interface RadarPrototype extends EntityWithOwnerPrototype {
  energy_per_nearby_scan: Energy;
  energy_per_sector: Energy;
  energy_source: EnergySource;
  energy_usage: Energy;
  is_military_target?: bool;
  max_distance_of_nearby_sector_revealed: uint32;
  max_distance_of_sector_revealed: uint32;
  pictures: RotatedSprite;
  radius_minimap_visualisation_color?: Color;
  rotation_speed?: double;
}
export interface RailChainSignalPrototype extends RailSignalBasePrototype {
  blue_light?: LightDefinition;
  default_blue_output_signal?: SignalIDConnector;
  selection_box_offsets: Vector[];
}
export interface RailPlannerPrototype extends ItemPrototype {
  curved_rail: EntityID;
  straight_rail: EntityID;
}
export interface RailPrototype extends EntityWithOwnerPrototype {
  build_grid_size?: 2;
  collision_box?: BoundingBox;
  collision_mask?: CollisionMask;
  pictures: RailPictureSet;
  selection_box?: BoundingBox;
  walking_sound?: Sound;
}
export interface RailRemnantsPrototype extends CorpsePrototype {
  bending_type: 'straight' | 'turn';
  build_grid_size?: 2;
  collision_box?: BoundingBox;
  pictures: RailPictureSet;
  selection_box?: BoundingBox;
}
export interface RailSignalBasePrototype extends EntityWithOwnerPrototype {
  animation: RotatedAnimation;
  circuit_connector_sprites?: CircuitConnectorSprites[];
  circuit_wire_connection_points?: WireConnectionPoint[];
  circuit_wire_max_distance?: double;
  collision_box?: BoundingBox;
  collision_mask?: CollisionMask;
  default_green_output_signal?: SignalIDConnector;
  default_orange_output_signal?: SignalIDConnector;
  default_red_output_signal?: SignalIDConnector;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  flags?: EntityPrototypeFlags;
  green_light?: LightDefinition;
  orange_light?: LightDefinition;
  rail_piece?: Animation;
  red_light?: LightDefinition;
}
export type RailSignalPrototype = RailSignalBasePrototype;
export interface ReactorPrototype extends EntityWithOwnerPrototype {
  connection_patches_connected?: SpriteVariations;
  connection_patches_disconnected?: SpriteVariations;
  consumption: Energy;
  default_fuel_glow_color?: Color;
  energy_source: EnergySource;
  heat_buffer: HeatBuffer;
  heat_connection_patches_connected?: SpriteVariations;
  heat_connection_patches_disconnected?: SpriteVariations;
  heat_lower_layer_picture?: Sprite;
  light?: LightDefinition;
  lower_layer_picture?: Sprite;
  meltdown_action?: Trigger;
  neighbour_bonus?: double;
  picture?: Sprite;
  scale_energy_usage?: bool;
  use_fuel_glow_color?: bool;
  working_light_picture: Sprite;
}
export type RecipeCategory = PrototypeBase;
export interface RecipePrototype extends PrototypeBase {
  allow_as_intermediate?: bool;
  allow_decomposition?: bool;
  allow_inserter_overload?: bool;
  allow_intermediates?: bool;
  always_show_made_in?: bool;
  always_show_products?: bool;
  category?: RecipeCategoryID;
  crafting_machine_tint?: CraftingMachineTint;
  emissions_multiplier?: double;
  enabled?: bool;
  energy_required?: double;
  expensive?: RecipeData | false;
  hidden?: bool;
  hide_from_player_crafting?: bool;
  hide_from_stats?: bool;
  icon?: FileName;
  icon_mipmaps?: IconMipMapType;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  ingredients?: IngredientPrototype[];
  main_product?: string;
  normal?: RecipeData | false;
  overload_multiplier?: uint32;
  requester_paste_multiplier?: uint32;
  result?: ItemID;
  result_count?: uint16;
  results?: ProductPrototype[];
  show_amount_in_title?: bool;
  subgroup?: ItemSubGroupID;
  unlock_results?: bool;
}
export interface RepairToolPrototype extends ToolPrototype {
  repair_result?: Trigger;
  speed: float;
}
export interface ResearchAchievementPrototype extends AchievementPrototype {
  research_all?: bool;
  technology?: TechnologyID;
}
export type ResourceCategory = PrototypeBase;
export interface ResourceEntityPrototype extends EntityPrototype {
  category?: ResourceCategoryID;
  cliff_removal_probability?: double;
  collision_mask?: CollisionMask;
  effect_animation_period?: float;
  effect_animation_period_deviation?: float;
  effect_darkness_multiplier?: float;
  highlight?: bool;
  infinite?: bool;
  infinite_depletion_amount?: uint32;
  map_grid?: bool;
  max_effect_alpha?: float;
  min_effect_alpha?: float;
  minimum?: uint32;
  mining_visualisation_tint?: Color;
  normal?: uint32;
  randomize_visual_position?: bool;
  resource_patch_search_radius?: uint32;
  stage_counts: uint32[];
  stages: AnimationVariations;
  stages_effect?: AnimationVariations;
  tree_removal_max_distance?: double;
  tree_removal_probability?: double;
  walking_sound?: Sound;
}
export interface RoboportEquipmentPrototype extends EquipmentPrototype {
  burner?: BurnerEnergySource;
  charge_approach_distance: float;
  charging_distance?: float;
  charging_energy: Energy;
  charging_offsets?: Vector[];
  charging_station_count?: uint32;
  charging_station_shift?: Vector;
  charging_threshold_distance?: float;
  construction_radius: float;
  draw_construction_radius_visualization?: bool;
  draw_logistic_radius_visualization?: bool;
  power?: Energy;
  recharging_animation: Animation;
  recharging_light?: LightDefinition;
  robot_limit?: ItemCountType;
  robot_vertical_acceleration?: float;
  robots_shrink_when_entering_and_exiting?: bool;
  spawn_and_station_height: float;
  spawn_and_station_shadow_height_offset?: float;
  spawn_minimum?: Energy;
  stationing_offset?: Vector;
}
export interface RoboportPrototype extends EntityWithOwnerPrototype {
  base: Sprite;
  base_animation: Animation;
  base_patch: Sprite;
  charge_approach_distance: float;
  charging_distance?: float;
  charging_energy: Energy;
  charging_offsets?: Vector[];
  charging_station_count?: uint32;
  charging_station_shift?: Vector;
  charging_threshold_distance?: float;
  circuit_connector_sprites?: CircuitConnectorSprites;
  circuit_wire_connection_point?: WireConnectionPoint;
  circuit_wire_max_distance?: double;
  close_door_trigger_effect?: TriggerEffect;
  construction_radius: float;
  default_available_construction_output_signal?: SignalIDConnector;
  default_available_logistic_output_signal?: SignalIDConnector;
  default_total_construction_output_signal?: SignalIDConnector;
  default_total_logistic_output_signal?: SignalIDConnector;
  door_animation_down: Animation;
  door_animation_up: Animation;
  draw_circuit_wires?: bool;
  draw_construction_radius_visualization?: bool;
  draw_copper_wires?: bool;
  draw_logistic_radius_visualization?: bool;
  energy_source: ElectricEnergySource | VoidEnergySource;
  energy_usage: Energy;
  logistics_connection_distance?: float;
  logistics_radius: float;
  material_slots_count: ItemStackIndex;
  open_door_trigger_effect?: TriggerEffect;
  recharge_minimum: Energy;
  recharging_animation: Animation;
  recharging_light?: LightDefinition;
  request_to_open_door_timeout: uint32;
  robot_limit?: ItemCountType;
  robot_slots_count: ItemStackIndex;
  robot_vertical_acceleration?: float;
  robots_shrink_when_entering_and_exiting?: bool;
  spawn_and_station_height: float;
  spawn_and_station_shadow_height_offset?: float;
  stationing_offset?: Vector;
}
export interface RobotWithLogisticInterfacePrototype
  extends FlyingRobotPrototype {
  cargo_centered: Vector;
  destroy_action?: Trigger;
  draw_cargo?: bool;
  idle?: RotatedAnimation;
  in_motion?: RotatedAnimation;
  max_payload_size: ItemCountType;
  shadow_idle?: RotatedAnimation;
  shadow_in_motion?: RotatedAnimation;
}
export interface RocketSiloPrototype extends AssemblingMachinePrototype {
  active_energy_usage: Energy;
  alarm_sound?: Sound;
  alarm_trigger?: TriggerEffect;
  arm_01_back_animation: Animation;
  arm_02_right_animation: Animation;
  arm_03_front_animation: Animation;
  base_day_sprite: Sprite;
  base_engine_light?: LightDefinition;
  base_front_sprite: Sprite;
  base_light?: LightDefinition;
  base_night_sprite?: Sprite;
  clamps_off_sound?: Sound;
  clamps_off_trigger?: TriggerEffect;
  clamps_on_sound?: Sound;
  clamps_on_trigger?: TriggerEffect;
  door_back_open_offset: Vector;
  door_back_sprite: Sprite;
  door_front_open_offset: Vector;
  door_front_sprite: Sprite;
  door_opening_speed: double;
  doors_sound?: Sound;
  doors_trigger?: TriggerEffect;
  flying_sound?: Sound;
  hole_clipping_box: BoundingBox;
  hole_light_sprite: Sprite;
  hole_sprite: Sprite;
  lamp_energy_usage: Energy;
  launch_wait_time?: uint8;
  light_blinking_speed: double;
  raise_rocket_sound?: Sound;
  raise_rocket_trigger?: TriggerEffect;
  red_lights_back_sprites: Sprite;
  red_lights_front_sprites: Sprite;
  rocket_entity: EntityID;
  rocket_glow_overlay_sprite: Sprite;
  rocket_parts_required: uint32;
  rocket_result_inventory_size?: ItemStackIndex;
  rocket_rising_delay?: uint8;
  rocket_shadow_overlay_sprite: Sprite;
  satellite_animation?: Animation;
  satellite_shadow_animation?: Animation;
  shadow_sprite: Sprite;
  silo_fade_out_end_distance: double;
  silo_fade_out_start_distance: double;
  times_to_blink: uint8;
}
export interface RocketSiloRocketPrototype extends EntityPrototype {
  dying_explosion?: EntityID;
  effects_fade_in_end_distance: double;
  effects_fade_in_start_distance: double;
  engine_starting_speed: double;
  flying_acceleration: double;
  flying_speed: double;
  flying_trigger?: TriggerEffect;
  full_render_layer_switch_distance: double;
  glow_light?: LightDefinition;
  inventory_size: ItemStackIndex;
  rising_speed: double;
  rocket_above_wires_slice_offset_from_center?: float;
  rocket_air_object_slice_offset_from_center?: float;
  rocket_flame_animation: Animation;
  rocket_flame_left_animation: Animation;
  rocket_flame_left_rotation: float;
  rocket_flame_right_animation: Animation;
  rocket_flame_right_rotation: float;
  rocket_glare_overlay_sprite: Sprite;
  rocket_initial_offset?: Vector;
  rocket_launch_offset: Vector;
  rocket_render_layer_switch_distance: double;
  rocket_rise_offset: Vector;
  rocket_shadow_sprite: Sprite;
  rocket_smoke_bottom1_animation: Animation;
  rocket_smoke_bottom2_animation: Animation;
  rocket_smoke_top1_animation: Animation;
  rocket_smoke_top2_animation: Animation;
  rocket_smoke_top3_animation: Animation;
  rocket_sprite: Sprite;
  rocket_visible_distance_from_center: float;
  shadow_fade_out_end_ratio: double;
  shadow_fade_out_start_ratio: double;
  shadow_slave_entity?: EntityID;
}
export type RocketSiloRocketShadowPrototype = EntityPrototype;
export interface RollingStockPrototype extends VehiclePrototype {
  air_resistance: double;
  allow_manual_color?: bool;
  allow_robot_dispatch_in_automatic_mode?: bool;
  back_light?: LightDefinition;
  collision_mask?: CollisionMask;
  color?: Color;
  connection_distance: double;
  drive_over_tie_trigger?: TriggerEffect;
  horizontal_doors?: Animation;
  joint_distance: double;
  max_speed: double;
  pictures: RotatedSprite;
  stand_by_light?: LightDefinition;
  tie_distance?: double;
  vertical_doors?: Animation;
  vertical_selection_shift: double;
  wheels?: RotatedSprite;
}
export interface SelectionToolPrototype extends ItemWithLabelPrototype {
  alt_entity_filter_mode?: 'whitelist' | 'blacklist';
  alt_entity_filters?: EntityID[];
  alt_entity_type_filters?: string[];
  alt_reverse_entity_filter_mode?: 'whitelist' | 'blacklist';
  alt_reverse_entity_filters?: EntityID[];
  alt_reverse_entity_type_filters?: string[];
  alt_reverse_selection_color?: Color;
  alt_reverse_selection_count_button_color?: Color;
  alt_reverse_selection_cursor_box_type?: CursorBoxType;
  alt_reverse_selection_mode?: SelectionModeFlags;
  alt_reverse_tile_filter_mode?: 'whitelist' | 'blacklist';
  alt_reverse_tile_filters?: TileID[];
  alt_selection_color: Color;
  alt_selection_count_button_color?: Color;
  alt_selection_cursor_box_type: CursorBoxType;
  alt_selection_mode: SelectionModeFlags;
  alt_tile_filter_mode?: 'whitelist' | 'blacklist';
  alt_tile_filters?: TileID[];
  always_include_tiles?: bool;
  chart_alt_reverse_selection_color?: Color;
  chart_alt_selection_color?: Color;
  chart_reverse_selection_color?: Color;
  chart_selection_color?: Color;
  entity_filter_mode?: 'whitelist' | 'blacklist';
  entity_filters?: EntityID[];
  entity_type_filters?: string[];
  mouse_cursor?: MouseCursorID;
  reverse_entity_filter_mode?: 'whitelist' | 'blacklist';
  reverse_entity_filters?: EntityID[];
  reverse_entity_type_filters?: string[];
  reverse_selection_color?: Color;
  reverse_selection_count_button_color?: Color;
  reverse_selection_cursor_box_type?: CursorBoxType;
  reverse_selection_mode?: SelectionModeFlags;
  reverse_tile_filter_mode?: 'whitelist' | 'blacklist';
  reverse_tile_filters?: TileID[];
  selection_color: Color;
  selection_count_button_color?: Color;
  selection_cursor_box_type: CursorBoxType;
  selection_mode: SelectionModeFlags;
  tile_filter_mode?: 'whitelist' | 'blacklist';
  tile_filters?: TileID[];
}
export interface ShortcutPrototype extends PrototypeBase {
  action:
    | 'toggle-alt-mode'
    | 'undo'
    | 'copy'
    | 'cut'
    | 'paste'
    | 'import-string'
    | 'toggle-personal-roboport'
    | 'toggle-equipment-movement-bonus'
    | 'spawn-item'
    | 'lua';
  associated_control_input?: string;
  disabled_icon?: Sprite;
  disabled_small_icon?: Sprite;
  icon: Sprite;
  item_to_spawn?: ItemID;
  order?: Order;
  small_icon?: Sprite;
  style?: 'default' | 'blue' | 'red' | 'green';
  technology_to_unlock?: TechnologyID;
  toggleable?: bool;
}
export interface SimpleEntityPrototype extends EntityWithHealthPrototype {
  animations?: AnimationVariations;
  count_as_rock_for_filtered_deconstruction?: bool;
  picture?: Sprite4Way;
  pictures?: SpriteVariations;
  random_animation_offset?: bool;
  random_variation_on_create?: bool;
  render_layer?: RenderLayer;
  secondary_draw_order?: int8;
}
export interface SimpleEntityWithForcePrototype
  extends SimpleEntityWithOwnerPrototype {
  is_military_target?: bool;
}
export interface SimpleEntityWithOwnerPrototype
  extends EntityWithOwnerPrototype {
  animations?: AnimationVariations;
  force_visibility?: ForceCondition;
  picture?: Sprite4Way;
  pictures?: SpriteVariations;
  random_animation_offset?: bool;
  random_variation_on_create?: bool;
  render_layer?: RenderLayer;
  secondary_draw_order?: int8;
}
export type SimpleSmokePrototype = SmokePrototype;
export interface SmokePrototype extends EntityPrototype {
  affected_by_wind?: bool;
  animation: Animation;
  collision_box?: BoundingBox;
  collision_mask?: CollisionMask;
  color?: Color;
  cyclic?: bool;
  duration?: uint32;
  end_scale?: double;
  fade_away_duration?: uint32;
  fade_in_duration?: uint32;
  glow_animation?: Animation;
  glow_fade_away_duration?: uint32;
  movement_slow_down_factor?: double;
  render_layer?: RenderLayer;
  show_when_smoke_off?: bool;
  spread_duration?: uint32;
  start_scale?: double;
}
export interface SmokeWithTriggerPrototype extends SmokePrototype {
  action?: Trigger;
  action_cooldown?: uint32;
  particle_count?: uint8;
  particle_distance_scale_factor?: float;
  particle_duration_variation?: uint32;
  particle_scale_factor?: Vector;
  particle_spread?: Vector;
  spread_duration_variation?: uint32;
  wave_distance?: Vector;
  wave_speed?: Vector;
}
export interface SolarPanelEquipmentPrototype extends EquipmentPrototype {
  power: Energy;
}
export interface SolarPanelPrototype extends EntityWithOwnerPrototype {
  energy_source: ElectricEnergySource;
  overlay?: SpriteVariations;
  picture: SpriteVariations;
  production: Energy;
}
export interface SoundPrototype {
  aggregation?: AggregationSpecification;
  allow_random_repeat?: bool;
  audible_distance_modifier?: double;
  category?: SoundType;
  filename?: FileName;
  game_controller_vibration_data?: GameControllerVibrationData;
  max_speed?: float;
  min_speed?: float;
  name: string;
  preload?: bool;
  speed?: float;
  type: 'sound';
  variations?: SoundDefinition | SoundDefinition[];
  volume?: float;
}
export interface SpectatorControllerPrototype {
  movement_speed: double;
  name: string;
  type: 'spectator-controller';
}
export interface SpeechBubblePrototype extends EntityPrototype {
  collision_mask?: CollisionMask;
  fade_in_out_ticks?: uint32;
  style: string;
  wrapper_flow_style?: string;
  y_offset?: double;
}
export interface SpiderLegPrototype extends EntityWithHealthPrototype {
  collision_mask?: CollisionMask;
  graphics_set: SpiderLegGraphicsSet;
  initial_movement_speed: double;
  minimal_step_size: double;
  movement_acceleration: double;
  movement_based_position_selection_distance: double;
  part_length: double;
  target_position_randomisation_distance: double;
  walking_sound_volume_modifier?: double;
}
export interface SpiderVehiclePrototype extends VehiclePrototype {
  automatic_weapon_cycling: bool;
  chain_shooting_cooldown_modifier: float;
  chunk_exploration_radius: uint32;
  energy_source: BurnerEnergySource | VoidEnergySource;
  graphics_set: SpiderVehicleGraphicsSet;
  guns?: ItemID[];
  height: float;
  inventory_size: ItemStackIndex;
  movement_energy_consumption: Energy;
  spider_engine: SpiderEnginePrototype;
  torso_bob_speed?: float;
  torso_rotation_speed?: float;
  trash_inventory_size?: ItemStackIndex;
}
export interface SpidertronRemotePrototype extends ItemPrototype {
  icon_color_indicator_mask?: FileName;
  icon_color_indicator_masks?: IconData[];
  stack_size: 1;
}
export interface SplitterPrototype extends TransportBeltConnectablePrototype {
  collision_mask?: CollisionMask;
  structure: Animation4Way;
  structure_animation_movement_cooldown?: uint32;
  structure_animation_speed_coefficient?: double;
  structure_patch?: Animation4Way;
}
export interface SpritePrototype {
  apply_runtime_tint?: bool;
  blend_mode?: BlendMode;
  draw_as_glow?: bool;
  draw_as_light?: bool;
  draw_as_shadow?: bool;
  filename?: FileName;
  flags?: SpriteFlags;
  generate_sdf?: bool;
  height?: SpriteSizeType;
  hr_version?: Sprite;
  layers?: Sprite[];
  load_in_minimal_mode?: bool;
  mipmap_count?: uint8;
  name: string;
  position?: [SpriteSizeType, SpriteSizeType];
  premul_alpha?: bool;
  priority?: SpritePriority;
  scale?: double;
  shift?: Vector;
  size?: SpriteSizeType | [SpriteSizeType, SpriteSizeType];
  slice?: SpriteSizeType;
  slice_x?: SpriteSizeType;
  slice_y?: SpriteSizeType;
  tint?: Color;
  type: 'sprite';
  width?: SpriteSizeType;
  x?: SpriteSizeType;
  y?: SpriteSizeType;
}
export interface StickerPrototype extends EntityPrototype {
  animation?: Animation;
  collision_mask?: CollisionMask;
  damage_interval?: uint32;
  damage_per_tick?: DamagePrototype;
  duration_in_ticks: uint32;
  fire_spread_cooldown?: uint8;
  fire_spread_radius?: float;
  force_visibility?: ForceCondition;
  selection_box_type?: CursorBoxType;
  single_particle?: bool;
  spread_fire_entity?: EntityID;
  stickers_per_square_meter?: float;
  target_movement_modifier?: float;
  target_movement_modifier_from?: float;
  target_movement_modifier_to?: float;
  vehicle_friction_modifier?: float;
  vehicle_friction_modifier_from?: float;
  vehicle_friction_modifier_to?: float;
  vehicle_speed_modifier?: float;
  vehicle_speed_modifier_from?: float;
  vehicle_speed_modifier_to?: float;
}
export interface StorageTankPrototype extends EntityWithOwnerPrototype {
  circuit_connector_sprites?: [
    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites,
  ];
  circuit_wire_connection_points?: [
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
  ];
  circuit_wire_max_distance?: double;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  flow_length_in_ticks: uint32;
  fluid_box: FluidBox;
  pictures: StorageTankPictures;
  scale_info_icons?: bool;
  show_fluid_icon?: bool;
  two_direction_only?: bool;
  window_bounding_box: BoundingBox;
}
export interface StraightRailPrototype extends RailPrototype {
  bending_type?: 'straight';
}
export interface TechnologyPrototype extends PrototypeBase {
  effects?: Modifier[];
  enabled?: bool;
  expensive?: TechnologyData | false;
  hidden?: bool;
  icon?: FileName;
  icon_mipmaps?: IconMipMapType;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  ignore_tech_cost_multiplier?: bool;
  max_level?: uint32 | 'infinite';
  name: string;
  normal?: TechnologyData | false;
  prerequisites?: TechnologyID[];
  unit?: TechnologyUnit;
  upgrade?: bool;
  visible_when_disabled?: bool;
}
export interface TileEffectDefinition {
  animation_scale: float | [float, float];
  animation_speed: float;
  dark_threshold: float | [float, float];
  far_zoom?: float;
  foam_color: Color;
  foam_color_multiplier: float;
  name: string;
  near_zoom?: float;
  reflection_threshold: float | [float, float];
  specular_lightness: Color;
  specular_threshold: float | [float, float];
  texture: Sprite;
  tick_scale: float;
  type: 'tile-effect';
}
export interface TileGhostPrototype extends EntityPrototype {
  collision_mask?: CollisionMask;
}
export interface TilePrototype extends PrototypeBase {
  allowed_neighbors?: TileID[];
  autoplace?: AutoplaceSpecification;
  build_sound?: Sound | TileBuildSound;
  can_be_part_of_blueprint?: bool;
  check_collision_with_entities?: bool;
  collision_mask: CollisionMask;
  decorative_removal_probability?: float;
  draw_in_water_layer?: bool;
  effect?: string;
  effect_color?: Color;
  effect_color_secondary?: Color;
  effect_is_opaque?: bool;
  icon?: FileName;
  icon_mipmaps?: IconMipMapType;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  layer: uint8;
  layer_group?: TileRenderLayer;
  map_color: Color;
  minable?: MinableProperties;
  mined_sound?: Sound;
  needs_correction?: bool;
  next_direction?: TileID;
  placeable_by?: ItemToPlace | ItemToPlace[];
  pollution_absorption_per_second: double;
  scorch_mark_color?: Color;
  tint?: Color;
  transition_merges_with_tile?: TileID;
  transition_overlay_layer_offset?: int8;
  transitions?: TileTransitionsToTiles[];
  transitions_between_transitions?: TileTransitionsBetweenTransitions[];
  trigger_effect?: TriggerEffect;
  variants: TileTransitionsVariants;
  vehicle_friction_modifier?: double;
  walking_sound?: Sound;
  walking_speed_modifier?: double;
}
export interface TipsAndTricksItem extends PrototypeBase {
  category?: string;
  dependencies?: string[];
  image?: FileName;
  indent?: uint8;
  is_title?: bool;
  player_input_method_filter?: PlayerInputMethodFilter;
  simulation?: SimulationDefinition;
  skip_trigger?: TipTrigger;
  starting_status?: TipStatus;
  tag?: string;
  trigger?: TipTrigger;
  tutorial?: string;
}
export interface TipsAndTricksItemCategory {
  name: string;
  order: Order;
  type: 'tips-and-tricks-item-category';
}
export interface ToolPrototype extends ItemPrototype {
  durability?: double;
  durability_description_key?: string;
  durability_description_value?: string;
  infinite?: bool;
}
export interface TrainPathAchievementPrototype extends AchievementPrototype {
  minimum_distance: double;
}
export interface TrainStopPrototype extends EntityWithOwnerPrototype {
  animation_ticks_per_frame: uint32;
  animations?: Animation4Way;
  build_grid_size?: 2;
  chart_name?: bool;
  circuit_connector_sprites?: [
    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites,
  ];
  circuit_wire_connection_points?: [
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
  ];
  circuit_wire_max_distance?: double;
  color?: Color;
  default_train_stopped_signal?: SignalIDConnector;
  default_trains_count_signal?: SignalIDConnector;
  default_trains_limit_signal?: SignalIDConnector;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  drawing_boxes?: TrainStopDrawingBoxes;
  light1?: TrainStopLight;
  light2?: TrainStopLight;
  rail_overlay_animations?: Animation4Way;
  top_animations?: Animation4Way;
}
export interface TransportBeltConnectablePrototype
  extends EntityWithOwnerPrototype {
  animation_speed_coefficient?: double;
  belt_animation_set?: TransportBeltAnimationSet;
  belt_horizontal?: Animation;
  belt_vertical?: Animation;
  collision_box?: BoundingBox;
  collision_mask?: CollisionMask;
  ending_bottom?: Animation;
  ending_patch?: Sprite4Way;
  ending_side?: Animation;
  ending_top?: Animation;
  ends_with_stopper?: bool;
  flags?: EntityPrototypeFlags;
  speed: double;
  starting_bottom?: Animation;
  starting_side?: Animation;
  starting_top?: Animation;
}
export interface TransportBeltPrototype
  extends Omit<
    TransportBeltConnectablePrototype,
    'animation_set' | 'belt_animation_set'
  > {
  animations?: RotatedAnimation;
  belt_animation_set?: TransportBeltAnimationSetWithCorners;
  circuit_connector_sprites?: CircuitConnectorSprites[];
  circuit_wire_connection_points?: WireConnectionPoint[];
  circuit_wire_max_distance?: double;
  collision_mask?: CollisionMask;
  connector_frame_sprites: TransportBeltConnectorFrame;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  related_underground_belt?: EntityID;
}
export interface TreePrototype extends EntityWithHealthPrototype {
  colors?: Color[];
  darkness_of_burnt_tree?: float;
  healing_per_tick?: float;
  pictures?: SpriteVariations;
  variation_weights?: float[];
  variations?: TreeVariation[];
}
export interface TriggerTargetType {
  name: string;
  type: 'trigger-target-type';
}
export interface TrivialSmokePrototype extends PrototypeBase {
  affected_by_wind?: bool;
  animation: Animation;
  color?: Color;
  cyclic?: bool;
  duration: uint32;
  end_scale?: float;
  fade_away_duration?: uint32;
  fade_in_duration?: uint32;
  glow_animation?: Animation;
  glow_fade_away_duration?: uint32;
  movement_slow_down_factor?: double;
  render_layer?: RenderLayer;
  show_when_smoke_off?: bool;
  spread_duration?: uint32;
  start_scale?: float;
}
export interface TurretPrototype extends EntityWithOwnerPrototype {
  alert_when_attacking?: bool;
  allow_turning_when_starting_attack?: bool;
  attack_from_start_frame?: bool;
  attack_parameters: AttackParameters;
  attack_target_mask?: TriggerTargetMask;
  attacking_animation?: RotatedAnimation4Way;
  attacking_speed?: float;
  base_picture?: Animation4Way;
  base_picture_render_layer?: RenderLayer;
  base_picture_secondary_draw_order?: uint8;
  call_for_help_radius: double;
  corpse?: EntityID;
  dying_sound?: Sound;
  ending_attack_animation?: RotatedAnimation4Way;
  ending_attack_speed?: float;
  energy_glow_animation?: RotatedAnimation4Way;
  energy_glow_animation_flicker_strength?: float;
  folded_animation: RotatedAnimation4Way;
  folded_speed?: float;
  folded_speed_secondary?: float;
  folding_animation?: RotatedAnimation4Way;
  folding_sound?: Sound;
  folding_speed?: float;
  glow_light_intensity?: float;
  gun_animation_render_layer?: RenderLayer;
  gun_animation_secondary_draw_order?: uint8;
  ignore_target_mask?: TriggerTargetMask;
  integration?: Sprite;
  is_military_target?: bool;
  prepare_range?: double;
  prepared_alternative_animation?: RotatedAnimation4Way;
  prepared_alternative_chance?: float;
  prepared_alternative_sound?: Sound;
  prepared_alternative_speed?: float;
  prepared_alternative_speed_secondary?: float;
  prepared_animation?: RotatedAnimation4Way;
  prepared_sound?: Sound;
  prepared_speed?: float;
  prepared_speed_secondary?: float;
  preparing_animation?: RotatedAnimation4Way;
  preparing_sound?: Sound;
  preparing_speed?: float;
  random_animation_offset?: bool;
  rotation_speed?: float;
  secondary_animation?: bool;
  shoot_in_prepare_state?: bool;
  spawn_decoration?:
    | CreateDecorativesTriggerEffectItem
    | CreateDecorativesTriggerEffectItem[];
  spawn_decorations_on_expansion?: bool;
  starting_attack_animation?: RotatedAnimation4Way;
  starting_attack_sound?: Sound;
  starting_attack_speed?: float;
  turret_base_has_direction?: bool;
}
export interface TutorialDefinition extends PrototypeBase {
  scenario: string;
}
export interface UndergroundBeltPrototype
  extends TransportBeltConnectablePrototype {
  collision_mask?: CollisionMask;
  max_distance: uint8;
  structure: UndergroundBeltStructure;
  underground_remove_belts_sprite?: Sprite;
  underground_sprite: Sprite;
}
export interface UnitPrototype extends EntityWithOwnerPrototype {
  affected_by_tiles?: bool;
  ai_settings?: UnitAISettings;
  allow_run_time_change_of_is_military_target?: false;
  alternative_attacking_frame_sequence?: UnitAlternativeFrameSequence;
  attack_parameters: AttackParameters;
  can_open_gates?: bool;
  collision_mask?: CollisionMask;
  distance_per_frame: float;
  distraction_cooldown: uint32;
  dying_sound?: Sound;
  has_belt_immunity?: bool;
  is_military_target?: true;
  light?: LightDefinition;
  max_pursue_distance?: double;
  min_pursue_time?: uint32;
  move_while_shooting?: bool;
  movement_speed: float;
  pollution_to_join_attack: float;
  radar_range?: uint32;
  render_layer?: RenderLayer;
  rotation_speed?: float;
  run_animation: RotatedAnimation;
  running_sound_animation_positions?: float[];
  spawning_time_modifier?: double;
  vision_distance: double;
  walking_sound?: Sound;
}
export interface UpgradeItemPrototype
  extends Omit<
    SelectionToolPrototype,
    'selection_mode' | 'alt_selection_mode'
  > {
  alt_entity_filter_mode?: 'whitelist' | 'blacklist';
  alt_entity_filters?: EntityID[];
  alt_entity_type_filters?: string[];
  alt_selection_mode?: SelectionModeFlags;
  alt_tile_filter_mode?: 'whitelist' | 'blacklist';
  alt_tile_filters?: TileID[];
  always_include_tiles?: bool;
  entity_filter_mode?: 'whitelist' | 'blacklist';
  entity_filters?: EntityID[];
  entity_type_filters?: string[];
  mapper_count?: ItemStackIndex;
  selection_mode?: SelectionModeFlags;
  stack_size: 1;
  tile_filter_mode?: 'whitelist' | 'blacklist';
  tile_filters?: TileID[];
}
export interface UtilityConstants extends PrototypeBase {
  artillery_range_visualization_color: Color;
  bonus_gui_ordering: BonusGuiOrdering;
  building_buildable_tint: Color;
  building_buildable_too_far_tint: Color;
  building_ignorable_tint: Color;
  building_no_tint: Color;
  building_not_buildable_tint: Color;
  capsule_range_visualization_color: Color;
  chart: ChartUtilityConstants;
  checkerboard_black: Color;
  checkerboard_white: Color;
  clipboard_history_size: uint32;
  color_filters: ColorFilterData[];
  count_button_size: int32;
  daytime_color_lookup: DaytimeColorLookupTable;
  deconstruct_mark_tint: Color;
  default_alert_icon_scale: float;
  default_alert_icon_scale_by_type?: Record<string, float>;
  default_alert_icon_shift_by_type?: Record<string, Vector>;
  default_enemy_force_color: Color;
  default_other_force_color: Color;
  default_player_force_color: Color;
  default_scorch_mark_color: Color;
  default_trigger_target_mask_by_type?: Record<string, TriggerTargetMask>;
  disabled_recipe_slot_background_tint: Color;
  disabled_recipe_slot_tint: Color;
  dynamic_recipe_overload_factor: double;
  enabled_recipe_slot_tint: Color;
  entity_button_background_color: Color;
  entity_renderer_search_box_limits: EntityRendererSearchBoxLimits;
  equipment_default_background_border_color: Color;
  equipment_default_background_color: Color;
  equipment_default_grabbed_background_color: Color;
  filter_outline_color: Color;
  flying_text_ttl: uint32;
  forced_enabled_recipe_slot_background_tint: Color;
  ghost_tint: Color;
  gui_remark_color: Color;
  icon_shadow_color: Color;
  icon_shadow_inset: float;
  icon_shadow_radius: float;
  icon_shadow_sharpness: float;
  inventory_width: uint32;
  item_outline_color: Color;
  item_outline_inset: float;
  item_outline_radius: float;
  item_outline_sharpness: float;
  light_renderer_search_distance_limit: uint8;
  main_menu_background_image_location: FileName;
  main_menu_background_vignette_intensity: float;
  main_menu_background_vignette_sharpness: float;
  main_menu_simulations: Record<string, SimulationDefinition>;
  manual_rail_building_reach_modifier: double;
  map_editor: MapEditorConstants;
  max_terrain_building_size: uint8;
  maximum_recipe_overload_multiplier: uint32;
  medium_area_size: float;
  medium_blueprint_area_size: float;
  minimum_recipe_overload_multiplier: uint32;
  missing_preview_sprite_location: FileName;
  module_inventory_width: uint32;
  normalised_achievement_icon_size: uint32;
  player_colors: PlayerColorData[];
  rail_planner_count_button_color: Color;
  rail_segment_colors: Color[];
  recipe_step_limit: uint32;
  script_command_console_chat_color: Color;
  select_group_row_count: uint8;
  select_slot_row_count: uint32;
  server_command_console_chat_color: Color;
  small_area_size: float;
  small_blueprint_area_size: float;
  tile_ghost_tint: Color;
  tooltip_monitor_edge_border: int32;
  train_button_hovered_tint: Color;
  train_destination_full_color: Color;
  train_inactivity_wait_condition_default: uint32;
  train_no_path_color: Color;
  train_path_finding: TrainPathFinderConstants;
  train_temporary_stop_wait_time: uint32;
  train_time_wait_condition_default: uint32;
  tree_leaf_distortion_distortion_far: Vector;
  tree_leaf_distortion_distortion_near: Vector;
  tree_leaf_distortion_speed_far: Vector;
  tree_leaf_distortion_speed_near: Vector;
  tree_leaf_distortion_strength_far: Vector;
  tree_leaf_distortion_strength_near: Vector;
  tree_shadow_roughness: float;
  tree_shadow_speed: float;
  turret_range_visualization_color: Color;
  tutorial_notice_icon_size: uint32;
  unit_group_max_pursue_distance: double;
  unit_group_pathfind_resolution: int8;
  zoom_to_world_can_use_nightvision: bool;
  zoom_to_world_daytime_color_lookup: DaytimeColorLookupTable;
  zoom_to_world_effect_strength: float;
}
export interface UtilitySounds extends PrototypeBase {
  achievement_unlocked: Sound;
  alert_destroyed: Sound;
  armor_insert: Sound;
  armor_remove: Sound;
  axe_fighting: Sound;
  axe_mining_ore: Sound;
  blueprint_selection_ended: Sound;
  blueprint_selection_started: Sound;
  build_blueprint_large: Sound;
  build_blueprint_medium: Sound;
  build_blueprint_small: Sound;
  build_large: Sound;
  build_medium: Sound;
  build_small: Sound;
  cancel_deconstruction_selection_ended: Sound;
  cancel_deconstruction_selection_started: Sound;
  cannot_build: Sound;
  clear_cursor: Sound;
  confirm: Sound;
  console_message: Sound;
  copy_activated: Sound;
  crafting_finished: Sound;
  cut_activated: Sound;
  deconstruct_big: Sound;
  deconstruct_medium: Sound;
  deconstruct_robot: Sound;
  deconstruct_small: Sound;
  deconstruction_selection_ended: Sound;
  deconstruction_selection_started: Sound;
  default_manual_repair: Sound;
  drop_item: Sound;
  entity_settings_copied: Sound;
  entity_settings_pasted: Sound;
  game_lost: Sound;
  game_won: Sound;
  gui_click: Sound;
  inventory_click: Sound;
  inventory_move: Sound;
  item_deleted: Sound;
  item_spawned: Sound;
  list_box_click: Sound;
  metal_walking_sound: Sound;
  mining_wood: Sound;
  new_objective: Sound;
  paste_activated: Sound;
  picked_up_item: Sound;
  rail_plan_start: Sound;
  research_completed: Sound;
  rotated_big: Sound;
  rotated_medium: Sound;
  rotated_small: Sound;
  scenario_message: Sound;
  smart_pipette: Sound;
  switch_gun: Sound;
  tutorial_notice: Sound;
  undo: Sound;
  upgrade_selection_ended: Sound;
  upgrade_selection_started: Sound;
  wire_connect_pole: Sound;
  wire_disconnect: Sound;
  wire_pickup: Sound;
}
export interface UtilitySprites extends PrototypeBase {
  achievement_label_failed: Sprite;
  achievement_label_locked: Sprite;
  achievement_label_unlocked: Sprite;
  achievement_label_unlocked_off: Sprite;
  add: Sprite;
  alert_arrow: Sprite;
  ammo_damage_modifier_constant?: Sprite;
  ammo_damage_modifier_icon: Sprite;
  ammo_icon: Sprite;
  and_or: Sprite;
  area_icon: Sprite;
  arrow_button: Animation;
  artillery_range_modifier_constant?: Sprite;
  artillery_range_modifier_icon: Sprite;
  bar_gray_pip: Sprite;
  battery: Sprite;
  bookmark: Sprite;
  brush_circle_shape: Sprite;
  brush_icon: Sprite;
  brush_square_shape: Sprite;
  cable_editor_icon: Sprite;
  center: Sprite;
  change_recipe: Sprite;
  character_additional_mining_categories_modifier_constant?: Sprite;
  character_additional_mining_categories_modifier_icon: Sprite;
  character_build_distance_modifier_constant?: Sprite;
  character_build_distance_modifier_icon: Sprite;
  character_crafting_speed_modifier_constant?: Sprite;
  character_crafting_speed_modifier_icon: Sprite;
  character_health_bonus_modifier_constant?: Sprite;
  character_health_bonus_modifier_icon: Sprite;
  character_inventory_slots_bonus_modifier_constant?: Sprite;
  character_inventory_slots_bonus_modifier_icon: Sprite;
  character_item_drop_distance_modifier_constant?: Sprite;
  character_item_drop_distance_modifier_icon: Sprite;
  character_item_pickup_distance_modifier_constant?: Sprite;
  character_item_pickup_distance_modifier_icon: Sprite;
  character_logistic_requests_modifier_constant?: Sprite;
  character_logistic_requests_modifier_icon: Sprite;
  character_logistic_slots_modifier_constant?: Sprite;
  character_logistic_slots_modifier_icon: Sprite;
  character_logistic_trash_slots_modifier_constant?: Sprite;
  character_logistic_trash_slots_modifier_icon: Sprite;
  character_loot_pickup_distance_modifier_constant?: Sprite;
  character_loot_pickup_distance_modifier_icon: Sprite;
  character_mining_speed_modifier_constant?: Sprite;
  character_mining_speed_modifier_icon: Sprite;
  character_reach_distance_modifier_constant?: Sprite;
  character_reach_distance_modifier_icon: Sprite;
  character_resource_reach_distance_modifier_constant?: Sprite;
  character_resource_reach_distance_modifier_icon: Sprite;
  character_running_speed_modifier_constant?: Sprite;
  character_running_speed_modifier_icon: Sprite;
  check_mark: Sprite;
  check_mark_dark_green: Sprite;
  check_mark_green: Sprite;
  check_mark_white: Sprite;
  circuit_network_panel_black: Sprite;
  circuit_network_panel_white: Sprite;
  cliff_editor_icon: Sprite;
  clock: Sprite;
  clone: Sprite;
  clone_editor_icon: Sprite;
  close_black: Sprite;
  close_fat: Sprite;
  close_map_preview: Sprite;
  close_white: Sprite;
  clouds: Animation;
  collapse: Sprite;
  collapse_dark: Sprite;
  color_effect: Sprite;
  color_picker: Sprite;
  confirm_slot: Sprite;
  construction_radius_visualization: Sprite;
  controller_joycon_a: Sprite;
  controller_joycon_b: Sprite;
  controller_joycon_back: Sprite;
  controller_joycon_black_a: Sprite;
  controller_joycon_black_b: Sprite;
  controller_joycon_black_back: Sprite;
  controller_joycon_black_dpdown: Sprite;
  controller_joycon_black_dpleft: Sprite;
  controller_joycon_black_dpright: Sprite;
  controller_joycon_black_dpup: Sprite;
  controller_joycon_black_left_stick: Sprite;
  controller_joycon_black_leftshoulder: Sprite;
  controller_joycon_black_leftstick: Sprite;
  controller_joycon_black_lefttrigger: Sprite;
  controller_joycon_black_paddle1: Sprite;
  controller_joycon_black_paddle2: Sprite;
  controller_joycon_black_paddle3: Sprite;
  controller_joycon_black_paddle4: Sprite;
  controller_joycon_black_right_stick: Sprite;
  controller_joycon_black_rightshoulder: Sprite;
  controller_joycon_black_rightstick: Sprite;
  controller_joycon_black_righttrigger: Sprite;
  controller_joycon_black_start: Sprite;
  controller_joycon_black_x: Sprite;
  controller_joycon_black_y: Sprite;
  controller_joycon_dpdown: Sprite;
  controller_joycon_dpleft: Sprite;
  controller_joycon_dpright: Sprite;
  controller_joycon_dpup: Sprite;
  controller_joycon_left_stick: Sprite;
  controller_joycon_leftshoulder: Sprite;
  controller_joycon_leftstick: Sprite;
  controller_joycon_lefttrigger: Sprite;
  controller_joycon_paddle1: Sprite;
  controller_joycon_paddle2: Sprite;
  controller_joycon_paddle3: Sprite;
  controller_joycon_paddle4: Sprite;
  controller_joycon_right_stick: Sprite;
  controller_joycon_rightshoulder: Sprite;
  controller_joycon_rightstick: Sprite;
  controller_joycon_righttrigger: Sprite;
  controller_joycon_start: Sprite;
  controller_joycon_x: Sprite;
  controller_joycon_y: Sprite;
  controller_ps_a: Sprite;
  controller_ps_b: Sprite;
  controller_ps_back: Sprite;
  controller_ps_black_a: Sprite;
  controller_ps_black_b: Sprite;
  controller_ps_black_back: Sprite;
  controller_ps_black_dpdown: Sprite;
  controller_ps_black_dpleft: Sprite;
  controller_ps_black_dpright: Sprite;
  controller_ps_black_dpup: Sprite;
  controller_ps_black_left_stick: Sprite;
  controller_ps_black_leftshoulder: Sprite;
  controller_ps_black_leftstick: Sprite;
  controller_ps_black_lefttrigger: Sprite;
  controller_ps_black_right_stick: Sprite;
  controller_ps_black_rightshoulder: Sprite;
  controller_ps_black_rightstick: Sprite;
  controller_ps_black_righttrigger: Sprite;
  controller_ps_black_start: Sprite;
  controller_ps_black_x: Sprite;
  controller_ps_black_y: Sprite;
  controller_ps_dpdown: Sprite;
  controller_ps_dpleft: Sprite;
  controller_ps_dpright: Sprite;
  controller_ps_dpup: Sprite;
  controller_ps_left_stick: Sprite;
  controller_ps_leftshoulder: Sprite;
  controller_ps_leftstick: Sprite;
  controller_ps_lefttrigger: Sprite;
  controller_ps_right_stick: Sprite;
  controller_ps_rightshoulder: Sprite;
  controller_ps_rightstick: Sprite;
  controller_ps_righttrigger: Sprite;
  controller_ps_start: Sprite;
  controller_ps_x: Sprite;
  controller_ps_y: Sprite;
  controller_steamdeck_a: Sprite;
  controller_steamdeck_b: Sprite;
  controller_steamdeck_back: Sprite;
  controller_steamdeck_black_a: Sprite;
  controller_steamdeck_black_b: Sprite;
  controller_steamdeck_black_back: Sprite;
  controller_steamdeck_black_dpdown: Sprite;
  controller_steamdeck_black_dpleft: Sprite;
  controller_steamdeck_black_dpright: Sprite;
  controller_steamdeck_black_dpup: Sprite;
  controller_steamdeck_black_left_stick: Sprite;
  controller_steamdeck_black_leftshoulder: Sprite;
  controller_steamdeck_black_leftstick: Sprite;
  controller_steamdeck_black_lefttrigger: Sprite;
  controller_steamdeck_black_paddle1: Sprite;
  controller_steamdeck_black_paddle2: Sprite;
  controller_steamdeck_black_paddle3: Sprite;
  controller_steamdeck_black_paddle4: Sprite;
  controller_steamdeck_black_right_stick: Sprite;
  controller_steamdeck_black_rightshoulder: Sprite;
  controller_steamdeck_black_rightstick: Sprite;
  controller_steamdeck_black_righttrigger: Sprite;
  controller_steamdeck_black_start: Sprite;
  controller_steamdeck_black_x: Sprite;
  controller_steamdeck_black_y: Sprite;
  controller_steamdeck_dpdown: Sprite;
  controller_steamdeck_dpleft: Sprite;
  controller_steamdeck_dpright: Sprite;
  controller_steamdeck_dpup: Sprite;
  controller_steamdeck_left_stick: Sprite;
  controller_steamdeck_leftshoulder: Sprite;
  controller_steamdeck_leftstick: Sprite;
  controller_steamdeck_lefttrigger: Sprite;
  controller_steamdeck_paddle1: Sprite;
  controller_steamdeck_paddle2: Sprite;
  controller_steamdeck_paddle3: Sprite;
  controller_steamdeck_paddle4: Sprite;
  controller_steamdeck_right_stick: Sprite;
  controller_steamdeck_rightshoulder: Sprite;
  controller_steamdeck_rightstick: Sprite;
  controller_steamdeck_righttrigger: Sprite;
  controller_steamdeck_start: Sprite;
  controller_steamdeck_x: Sprite;
  controller_steamdeck_y: Sprite;
  controller_xbox_a: Sprite;
  controller_xbox_b: Sprite;
  controller_xbox_back: Sprite;
  controller_xbox_black_a: Sprite;
  controller_xbox_black_b: Sprite;
  controller_xbox_black_back: Sprite;
  controller_xbox_black_dpdown: Sprite;
  controller_xbox_black_dpleft: Sprite;
  controller_xbox_black_dpright: Sprite;
  controller_xbox_black_dpup: Sprite;
  controller_xbox_black_left_stick: Sprite;
  controller_xbox_black_leftshoulder: Sprite;
  controller_xbox_black_leftstick: Sprite;
  controller_xbox_black_lefttrigger: Sprite;
  controller_xbox_black_right_stick: Sprite;
  controller_xbox_black_rightshoulder: Sprite;
  controller_xbox_black_rightstick: Sprite;
  controller_xbox_black_righttrigger: Sprite;
  controller_xbox_black_start: Sprite;
  controller_xbox_black_x: Sprite;
  controller_xbox_black_y: Sprite;
  controller_xbox_dpdown: Sprite;
  controller_xbox_dpleft: Sprite;
  controller_xbox_dpright: Sprite;
  controller_xbox_dpup: Sprite;
  controller_xbox_left_stick: Sprite;
  controller_xbox_leftshoulder: Sprite;
  controller_xbox_leftstick: Sprite;
  controller_xbox_lefttrigger: Sprite;
  controller_xbox_right_stick: Sprite;
  controller_xbox_rightshoulder: Sprite;
  controller_xbox_rightstick: Sprite;
  controller_xbox_righttrigger: Sprite;
  controller_xbox_start: Sprite;
  controller_xbox_x: Sprite;
  controller_xbox_y: Sprite;
  copper_wire: Sprite;
  copy: Sprite;
  covered_chunk: Sprite;
  crafting_machine_recipe_not_unlocked: Sprite;
  cross_select: Sprite;
  cursor_box: CursorBoxSpecification;
  cursor_icon: Sprite;
  custom_tag_icon: Sprite;
  custom_tag_in_map_view: Sprite;
  danger_icon: Sprite;
  deconstruction_mark: Sprite;
  deconstruction_time_to_live_modifier_constant?: Sprite;
  deconstruction_time_to_live_modifier_icon: Sprite;
  decorative_editor_icon: Sprite;
  default_ammo_damage_modifier_icon: Sprite;
  default_gun_speed_modifier_icon: Sprite;
  default_turret_attack_modifier_icon: Sprite;
  destroyed_icon: Sprite;
  down_arrow: Sprite;
  downloaded: Sprite;
  downloaded_white: Sprite;
  downloading: Sprite;
  downloading_white: Sprite;
  dropdown: Sprite;
  editor_pause: Sprite;
  editor_play: Sprite;
  editor_selection: Sprite;
  editor_speed_down: Sprite;
  editor_speed_up: Sprite;
  electricity_icon: Sprite;
  electricity_icon_unplugged: Sprite;
  enemy_force_icon: Sprite;
  enter: Sprite;
  entity_editor_icon: Sprite;
  entity_info_dark_background: Sprite;
  equipment_collision: Sprite;
  equipment_grid: Sprite;
  equipment_slot: Sprite;
  expand: Sprite;
  expand_dark: Sprite;
  expand_dots: Sprite;
  expand_dots_white: Sprite;
  explosion_chart_visualization: Animation;
  export: Sprite;
  export_slot: Sprite;
  favourite_server_icon: Sprite;
  fluid_icon: Sprite;
  fluid_indication_arrow: Sprite;
  fluid_indication_arrow_both_ways: Sprite;
  follower_robot_lifetime_modifier_constant?: Sprite;
  follower_robot_lifetime_modifier_icon: Sprite;
  force_editor_icon: Sprite;
  fuel_icon: Sprite;
  game_stopped_visualization: Sprite;
  ghost_bar_pip: Sprite;
  ghost_cursor: Sprite;
  ghost_time_to_live_modifier_constant?: Sprite;
  ghost_time_to_live_modifier_icon: Sprite;
  give_item_modifier_constant?: Sprite;
  give_item_modifier_icon: Sprite;
  go_to_arrow: Sprite;
  gps_map_icon: Sprite;
  gradient: Sprite;
  green_circle: Sprite;
  green_dot: Sprite;
  green_wire: Sprite;
  green_wire_hightlight: Sprite;
  grey_placement_indicator_leg: Sprite;
  grey_rail_signal_placement_indicator: Sprite;
  grid_view: Sprite;
  gun_speed_modifier_constant?: Sprite;
  gun_speed_modifier_icon: Sprite;
  hand: Sprite;
  hand_black: Sprite;
  health_bar_green_pip: Sprite;
  health_bar_red_pip: Sprite;
  health_bar_yellow_pip: Sprite;
  heat_exchange_indication: Sprite;
  hint_arrow_down: Sprite;
  hint_arrow_left: Sprite;
  hint_arrow_right: Sprite;
  hint_arrow_up: Sprite;
  import: Sprite;
  import_slot: Sprite;
  indication_arrow: Sprite;
  indication_line: Sprite;
  inserter_stack_size_bonus_modifier_constant?: Sprite;
  inserter_stack_size_bonus_modifier_icon: Sprite;
  item_editor_icon: Sprite;
  laboratory_productivity_modifier_constant?: Sprite;
  laboratory_productivity_modifier_icon: Sprite;
  laboratory_speed_modifier_constant?: Sprite;
  laboratory_speed_modifier_icon: Sprite;
  left_arrow: Sprite;
  light_cone: Sprite;
  light_medium: Sprite;
  light_small: Sprite;
  line_icon: Sprite;
  list_view: Sprite;
  logistic_network_panel_black: Sprite;
  logistic_network_panel_white: Sprite;
  logistic_radius_visualization: Sprite;
  lua_snippet_tool_icon: Sprite;
  map: Sprite;
  map_exchange_string: Sprite;
  max_failed_attempts_per_tick_per_construction_queue_modifier_constant?: Sprite;
  max_failed_attempts_per_tick_per_construction_queue_modifier_icon: Sprite;
  max_successful_attempts_per_tick_per_construction_queue_modifier_constant?: Sprite;
  max_successful_attempts_per_tick_per_construction_queue_modifier_icon: Sprite;
  maximum_following_robots_count_modifier_constant?: Sprite;
  maximum_following_robots_count_modifier_icon: Sprite;
  medium_gui_arrow: Sprite;
  mining_drill_productivity_bonus_modifier_constant?: Sprite;
  mining_drill_productivity_bonus_modifier_icon: Sprite;
  missing_icon: Sprite;
  missing_mod_icon: Sprite;
  mod_dependency_arrow: Sprite;
  mouse_cursor: Sprite;
  multiplayer_waiting_icon: Sprite;
  nature_icon: Sprite;
  neutral_force_icon: Sprite;
  no_building_material_icon: Sprite;
  no_nature_icon: Sprite;
  no_storage_space_icon: Sprite;
  none_editor_icon: Sprite;
  not_available: Sprite;
  not_enough_construction_robots_icon: Sprite;
  not_enough_repair_packs_icon: Sprite;
  not_played_yet_dark_green: Sprite;
  not_played_yet_green: Sprite;
  nothing_modifier_constant?: Sprite;
  nothing_modifier_icon: Sprite;
  notification: Sprite;
  output_console_gradient: Sprite;
  paint_bucket_icon: Sprite;
  pause: Sprite;
  placement_indicator_leg: Sprite;
  play: Sprite;
  played_dark_green: Sprite;
  played_green: Sprite;
  player_force_icon: Sprite;
  preset: Sprite;
  pump_cannot_connect_icon: Sprite;
  questionmark: Sprite;
  rail_path_not_possible: Sprite;
  rail_planner_indication_arrow: Sprite;
  rail_planner_indication_arrow_too_far: Sprite;
  rail_signal_placement_indicator: Sprite;
  reassign: Sprite;
  recharge_icon: Sprite;
  red_wire: Sprite;
  red_wire_hightlight: Sprite;
  reference_point: Sprite;
  refresh: Sprite;
  refresh_white: Animation;
  rename_icon_normal: Sprite;
  rename_icon_small_black: Sprite;
  rename_icon_small_white: Sprite;
  reset: Sprite;
  reset_white: Sprite;
  resource_editor_icon: Sprite;
  right_arrow: Sprite;
  robot_slot: Sprite;
  scripting_editor_icon: Sprite;
  search_black: Sprite;
  search_icon: Sprite;
  search_white: Sprite;
  select_icon_black: Sprite;
  select_icon_white: Sprite;
  set_bar_slot: Sprite;
  shield_bar_pip: Sprite;
  shoot_cursor_green: Sprite;
  shoot_cursor_red: Sprite;
  short_indication_line: Sprite;
  short_indication_line_green: Sprite;
  show_electric_network_in_map_view: Sprite;
  show_electric_network_in_map_view_black: Sprite;
  show_logistics_network_in_map_view: Sprite;
  show_logistics_network_in_map_view_black: Sprite;
  show_player_names_in_map_view: Sprite;
  show_player_names_in_map_view_black: Sprite;
  show_pollution_in_map_view: Sprite;
  show_pollution_in_map_view_black: Sprite;
  show_rail_signal_states_in_map_view: Sprite;
  show_rail_signal_states_in_map_view_black: Sprite;
  show_recipe_icons_in_map_view: Sprite;
  show_recipe_icons_in_map_view_black: Sprite;
  show_tags_in_map_view: Sprite;
  show_tags_in_map_view_black: Sprite;
  show_train_station_names_in_map_view: Sprite;
  show_train_station_names_in_map_view_black: Sprite;
  show_turret_range_in_map_view: Sprite;
  show_turret_range_in_map_view_black: Sprite;
  show_worker_robots_in_map_view: Sprite;
  show_worker_robots_in_map_view_black: Sprite;
  shuffle: Sprite;
  side_menu_achievements_hover_icon: Sprite;
  side_menu_achievements_icon: Sprite;
  side_menu_blueprint_library_hover_icon: Sprite;
  side_menu_blueprint_library_icon: Sprite;
  side_menu_bonus_hover_icon: Sprite;
  side_menu_bonus_icon: Sprite;
  side_menu_logistic_network_hover_icon: Sprite;
  side_menu_map_hover_icon: Sprite;
  side_menu_map_icon: Sprite;
  side_menu_menu_hover_icon: Sprite;
  side_menu_menu_icon: Sprite;
  side_menu_production_hover_icon: Sprite;
  side_menu_production_icon: Sprite;
  side_menu_technology_hover_icon: Sprite;
  side_menu_train_hover_icon: Sprite;
  side_menu_train_icon: Sprite;
  side_menu_tutorials_hover_icon: Sprite;
  side_menu_tutorials_icon: Sprite;
  slot: Sprite;
  slot_icon_ammo: Sprite;
  slot_icon_ammo_black: Sprite;
  slot_icon_armor: Sprite;
  slot_icon_armor_black: Sprite;
  slot_icon_fuel: Sprite;
  slot_icon_fuel_black: Sprite;
  slot_icon_gun: Sprite;
  slot_icon_gun_black: Sprite;
  slot_icon_inserter_hand: Sprite;
  slot_icon_inserter_hand_black: Sprite;
  slot_icon_module: Sprite;
  slot_icon_module_black: Sprite;
  slot_icon_resource: Sprite;
  slot_icon_resource_black: Sprite;
  slot_icon_result: Sprite;
  slot_icon_result_black: Sprite;
  slot_icon_robot: Sprite;
  slot_icon_robot_black: Sprite;
  slot_icon_robot_material: Sprite;
  slot_icon_robot_material_black: Sprite;
  small_gui_arrow: Sprite;
  spawn_flag: Sprite;
  speed_down: Sprite;
  speed_up: Sprite;
  spray_icon: Sprite;
  stack_inserter_capacity_bonus_modifier_constant?: Sprite;
  stack_inserter_capacity_bonus_modifier_icon: Sprite;
  station_name: Sprite;
  status_not_working: Sprite;
  status_working: Sprite;
  status_yellow: Sprite;
  stop: Sprite;
  surface_editor_icon: Sprite;
  sync_mods: Sprite;
  technology_black: Sprite;
  technology_white: Sprite;
  tick_custom: Sprite;
  tick_once: Sprite;
  tick_sixty: Sprite;
  tile_editor_icon: Sprite;
  tile_ghost_cursor: Sprite;
  time_editor_icon: Sprite;
  too_far: Sprite;
  too_far_from_roboport_icon: Sprite;
  track_button: Sprite;
  train_braking_force_bonus_modifier_constant?: Sprite;
  train_braking_force_bonus_modifier_icon: Sprite;
  train_stop_disabled_in_map_view: Sprite;
  train_stop_full_in_map_view: Sprite;
  train_stop_in_map_view: Sprite;
  train_stop_placement_indicator: Sprite;
  trash: Sprite;
  trash_white: Sprite;
  turret_attack_modifier_constant?: Sprite;
  turret_attack_modifier_icon: Sprite;
  underground_pipe_connection: Sprite;
  underground_remove_belts: Sprite;
  underground_remove_pipes: Sprite;
  unlock_recipe_modifier_constant?: Sprite;
  unlock_recipe_modifier_icon: Sprite;
  upgrade_blueprint: Sprite;
  upgrade_mark: Sprite;
  variations_tool_icon: Sprite;
  warning: Sprite;
  warning_icon: Sprite;
  warning_white: Sprite;
  white_mask: Sprite;
  white_square: Sprite;
  wire_shadow: Sprite;
  worker_robot_battery_modifier_constant?: Sprite;
  worker_robot_battery_modifier_icon: Sprite;
  worker_robot_speed_modifier_constant?: Sprite;
  worker_robot_speed_modifier_icon: Sprite;
  worker_robot_storage_modifier_constant?: Sprite;
  worker_robot_storage_modifier_icon: Sprite;
  zoom_to_world_blueprint_enabled_modifier_constant?: Sprite;
  zoom_to_world_blueprint_enabled_modifier_icon: Sprite;
  zoom_to_world_deconstruction_planner_enabled_modifier_constant?: Sprite;
  zoom_to_world_deconstruction_planner_enabled_modifier_icon: Sprite;
  zoom_to_world_enabled_modifier_constant?: Sprite;
  zoom_to_world_enabled_modifier_icon: Sprite;
  zoom_to_world_ghost_building_enabled_modifier_constant?: Sprite;
  zoom_to_world_ghost_building_enabled_modifier_icon: Sprite;
  zoom_to_world_selection_tool_enabled_modifier_constant?: Sprite;
  zoom_to_world_selection_tool_enabled_modifier_icon: Sprite;
  zoom_to_world_upgrade_planner_enabled_modifier_constant?: Sprite;
  zoom_to_world_upgrade_planner_enabled_modifier_icon: Sprite;
}
export interface VehiclePrototype extends EntityWithOwnerPrototype {
  allow_passengers?: bool;
  braking_power: Energy | double;
  collision_mask?: CollisionMask;
  crash_trigger?: TriggerEffect;
  energy_per_hit_point: double;
  equipment_grid?: EquipmentGridID;
  friction: double;
  minimap_representation?: Sprite;
  selected_minimap_representation?: Sprite;
  sound_minimum_speed?: double;
  sound_scaling_ratio?: double;
  stop_trigger?: TriggerEffect;
  stop_trigger_speed?: double;
  terrain_friction_modifier?: float;
  weight: double;
}
export interface VirtualSignalPrototype extends PrototypeBase {
  icon?: FileName;
  icon_mipmaps?: IconMipMapType;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  subgroup?: ItemSubGroupID;
}
export interface WallPrototype extends EntityWithOwnerPrototype {
  circuit_connector_sprites?: CircuitConnectorSprites;
  circuit_wire_connection_point?: WireConnectionPoint;
  circuit_wire_max_distance?: double;
  connected_gate_visualization?: Sprite;
  default_output_signal?: SignalIDConnector;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  pictures: WallPictures;
  visual_merge_group?: uint32;
  wall_diode_green?: Sprite4Way;
  wall_diode_green_light_bottom?: LightDefinition;
  wall_diode_green_light_left?: LightDefinition;
  wall_diode_green_light_right?: LightDefinition;
  wall_diode_green_light_top?: LightDefinition;
  wall_diode_red?: Sprite4Way;
  wall_diode_red_light_bottom?: LightDefinition;
  wall_diode_red_light_left?: LightDefinition;
  wall_diode_red_light_right?: LightDefinition;
  wall_diode_red_light_top?: LightDefinition;
}
export interface WindSound {
  name: string;
  sound: Sound;
  type: 'wind-sound';
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
export type AnyPrototype =
  | AccumulatorPrototype
  | AchievementPrototype
  | ActiveDefenseEquipmentPrototype
  | AmbientSound
  | AmmoCategory
  | AmmoItemPrototype
  | AmmoTurretPrototype
  | AnimationPrototype
  | ArithmeticCombinatorPrototype
  | ArmorPrototype
  | ArrowPrototype
  | ArtilleryFlarePrototype
  | ArtilleryProjectilePrototype
  | ArtilleryTurretPrototype
  | ArtilleryWagonPrototype
  | AssemblingMachinePrototype
  | AutoplaceControl
  | BatteryEquipmentPrototype
  | BeaconPrototype
  | BeamPrototype
  | BeltImmunityEquipmentPrototype
  | BlueprintBookPrototype
  | BlueprintItemPrototype
  | BoilerPrototype
  | BuildEntityAchievementPrototype
  | BurnerGeneratorPrototype
  | CapsulePrototype
  | CarPrototype
  | CargoWagonPrototype
  | CharacterCorpsePrototype
  | CharacterPrototype
  | CliffPrototype
  | CombatRobotCountAchievementPrototype
  | CombatRobotPrototype
  | CombinatorPrototype
  | ConstantCombinatorPrototype
  | ConstructWithRobotsAchievementPrototype
  | ConstructionRobotPrototype
  | ContainerPrototype
  | CopyPasteToolPrototype
  | CorpsePrototype
  | CraftingMachinePrototype
  | CurvedRailPrototype
  | CustomInputPrototype
  | DamageType
  | DeciderCombinatorPrototype
  | DeconstructWithRobotsAchievementPrototype
  | DeconstructibleTileProxyPrototype
  | DeconstructionItemPrototype
  | DecorativePrototype
  | DeliverByRobotsAchievementPrototype
  | DontBuildEntityAchievementPrototype
  | DontCraftManuallyAchievementPrototype
  | DontUseEntityInEnergyProductionAchievementPrototype
  | EditorControllerPrototype
  | ElectricEnergyInterfacePrototype
  | ElectricPolePrototype
  | ElectricTurretPrototype
  | EnemySpawnerPrototype
  | EnergyShieldEquipmentPrototype
  | EntityGhostPrototype
  | EntityParticlePrototype
  | EntityPrototype
  | EntityWithHealthPrototype
  | EntityWithOwnerPrototype
  | EquipmentCategory
  | EquipmentGridPrototype
  | EquipmentPrototype
  | ExplosionPrototype
  | FinishTheGameAchievementPrototype
  | FireFlamePrototype
  | FishPrototype
  | FlameThrowerExplosionPrototype
  | FluidPrototype
  | FluidStreamPrototype
  | FluidTurretPrototype
  | FluidWagonPrototype
  | FlyingRobotPrototype
  | FlyingTextPrototype
  | FontPrototype
  | FuelCategory
  | FurnacePrototype
  | GatePrototype
  | GeneratorEquipmentPrototype
  | GeneratorPrototype
  | GodControllerPrototype
  | GroupAttackAchievementPrototype
  | GuiStyle
  | GunPrototype
  | HeatInterfacePrototype
  | HeatPipePrototype
  | HighlightBoxEntityPrototype
  | InfinityContainerPrototype
  | InfinityPipePrototype
  | InserterPrototype
  | ItemEntityPrototype
  | ItemGroup
  | ItemPrototype
  | ItemRequestProxyPrototype
  | ItemSubGroup
  | ItemWithEntityDataPrototype
  | ItemWithInventoryPrototype
  | ItemWithLabelPrototype
  | ItemWithTagsPrototype
  | KillAchievementPrototype
  | LabPrototype
  | LampPrototype
  | LandMinePrototype
  | LeafParticlePrototype
  | LinkedBeltPrototype
  | LinkedContainerPrototype
  | Loader1x1Prototype
  | Loader1x2Prototype
  | LoaderPrototype
  | LocomotivePrototype
  | LogisticContainerPrototype
  | LogisticRobotPrototype
  | MapGenPresets
  | MapSettings
  | MarketPrototype
  | MiningDrillPrototype
  | MiningToolPrototype
  | ModuleCategory
  | ModulePrototype
  | MouseCursor
  | MovementBonusEquipmentPrototype
  | NamedNoiseExpression
  | NightVisionEquipmentPrototype
  | NoiseLayer
  | OffshorePumpPrototype
  | ParticlePrototype
  | ParticleSourcePrototype
  | PipePrototype
  | PipeToGroundPrototype
  | PlayerDamagedAchievementPrototype
  | PlayerPortPrototype
  | PowerSwitchPrototype
  | ProduceAchievementPrototype
  | ProducePerHourAchievementPrototype
  | ProgrammableSpeakerPrototype
  | ProjectilePrototype
  | PrototypeBase
  | PumpPrototype
  | RadarPrototype
  | RailChainSignalPrototype
  | RailPlannerPrototype
  | RailPrototype
  | RailRemnantsPrototype
  | RailSignalBasePrototype
  | RailSignalPrototype
  | ReactorPrototype
  | RecipeCategory
  | RecipePrototype
  | RepairToolPrototype
  | ResearchAchievementPrototype
  | ResourceCategory
  | ResourceEntityPrototype
  | RoboportEquipmentPrototype
  | RoboportPrototype
  | RobotWithLogisticInterfacePrototype
  | RocketSiloPrototype
  | RocketSiloRocketPrototype
  | RocketSiloRocketShadowPrototype
  | RollingStockPrototype
  | SelectionToolPrototype
  | ShortcutPrototype
  | SimpleEntityPrototype
  | SimpleEntityWithForcePrototype
  | SimpleEntityWithOwnerPrototype
  | SimpleSmokePrototype
  | SmokePrototype
  | SmokeWithTriggerPrototype
  | SolarPanelEquipmentPrototype
  | SolarPanelPrototype
  | SoundPrototype
  | SpectatorControllerPrototype
  | SpeechBubblePrototype
  | SpiderLegPrototype
  | SpiderVehiclePrototype
  | SpidertronRemotePrototype
  | SplitterPrototype
  | SpritePrototype
  | StickerPrototype
  | StorageTankPrototype
  | StraightRailPrototype
  | TechnologyPrototype
  | TileEffectDefinition
  | TileGhostPrototype
  | TilePrototype
  | TipsAndTricksItem
  | TipsAndTricksItemCategory
  | ToolPrototype
  | TrainPathAchievementPrototype
  | TrainStopPrototype
  | TransportBeltConnectablePrototype
  | TransportBeltPrototype
  | TreePrototype
  | TriggerTargetType
  | TrivialSmokePrototype
  | TurretPrototype
  | TutorialDefinition
  | UndergroundBeltPrototype
  | UnitPrototype
  | UpgradeItemPrototype
  | UtilityConstants
  | UtilitySounds
  | UtilitySprites
  | VehiclePrototype
  | VirtualSignalPrototype
  | WallPrototype
  | WindSound;
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
export interface RawData {
  accumulator: Record<string, AccumulatorPrototype>;
  achievement: Record<string, AchievementPrototype>;
  'active-defense-equipment': Record<string, ActiveDefenseEquipmentPrototype>;
  'ambient-sound': Record<string, AmbientSound>;
  'ammo-category': Record<AmmoCategoryID, AmmoCategory>;
  ammo: Record<string, AmmoItemPrototype>;
  'ammo-turret': Record<string, AmmoTurretPrototype>;
  animation: Record<string, AnimationPrototype>;
  'arithmetic-combinator': Record<string, ArithmeticCombinatorPrototype>;
  armor: Record<string, ArmorPrototype>;
  arrow: Record<string, ArrowPrototype>;
  'artillery-flare': Record<string, ArtilleryFlarePrototype>;
  'artillery-projectile': Record<string, ArtilleryProjectilePrototype>;
  'artillery-turret': Record<string, ArtilleryTurretPrototype>;
  'artillery-wagon': Record<string, ArtilleryWagonPrototype>;
  'assembling-machine': Record<string, AssemblingMachinePrototype>;
  'autoplace-control': Record<AutoplaceControlID, AutoplaceControl>;
  'battery-equipment': Record<string, BatteryEquipmentPrototype>;
  beacon: Record<string, BeaconPrototype>;
  beam: Record<string, BeamPrototype>;
  'belt-immunity-equipment': Record<string, BeltImmunityEquipmentPrototype>;
  'blueprint-book': Record<string, BlueprintBookPrototype>;
  blueprint: Record<string, BlueprintItemPrototype>;
  boiler: Record<string, BoilerPrototype>;
  'build-entity-achievement': Record<string, BuildEntityAchievementPrototype>;
  'burner-generator': Record<string, BurnerGeneratorPrototype>;
  capsule: Record<string, CapsulePrototype>;
  car: Record<string, CarPrototype>;
  'cargo-wagon': Record<string, CargoWagonPrototype>;
  'character-corpse': Record<string, CharacterCorpsePrototype>;
  character: Record<string, CharacterPrototype>;
  cliff: Record<string, CliffPrototype>;
  'combat-robot-count': Record<string, CombatRobotCountAchievementPrototype>;
  'combat-robot': Record<string, CombatRobotPrototype>;
  'constant-combinator': Record<string, ConstantCombinatorPrototype>;
  'construct-with-robots-achievement': Record<
    string,
    ConstructWithRobotsAchievementPrototype
  >;
  'construction-robot': Record<string, ConstructionRobotPrototype>;
  container: Record<string, ContainerPrototype>;
  'copy-paste-tool': Record<string, CopyPasteToolPrototype>;
  corpse: Record<string, CorpsePrototype>;
  'curved-rail': Record<string, CurvedRailPrototype>;
  'custom-input': Record<string, CustomInputPrototype>;
  'damage-type': Record<DamageTypeID, DamageType>;
  'decider-combinator': Record<string, DeciderCombinatorPrototype>;
  'deconstruct-with-robots-achievement': Record<
    string,
    DeconstructWithRobotsAchievementPrototype
  >;
  'deconstructible-tile-proxy': Record<
    string,
    DeconstructibleTileProxyPrototype
  >;
  'deconstruction-item': Record<string, DeconstructionItemPrototype>;
  'optimized-decorative': Record<DecorativeID, DecorativePrototype>;
  'deliver-by-robots-achievement': Record<
    string,
    DeliverByRobotsAchievementPrototype
  >;
  'dont-build-entity-achievement': Record<
    string,
    DontBuildEntityAchievementPrototype
  >;
  'dont-craft-manually-achievement': Record<
    string,
    DontCraftManuallyAchievementPrototype
  >;
  'dont-use-entity-in-energy-production-achievement': Record<
    string,
    DontUseEntityInEnergyProductionAchievementPrototype
  >;
  'editor-controller': Record<string, EditorControllerPrototype>;
  'electric-energy-interface': Record<string, ElectricEnergyInterfacePrototype>;
  'electric-pole': Record<string, ElectricPolePrototype>;
  'electric-turret': Record<string, ElectricTurretPrototype>;
  'unit-spawner': Record<string, EnemySpawnerPrototype>;
  'energy-shield-equipment': Record<string, EnergyShieldEquipmentPrototype>;
  'entity-ghost': Record<string, EntityGhostPrototype>;
  particle: Record<string, EntityParticlePrototype>;
  'equipment-category': Record<EquipmentCategoryID, EquipmentCategory>;
  'equipment-grid': Record<EquipmentGridID, EquipmentGridPrototype>;
  explosion: Record<string, ExplosionPrototype>;
  'finish-the-game-achievement': Record<
    string,
    FinishTheGameAchievementPrototype
  >;
  fire: Record<string, FireFlamePrototype>;
  fish: Record<string, FishPrototype>;
  'flame-thrower-explosion': Record<string, FlameThrowerExplosionPrototype>;
  fluid: Record<FluidID, FluidPrototype>;
  stream: Record<string, FluidStreamPrototype>;
  'fluid-turret': Record<string, FluidTurretPrototype>;
  'fluid-wagon': Record<string, FluidWagonPrototype>;
  'flying-text': Record<string, FlyingTextPrototype>;
  font: Record<string, FontPrototype>;
  'fuel-category': Record<FuelCategoryID, FuelCategory>;
  furnace: Record<string, FurnacePrototype>;
  gate: Record<string, GatePrototype>;
  'generator-equipment': Record<string, GeneratorEquipmentPrototype>;
  generator: Record<string, GeneratorPrototype>;
  'god-controller': Record<string, GodControllerPrototype>;
  'group-attack-achievement': Record<string, GroupAttackAchievementPrototype>;
  'gui-style': Record<string, GuiStyle>;
  gun: Record<string, GunPrototype>;
  'heat-interface': Record<string, HeatInterfacePrototype>;
  'heat-pipe': Record<string, HeatPipePrototype>;
  'highlight-box': Record<string, HighlightBoxEntityPrototype>;
  'infinity-container': Record<string, InfinityContainerPrototype>;
  'infinity-pipe': Record<string, InfinityPipePrototype>;
  inserter: Record<string, InserterPrototype>;
  'item-entity': Record<string, ItemEntityPrototype>;
  'item-group': Record<ItemGroupID, ItemGroup>;
  item: Record<ItemID, ItemPrototype>;
  'item-request-proxy': Record<string, ItemRequestProxyPrototype>;
  'item-subgroup': Record<ItemSubGroupID, ItemSubGroup>;
  'item-with-entity-data': Record<string, ItemWithEntityDataPrototype>;
  'item-with-inventory': Record<string, ItemWithInventoryPrototype>;
  'item-with-label': Record<string, ItemWithLabelPrototype>;
  'item-with-tags': Record<string, ItemWithTagsPrototype>;
  'kill-achievement': Record<string, KillAchievementPrototype>;
  lab: Record<string, LabPrototype>;
  lamp: Record<string, LampPrototype>;
  'land-mine': Record<string, LandMinePrototype>;
  'leaf-particle': Record<string, LeafParticlePrototype>;
  'linked-belt': Record<string, LinkedBeltPrototype>;
  'linked-container': Record<string, LinkedContainerPrototype>;
  'loader-1x1': Record<string, Loader1x1Prototype>;
  loader: Record<string, Loader1x2Prototype>;
  locomotive: Record<string, LocomotivePrototype>;
  'logistic-container': Record<string, LogisticContainerPrototype>;
  'logistic-robot': Record<string, LogisticRobotPrototype>;
  'map-gen-presets': Record<string, MapGenPresets>;
  'map-settings': Record<string, MapSettings>;
  market: Record<string, MarketPrototype>;
  'mining-drill': Record<string, MiningDrillPrototype>;
  'mining-tool': Record<string, MiningToolPrototype>;
  'module-category': Record<ModuleCategoryID, ModuleCategory>;
  module: Record<string, ModulePrototype>;
  'mouse-cursor': Record<MouseCursorID, MouseCursor>;
  'movement-bonus-equipment': Record<string, MovementBonusEquipmentPrototype>;
  'noise-expression': Record<string, NamedNoiseExpression>;
  'night-vision-equipment': Record<string, NightVisionEquipmentPrototype>;
  'noise-layer': Record<NoiseLayerID, NoiseLayer>;
  'offshore-pump': Record<string, OffshorePumpPrototype>;
  'optimized-particle': Record<ParticleID, ParticlePrototype>;
  'particle-source': Record<string, ParticleSourcePrototype>;
  pipe: Record<string, PipePrototype>;
  'pipe-to-ground': Record<string, PipeToGroundPrototype>;
  'player-damaged-achievement': Record<
    string,
    PlayerDamagedAchievementPrototype
  >;
  'player-port': Record<string, PlayerPortPrototype>;
  'power-switch': Record<string, PowerSwitchPrototype>;
  'produce-achievement': Record<string, ProduceAchievementPrototype>;
  'produce-per-hour-achievement': Record<
    string,
    ProducePerHourAchievementPrototype
  >;
  'programmable-speaker': Record<string, ProgrammableSpeakerPrototype>;
  projectile: Record<string, ProjectilePrototype>;
  pump: Record<string, PumpPrototype>;
  radar: Record<string, RadarPrototype>;
  'rail-chain-signal': Record<string, RailChainSignalPrototype>;
  'rail-planner': Record<string, RailPlannerPrototype>;
  'rail-remnants': Record<string, RailRemnantsPrototype>;
  'rail-signal': Record<string, RailSignalPrototype>;
  reactor: Record<string, ReactorPrototype>;
  'recipe-category': Record<RecipeCategoryID, RecipeCategory>;
  recipe: Record<RecipeID, RecipePrototype>;
  'repair-tool': Record<string, RepairToolPrototype>;
  'research-achievement': Record<string, ResearchAchievementPrototype>;
  'resource-category': Record<ResourceCategoryID, ResourceCategory>;
  resource: Record<string, ResourceEntityPrototype>;
  'roboport-equipment': Record<string, RoboportEquipmentPrototype>;
  roboport: Record<string, RoboportPrototype>;
  'rocket-silo': Record<string, RocketSiloPrototype>;
  'rocket-silo-rocket': Record<string, RocketSiloRocketPrototype>;
  'rocket-silo-rocket-shadow': Record<string, RocketSiloRocketShadowPrototype>;
  'selection-tool': Record<string, SelectionToolPrototype>;
  shortcut: Record<string, ShortcutPrototype>;
  'simple-entity': Record<string, SimpleEntityPrototype>;
  'simple-entity-with-force': Record<string, SimpleEntityWithForcePrototype>;
  'simple-entity-with-owner': Record<string, SimpleEntityWithOwnerPrototype>;
  smoke: Record<string, SimpleSmokePrototype>;
  'smoke-with-trigger': Record<string, SmokeWithTriggerPrototype>;
  'solar-panel-equipment': Record<string, SolarPanelEquipmentPrototype>;
  'solar-panel': Record<string, SolarPanelPrototype>;
  sound: Record<string, SoundPrototype>;
  'spectator-controller': Record<string, SpectatorControllerPrototype>;
  'speech-bubble': Record<string, SpeechBubblePrototype>;
  'spider-leg': Record<string, SpiderLegPrototype>;
  'spider-vehicle': Record<string, SpiderVehiclePrototype>;
  'spidertron-remote': Record<string, SpidertronRemotePrototype>;
  splitter: Record<string, SplitterPrototype>;
  sprite: Record<string, SpritePrototype>;
  sticker: Record<string, StickerPrototype>;
  'storage-tank': Record<string, StorageTankPrototype>;
  'straight-rail': Record<string, StraightRailPrototype>;
  technology: Record<TechnologyID, TechnologyPrototype>;
  'tile-effect': Record<string, TileEffectDefinition>;
  'tile-ghost': Record<string, TileGhostPrototype>;
  tile: Record<TileID, TilePrototype>;
  'tips-and-tricks-item': Record<string, TipsAndTricksItem>;
  'tips-and-tricks-item-category': Record<string, TipsAndTricksItemCategory>;
  tool: Record<string, ToolPrototype>;
  'train-path-achievement': Record<string, TrainPathAchievementPrototype>;
  'train-stop': Record<string, TrainStopPrototype>;
  'transport-belt': Record<string, TransportBeltPrototype>;
  tree: Record<string, TreePrototype>;
  'trigger-target-type': Record<string, TriggerTargetType>;
  'trivial-smoke': Record<TrivialSmokeID, TrivialSmokePrototype>;
  turret: Record<string, TurretPrototype>;
  tutorial: Record<string, TutorialDefinition>;
  'underground-belt': Record<string, UndergroundBeltPrototype>;
  unit: Record<string, UnitPrototype>;
  'upgrade-item': Record<string, UpgradeItemPrototype>;
  'utility-constants': Record<string, UtilityConstants>;
  'utility-sounds': Record<string, UtilitySounds>;
  'utility-sprites': Record<string, UtilitySprites>;
  'virtual-signal': Record<VirtualSignalID, VirtualSignalPrototype>;
  wall: Record<string, WallPrototype>;
  'wind-sound': Record<string, WindSound>;
}
