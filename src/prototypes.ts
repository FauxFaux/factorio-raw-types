export interface AccumulatorPrototype extends EntityWithOwnerPrototype {
  chargable_graphics?: ChargableGraphics;
  circuit_connector?: CircuitConnectorDefinition;
  circuit_wire_max_distance?: double;
  default_output_signal?: SignalIDConnector;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  energy_source: ElectricEnergySource;
}
export interface AchievementPrototype extends Prototype {
  allowed_without_fight?: bool;
  icon?: FileName;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  steam_stats_name?: string;
}
export interface AchievementPrototypeWithCondition
  extends AchievementPrototype {
  objective_condition: 'game-finished' | 'rocket-launched';
}
export interface ActiveDefenseEquipmentPrototype extends EquipmentPrototype {
  attack_parameters: AttackParameters;
  automatic: bool;
}
export type ActiveTriggerPrototype = Prototype;
export interface AgriculturalTowerPrototype extends EntityWithOwnerPrototype {
  arm_extending_sound?: InterruptibleSound;
  arm_extending_sound_source?: string;
  central_orienting_sound?: InterruptibleSound;
  central_orienting_sound_source?: string;
  circuit_connector?: CircuitConnectorDefinition;
  circuit_wire_max_distance?: double;
  crane: AgriculturalCraneProperties;
  crane_energy_usage: Energy;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  energy_source: EnergySource;
  energy_usage: Energy;
  graphics_set?: CraftingMachineGraphicsSet;
  grappler_extending_sound?: InterruptibleSound;
  grappler_extending_sound_source?: string;
  grappler_orienting_sound?: InterruptibleSound;
  grappler_orienting_sound_source?: string;
  growth_grid_tile_size?: uint32;
  harvesting_procedure_points?: Vector3D[];
  harvesting_sound?: Sound;
  input_inventory_size: ItemStackIndex;
  output_inventory_size?: ItemStackIndex;
  planting_procedure_points?: Vector3D[];
  planting_sound?: Sound;
  radius: double;
  radius_visualisation_picture?: Sprite;
  random_growth_offset?: double;
}
export interface AirbornePollutantPrototype extends Prototype {
  affects_evolution: bool;
  affects_water_tint: bool;
  chart_color: Color;
  icon: Sprite;
  localised_name_with_amount?: string;
}
export interface AmbientSound {
  name: string;
  planet?: SpaceLocationID;
  sound?: Sound;
  track_type: AmbientSoundType;
  type: 'ambient-sound';
  variable_sound?: VariableAmbientSoundVariableSound;
  weight?: double;
}
export interface AmmoCategory extends Prototype {
  bonus_gui_order?: Order;
  icon?: FileName;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
}
export interface AmmoItemPrototype extends ItemPrototype {
  ammo_category: AmmoCategoryID;
  ammo_type: AmmoType | AmmoType[];
  magazine_size?: float;
  reload_time?: float;
  shoot_protected?: bool;
}
export interface AmmoTurretPrototype extends TurretPrototype {
  automated_ammo_count: ItemCountType;
  energy_per_shot?: Energy;
  energy_source?: ElectricEnergySource;
  inventory_size: ItemStackIndex;
  prepare_with_no_ammo?: bool;
}
export interface AnimationPrototype {
  allow_forced_downscale?: bool;
  animation_speed?: float;
  apply_runtime_tint?: bool;
  apply_special_effect?: bool;
  blend_mode?: BlendMode;
  dice?: uint8;
  dice_x?: uint8;
  dice_y?: uint8;
  draw_as_glow?: bool;
  draw_as_light?: bool;
  draw_as_shadow?: bool;
  filename?: FileName;
  filenames?: FileName[];
  flags?: SpriteFlags;
  frame_count?: uint32;
  frame_sequence?: AnimationFrameSequence;
  generate_sdf?: bool;
  height?: SpriteSizeType;
  invert_colors?: bool;
  layers?: Animation[];
  line_length?: uint32;
  lines_per_file?: uint32;
  load_in_minimal_mode?: bool;
  max_advance?: float;
  mipmap_count?: uint8;
  name: string;
  position?: [SpriteSizeType, SpriteSizeType];
  premul_alpha?: bool;
  priority?: SpritePriority;
  repeat_count?: uint8;
  rotate_shift?: bool;
  run_mode?: AnimationRunMode;
  scale?: double;
  shift?: Vector;
  size?: SpriteSizeType | [SpriteSizeType, SpriteSizeType];
  slice?: uint32;
  stripes?: Stripe[];
  surface?: SpriteUsageSurfaceHint;
  tint?: Color;
  tint_as_overlay?: bool;
  type: 'animation';
  usage?: SpriteUsageHint;
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
  collision_box?: BoundingBox;
  drawing_box?: BoundingBox;
  equipment_grid?: EquipmentGridID;
  flight_sound?: InterruptibleSound;
  inventory_size_bonus?: ItemStackIndex;
  landing_sound?: Sound;
  moving_sound?: Sound;
  provides_flight?: bool;
  resistances?: Resistance[];
  steps_sound?: Sound;
  takeoff_sound?: Sound;
}
export interface ArrowPrototype extends EntityPrototype {
  arrow_picture: Sprite;
  blinking?: bool;
  circle_picture?: Sprite;
}
export interface ArtilleryFlarePrototype extends EntityPrototype {
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
  pictures?: AnimationVariations;
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
  automated_ammo_count?: ItemCountType;
  base_picture?: Animation4Way;
  base_picture_render_layer?: RenderLayer;
  base_picture_secondary_draw_order?: uint8;
  cannon_barrel_light_direction?: Vector3D;
  cannon_barrel_pictures?: RotatedSprite;
  cannon_barrel_recoil_shiftings?: Vector3D[];
  cannon_barrel_recoil_shiftings_load_correction_matrix?: Vector3D[];
  cannon_base_pictures?: RotatedSprite;
  cannon_base_shift: Vector3D;
  cannon_parking_frame_count?: uint16;
  cannon_parking_speed?: float;
  circuit_connector?: CircuitConnectorDefinition;
  circuit_wire_max_distance?: double;
  disable_automatic_firing?: bool;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  gun: ItemID;
  inventory_size: ItemStackIndex;
  is_military_target?: bool;
  manual_range_modifier: double;
  rotating_sound?: InterruptibleSound;
  turn_after_shooting_cooldown?: uint16;
  turret_rotation_speed: double;
}
export interface ArtilleryWagonPrototype extends RollingStockPrototype {
  ammo_stack_limit: ItemCountType;
  automated_ammo_count?: ItemCountType;
  cannon_barrel_light_direction?: Vector3D;
  cannon_barrel_pictures?: RollingStockRotatedSlopedGraphics;
  cannon_barrel_recoil_shiftings?: Vector3D[];
  cannon_barrel_recoil_shiftings_load_correction_matrix?: Vector3D[];
  cannon_base_height?: double;
  cannon_base_pictures?: RollingStockRotatedSlopedGraphics;
  cannon_base_shift_when_horizontal?: double;
  cannon_base_shift_when_vertical?: double;
  cannon_parking_frame_count?: uint16;
  cannon_parking_speed?: float;
  disable_automatic_firing?: bool;
  gun: ItemID;
  inventory_size: ItemStackIndex;
  manual_range_modifier: double;
  rotating_sound?: InterruptibleSound;
  turn_after_shooting_cooldown?: uint16;
  turret_rotation_speed: double;
}
export interface AssemblingMachinePrototype extends CraftingMachinePrototype {
  circuit_connector?: [
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
  ];
  circuit_wire_max_distance?: double;
  default_recipe_finished_signal?: SignalIDConnector;
  default_working_signal?: SignalIDConnector;
  disabled_when_recipe_not_researched?: bool;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  enable_logistic_control_behavior?: bool;
  fixed_quality?: QualityID;
  fixed_recipe?: RecipeID;
  fluid_boxes_off_when_no_fluid_recipe?: bool;
  gui_title_key?: string;
  ingredient_count?: uint8;
}
export interface AsteroidChunkPrototype extends Prototype {
  dying_trigger_effect?: TriggerEffect;
  graphics_set?: AsteroidGraphicsSet;
  hide_from_signal_gui?: bool;
  icon?: FileName;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  minable?: MinableProperties;
}
export interface AsteroidCollectorPrototype extends EntityWithOwnerPrototype {
  arm_angular_speed_cap_base?: float;
  arm_angular_speed_cap_quality_scaling?: float;
  arm_color_gradient?: Color[];
  arm_count_base?: uint32;
  arm_count_quality_scaling?: uint32;
  arm_energy_usage: Energy;
  arm_extend_sound?: Sound;
  arm_inventory_size?: ItemStackIndex;
  arm_inventory_size_quality_increase?: ItemStackIndex;
  arm_retract_sound?: Sound;
  arm_slow_energy_usage: Energy;
  arm_speed_base?: float;
  arm_speed_quality_scaling?: float;
  circuit_connector?: [
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
  ];
  circuit_wire_max_distance?: double;
  collection_box_offset?: float;
  collection_radius: double;
  deposit_radius?: float;
  deposit_sound?: Sound;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  energy_source: ElectricEnergySource | VoidEnergySource;
  energy_usage_quality_scaling?: float;
  graphics_set: AsteroidCollectorGraphicsSet;
  head_collection_radius?: float;
  held_items_display_count?: uint8;
  held_items_offset?: float;
  held_items_spread?: float;
  inventory_size?: ItemStackIndex;
  inventory_size_quality_increase?: ItemStackIndex;
  minimal_arm_swing_segment_retraction?: uint32;
  munch_sound?: Sound;
  passive_energy_usage: Energy;
  radius_visualisation_picture?: Sprite;
  tether_size?: float;
  unpowered_arm_speed_scale?: float;
}
export interface AsteroidPrototype extends EntityWithOwnerPrototype {
  emissions_per_second?: Record<AirbornePollutantID, double>;
  graphics_set?: AsteroidGraphicsSet;
  mass?: double;
}
export interface AutoplaceControl extends Prototype {
  can_be_disabled?: bool;
  category: 'resource' | 'terrain' | 'cliff' | 'enemy';
  richness?: bool;
}
export type BatteryEquipmentPrototype = EquipmentPrototype;
export interface BeaconPrototype extends EntityWithOwnerPrototype {
  allowed_effects?: EffectTypeLimitation;
  allowed_module_categories?: ModuleCategoryID[];
  animation?: Animation;
  base_picture?: Animation;
  beacon_counter?: 'total' | 'same_type';
  distribution_effectivity: double;
  distribution_effectivity_bonus_per_quality_level?: double;
  energy_source: ElectricEnergySource | VoidEnergySource;
  energy_usage: Energy;
  graphics_set?: BeaconGraphicsSet;
  module_slots: ItemStackIndex;
  perceived_performance?: PerceivedPerformance;
  profile?: double[];
  radius_visualisation_picture?: Sprite;
  supply_area_distance: double;
}
export interface BeamPrototype extends EntityPrototype {
  action?: Trigger;
  action_triggered_automatically?: bool;
  damage_interval: uint32;
  graphics_set: BeamGraphicsSet;
  random_target_offset?: bool;
  target_offset?: Vector;
  width: float;
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
  alt_select: SelectionModeData;
  always_include_tiles?: bool;
  draw_label_for_cursor_render?: bool;
  select: SelectionModeData;
  stack_size: 1;
}
export interface BoilerPrototype extends EntityWithOwnerPrototype {
  burning_cooldown: uint16;
  energy_consumption: Energy;
  energy_source: EnergySource;
  fire_flicker_enabled?: bool;
  fire_glow_flicker_enabled?: bool;
  fluid_box: FluidBox;
  mode?: 'heat-fluid-inside' | 'output-to-separate-pipe';
  output_fluid_box: FluidBox;
  pictures?: BoilerPictureSet;
  target_temperature?: float;
}
export interface BuildEntityAchievementPrototype extends AchievementPrototype {
  amount?: uint32;
  limited_to_one_game?: bool;
  to_build: EntityID;
  within?: MapTick;
}
export interface BurnerGeneratorPrototype extends EntityWithOwnerPrototype {
  always_draw_idle_animation?: bool;
  animation?: Animation4Way;
  burner: BurnerEnergySource;
  energy_source: ElectricEnergySource;
  idle_animation?: Animation4Way;
  max_power_output: Energy;
  perceived_performance?: PerceivedPerformance;
}
export interface BurnerUsagePrototype extends Prototype {
  accepted_fuel_key: string;
  burned_in_key: string;
  empty_slot_caption: LocalisedString;
  empty_slot_description?: LocalisedString;
  empty_slot_sprite: Sprite;
  icon: Sprite;
  no_fuel_status?: LocalisedString;
}
export interface CapsulePrototype extends ItemPrototype {
  capsule_action: CapsuleAction;
  radius_color?: Color;
}
export interface CaptureRobotPrototype extends FlyingRobotPrototype {
  capture_animation?: Animation;
  capture_speed?: double;
  destroy_action?: Trigger;
  search_radius?: double;
}
export interface CarPrototype extends VehiclePrototype {
  animation?: RotatedAnimation;
  auto_sort_inventory?: bool;
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
  trash_inventory_size?: ItemStackIndex;
  turret_animation?: RotatedAnimation;
  turret_return_timeout?: uint32;
  turret_rotation_speed?: float;
}
export interface CargoBayPrototype extends EntityWithOwnerPrototype {
  build_grid_size?: 2;
  graphics_set?: CargoBayConnectableGraphicsSet;
  hatch_definitions?: CargoHatchDefinition[];
  inventory_size_bonus: ItemStackIndex;
  platform_graphics_set?: CargoBayConnectableGraphicsSet;
}
export interface CargoLandingPadPrototype extends EntityWithOwnerPrototype {
  cargo_station_parameters: CargoStationParameters;
  circuit_connector?: CircuitConnectorDefinition;
  circuit_wire_max_distance?: double;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  graphics_set?: CargoBayConnectableGraphicsSet;
  inventory_size: ItemStackIndex;
  radar_range?: uint32;
  radar_visualisation_color?: Color;
  robot_animation?: Animation;
  robot_animation_sound?: Sound;
  robot_landing_location_offset?: Vector;
  robot_opened_duration?: uint8;
  trash_inventory_size?: ItemStackIndex;
}
export interface CargoPodPrototype extends EntityWithOwnerPrototype {
  default_graphic?: ProcessionGraphic;
  default_shadow_graphic?: ProcessionGraphic;
  inventory_size: ItemStackIndex;
  procession_audio_catalogue?: ProcessionAudioCatalogue;
  procession_graphic_catalogue?: ProcessionGraphicCatalogue;
  shadow_slave_entity?: EntityID;
  spawned_container: EntityID;
}
export interface CargoWagonPrototype extends RollingStockPrototype {
  inventory_size: ItemStackIndex;
}
export interface ChainActiveTriggerPrototype extends ActiveTriggerPrototype {
  action?: Trigger;
  fork_chance?: double;
  fork_chance_increase_per_quality_level?: double;
  jump_delay_ticks?: MapTick;
  max_forks?: uint32;
  max_forks_per_jump?: uint32;
  max_jumps?: uint32;
  max_range?: double;
  max_range_per_jump?: double;
}
export interface ChangedSurfaceAchievementPrototype
  extends AchievementPrototype {
  surface?: string;
}
export interface CharacterCorpsePrototype extends EntityPrototype {
  armor_picture_mapping?: Record<ItemID, int32>;
  picture?: Animation;
  pictures?: AnimationVariations;
  render_layer?: RenderLayer;
  time_to_live: uint32;
}
export interface CharacterPrototype extends EntityWithOwnerPrototype {
  animations: CharacterArmorAnimation[];
  build_distance: uint32;
  character_corpse?: EntityID;
  crafting_categories?: RecipeCategoryID[];
  damage_hit_tint: Color;
  distance_per_frame: double;
  drop_item_distance: uint32;
  eat: Sound;
  enter_vehicle_distance?: double;
  flying_bob_speed?: float;
  flying_collision_mask?: CollisionMaskConnector;
  footprint_particles?: FootprintParticle[];
  footstep_particle_triggers?: FootstepTriggerEffectList;
  grounded_landing_search_radius?: double;
  guns_inventory_size?: ItemStackIndex;
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
  moving_sound_animation_positions: float[];
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
  grid_offset: Vector;
  grid_size: Vector;
  orientations: OrientedCliffPrototypeSet;
  place_as_crater?: CraterPlacementDefinition;
}
export type CollisionLayerPrototype = Prototype;
export interface CombatRobotCountAchievementPrototype
  extends AchievementPrototype {
  count?: uint32;
}
export interface CombatRobotPrototype extends FlyingRobotPrototype {
  attack_parameters: AttackParameters;
  destroy_action?: Trigger;
  follows_player?: bool;
  friction?: double;
  idle?: RotatedAnimation;
  in_motion?: RotatedAnimation;
  light?: LightDefinition;
  range_from_player?: double;
  shadow_idle?: RotatedAnimation;
  shadow_in_motion?: RotatedAnimation;
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
  emissions_per_second?: Record<AirbornePollutantID, double>;
  energy_source: ElectricEnergySource | VoidEnergySource;
  frozen_patch?: Sprite4Way;
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
export interface CompleteObjectiveAchievementPrototype
  extends AchievementPrototypeWithCondition {
  within?: MapTick;
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
  mined_sound_volume_modifier?: float;
  repairing_sound?: Sound;
  shadow_working?: RotatedAnimation;
  smoke?: Animation;
  sparks?: AnimationVariations;
  working?: RotatedAnimation;
  working_light?: LightDefinition;
}
export interface ContainerPrototype extends EntityWithOwnerPrototype {
  circuit_connector?: CircuitConnectorDefinition;
  circuit_wire_max_distance?: double;
  default_status?: EntityStatus;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  inventory_size: ItemStackIndex;
  inventory_type?: 'normal' | 'with_bar' | 'with_filters_and_bar';
  picture?: Sprite;
  quality_affects_inventory_size?: bool;
}
export interface CopyPasteToolPrototype extends SelectionToolPrototype {
  alt_select: SelectionModeData;
  always_include_tiles?: bool;
  cuts?: bool;
  select: SelectionModeData;
  stack_size: 1;
}
export interface CorpsePrototype extends EntityPrototype {
  animation?: RotatedAnimationVariations;
  animation_overlay?: RotatedAnimationVariations;
  animation_overlay_final_render_layer?: RenderLayer;
  animation_overlay_render_layer?: RenderLayer;
  animation_render_layer?: RenderLayer;
  auto_setup_collision_box?: bool;
  decay_animation?: RotatedAnimationVariations;
  decay_frame_transition_duration?: float;
  direction_shuffle?: uint16[][];
  dying_speed?: float;
  expires?: bool;
  final_render_layer?: RenderLayer;
  ground_patch?: AnimationVariations;
  ground_patch_decay?: AnimationVariations;
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
  underwater_layer_offset?: int8;
  underwater_patch?: RotatedSprite;
  use_decay_layer?: bool;
  use_tile_color_for_ground_patch_tint?: bool;
}
export interface CraftingMachinePrototype extends EntityWithOwnerPrototype {
  allowed_effects?: EffectTypeLimitation;
  allowed_module_categories?: ModuleCategoryID[];
  crafting_categories: RecipeCategoryID[];
  crafting_speed: double;
  draw_entity_info_icon_background?: bool;
  effect_receiver?: EffectReceiver;
  energy_source: EnergySource;
  energy_usage: Energy;
  fast_transfer_modules_into_module_slots_only?: bool;
  fluid_boxes?: FluidBox[];
  forced_symmetry?: Mirroring;
  graphics_set?: CraftingMachineGraphicsSet;
  graphics_set_flipped?: CraftingMachineGraphicsSet;
  ignore_output_full?: bool;
  match_animation_speed_to_activity?: bool;
  module_slots?: ItemStackIndex;
  perceived_performance?: PerceivedPerformance;
  production_health_effect?: ProductionHealthEffect;
  return_ingredients_on_change?: bool;
  show_recipe_icon?: bool;
  show_recipe_icon_on_map?: bool;
  trash_inventory_size?: ItemStackIndex;
  vector_to_place_result?: Vector;
}
export interface CreatePlatformAchievementPrototype
  extends AchievementPrototype {
  amount?: uint32;
}
export interface CurvedRailAPrototype extends RailPrototype {
  collision_box?: BoundingBox;
}
export interface CurvedRailBPrototype extends RailPrototype {
  collision_box?: BoundingBox;
}
export type CustomEventPrototype = Prototype;
export interface CustomInputPrototype extends Prototype {
  action?:
    | 'lua'
    | 'spawn-item'
    | 'toggle-personal-roboport'
    | 'toggle-personal-logistic-requests'
    | 'toggle-equipment-movement-bonus';
  alternative_key_sequence?: string;
  block_modifiers?: bool;
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
export type DamageType = Prototype;
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
export type DeconstructibleTileProxyPrototype = EntityPrototype;
export interface DeconstructionItemPrototype
  extends Omit<
    SelectionToolPrototype,
    'selection_mode' | 'alt_selection_mode'
  > {
  alt_select: SelectionModeData;
  always_include_tiles?: bool;
  entity_filter_count?: ItemStackIndex;
  select: SelectionModeData;
  stack_size: 1;
  tile_filter_count?: ItemStackIndex;
}
export interface DecorativePrototype extends Prototype {
  autoplace?: AutoplaceSpecification;
  collision_box?: BoundingBox;
  collision_mask?: CollisionMaskConnector;
  decal_overdraw_priority?: uint16;
  grows_through_rail_path?: bool;
  minimal_separation?: double;
  pictures: SpriteVariations;
  placed_effect?: TriggerEffect;
  render_layer?: RenderLayer;
  stateless_visualisation?: StatelessVisualisations;
  stateless_visualisation_variations?: StatelessVisualisations[];
  target_count?: uint16;
  tile_layer?: int16;
  trigger_effect?: TriggerEffect;
  walking_sound?: Sound;
}
export interface DelayedActiveTriggerPrototype extends ActiveTriggerPrototype {
  action: Trigger;
  cancel_when_source_is_destroyed?: bool;
  delay: uint32;
  repeat_count?: uint32;
  repeat_delay?: uint32;
}
export interface DeliverByRobotsAchievementPrototype
  extends AchievementPrototype {
  amount: uint32;
}
export interface DeliverCategory {
  name: string;
  type: 'deliver-category';
}
export interface DeliverImpactCombination {
  deliver_category: string;
  impact_category: string;
  name: string;
  trigger_effect_item: TriggerEffectItem;
  type: 'deliver-impact-combination';
}
export interface DepleteResourceAchievementPrototype
  extends AchievementPrototype {
  amount?: uint32;
  limited_to_one_game?: bool;
}
export interface DestroyCliffAchievementPrototype extends AchievementPrototype {
  amount?: uint32;
  limited_to_one_game?: bool;
}
export interface DisplayPanelPrototype extends EntityWithOwnerPrototype {
  background_color?: Color;
  circuit_connector?: [
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
  ];
  circuit_wire_max_distance?: double;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  max_text_width?: uint32;
  sprites?: Sprite4Way;
  text_color?: Color;
  text_shift?: Vector;
}
export interface DontBuildEntityAchievementPrototype
  extends AchievementPrototypeWithCondition {
  amount?: uint32;
  dont_build: EntityID | EntityID[];
  research_with?: ItemID | ItemID[];
}
export interface DontCraftManuallyAchievementPrototype
  extends AchievementPrototypeWithCondition {
  amount: uint32;
}
export interface DontKillManuallyAchievementPrototype
  extends AchievementPrototypeWithCondition {
  to_kill?: EntityID;
  type_not_to_kill?: string;
}
export interface DontResearchBeforeResearchingAchievementPrototype
  extends AchievementPrototypeWithCondition {
  dont_research: ItemID | ItemID[];
  research_with: ItemID | ItemID[];
}
export interface DontUseEntityInEnergyProductionAchievementPrototype
  extends AchievementPrototypeWithCondition {
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
  ignore_surface_conditions: bool;
  ignore_tile_conditions: bool;
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
  auto_connect_up_to_n_wires?: uint8;
  connection_points: WireConnectionPoint[];
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  light?: LightDefinition;
  maximum_wire_distance?: double;
  pictures?: RotatedSprite;
  radius_visualisation_picture?: Sprite;
  supply_area_distance: double;
  track_coverage_during_build_by_moving?: bool;
}
export interface ElectricTurretPrototype extends TurretPrototype {
  energy_source: ElectricEnergySource | VoidEnergySource;
}
export type ElevatedCurvedRailAPrototype = CurvedRailAPrototype;
export type ElevatedCurvedRailBPrototype = CurvedRailBPrototype;
export type ElevatedHalfDiagonalRailPrototype = HalfDiagonalRailPrototype;
export type ElevatedStraightRailPrototype = StraightRailPrototype;
export interface EnemySpawnerPrototype extends EntityWithOwnerPrototype {
  absorptions_per_second?: Record<AirbornePollutantID, EnemySpawnerAbsorption>;
  allow_run_time_change_of_is_military_target?: false;
  call_for_help_radius: double;
  captured_spawner_entity?: EntityID;
  dying_sound?: Sound;
  graphics_set: EnemySpawnerGraphicsSet;
  is_military_target?: true;
  max_count_of_owned_defensive_units?: uint32;
  max_count_of_owned_units: uint32;
  max_darkness_to_spawn?: float;
  max_defensive_friends_around_to_spawn?: uint32;
  max_friends_around_to_spawn: uint32;
  max_richness_for_spawn_shift: double;
  max_spawn_shift: double;
  min_darkness_to_spawn?: float;
  result_units: UnitSpawnDefinition[];
  spawn_decoration?: CreateDecorativesTriggerEffectItem[];
  spawn_decorations_on_expansion?: bool;
  spawning_cooldown: [double, double];
  spawning_radius: double;
  spawning_spacing: double;
  time_to_capture?: uint32;
}
export interface EnergyShieldEquipmentPrototype extends EquipmentPrototype {
  energy_per_shield: Energy;
  max_shield_value: float;
}
export interface EntityGhostPrototype extends EntityPrototype {
  huge_build_animated_sound?: Sound;
  huge_build_sound?: Sound;
  large_build_animated_sound?: Sound;
  large_build_sound?: Sound;
  medium_build_animated_sound?: Sound;
  medium_build_sound?: Sound;
  small_build_animated_sound?: Sound;
}
export interface EntityPrototype extends Prototype {
  additional_pastable_entities?: EntityID[];
  alert_icon_scale?: float;
  alert_icon_shift?: Vector;
  allow_copy_paste?: bool;
  ambient_sounds?: WorldAmbientSoundDefinition | WorldAmbientSoundDefinition[];
  ambient_sounds_group?: EntityID;
  autoplace?: AutoplaceSpecification;
  build_base_evolution_requirement?: double;
  build_grid_size?: uint8;
  build_sound?: Sound;
  close_sound?: Sound;
  collision_box?: BoundingBox;
  collision_mask?: CollisionMaskConnector;
  created_effect?: Trigger;
  created_smoke?: CreateTrivialSmokeEffectItem;
  deconstruction_alternative?: EntityID;
  diagonal_tile_grid_size?: TilePosition;
  drawing_box_vertical_extension?: double;
  emissions_per_second?: Record<AirbornePollutantID, double>;
  enemy_map_color?: Color;
  fast_replaceable_group?: string;
  flags?: EntityPrototypeFlags;
  friendly_map_color?: Color;
  heating_energy?: Energy;
  hit_visualization_box?: BoundingBox;
  icon?: FileName;
  icon_draw_specification?: IconDrawSpecification;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  icons_positioning?: IconSequencePositioning[];
  impact_category?: string;
  map_color?: Color;
  map_generator_bounding_box?: BoundingBox;
  minable?: MinableProperties;
  mined_sound?: Sound;
  mining_sound?: Sound;
  next_upgrade?: EntityID;
  open_sound?: Sound;
  order?: Order;
  placeable_by?: ItemToPlace | ItemToPlace[];
  placeable_position_visualization?: Sprite;
  protected_from_tile_building?: bool;
  radius_visualisation_specification?: RadiusVisualisationSpecification;
  remains_when_mined?: EntityID | EntityID[];
  remove_decoratives?: 'automatic' | 'true' | 'false';
  rotated_sound?: Sound;
  selectable_in_game?: bool;
  selection_box?: BoundingBox;
  selection_priority?: uint8;
  shooting_cursor_size?: double;
  stateless_visualisation?: StatelessVisualisations;
  sticker_box?: BoundingBox;
  surface_conditions?: SurfaceCondition[];
  tile_buildability_rules?: TileBuildabilityRule[];
  tile_height?: int32;
  tile_width?: int32;
  trigger_target_mask?: TriggerTargetMask;
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
  overkill_fraction?: float;
  random_corpse_variation?: bool;
  repair_sound?: Sound;
  repair_speed_modifier?: float;
  resistances?: Resistance[];
}
export interface EntityWithOwnerPrototype extends EntityWithHealthPrototype {
  allow_run_time_change_of_is_military_target?: bool;
  is_military_target?: bool;
  quality_indicator_scale?: double;
}
export interface EquipArmorAchievementPrototype extends AchievementPrototype {
  alternative_armor: ItemID;
  amount?: uint32;
  armor: ItemID;
  limit_quality: QualityID;
  limited_to_one_game?: bool;
}
export type EquipmentCategory = Prototype;
export interface EquipmentGhostPrototype
  extends Omit<EquipmentPrototype, 'categories' | 'energy_source' | 'shape'> {
  categories?: EquipmentCategoryID[];
  energy_source?: ElectricEnergySource;
  shape?: EquipmentShape;
  take_result?: ItemID;
}
export interface EquipmentGridPrototype extends Prototype {
  equipment_categories: EquipmentCategoryID[];
  height: uint32;
  locked?: bool;
  width: uint32;
}
export interface EquipmentPrototype extends Prototype {
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
export interface FireFlamePrototype extends EntityPrototype {
  add_fuel_cooldown?: uint32;
  burnt_patch_alpha_default?: float;
  burnt_patch_alpha_variations?: TileAndAlpha[];
  burnt_patch_lifetime?: uint32;
  burnt_patch_pictures?: SpriteVariations;
  damage_multiplier_decrease_per_tick?: float;
  damage_multiplier_increase_per_added_fuel?: float;
  damage_per_tick: DamageParameters;
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
  light_size_modifier_maximum?: float;
  light_size_modifier_per_flame?: float;
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
  pictures?: SpriteVariations;
}
export interface FluidPrototype extends Prototype {
  auto_barrel?: bool;
  base_color: Color;
  default_temperature: float;
  emissions_multiplier?: double;
  flow_color: Color;
  fuel_value?: Energy;
  gas_temperature?: float;
  heat_capacity?: Energy;
  icon?: FileName;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  max_temperature?: float;
  visualization_color?: Color;
}
export interface FluidStreamPrototype extends EntityPrototype {
  action?: Trigger;
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
  special_neutral_target_damage?: DamageParameters;
  spine_animation?: Animation;
  stream_light?: LightDefinition;
  target_position_deviation?: double;
  width?: float;
}
export interface FluidTurretPrototype extends TurretPrototype {
  activation_buffer_ratio: FluidAmount;
  attack_parameters: StreamAttackParameters;
  attacking_muzzle_animation_shift?: AnimatedVector;
  ending_attack_muzzle_animation_shift?: AnimatedVector;
  enough_fuel_indicator_light?: LightDefinition;
  enough_fuel_indicator_picture?: Sprite4Way;
  fluid_box: FluidBox;
  fluid_buffer_input_flow: FluidAmount;
  fluid_buffer_size: FluidAmount;
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
  capacity: FluidAmount;
  tank_count?: uint8;
}
export interface FlyingRobotPrototype extends EntityWithOwnerPrototype {
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
export interface FuelCategory extends Prototype {
  fuel_value_type?: LocalisedString;
}
export interface FurnacePrototype extends CraftingMachinePrototype {
  cant_insert_at_source_message_key?: string;
  custom_input_slot_tooltip_key?: string;
  result_inventory_size: ItemStackIndex;
  source_inventory_size: ItemStackIndex;
}
export interface FusionGeneratorPrototype extends EntityWithOwnerPrototype {
  energy_source: ElectricEnergySource;
  graphics_set?: FusionGeneratorGraphicsSet;
  input_fluid_box: FluidBox;
  max_fluid_usage: FluidAmount;
  output_fluid_box: FluidBox;
  perceived_performance?: PerceivedPerformance;
}
export interface FusionReactorPrototype extends EntityWithOwnerPrototype {
  burner: BurnerEnergySource;
  energy_source: ElectricEnergySource;
  graphics_set: FusionReactorGraphicsSet;
  input_fluid_box: FluidBox;
  max_fluid_usage: FluidAmount;
  neighbour_bonus?: float;
  neighbour_connectable?: NeighbourConnectable;
  output_fluid_box: FluidBox;
  perceived_performance?: PerceivedPerformance;
  power_input: Energy;
  two_direction_only?: bool;
}
export interface GatePrototype extends EntityWithOwnerPrototype {
  activation_distance: double;
  closing_sound?: Sound;
  fadeout_interval?: uint32;
  horizontal_animation?: Animation;
  horizontal_rail_animation_left?: Animation;
  horizontal_rail_animation_right?: Animation;
  horizontal_rail_base?: Animation;
  opened_collision_mask?: CollisionMaskConnector;
  opening_sound?: Sound;
  opening_speed: float;
  timeout_to_close: uint32;
  vertical_animation?: Animation;
  vertical_rail_animation_left?: Animation;
  vertical_rail_animation_right?: Animation;
  vertical_rail_base?: Animation;
  wall_patch?: Animation;
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
  fluid_usage_per_tick: FluidAmount;
  horizontal_animation?: Animation;
  horizontal_frozen_patch?: Sprite;
  max_power_output?: Energy;
  maximum_temperature: float;
  perceived_performance?: PerceivedPerformance;
  scale_fluid_usage?: bool;
  smoke?: SmokeSource[];
  vertical_animation?: Animation;
  vertical_frozen_patch?: Sprite;
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
  entities?: EntityID[];
}
export interface GuiStyle extends PrototypeBase {
  default_sprite_priority?: SpritePriority;
  default_sprite_scale?: double;
  default_tileset?: FileName;
}
export interface GunPrototype extends ItemPrototype {
  attack_parameters: AttackParameters;
}
export interface HalfDiagonalRailPrototype extends RailPrototype {
  collision_box?: BoundingBox;
}
export interface HeatInterfacePrototype extends EntityWithOwnerPrototype {
  gui_mode?: 'all' | 'none' | 'admins';
  heat_buffer: HeatBuffer;
  picture?: Sprite;
}
export interface HeatPipePrototype extends EntityWithOwnerPrototype {
  connection_sprites?: ConnectableEntityGraphics;
  heat_buffer: HeatBuffer;
  heat_glow_sprites?: ConnectableEntityGraphics;
  heating_radius?: float;
}
export type HighlightBoxEntityPrototype = EntityPrototype;
export interface ImpactCategory {
  name: string;
  type: 'impact-category';
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
  preserve_contents_when_created?: bool;
  render_not_in_network_icon?: bool;
}
export interface InfinityPipePrototype extends PipePrototype {
  gui_mode?: 'all' | 'none' | 'admins';
}
export interface InserterPrototype extends EntityWithOwnerPrototype {
  allow_burner_leech?: bool;
  allow_custom_vectors?: bool;
  bulk?: bool;
  chases_belt_items?: bool;
  circuit_connector?: [
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
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
  enter_drop_mode_if_held_stack_spoiled?: bool;
  extension_speed: double;
  filter_count?: uint8;
  grab_less_to_match_belt_stack?: bool;
  hand_base_frozen?: Sprite;
  hand_base_picture?: Sprite;
  hand_base_shadow?: Sprite;
  hand_closed_frozen?: Sprite;
  hand_closed_picture?: Sprite;
  hand_closed_shadow?: Sprite;
  hand_open_frozen?: Sprite;
  hand_open_picture?: Sprite;
  hand_open_shadow?: Sprite;
  hand_size?: double;
  insert_position: Vector;
  max_belt_stack_size?: uint8;
  pickup_position: Vector;
  platform_frozen?: Sprite4Way;
  platform_picture?: Sprite4Way;
  rotation_speed: double;
  stack_size_bonus?: uint8;
  starting_distance?: double;
  use_easter_egg?: bool;
  wait_for_full_hand?: bool;
}
export interface InventoryBonusEquipmentPrototype
  extends Omit<EquipmentPrototype, 'energy_source'> {
  energy_source?: ElectricEnergySource;
  inventory_size_bonus: ItemStackIndex;
}
export interface ItemEntityPrototype extends EntityPrototype {
  collision_box?: BoundingBox;
}
export interface ItemGroup extends Prototype {
  icon?: FileName;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  order_in_recipe?: Order;
}
export interface ItemPrototype extends Prototype {
  burnt_result?: ItemID;
  close_sound?: Sound;
  color_hint?: ColorHintSpecification;
  dark_background_icon?: FileName;
  dark_background_icon_size?: SpriteSizeType;
  dark_background_icons?: IconData[];
  default_import_location?: SpaceLocationID;
  destroyed_by_dropping_trigger?: Trigger;
  drop_sound?: Sound;
  flags?: ItemPrototypeFlags;
  fuel_acceleration_multiplier?: double;
  fuel_acceleration_multiplier_quality_bonus?: double;
  fuel_category?: FuelCategoryID;
  fuel_emissions_multiplier?: double;
  fuel_glow_color?: Color;
  fuel_top_speed_multiplier?: double;
  fuel_top_speed_multiplier_quality_bonus?: double;
  fuel_value?: Energy;
  has_random_tint?: bool;
  icon?: FileName;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  ingredient_to_weight_coefficient?: double;
  inventory_move_sound?: Sound;
  open_sound?: Sound;
  pick_sound?: Sound;
  pictures?: SpriteVariations;
  place_as_equipment_result?: EquipmentID;
  place_as_tile?: PlaceAsTile;
  place_result?: EntityID;
  plant_result?: EntityID;
  random_tint_color?: Color;
  rocket_launch_products?: ItemProductPrototype[];
  send_to_orbit_mode?: SendToOrbitMode;
  spoil_level?: uint8;
  spoil_result?: ItemID;
  spoil_ticks?: uint32;
  spoil_to_trigger_result?: SpoilToTriggerResult;
  stack_size: ItemCountType;
  weight?: Weight;
}
export interface ItemRequestProxyPrototype extends EntityPrototype {
  use_target_entity_alert_icon_shift?: bool;
}
export interface ItemSubGroup extends Prototype {
  group: ItemGroupID;
}
export interface ItemWithEntityDataPrototype extends ItemPrototype {
  icon_tintable?: FileName;
  icon_tintable_mask?: FileName;
  icon_tintable_mask_size?: SpriteSizeType;
  icon_tintable_masks?: IconData[];
  icon_tintable_size?: SpriteSizeType;
  icon_tintables?: IconData[];
}
export interface ItemWithInventoryPrototype extends ItemWithLabelPrototype {
  filter_message_key?: string;
  filter_mode?: 'blacklist' | 'whitelist';
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
  damage_dealer?: EntityID | EntityID[];
  damage_type?: DamageTypeID;
  in_vehicle?: bool;
  personally?: bool;
  to_kill?: EntityID | EntityID[];
  type_to_kill?: string;
}
export interface LabPrototype extends EntityWithOwnerPrototype {
  allowed_effects?: EffectTypeLimitation;
  allowed_module_categories?: ModuleCategoryID[];
  effect_receiver?: EffectReceiver;
  energy_source: EnergySource;
  energy_usage: Energy;
  frozen_patch?: Sprite;
  inputs: ItemID[];
  light?: LightDefinition;
  module_slots?: ItemStackIndex;
  off_animation?: Animation;
  on_animation?: Animation;
  researching_speed?: double;
  science_pack_drain_rate_percent?: uint8;
  trash_inventory_size?: ItemStackIndex;
  uses_quality_drain_modifier?: bool;
}
export interface LampPrototype extends EntityWithOwnerPrototype {
  always_on?: bool;
  circuit_connector?: CircuitConnectorDefinition;
  circuit_wire_max_distance?: double;
  darkness_for_all_lamps_off?: float;
  darkness_for_all_lamps_on?: float;
  default_blue_signal?: SignalIDConnector;
  default_green_signal?: SignalIDConnector;
  default_red_signal?: SignalIDConnector;
  default_rgb_signal?: SignalIDConnector;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  energy_source: ElectricEnergySource | VoidEnergySource;
  energy_usage_per_tick: Energy;
  glow_color_intensity?: float;
  glow_render_mode?: 'additive' | 'multiplicative';
  glow_size?: float;
  light?: LightDefinition;
  light_when_colored?: LightDefinition;
  picture_off?: Sprite;
  picture_on?: Sprite;
  signal_to_color_mapping?: SignalColorMapping[];
}
export interface LandMinePrototype extends EntityWithOwnerPrototype {
  action?: Trigger;
  ammo_category?: AmmoCategoryID;
  force_die_on_attack?: bool;
  is_military_target?: bool;
  picture_safe?: Sprite;
  picture_set?: Sprite;
  picture_set_enemy?: Sprite;
  timeout?: uint32;
  trigger_collision_mask?: CollisionMaskConnector;
  trigger_force?: ForceCondition;
  trigger_radius: double;
}
export interface LaneSplitterPrototype
  extends TransportBeltConnectablePrototype {
  structure: Animation4Way;
  structure_animation_movement_cooldown?: uint32;
  structure_animation_speed_coefficient?: double;
  structure_patch?: Animation4Way;
}
export interface LegacyCurvedRailPrototype extends RailPrototype {
  collision_box?: BoundingBox;
}
export interface LegacyStraightRailPrototype extends RailPrototype {
  collision_box?: BoundingBox;
}
export interface LightningAttractorPrototype extends EntityWithOwnerPrototype {
  chargable_graphics?: ChargableGraphics;
  efficiency?: double;
  energy_source?: ElectricEnergySource;
  lightning_strike_offset?: MapPosition;
  range_elongation?: double;
}
export interface LightningPrototype extends EntityPrototype {
  attracted_volume_modifier?: float;
  damage?: double;
  effect_duration: uint16;
  energy?: Energy;
  graphics_set?: LightningGraphicsSet;
  sound?: Sound;
  source_offset?: Vector;
  source_variance?: Vector;
  strike_effect?: Trigger;
  time_to_damage?: uint16;
}
export interface LinkedBeltPrototype extends TransportBeltConnectablePrototype {
  allow_blueprint_connection?: bool;
  allow_clone_connection?: bool;
  allow_side_loading?: bool;
  structure?: LinkedBeltStructure;
  structure_render_layer?: RenderLayer;
}
export interface LinkedContainerPrototype extends EntityWithOwnerPrototype {
  circuit_connector?: CircuitConnectorDefinition;
  circuit_wire_max_distance?: double;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  gui_mode?: 'all' | 'none' | 'admins';
  inventory_size: ItemStackIndex;
  inventory_type?: 'normal' | 'with_bar' | 'with_filters_and_bar';
  picture?: Sprite;
}
export type Loader1x1Prototype = LoaderPrototype;
export type Loader1x2Prototype = LoaderPrototype;
export interface LoaderPrototype extends TransportBeltConnectablePrototype {
  allow_container_interaction?: bool;
  allow_rail_interaction?: bool;
  belt_length?: double;
  circuit_connector?: CircuitConnectorDefinition[];
  circuit_connector_layer?: RenderLayer;
  circuit_wire_max_distance?: double;
  container_distance?: double;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  energy_per_item?: Energy;
  energy_source?:
    | ElectricEnergySource
    | HeatEnergySource
    | FluidEnergySource
    | VoidEnergySource;
  filter_count: uint8;
  max_belt_stack_size?: uint8;
  per_lane_filters?: bool;
  structure?: LoaderStructure;
  structure_render_layer?: RenderLayer;
}
export interface LocomotivePrototype extends RollingStockPrototype {
  darkness_to_render_light_animation?: float;
  energy_source: BurnerEnergySource | VoidEnergySource;
  front_light?: LightDefinition;
  front_light_pictures?: RollingStockRotatedSlopedGraphics;
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
  render_not_in_network_icon?: bool;
  trash_inventory_size?: ItemStackIndex;
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
  asteroids: AsteroidSettings;
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
  picture?: Sprite;
}
export interface MiningDrillPrototype extends EntityWithOwnerPrototype {
  allowed_effects?: EffectTypeLimitation;
  allowed_module_categories?: ModuleCategoryID[];
  base_picture?: Sprite4Way;
  base_render_layer?: RenderLayer;
  circuit_connector?: [
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
  ];
  circuit_wire_max_distance?: double;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  drilling_sound?: InterruptibleSound;
  drilling_sound_animation_end_frame?: uint16;
  drilling_sound_animation_start_frame?: uint16;
  drops_full_belt_stacks?: bool;
  effect_receiver?: EffectReceiver;
  energy_source: EnergySource;
  energy_usage: Energy;
  filter_count?: uint8;
  graphics_set?: MiningDrillGraphicsSet;
  input_fluid_box?: FluidBox;
  mining_speed: double;
  module_slots?: ItemStackIndex;
  monitor_visualization_tint?: Color;
  moving_sound?: InterruptibleSound;
  output_fluid_box?: FluidBox;
  perceived_performance?: PerceivedPerformance;
  radius_visualisation_picture?: Sprite;
  resource_categories: ResourceCategoryID[];
  resource_drain_rate_percent?: uint8;
  resource_searching_radius: double;
  shuffle_resources_to_mine?: bool;
  vector_to_place_result: Vector;
  wet_mining_graphics_set?: MiningDrillGraphicsSet;
}
export type ModuleCategory = Prototype;
export interface ModulePrototype extends ItemPrototype {
  art_style?: string;
  beacon_tint?: BeaconVisualizationTints;
  category: ModuleCategoryID;
  effect: Effect;
  requires_beacon_alt_mode?: bool;
  tier: uint32;
}
export interface ModuleTransferAchievementPrototype
  extends AchievementPrototype {
  amount?: uint32;
  limited_to_one_game?: bool;
  module: ItemID | ItemID[];
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
export interface NamedNoiseExpression extends Prototype {
  expression: NoiseExpression;
  intended_property?: string;
  local_expressions?: Record<string, NoiseExpression>;
  local_functions?: Record<string, NoiseFunction>;
  order?: Order;
}
export interface NamedNoiseFunction extends Prototype {
  expression: NoiseExpression;
  local_expressions?: Record<string, NoiseExpression>;
  local_functions?: Record<string, NoiseFunction>;
  parameters: string[];
}
export interface NightVisionEquipmentPrototype extends EquipmentPrototype {
  activate_sound?: Sound;
  color_lookup: DaytimeColorLookupTable;
  darkness_to_turn_on?: float;
  deactivate_sound?: Sound;
  energy_input: Energy;
}
export interface OffshorePumpPrototype extends EntityWithOwnerPrototype {
  always_draw_fluid?: bool;
  circuit_connector?: [
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
  ];
  circuit_wire_max_distance?: double;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  energy_source: EnergySource;
  energy_usage: Energy;
  fluid_box: FluidBox;
  fluid_source_offset: Vector;
  graphics_set?: OffshorePumpGraphicsSet;
  perceived_performance?: PerceivedPerformance;
  pumping_speed: FluidAmount;
  remove_on_tile_collision?: bool;
}
export interface ParticlePrototype extends Prototype {
  draw_shadow_when_on_ground?: bool;
  ended_in_water_trigger_effect?: TriggerEffect;
  ended_on_ground_trigger_effect?: TriggerEffect;
  fade_away_duration?: uint16;
  life_time: uint16;
  mining_particle_frame_speed?: float;
  movement_modifier?: float;
  movement_modifier_when_on_ground?: float;
  pictures?: AnimationVariations;
  regular_trigger_effect?: TriggerEffect;
  regular_trigger_effect_frequency?: uint32;
  render_layer?: RenderLayer;
  render_layer_when_on_ground?: RenderLayer;
  shadows?: AnimationVariations;
  vertical_acceleration?: float;
}
export interface ParticleSourcePrototype extends EntityPrototype {
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
  pictures?: PipePictures;
  vertical_window_bounding_box: BoundingBox;
}
export interface PipeToGroundPrototype extends EntityWithOwnerPrototype {
  disabled_visualization?: Sprite4Way;
  draw_fluid_icon_override?: bool;
  fluid_box: FluidBox;
  frozen_patch?: Sprite4Way;
  pictures?: Sprite4Way;
  visualization?: Sprite4Way;
}
export interface PlaceEquipmentAchievementPrototype
  extends AchievementPrototype {
  amount?: uint32;
  armor: ItemID;
  limit_equip_quality: QualityID;
  limit_quality: QualityID;
  limited_to_one_game?: bool;
}
export interface PlanetPrototype extends SpaceLocationPrototype {
  entities_require_heating?: bool;
  lightning_properties?: LightningProperties;
  map_gen_settings?: PlanetPrototypeMapGenSettings;
  map_seed_offset?: uint32;
  persistent_ambient_sounds?: PersistentWorldAmbientSoundsDefinition;
  player_effects?: Trigger;
  pollutant_type?: AirbornePollutantID;
  surface_properties?: Record<SurfacePropertyID, double>;
  surface_render_parameters?: SurfaceRenderParameters;
  ticks_between_player_effects?: MapTick;
}
export interface PlantPrototype extends TreePrototype {
  agricultural_tower_tint?: RecipeTints;
  growth_ticks: MapTick;
  harvest_emissions?: Record<AirbornePollutantID, double>;
}
export interface PlayerDamagedAchievementPrototype
  extends AchievementPrototype {
  minimum_damage: float;
  should_survive: bool;
  type_of_dealer?: string;
}
export type PlayerPortPrototype = EntityWithOwnerPrototype;
export interface PowerSwitchPrototype extends EntityWithOwnerPrototype {
  circuit_wire_connection_point: WireConnectionPoint;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  frozen_patch?: Sprite;
  led_off?: Sprite;
  led_on?: Sprite;
  left_wire_connection_point: WireConnectionPoint;
  overlay_loop?: Animation;
  overlay_start?: Animation;
  overlay_start_delay: uint8;
  power_on_animation?: Animation;
  right_wire_connection_point: WireConnectionPoint;
  wire_max_distance?: double;
}
export interface ProcessionLayerInheritanceGroup extends Prototype {
  arrival_application?: TransitionApplication;
  intermezzo_application?: TransitionApplication;
}
export interface ProcessionPrototype extends Prototype {
  ground_timeline?: ProcessionTimeline;
  procession_style: uint32 | uint32[];
  timeline: ProcessionTimeline;
  usage: 'departure' | 'arrival' | 'intermezzo';
}
export interface ProduceAchievementPrototype extends AchievementPrototype {
  amount: MaterialAmountType;
  fluid_product?: FluidID;
  item_product?: ItemIDFilter;
  limited_to_one_game: bool;
}
export interface ProducePerHourAchievementPrototype
  extends AchievementPrototype {
  amount: MaterialAmountType;
  fluid_product?: FluidID;
  item_product?: ItemIDFilter;
}
export interface ProgrammableSpeakerPrototype extends EntityWithOwnerPrototype {
  audible_distance_modifier?: float;
  circuit_connector?: CircuitConnectorDefinition;
  circuit_wire_max_distance?: double;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  energy_source: ElectricEnergySource | VoidEnergySource;
  energy_usage_per_tick: Energy;
  instruments: ProgrammableSpeakerInstrument[];
  maximum_polyphony: uint32;
  sprite?: Sprite;
}
export interface ProjectilePrototype extends EntityPrototype {
  acceleration: double;
  action?: Trigger;
  animation?: RotatedAnimationVariations;
  direction_only?: bool;
  enable_drawing_with_mask?: bool;
  final_action?: Trigger;
  force_condition?: ForceCondition;
  height?: double;
  hit_at_collision_position?: bool;
  hit_collision_mask?: CollisionMaskConnector;
  light?: LightDefinition;
  max_speed?: double;
  piercing_damage?: float;
  rotatable?: bool;
  shadow?: RotatedAnimationVariations;
  smoke?: SmokeSource[];
  speed_modifier?: Vector;
  turn_speed?: float;
  turning_speed_increases_exponentially_with_projectile_speed?: bool;
}
export interface Prototype extends PrototypeBase {
  factoriopedia_alternative?: string;
}
export interface PrototypeBase {
  factoriopedia_description?: LocalisedString;
  factoriopedia_simulation?: SimulationDefinition;
  hidden?: bool;
  hidden_in_factoriopedia?: bool;
  localised_description?: LocalisedString;
  localised_name?: LocalisedString;
  name: string;
  order?: Order;
  parameter?: bool;
  subgroup?: ItemSubGroupID;
  type: string;
}
export interface PumpPrototype extends EntityWithOwnerPrototype {
  animations?: Animation4Way;
  circuit_connector?: [
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
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
  frozen_patch?: Sprite4Way;
  glass_pictures?: Sprite4Way;
  pumping_speed: FluidAmount;
}
export interface QualityPrototype extends Prototype {
  beacon_power_usage_multiplier?: float;
  color: Color;
  draw_sprite_by_default?: bool;
  icon?: FileName;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  level: uint32;
  mining_drill_resource_drain_multiplier?: float;
  name: string;
  next?: QualityID;
  next_probability?: double;
  science_pack_drain_multiplier?: float;
}
export interface RadarPrototype extends EntityWithOwnerPrototype {
  circuit_connector?: CircuitConnectorDefinition;
  circuit_wire_max_distance?: double;
  connects_to_other_radars?: bool;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  energy_fraction_to_connect?: float;
  energy_fraction_to_disconnect?: float;
  energy_per_nearby_scan: Energy;
  energy_per_sector: Energy;
  energy_source: EnergySource;
  energy_usage: Energy;
  frozen_patch?: Sprite;
  is_military_target?: bool;
  max_distance_of_nearby_sector_revealed: uint32;
  max_distance_of_sector_revealed: uint32;
  pictures?: RotatedSprite;
  radius_minimap_visualisation_color?: Color;
  reset_orientation_when_frozen?: bool;
  rotation_speed?: double;
}
export type RailChainSignalPrototype = RailSignalBasePrototype;
export interface RailPlannerPrototype extends ItemPrototype {
  manual_length_limit?: double;
  rails: EntityID[];
  support?: EntityID;
}
export interface RailPrototype extends EntityWithOwnerPrototype {
  build_grid_size?: 2;
  deconstruction_marker_positions?: Vector[];
  ending_shifts?: Vector[];
  extra_planner_goal_penalty?: double;
  extra_planner_penalty?: double;
  fence_pictures?: RailFenceGraphicsSet;
  forced_fence_segment_count?: uint8;
  pictures: RailPictureSet;
  removes_soft_decoratives?: bool;
  selection_box?: BoundingBox;
  walking_sound?: Sound;
}
export interface RailRampPrototype extends RailPrototype {
  collision_box?: BoundingBox;
  collision_mask_allow_on_deep_oil_ocean?: CollisionMaskConnector;
  support_range?: float;
}
export interface RailRemnantsPrototype extends CorpsePrototype {
  build_grid_size?: 2;
  collision_box?: BoundingBox;
  pictures: RailPictureSet;
  related_rail: EntityID;
  secondary_collision_box?: BoundingBox;
}
export interface RailSignalBasePrototype extends EntityWithOwnerPrototype {
  circuit_wire_max_distance?: double;
  collision_box?: BoundingBox;
  default_blue_output_signal?: SignalIDConnector;
  default_green_output_signal?: SignalIDConnector;
  default_orange_output_signal?: SignalIDConnector;
  default_red_output_signal?: SignalIDConnector;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  elevated_collision_mask?: CollisionMaskConnector;
  elevated_picture_set: RailSignalPictureSet;
  elevated_selection_priority?: uint8;
  flags?: EntityPrototypeFlags;
  ground_picture_set: RailSignalPictureSet;
}
export type RailSignalPrototype = RailSignalBasePrototype;
export interface RailSupportPrototype extends EntityWithOwnerPrototype {
  build_grid_size?: 2;
  collision_mask_allow_on_deep_oil_ocean?: CollisionMaskConnector;
  elevated_selection_boxes?: BoundingBox[];
  graphics_set: RailSupportGraphicsSet;
  not_buildable_if_no_rails?: bool;
  snap_to_spots_distance?: float;
  support_range?: float;
}
export interface ReactorPrototype extends EntityWithOwnerPrototype {
  circuit_connector?: CircuitConnectorDefinition;
  circuit_wire_max_distance?: double;
  connection_patches_connected?: SpriteVariations;
  connection_patches_disconnected?: SpriteVariations;
  consumption: Energy;
  default_fuel_glow_color?: Color;
  default_temperature_signal?: SignalIDConnector;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  energy_source: EnergySource;
  heat_buffer: HeatBuffer;
  heat_connection_patches_connected?: SpriteVariations;
  heat_connection_patches_disconnected?: SpriteVariations;
  heat_lower_layer_picture?: Sprite;
  heating_radius?: double;
  light?: LightDefinition;
  lower_layer_picture?: Sprite;
  meltdown_action?: Trigger;
  neighbour_bonus?: double;
  picture?: Sprite;
  scale_energy_usage?: bool;
  use_fuel_glow_color?: bool;
  working_light_picture?: Animation;
}
export type RecipeCategory = Prototype;
export interface RecipePrototype extends Prototype {
  allow_as_intermediate?: bool;
  allow_consumption?: bool;
  allow_consumption_message?: LocalisedString;
  allow_decomposition?: bool;
  allow_inserter_overload?: bool;
  allow_intermediates?: bool;
  allow_pollution?: bool;
  allow_pollution_message?: LocalisedString;
  allow_productivity?: bool;
  allow_productivity_message?: LocalisedString;
  allow_quality?: bool;
  allow_quality_message?: LocalisedString;
  allow_speed?: bool;
  allow_speed_message?: LocalisedString;
  allowed_module_categories?: ModuleCategoryID[];
  alternative_unlock_methods?: TechnologyID[];
  always_show_made_in?: bool;
  always_show_products?: bool;
  category?: RecipeCategoryID;
  crafting_machine_tint?: RecipeTints;
  emissions_multiplier?: double;
  enabled?: bool;
  energy_required?: double;
  hide_from_player_crafting?: bool;
  hide_from_signal_gui?: bool;
  hide_from_stats?: bool;
  icon?: FileName;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  ingredients?: IngredientPrototype[];
  main_product?: string;
  maximum_productivity?: double;
  overload_multiplier?: uint32;
  preserve_products_in_machine_output?: bool;
  requester_paste_multiplier?: uint32;
  result_is_always_fresh?: bool;
  results?: ProductPrototype[];
  show_amount_in_title?: bool;
  surface_conditions?: SurfaceCondition[];
  unlock_results?: bool;
}
export interface RemoteControllerPrototype {
  movement_speed: double;
  name: string;
  type: 'remote-controller';
}
export interface RepairToolPrototype extends ToolPrototype {
  speed: float;
}
export interface ResearchAchievementPrototype extends AchievementPrototype {
  research_all?: bool;
  technology?: TechnologyID;
}
export interface ResearchWithSciencePackAchievementPrototype
  extends AchievementPrototype {
  amount?: uint32;
  science_pack: ItemID;
}
export type ResourceCategory = Prototype;
export interface ResourceEntityPrototype extends EntityPrototype {
  category?: ResourceCategoryID;
  cliff_removal_probability?: double;
  draw_stateless_visualisation_under_building?: bool;
  driving_sound?: InterruptibleSound;
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
  stages?: AnimationVariations;
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
  charging_station_count_affected_by_quality?: bool;
  charging_station_shift?: Vector;
  charging_threshold_distance?: float;
  construction_radius: float;
  draw_construction_radius_visualization?: bool;
  draw_logistic_radius_visualization?: bool;
  power?: Energy;
  recharging_animation?: Animation;
  recharging_light?: LightDefinition;
  robot_limit?: ItemCountType;
  robot_vertical_acceleration?: float;
  robots_shrink_when_entering_and_exiting?: bool;
  spawn_and_station_height: float;
  spawn_and_station_shadow_height_offset?: float;
  spawn_minimum?: Energy;
  stationing_offset?: Vector;
  stationing_render_layer_swap_height?: float;
}
export interface RoboportPrototype extends EntityWithOwnerPrototype {
  base?: Sprite;
  base_animation?: Animation;
  base_patch?: Sprite;
  charge_approach_distance: float;
  charging_distance?: float;
  charging_energy: Energy;
  charging_offsets?: Vector[];
  charging_station_count?: uint32;
  charging_station_count_affected_by_quality?: bool;
  charging_station_shift?: Vector;
  charging_threshold_distance?: float;
  circuit_connector?: CircuitConnectorDefinition;
  circuit_wire_max_distance?: double;
  close_door_trigger_effect?: TriggerEffect;
  construction_radius: float;
  default_available_construction_output_signal?: SignalIDConnector;
  default_available_logistic_output_signal?: SignalIDConnector;
  default_roboports_output_signal?: SignalIDConnector;
  default_total_construction_output_signal?: SignalIDConnector;
  default_total_logistic_output_signal?: SignalIDConnector;
  door_animation_down?: Animation;
  door_animation_up?: Animation;
  draw_circuit_wires?: bool;
  draw_construction_radius_visualization?: bool;
  draw_copper_wires?: bool;
  draw_logistic_radius_visualization?: bool;
  energy_source: ElectricEnergySource | VoidEnergySource;
  energy_usage: Energy;
  frozen_patch?: Sprite;
  logistics_connection_distance?: float;
  logistics_radius: float;
  material_slots_count: ItemStackIndex;
  max_logistic_slots?: LogisticFilterIndex;
  open_door_trigger_effect?: TriggerEffect;
  radar_range?: uint32;
  radar_visualisation_color?: Color;
  recharge_minimum: Energy;
  recharging_animation?: Animation;
  recharging_light?: LightDefinition;
  request_to_open_door_timeout: uint32;
  robot_limit?: ItemCountType;
  robot_slots_count: ItemStackIndex;
  robot_vertical_acceleration?: float;
  robots_shrink_when_entering_and_exiting?: bool;
  spawn_and_station_height: float;
  spawn_and_station_shadow_height_offset?: float;
  stationing_offset?: Vector;
  stationing_render_layer_swap_height?: float;
}
export interface RobotWithLogisticInterfacePrototype
  extends FlyingRobotPrototype {
  charging_sound?: InterruptibleSound;
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
  arm_01_back_animation?: Animation;
  arm_02_right_animation?: Animation;
  arm_03_front_animation?: Animation;
  base_day_sprite?: Sprite;
  base_engine_light?: LightDefinition;
  base_front_frozen?: Sprite;
  base_front_sprite?: Sprite;
  base_frozen?: Sprite;
  base_light?: LightDefinition;
  base_night_sprite?: Sprite;
  cargo_station_parameters: CargoStationParameters;
  clamps_off_sound?: Sound;
  clamps_off_trigger?: TriggerEffect;
  clamps_on_sound?: Sound;
  clamps_on_trigger?: TriggerEffect;
  door_back_frozen?: Sprite;
  door_back_open_offset: Vector;
  door_back_sprite?: Sprite;
  door_front_frozen?: Sprite;
  door_front_open_offset: Vector;
  door_front_sprite?: Sprite;
  door_opening_speed: double;
  doors_sound?: Sound;
  doors_trigger?: TriggerEffect;
  hole_clipping_box: BoundingBox;
  hole_frozen?: Sprite;
  hole_light_sprite?: Sprite;
  hole_sprite?: Sprite;
  lamp_energy_usage: Energy;
  launch_to_space_platforms?: bool;
  launch_wait_time?: uint8;
  light_blinking_speed: double;
  logistic_trash_inventory_size?: ItemStackIndex;
  quick_alarm_sound?: Sound;
  raise_rocket_sound?: Sound;
  raise_rocket_trigger?: TriggerEffect;
  red_lights_back_sprites?: Sprite;
  red_lights_front_sprites?: Sprite;
  render_not_in_network_icon?: bool;
  rocket_entity: EntityID;
  rocket_glow_overlay_sprite?: Sprite;
  rocket_parts_required: uint32;
  rocket_parts_storage_cap?: uint32;
  rocket_quick_relaunch_start_offset: double;
  rocket_rising_delay?: uint8;
  rocket_shadow_overlay_sprite?: Sprite;
  rocket_supply_inventory_size?: ItemStackIndex;
  satellite_animation?: Animation;
  satellite_shadow_animation?: Animation;
  shadow_sprite?: Sprite;
  silo_fade_out_end_distance: double;
  silo_fade_out_start_distance: double;
  times_to_blink: uint8;
  to_be_inserted_to_rocket_inventory_size?: ItemStackIndex;
}
export interface RocketSiloRocketPrototype extends EntityPrototype {
  cargo_attachment_offset?: Vector;
  cargo_pod_entity: EntityID;
  dying_explosion?: EntityID;
  effects_fade_in_end_distance: double;
  effects_fade_in_start_distance: double;
  engine_starting_speed: double;
  flying_acceleration: double;
  flying_sound?: Sound;
  flying_speed: double;
  flying_trigger?: TriggerEffect;
  full_render_layer_switch_distance: double;
  glow_light?: LightDefinition;
  inventory_size: ItemStackIndex;
  rising_speed: double;
  rocket_above_wires_slice_offset_from_center?: float;
  rocket_air_object_slice_offset_from_center?: float;
  rocket_flame_animation?: Animation;
  rocket_flame_left_animation?: Animation;
  rocket_flame_left_rotation: float;
  rocket_flame_right_animation?: Animation;
  rocket_flame_right_rotation: float;
  rocket_fog_mask?: FogMaskShapeDefinition;
  rocket_glare_overlay_sprite?: Sprite;
  rocket_initial_offset?: Vector;
  rocket_launch_offset: Vector;
  rocket_render_layer_switch_distance: double;
  rocket_rise_offset: Vector;
  rocket_shadow_sprite?: Sprite;
  rocket_smoke_bottom1_animation?: Animation;
  rocket_smoke_bottom2_animation?: Animation;
  rocket_smoke_top1_animation?: Animation;
  rocket_smoke_top2_animation?: Animation;
  rocket_smoke_top3_animation?: Animation;
  rocket_sprite?: Sprite;
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
  color?: Color;
  connection_distance: double;
  default_copy_color_from_train_stop?: bool;
  door_closing_sound?: InterruptibleSound;
  door_opening_sound?: InterruptibleSound;
  drive_over_elevated_tie_trigger?: TriggerEffect;
  drive_over_tie_trigger?: TriggerEffect;
  drive_over_tie_trigger_minimal_speed?: double;
  elevated_collision_mask?: CollisionMaskConnector;
  elevated_rail_sound?: MainSound;
  elevated_selection_priority?: uint8;
  horizontal_doors?: Animation;
  joint_distance: double;
  max_speed: double;
  pictures?: RollingStockRotatedSlopedGraphics;
  stand_by_light?: LightDefinition;
  tie_distance?: double;
  transition_collision_mask?: CollisionMaskConnector;
  vertical_doors?: Animation;
  vertical_selection_shift: double;
  wheels?: RollingStockRotatedSlopedGraphics;
}
export interface SegmentPrototype extends EntityWithOwnerPrototype {
  animation: RotatedAnimation;
  backward_overlap?: uint8;
  backward_padding?: double;
  dying_sound?: Sound;
  dying_sound_volume_modifier?: float;
  forward_overlap?: uint8;
  forward_padding?: double;
  render_layer?: RenderLayer;
  update_effects?: TriggerEffectWithCooldown[];
  update_effects_while_enraged?: TriggerEffectWithCooldown[];
}
export interface SegmentedUnitPrototype extends SegmentPrototype {
  acceleration_rate: double;
  attack_parameters?: AttackParameters;
  attacking_speed: double;
  enraged_duration: uint32;
  enraged_speed: double;
  hurt_roar?: Sound;
  hurt_thresholds?: float[];
  investigating_speed: double;
  patrolling_speed: double;
  patrolling_turn_radius?: double;
  revenge_attack_parameters?: AttackParameters;
  roar?: Sound;
  roar_probability?: float;
  segment_engine: SegmentEngineSpecification;
  territory_radius: uint32;
  ticks_per_scan?: uint32;
  turn_radius: double;
  turn_smoothing?: double;
  vision_distance: double;
}
export interface SelectionToolPrototype extends ItemWithLabelPrototype {
  alt_reverse_select?: SelectionModeData;
  alt_select: SelectionModeData;
  always_include_tiles?: bool;
  mouse_cursor?: MouseCursorID;
  reverse_select?: SelectionModeData;
  select: SelectionModeData;
  skip_fog_of_war?: bool;
  super_forced_select?: SelectionModeData;
}
export interface SelectorCombinatorPrototype extends CombinatorPrototype {
  count_symbol_sprites?: Sprite4Way;
  max_symbol_sprites?: Sprite4Way;
  min_symbol_sprites?: Sprite4Way;
  quality_symbol_sprites?: Sprite4Way;
  random_symbol_sprites?: Sprite4Way;
  rocket_capacity_sprites?: Sprite4Way;
  stack_size_sprites?: Sprite4Way;
}
export interface ShootAchievementPrototype extends AchievementPrototype {
  ammo_type?: ItemID;
  amount?: uint32;
}
export interface ShortcutPrototype extends Prototype {
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
  icon?: FileName;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  item_to_spawn?: ItemID;
  order?: Order;
  small_icon?: FileName;
  small_icon_size?: SpriteSizeType;
  small_icons?: IconData[];
  style?: 'default' | 'blue' | 'red' | 'green';
  technology_to_unlock?: TechnologyID;
  toggleable?: bool;
  unavailable_until_unlocked?: bool;
}
export interface SimpleEntityPrototype extends EntityWithHealthPrototype {
  animations?: AnimationVariations;
  count_as_rock_for_filtered_deconstruction?: bool;
  lower_pictures?: SpriteVariations;
  lower_render_layer?: RenderLayer;
  picture?: Sprite4Way;
  pictures?: SpriteVariations;
  random_animation_offset?: bool;
  random_variation_on_create?: bool;
  render_layer?: RenderLayer;
  secondary_draw_order?: int8;
  stateless_visualisation_variations?: StatelessVisualisations[];
}
export interface SimpleEntityWithForcePrototype
  extends SimpleEntityWithOwnerPrototype {
  is_military_target?: bool;
}
export interface SimpleEntityWithOwnerPrototype
  extends EntityWithOwnerPrototype {
  animations?: AnimationVariations;
  force_visibility?: ForceCondition;
  lower_pictures?: SpriteVariations;
  lower_render_layer?: RenderLayer;
  picture?: Sprite4Way;
  pictures?: SpriteVariations;
  random_animation_offset?: bool;
  random_variation_on_create?: bool;
  render_layer?: RenderLayer;
  secondary_draw_order?: int8;
  stateless_visualisation_variations?: StatelessVisualisations[];
}
export interface SmokePrototype extends EntityPrototype {
  affected_by_wind?: bool;
  animation?: Animation;
  collision_box?: BoundingBox;
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
  attach_to_target?: bool;
  fade_when_attachment_is_destroyed?: bool;
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
  picture?: SpriteVariations;
  production: Energy;
}
export interface SoundPrototype {
  advanced_volume_control?: AdvancedVolumeControl;
  aggregation?: AggregationSpecification;
  allow_random_repeat?: bool;
  audible_distance_modifier?: double;
  category?: SoundType;
  filename?: FileName;
  game_controller_vibration_data?: GameControllerVibrationData;
  max_speed?: float;
  max_volume?: float;
  min_speed?: float;
  min_volume?: float;
  modifiers?: SoundModifier | SoundModifier[];
  name: string;
  preload?: bool;
  priority?: uint8;
  speed?: float;
  speed_smoothing_window_size?: uint32;
  type: 'sound';
  variations?: SoundDefinition | SoundDefinition[];
  volume?: float;
}
export interface SpaceConnectionDistanceTraveledAchievementPrototype
  extends AchievementPrototype {
  distance: uint32;
  reversed: bool;
  tracked_connection: SpaceConnectionID;
}
export interface SpaceConnectionPrototype extends Prototype {
  asteroid_spawn_definitions?: SpaceConnectionAsteroidSpawnDefinition[];
  from: SpaceLocationID;
  icon?: FileName;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  length?: uint32;
  to: SpaceLocationID;
}
export interface SpaceLocationPrototype extends Prototype {
  asteroid_spawn_definitions?: SpaceLocationAsteroidSpawnDefinition[];
  asteroid_spawn_influence?: double;
  auto_save_on_first_trip?: bool;
  distance: double;
  draw_orbit?: bool;
  fly_condition?: bool;
  gravity_pull: double;
  icon?: FileName;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  label_orientation?: RealOrientation;
  magnitude?: double;
  orientation: RealOrientation;
  parked_platforms_orientation?: RealOrientation;
  planet_procession_set?: ProcessionSet;
  platform_procession_set?: ProcessionSet;
  procession_audio_catalogue?: ProcessionAudioCatalogue;
  procession_graphic_catalogue?: ProcessionGraphicCatalogue;
  solar_power_in_space?: double;
  starmap_icon?: FileName;
  starmap_icon_size?: SpriteSizeType;
  starmap_icons?: IconData[];
}
export interface SpacePlatformHubPrototype extends EntityWithOwnerPrototype {
  build_grid_size?: 256;
  cargo_station_parameters: CargoStationParameters;
  circuit_connector?: CircuitConnectorDefinition;
  circuit_wire_max_distance?: double;
  default_damage_taken_signal?: SignalIDConnector;
  default_speed_signal?: SignalIDConnector;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  dump_container: EntityID;
  graphics_set?: CargoBayConnectableGraphicsSet;
  inventory_size: ItemStackIndex;
  persistent_ambient_sounds?: PersistentWorldAmbientSoundsDefinition;
  platform_repair_speed_modifier?: float;
  surface_render_parameters?: SurfaceRenderParameters;
  weight?: Weight;
}
export interface SpacePlatformStarterPackPrototype extends ItemPrototype {
  create_electric_network?: bool;
  initial_items?: ItemProductPrototype[];
  surface?: SurfaceID;
  tiles?: SpacePlatformTileDefinition[];
  trigger?: Trigger;
}
export interface SpectatorControllerPrototype {
  movement_speed: double;
  name: string;
  type: 'spectator-controller';
}
export interface SpeechBubblePrototype extends EntityPrototype {
  fade_in_out_ticks?: uint32;
  style: string;
  wrapper_flow_style?: string;
  y_offset?: double;
}
export interface SpiderLegPrototype extends EntityWithOwnerPrototype {
  ankle_height?: double;
  base_position_selection_distance: double;
  graphics_set?: SpiderLegGraphicsSet;
  hip_flexibility?: double;
  initial_movement_speed: double;
  knee_distance_factor: double;
  knee_height: double;
  lower_leg_dying_trigger_effects?: SpiderLegTriggerEffect[];
  minimal_step_size: double;
  movement_acceleration: double;
  movement_based_position_selection_distance: double;
  stretch_force_scalar?: double;
  target_position_randomisation_distance: double;
  upper_leg_dying_trigger_effects?: SpiderLegTriggerEffect[];
  walking_sound_speed_modifier?: float;
  walking_sound_volume_modifier?: float;
}
export interface SpiderUnitPrototype extends EntityWithOwnerPrototype {
  absorptions_to_join_attack?: Record<AirbornePollutantID, float>;
  ai_settings?: UnitAISettings;
  attack_parameters: AttackParameters;
  distraction_cooldown: uint32;
  dying_sound?: Sound;
  graphics_set?: SpiderTorsoGraphicsSet;
  height: float;
  max_pursue_distance?: double;
  min_pursue_time?: uint32;
  radar_range?: uint32;
  spawning_time_modifier?: double;
  spider_engine: SpiderEngineSpecification;
  torso_bob_speed?: float;
  torso_rotation_speed?: float;
  vision_distance: double;
  warcry?: Sound;
}
export interface SpiderVehiclePrototype extends VehiclePrototype {
  automatic_weapon_cycling: bool;
  chain_shooting_cooldown_modifier: float;
  energy_source: BurnerEnergySource | VoidEnergySource;
  graphics_set?: SpiderVehicleGraphicsSet;
  guns?: ItemID[];
  height: float;
  inventory_size: ItemStackIndex;
  movement_energy_consumption: Energy;
  spider_engine: SpiderEngineSpecification;
  torso_bob_speed?: float;
  torso_rotation_speed?: float;
  trash_inventory_size?: ItemStackIndex;
}
export interface SpidertronRemotePrototype extends SelectionToolPrototype {
  stack_size: 1;
}
export interface SplitterPrototype extends TransportBeltConnectablePrototype {
  frozen_patch?: Sprite4Way;
  related_transport_belt?: EntityID;
  structure?: Animation4Way;
  structure_animation_movement_cooldown?: uint32;
  structure_animation_speed_coefficient?: double;
  structure_patch?: Animation4Way;
}
export interface SpritePrototype {
  allow_forced_downscale?: bool;
  apply_runtime_tint?: bool;
  apply_special_effect?: bool;
  blend_mode?: BlendMode;
  dice?: SpriteSizeType;
  dice_x?: SpriteSizeType;
  dice_y?: SpriteSizeType;
  draw_as_glow?: bool;
  draw_as_light?: bool;
  draw_as_shadow?: bool;
  filename?: FileName;
  flags?: SpriteFlags;
  generate_sdf?: bool;
  height?: SpriteSizeType;
  invert_colors?: bool;
  layers?: Sprite[];
  load_in_minimal_mode?: bool;
  mipmap_count?: uint8;
  name: string;
  position?: [SpriteSizeType, SpriteSizeType];
  premul_alpha?: bool;
  priority?: SpritePriority;
  rotate_shift?: bool;
  scale?: double;
  shift?: Vector;
  size?: SpriteSizeType | [SpriteSizeType, SpriteSizeType];
  surface?: SpriteUsageSurfaceHint;
  tint?: Color;
  tint_as_overlay?: bool;
  type: 'sprite';
  usage?: SpriteUsageHint;
  width?: SpriteSizeType;
  x?: SpriteSizeType;
  y?: SpriteSizeType;
}
export interface StickerPrototype extends EntityPrototype {
  animation?: Animation;
  damage_interval?: uint32;
  damage_per_tick?: DamageParameters;
  duration_in_ticks: uint32;
  fire_spread_cooldown?: uint8;
  fire_spread_radius?: float;
  force_visibility?: ForceCondition;
  ground_target?: bool;
  hidden?: bool;
  hidden_in_factoriopedia?: bool;
  render_layer?: RenderLayer;
  selection_box_type?: CursorBoxType;
  single_particle?: bool;
  spread_fire_entity?: EntityID;
  stickers_per_square_meter?: float;
  target_movement_max?: float;
  target_movement_max_from?: float;
  target_movement_max_to?: float;
  target_movement_modifier?: float;
  target_movement_modifier_from?: float;
  target_movement_modifier_to?: float;
  update_effects?: TriggerEffectWithCooldown[];
  vehicle_friction_modifier?: float;
  vehicle_friction_modifier_from?: float;
  vehicle_friction_modifier_to?: float;
  vehicle_speed_max?: float;
  vehicle_speed_max_from?: float;
  vehicle_speed_max_to?: float;
  vehicle_speed_modifier?: float;
  vehicle_speed_modifier_from?: float;
  vehicle_speed_modifier_to?: float;
}
export interface StorageTankPrototype extends EntityWithOwnerPrototype {
  circuit_connector?: [
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
  ];
  circuit_wire_max_distance?: double;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  flow_length_in_ticks: uint32;
  fluid_box: FluidBox;
  pictures?: StorageTankPictures;
  show_fluid_icon?: bool;
  two_direction_only?: bool;
  window_bounding_box: BoundingBox;
}
export interface StraightRailPrototype extends RailPrototype {
  collision_box?: BoundingBox;
}
export interface SurfacePropertyPrototype extends Prototype {
  default_value: double;
  is_time?: bool;
  localised_unit_key?: string;
}
export interface SurfacePrototype extends Prototype {
  icon?: FileName;
  icon_size?: SpriteSizeType;
  surface_properties?: Record<SurfacePropertyID, double>;
}
export interface TechnologyPrototype extends Prototype {
  allows_productivity?: bool;
  effects?: Modifier[];
  enabled?: bool;
  essential?: bool;
  icon?: FileName;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  ignore_tech_cost_multiplier?: bool;
  max_level?: uint32 | 'infinite';
  name: string;
  prerequisites?: TechnologyID[];
  research_trigger?: TechnologyTrigger;
  unit?: TechnologyUnit;
  upgrade?: bool;
  visible_when_disabled?: bool;
}
export interface TemporaryContainerPrototype extends ContainerPrototype {
  alert_after_time?: uint32;
  destroy_on_empty?: bool;
  time_to_live?: uint32;
}
export interface ThrusterPrototype extends EntityWithOwnerPrototype {
  fuel_fluid_box: FluidBox;
  graphics_set?: ThrusterGraphicsSet;
  max_performance: ThrusterPerformancePoint;
  min_performance: ThrusterPerformancePoint;
  oxidizer_fluid_box: FluidBox;
  plumes?: PlumesSpecification;
}
export interface TileEffectDefinition {
  name: string;
  puddle?: PuddleTileEffectParameters;
  shader: 'water' | 'space' | 'puddle';
  space?: SpaceTileEffectParameters;
  type: 'tile-effect';
  water?: WaterTileEffectParameters;
}
export type TileGhostPrototype = EntityPrototype;
export interface TilePrototype extends Prototype {
  absorptions_per_second?: Record<AirbornePollutantID, double>;
  allowed_neighbors?: TileID[];
  allows_being_covered?: bool;
  ambient_sounds?: WorldAmbientSoundDefinition | WorldAmbientSoundDefinition[];
  ambient_sounds_group?: TileID;
  autoplace?: AutoplaceSpecification;
  bound_decoratives?: DecorativeID | DecorativeID[];
  build_animations?: Animation4Way;
  build_animations_background?: Animation4Way;
  build_sound?: Sound | TileBuildSound;
  built_animation_frame?: uint32;
  can_be_part_of_blueprint?: bool;
  check_collision_with_entities?: bool;
  collision_mask: CollisionMaskConnector;
  decorative_removal_probability?: float;
  default_cover_tile?: TileID;
  default_destroyed_dropped_item_trigger?: Trigger;
  destroys_dropped_items?: bool;
  driving_sound?: Sound;
  dying_explosion?: ExplosionDefinition | ExplosionDefinition[];
  effect?: TileEffectDefinitionID;
  effect_color?: Color;
  effect_color_secondary?: Color;
  effect_is_opaque?: bool;
  fluid?: FluidID;
  frozen_variant?: TileID;
  icon?: FileName;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  is_foundation?: bool;
  landing_steps_sound?: Sound;
  layer: uint8;
  layer_group?: TileRenderLayer;
  lowland_fog?: bool;
  map_color: Color;
  max_health?: float;
  minable?: MinableProperties;
  mined_sound?: Sound;
  needs_correction?: bool;
  next_direction?: TileID;
  particle_tints?: TileBasedParticleTints;
  placeable_by?: ItemToPlace | ItemToPlace[];
  scorch_mark_color?: Color;
  searchable?: bool;
  sprite_usage_surface?: SpriteUsageSurfaceHint;
  thawed_variant?: TileID;
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
  weight?: Weight;
}
export interface TipsAndTricksItem extends PrototypeBase {
  category?: string;
  dependencies?: string[];
  icon?: FileName;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
  image?: FileName;
  indent?: uint8;
  is_title?: bool;
  order?: Order;
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
  circuit_connector?: [
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
    CircuitConnectorDefinition,
  ];
  circuit_wire_max_distance?: double;
  color?: Color;
  default_priority_signal?: SignalIDConnector;
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
  collision_box?: BoundingBox;
  flags?: EntityPrototypeFlags;
  speed: double;
}
export interface TransportBeltPrototype
  extends Omit<
    TransportBeltConnectablePrototype,
    'animation_set' | 'belt_animation_set'
  > {
  belt_animation_set?: TransportBeltAnimationSetWithCorners;
  circuit_connector?: CircuitConnectorDefinition[];
  circuit_wire_max_distance?: double;
  connector_frame_sprites?: TransportBeltConnectorFrame;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  related_underground_belt?: EntityID;
}
export interface TreePrototype extends EntityWithHealthPrototype {
  colors?: Color[];
  darkness_of_burnt_tree?: float;
  healing_per_tick?: float;
  pictures?: SpriteVariations;
  stateless_visualisation_variations?: StatelessVisualisations[];
  variation_weights?: float[];
  variations?: TreeVariation[];
}
export interface TriggerTargetType {
  name: string;
  type: 'trigger-target-type';
}
export interface TrivialSmokePrototype extends Prototype {
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
  attacking_animation?: RotatedAnimation8Way;
  attacking_speed?: float;
  call_for_help_radius: double;
  can_retarget_while_starting_attack?: bool;
  circuit_connector?: CircuitConnectorDefinition[];
  circuit_wire_max_distance?: double;
  default_speed?: float;
  default_speed_secondary?: float;
  default_speed_when_killed?: float;
  default_starting_progress_when_killed?: float;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  dying_sound?: Sound;
  ending_attack_animation?: RotatedAnimation8Way;
  ending_attack_speed?: float;
  ending_attack_speed_secondary?: float;
  ending_attack_speed_when_killed?: float;
  ending_attack_starting_progress_when_killed?: float;
  energy_glow_animation?: RotatedAnimation8Way;
  energy_glow_animation_flicker_strength?: float;
  folded_animation: RotatedAnimation8Way;
  folded_animation_is_stateless?: bool;
  folded_speed?: float;
  folded_speed_secondary?: float;
  folded_speed_when_killed?: float;
  folded_starting_progress_when_killed?: float;
  folded_state_corpse?: EntityID | EntityID[];
  folding_animation?: RotatedAnimation8Way;
  folding_sound?: Sound;
  folding_speed?: float;
  folding_speed_secondary?: float;
  folding_speed_when_killed?: float;
  folding_starting_progress_when_killed?: float;
  glow_light_intensity?: float;
  graphics_set: TurretGraphicsSet;
  gun_animation_render_layer?: RenderLayer;
  gun_animation_secondary_draw_order?: uint8;
  ignore_target_mask?: TriggerTargetMask;
  integration?: Sprite;
  is_military_target?: bool;
  prepare_range?: double;
  prepared_alternative_animation?: RotatedAnimation8Way;
  prepared_alternative_chance?: float;
  prepared_alternative_sound?: Sound;
  prepared_alternative_speed?: float;
  prepared_alternative_speed_secondary?: float;
  prepared_alternative_speed_when_killed?: float;
  prepared_alternative_starting_progress_when_killed?: float;
  prepared_animation?: RotatedAnimation8Way;
  prepared_sound?: Sound;
  prepared_speed?: float;
  prepared_speed_secondary?: float;
  prepared_speed_when_killed?: float;
  prepared_starting_progress_when_killed?: float;
  preparing_animation?: RotatedAnimation8Way;
  preparing_sound?: Sound;
  preparing_speed?: float;
  preparing_speed_secondary?: float;
  preparing_speed_when_killed?: float;
  preparing_starting_progress_when_killed?: float;
  random_animation_offset?: bool;
  resource_indicator_animation?: RotatedAnimation8Way;
  rotating_sound?: InterruptibleSound;
  rotation_speed?: float;
  rotation_speed_secondary?: float;
  rotation_speed_when_killed?: float;
  rotation_starting_progress_when_killed?: float;
  shoot_in_prepare_state?: bool;
  spawn_decoration?: CreateDecorativesTriggerEffectItem[];
  spawn_decorations_on_expansion?: bool;
  special_effect?: TurretSpecialEffect;
  start_attacking_only_when_can_shoot?: bool;
  starting_attack_animation?: RotatedAnimation8Way;
  starting_attack_sound?: Sound;
  starting_attack_speed?: float;
  starting_attack_speed_secondary?: float;
  starting_attack_speed_when_killed?: float;
  starting_attack_starting_progress_when_killed?: float;
  turret_base_has_direction?: bool;
  unfolds_before_dying?: bool;
}
export interface TutorialDefinition extends PrototypeBase {
  order?: Order;
  scenario: string;
}
export interface UndergroundBeltPrototype
  extends TransportBeltConnectablePrototype {
  max_distance: uint8;
  max_distance_tint?: Color;
  max_distance_underground_remove_belts_sprite?: Sprite;
  structure?: UndergroundBeltStructure;
  underground_collision_mask?: CollisionMaskConnector;
  underground_remove_belts_sprite?: Sprite;
  underground_sprite?: Sprite;
}
export interface UnitPrototype extends EntityWithOwnerPrototype {
  absorptions_to_join_attack?: Record<AirbornePollutantID, float>;
  affected_by_tiles?: bool;
  ai_settings?: UnitAISettings;
  allow_run_time_change_of_is_military_target?: false;
  alternative_attacking_frame_sequence?: UnitAlternativeFrameSequence;
  attack_parameters: AttackParameters;
  can_open_gates?: bool;
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
  radar_range?: uint32;
  render_layer?: RenderLayer;
  rotation_speed?: float;
  run_animation: RotatedAnimation;
  running_sound_animation_positions?: float[];
  spawning_time_modifier?: double;
  vision_distance: double;
  walking_sound?: Sound;
  warcry?: Sound;
}
export interface UpgradeItemPrototype
  extends Omit<
    SelectionToolPrototype,
    'selection_mode' | 'alt_selection_mode'
  > {
  alt_select: SelectionModeData;
  always_include_tiles?: bool;
  draw_label_for_cursor_render?: bool;
  select: SelectionModeData;
  stack_size: 1;
}
export interface UseEntityInEnergyProductionAchievementPrototype
  extends AchievementPrototype {
  consumed_condition?: ItemIDFilter;
  entity: EntityID;
  produced_condition?: ItemIDFilter;
  required_to_build?: EntityID;
}
export interface UseItemAchievementPrototype extends AchievementPrototype {
  amount?: uint32;
  limit_quality: QualityID;
  limited_to_one_game?: bool;
  to_use: ItemID;
}
export interface UtilityConstants extends PrototypeBase {
  agricultural_range_visualization_color: Color;
  artillery_range_visualization_color: Color;
  asteroid_collector_blockage_update_tile_distance: uint32;
  asteroid_collector_max_nurbs_control_point_separation: double;
  asteroid_collector_navmesh_refresh_tick_interval: uint32;
  asteroid_collector_static_head_swing_segment_count: uint32;
  asteroid_collector_static_head_swing_strength_scale: double;
  asteroid_fading_range: float;
  asteroid_position_offset_to_speed_coefficient: double;
  asteroid_spawning_offset: SimpleBoundingBox;
  asteroid_spawning_with_random_orientation_max_speed: double;
  bonus_gui_ordering: BonusGuiOrdering;
  building_buildable_tint: Color;
  building_buildable_too_far_tint: Color;
  building_collision_mask: CollisionMaskConnector;
  building_ignorable_tint: Color;
  building_no_tint: Color;
  building_not_buildable_tint: Color;
  capsule_range_visualization_color: Color;
  chart: ChartUtilityConstants;
  chart_search_highlight: Color;
  checkerboard_black: Color;
  checkerboard_white: Color;
  clear_cursor_volume_modifier: float;
  clipboard_history_size: uint32;
  color_filters?: ColorFilterData[];
  count_button_size: int32;
  daytime_color_lookup: DaytimeColorLookupTable;
  deconstruct_mark_tint: Color;
  default_alert_icon_scale: float;
  default_alert_icon_scale_by_type?: Record<string, float>;
  default_alert_icon_shift_by_type?: Record<string, Vector>;
  default_collision_masks: Record<string, CollisionMaskConnector>;
  default_enemy_force_color: Color;
  default_item_weight: Weight;
  default_other_force_color: Color;
  default_pipeline_extent: double;
  default_planet_procession_set: ProcessionSet;
  default_platform_procession_set: ProcessionSet;
  default_player_force_color: Color;
  default_scorch_mark_color: Color;
  default_trigger_target_mask_by_type?: Record<string, TriggerTargetMask>;
  disabled_recipe_slot_background_tint: Color;
  disabled_recipe_slot_tint: Color;
  drop_item_radius: float;
  dynamic_recipe_overload_factor: double;
  ejected_item_direction_variation: double;
  ejected_item_friction: double;
  ejected_item_lifetime: MapTick;
  ejected_item_speed: double;
  enabled_recipe_slot_tint: Color;
  enemies_in_simulation_volume_modifier: float;
  entity_button_background_color: Color;
  entity_renderer_search_box_limits: EntityRendererSearchBoxLimits;
  environment_sounds_transition_fade_in_ticks: uint32;
  equipment_default_background_border_color: Color;
  equipment_default_background_color: Color;
  equipment_default_grabbed_background_color: Color;
  explosions_in_simulation_volume_modifier: float;
  filter_outline_color: Color;
  flying_text_ttl: uint32;
  forced_enabled_recipe_slot_background_tint: Color;
  freezing_temperature: double;
  frozen_color_lookup: ColorLookupTable;
  ghost_layer: CollisionLayerID;
  ghost_shader_tint: GhostTintSet;
  ghost_shaderless_tint: GhostTintSet;
  ghost_shimmer_settings: GhostShimmerConfig;
  gui_remark_color: Color;
  gui_search_match_background_color: Color;
  gui_search_match_foreground_color: Color;
  icon_shadow_color: Color;
  icon_shadow_inset: float;
  icon_shadow_radius: float;
  icon_shadow_sharpness: float;
  inserter_hand_stack_items_per_sprite: ItemCountType;
  inserter_hand_stack_max_sprites: ItemCountType;
  inventory_width: uint32;
  item_ammo_magazine_left_bar_color: Color;
  item_default_random_tint_strength: Color;
  item_health_bar_colors: ItemHealthColorData[];
  item_outline_color: Color;
  item_outline_inset: float;
  item_outline_radius: float;
  item_outline_sharpness: float;
  item_tool_durability_bar_color: Color;
  landing_area_clear_zone_radius: float;
  landing_area_max_radius: float;
  large_area_size: float;
  large_blueprint_area_size: float;
  light_renderer_search_distance_limit: uint8;
  lightning_attractor_collection_range_color: Color;
  lightning_attractor_protection_range_color: Color;
  logistic_gui_selected_network_highlight_tint: Color;
  logistic_gui_unselected_network_highlight_tint: Color;
  low_energy_robot_estimate_multiplier: double;
  main_menu_background_image_location: FileName;
  main_menu_background_vignette_intensity: float;
  main_menu_background_vignette_sharpness: float;
  main_menu_simulations?: Record<string, SimulationDefinition>;
  manual_rail_building_reach_modifier: double;
  map_editor: MapEditorConstants;
  max_belt_stack_size: uint8;
  max_fluid_flow: FluidAmount;
  max_logistic_filter_count: LogisticFilterIndex;
  max_terrain_building_size: uint8;
  maximum_recipe_overload_multiplier: uint32;
  medium_area_size: float;
  medium_blueprint_area_size: float;
  minimap_slot_clicked_tint: Color;
  minimap_slot_hovered_tint: Color;
  minimum_recipe_overload_multiplier: uint32;
  missing_preview_sprite_location: FileName;
  module_inventory_width: uint32;
  moving_sound_count_reduction_rate: float;
  player_colors: PlayerColorData[];
  probability_product_count_tint: Color;
  rail_planner_count_button_color: Color;
  rail_segment_colors: Color[];
  recipe_step_limit: uint32;
  remote_view_LPF_max_cutoff_frequency: float;
  remote_view_LPF_min_cutoff_frequency: float;
  rocket_lift_weight: Weight;
  script_command_console_chat_color: Color;
  select_group_row_count: uint8;
  select_slot_row_count: uint8;
  selected_chart_search_highlight: Color;
  server_command_console_chat_color: Color;
  show_chunk_components_collision_mask: CollisionMaskConnector;
  small_area_size: float;
  small_blueprint_area_size: float;
  space_platform_default_speed_formula: MathExpression;
  space_platform_dump_cooldown: uint32;
  space_platform_max_size: SimpleBoundingBox;
  space_platform_relative_speed_factor: double;
  space_platform_starfield_movement_vector: Vector;
  spawner_evolution_factor_health_modifier: float;
  time_to_show_full_health_bar: MapTick;
  tooltip_monitor_edge_border: int32;
  train_inactivity_wait_condition_default: uint32;
  train_on_elevated_rail_shadow_shift_multiplier: Vector;
  train_path_finding: TrainPathFinderConstants;
  train_pushed_by_player_ignores_friction: bool;
  train_pushed_by_player_max_acceleration: double;
  train_pushed_by_player_max_speed: double;
  train_temporary_stop_wait_time: uint32;
  train_time_wait_condition_default: uint32;
  train_visualization: TrainVisualizationConstants;
  tree_leaf_distortion_distortion_far: Vector;
  tree_leaf_distortion_distortion_near: Vector;
  tree_leaf_distortion_speed_far: Vector;
  tree_leaf_distortion_speed_near: Vector;
  tree_leaf_distortion_strength_far: Vector;
  tree_leaf_distortion_strength_near: Vector;
  tree_shadow_roughness: float;
  tree_shadow_speed: float;
  turret_range_visualization_color: Color;
  underground_belt_max_distance_tint: Color;
  underground_pipe_max_distance_tint: Color;
  unit_group_max_pursue_distance: double;
  unit_group_pathfind_resolution: int8;
  walking_sound_count_reduction_rate: float;
  water_collision_mask: CollisionMaskConnector;
  weapons_in_simulation_volume_modifier: float;
  zero_count_value_tint: Color;
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
  axe_mining_stone: Sound;
  build_animated_huge: Sound;
  build_animated_large: Sound;
  build_animated_medium: Sound;
  build_animated_small: Sound;
  build_blueprint_huge: Sound;
  build_blueprint_large: Sound;
  build_blueprint_medium: Sound;
  build_blueprint_small: Sound;
  build_ghost_upgrade: Sound;
  build_ghost_upgrade_cancel: Sound;
  build_huge: Sound;
  build_large: Sound;
  build_medium: Sound;
  build_small: Sound;
  cannot_build: Sound;
  clear_cursor: Sound;
  confirm: Sound;
  console_message: Sound;
  crafting_finished: Sound;
  deconstruct_huge: Sound;
  deconstruct_large: Sound;
  deconstruct_medium: Sound;
  deconstruct_robot: Sound;
  deconstruct_small: Sound;
  default_driving_sound: InterruptibleSound;
  default_landing_steps: Sound;
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
  rotated_huge: Sound;
  rotated_large: Sound;
  rotated_medium: Sound;
  rotated_small: Sound;
  scenario_message: Sound;
  segment_dying_sound?: Sound;
  smart_pipette: Sound;
  switch_gun: Sound;
  tutorial_notice: Sound;
  undo: Sound;
  wire_connect_pole: Sound;
  wire_disconnect: Sound;
  wire_pickup: Sound;
}
export interface UtilitySprites extends PrototypeBase {
  achievement_label: Sprite;
  achievement_label_completed: Sprite;
  achievement_label_failed: Sprite;
  achievement_warning: Sprite;
  add: Sprite;
  add_white: Sprite;
  alert_arrow: Sprite;
  ammo_damage_modifier_constant?: Sprite;
  ammo_damage_modifier_icon: Sprite;
  ammo_icon: Sprite;
  and_or: Sprite;
  any_quality: Sprite;
  area_icon: Sprite;
  arrow_button: Animation;
  artillery_range_modifier_constant?: Sprite;
  artillery_range_modifier_icon: Sprite;
  asteroid_chunk_editor_icon: Sprite;
  asteroid_collector_path_blocked_icon: Sprite;
  backward_arrow: Sprite;
  backward_arrow_black: Sprite;
  bar_gray_pip: Sprite;
  battery: Sprite;
  beacon_distribution_modifier_constant?: Sprite;
  beacon_distribution_modifier_icon: Sprite;
  belt_stack_size_bonus_modifier_constant?: Sprite;
  belt_stack_size_bonus_modifier_icon: Sprite;
  bookmark: Sprite;
  brush_circle_shape: Sprite;
  brush_icon: Sprite;
  brush_square_shape: Sprite;
  buildability_collision: Sprite;
  buildability_collision_elevated: Sprite;
  buildability_elevated_collision_bottom: Sprite;
  buildability_elevated_collision_line: Sprite;
  buildability_elevated_collision_top: Sprite;
  bulk_inserter_capacity_bonus_modifier_constant?: Sprite;
  bulk_inserter_capacity_bonus_modifier_icon: Sprite;
  cable_editor_icon: Sprite;
  cargo_bay_not_connected_icon: Sprite;
  cargo_landing_pad_count_modifier_constant?: Sprite;
  cargo_landing_pad_count_modifier_icon: Sprite;
  center: Sprite;
  change_recipe: Sprite;
  change_recipe_productivity_modifier_constant?: Sprite;
  change_recipe_productivity_modifier_icon: Sprite;
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
  circuit_network_panel: Sprite;
  cliff_deconstruction_enabled_modifier_constant?: Sprite;
  cliff_deconstruction_enabled_modifier_icon: Sprite;
  cliff_editor_icon: Sprite;
  clock: Sprite;
  clone: Sprite;
  clone_editor_icon: Sprite;
  close: Sprite;
  close_black: Sprite;
  close_fat: Sprite;
  close_map_preview: Sprite;
  clouds: Animation;
  collapse: Sprite;
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
  copper_wire_highlight: Sprite;
  copy: Sprite;
  covered_chunk: Sprite;
  crafting_machine_recipe_not_unlocked: Sprite;
  create_ghost_on_entity_death_modifier_constant?: Sprite;
  create_ghost_on_entity_death_modifier_icon: Sprite;
  cross_select: Sprite;
  crosshair: Sprite;
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
  destination_full_icon: Sprite;
  destroyed_icon: Sprite;
  down_arrow: Sprite;
  downloaded: Sprite;
  downloading: Sprite;
  dropdown: Sprite;
  editor_pause: Sprite;
  editor_play: Sprite;
  editor_selection: Sprite;
  editor_speed_down: Sprite;
  editor_speed_up: Sprite;
  electricity_icon: Sprite;
  electricity_icon_unplugged: Sprite;
  empty_ammo_slot: Sprite;
  empty_armor_slot: Sprite;
  empty_drop_cargo_slot: Sprite;
  empty_gun_slot: Sprite;
  empty_inserter_hand_slot: Sprite;
  empty_module_slot: Sprite;
  empty_robot_material_slot: Sprite;
  empty_robot_slot: Sprite;
  empty_trash_slot: Sprite;
  enemy_force_icon: Sprite;
  enter: Sprite;
  entity_editor_icon: Sprite;
  entity_info_dark_background: Sprite;
  equipment_collision: Sprite;
  equipment_grid: Sprite;
  equipment_slot: Sprite;
  expand: Sprite;
  expand_dots: Sprite;
  explosion_chart_visualization: Animation;
  export: Sprite;
  export_slot: Sprite;
  feedback: Sprite;
  filter_blacklist: Sprite;
  fluid_icon: Sprite;
  fluid_indication_arrow: Sprite;
  fluid_indication_arrow_both_ways: Sprite;
  fluid_visualization_connection: Sprite;
  fluid_visualization_connection_both_ways: Sprite;
  fluid_visualization_connection_underground: Sprite;
  fluid_visualization_extent_arrow: Sprite;
  follower_robot_lifetime_modifier_constant?: Sprite;
  follower_robot_lifetime_modifier_icon: Sprite;
  force_editor_icon: Sprite;
  force_ghost_cursor: Sprite;
  force_tile_ghost_cursor: Sprite;
  forward_arrow: Sprite;
  forward_arrow_black: Sprite;
  frozen_icon: Sprite;
  fuel_icon: Sprite;
  game_stopped_visualization: Sprite;
  ghost_bar_pip: Sprite;
  ghost_cursor: Sprite;
  give_item_modifier_constant?: Sprite;
  give_item_modifier_icon: Sprite;
  go_to_arrow: Sprite;
  gps_map_icon: Sprite;
  gradient: Sprite;
  green_circle: Sprite;
  green_dot: Sprite;
  green_wire: Sprite;
  green_wire_highlight: Sprite;
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
  item_to_be_delivered_symbol: Sprite;
  laboratory_productivity_modifier_constant?: Sprite;
  laboratory_productivity_modifier_icon: Sprite;
  laboratory_speed_modifier_constant?: Sprite;
  laboratory_speed_modifier_icon: Sprite;
  left_arrow: Sprite;
  light_cone: Sprite;
  light_medium: Sprite;
  light_small: Sprite;
  lightning_warning_icon: Sprite;
  line_icon: Sprite;
  list_view: Sprite;
  logistic_network_panel_black: Sprite;
  logistic_network_panel_white: Sprite;
  logistic_radius_visualization: Sprite;
  lua_snippet_tool_icon: Sprite;
  map: Sprite;
  map_exchange_string: Sprite;
  max_distance_underground_remove_belts: Sprite;
  max_failed_attempts_per_tick_per_construction_queue_modifier_constant?: Sprite;
  max_failed_attempts_per_tick_per_construction_queue_modifier_icon: Sprite;
  max_successful_attempts_per_tick_per_construction_queue_modifier_constant?: Sprite;
  max_successful_attempts_per_tick_per_construction_queue_modifier_icon: Sprite;
  maximum_following_robots_count_modifier_constant?: Sprite;
  maximum_following_robots_count_modifier_icon: Sprite;
  medium_gui_arrow: Sprite;
  mining_drill_productivity_bonus_modifier_constant?: Sprite;
  mining_drill_productivity_bonus_modifier_icon: Sprite;
  mining_with_fluid_modifier_constant?: Sprite;
  mining_with_fluid_modifier_icon: Sprite;
  missing_icon: Sprite;
  missing_mod_icon: Sprite;
  mod_category: Sprite;
  mod_dependency_arrow: Sprite;
  mod_downloads_count: Sprite;
  mod_last_updated: Sprite;
  mouse_cursor: Sprite;
  mouse_cursor_macos: Sprite;
  move_tag: Sprite;
  multiplayer_waiting_icon: Sprite;
  nature_icon: Sprite;
  navmesh_pending_icon: Animation;
  neutral_force_icon: Sprite;
  no_building_material_icon: Sprite;
  no_nature_icon: Sprite;
  no_path_icon: Sprite;
  no_platform_storage_space_icon: Sprite;
  no_roboport_storage_space_icon: Sprite;
  no_storage_space_icon: Sprite;
  none_editor_icon: Sprite;
  not_available: Sprite;
  not_available_black: Sprite;
  not_enough_construction_robots_icon: Sprite;
  not_enough_repair_packs_icon: Sprite;
  not_played_yet_dark_green: Sprite;
  not_played_yet_green: Sprite;
  nothing_modifier_constant?: Sprite;
  nothing_modifier_icon: Sprite;
  notification: Sprite;
  output_console_gradient: Sprite;
  paint_bucket_icon: Sprite;
  parametrise: Sprite;
  pause: Sprite;
  pin_arrow: Sprite;
  pin_center: Sprite;
  pipeline_disabled_icon: Sprite;
  placement_indicator_leg: Sprite;
  platform_entity_build_animations?: EntityBuildAnimations;
  play: Sprite;
  played_dark_green: Sprite;
  played_green: Sprite;
  player_force_icon: Sprite;
  preset: Sprite;
  pump_cannot_connect_icon: Sprite;
  questionmark: Sprite;
  rail_path_not_possible: Sprite;
  rail_planner_allow_elevated_rails_modifier_constant?: Sprite;
  rail_planner_allow_elevated_rails_modifier_icon: Sprite;
  rail_planner_indication_arrow: Sprite;
  rail_planner_indication_arrow_anchored: Sprite;
  rail_planner_indication_arrow_too_far: Sprite;
  rail_signal_placement_indicator: Sprite;
  rail_support_on_deep_oil_ocean_modifier_constant?: Sprite;
  rail_support_on_deep_oil_ocean_modifier_icon: Sprite;
  rail_support_placement_indicator: Sprite;
  reassign: Sprite;
  rebuild_mark: Sprite;
  recharge_icon: Sprite;
  recipe_arrow: Sprite;
  red_wire: Sprite;
  red_wire_highlight: Sprite;
  reference_point: Sprite;
  refresh: Sprite;
  refresh_white: Animation;
  rename_icon: Sprite;
  reset: Sprite;
  reset_white: Sprite;
  resource_editor_icon: Sprite;
  resources_depleted_icon: Sprite;
  right_arrow: Sprite;
  robot_slot: Sprite;
  scripting_editor_icon: Sprite;
  search: Sprite;
  search_icon: Sprite;
  select_icon_black: Sprite;
  select_icon_white: Sprite;
  set_bar_slot: Sprite;
  shield_bar_pip: Sprite;
  shoot_cursor_green: Sprite;
  shoot_cursor_red: Sprite;
  short_indication_line: Sprite;
  short_indication_line_green: Sprite;
  show_electric_network_in_map_view: Sprite;
  show_logistics_network_in_map_view: Sprite;
  show_pipelines_in_map_view: Sprite;
  show_player_names_in_map_view: Sprite;
  show_rail_signal_states_in_map_view: Sprite;
  show_recipe_icons_in_map_view: Sprite;
  show_tags_in_map_view: Sprite;
  show_train_station_names_in_map_view: Sprite;
  show_turret_range_in_map_view: Sprite;
  show_worker_robots_in_map_view: Sprite;
  shuffle: Sprite;
  side_menu_achievements_icon: Sprite;
  side_menu_blueprint_library_icon: Sprite;
  side_menu_bonus_icon: Sprite;
  side_menu_factoriopedia_icon: Sprite;
  side_menu_logistic_networks_icon: Sprite;
  side_menu_map_icon: Sprite;
  side_menu_menu_icon: Sprite;
  side_menu_players_icon: Sprite;
  side_menu_production_icon: Sprite;
  side_menu_space_platforms_icon: Sprite;
  side_menu_technology_icon: Sprite;
  side_menu_train_icon: Sprite;
  side_menu_tutorials_icon: Sprite;
  slot: Sprite;
  slots_view: Sprite;
  small_gui_arrow: Sprite;
  sort_by_name: Sprite;
  sort_by_time: Sprite;
  space_age_icon: Sprite;
  spawn_flag: Sprite;
  speed_down: Sprite;
  speed_up: Sprite;
  spray_icon: Sprite;
  starmap_platform_moving: Sprite;
  starmap_platform_moving_clicked: Sprite;
  starmap_platform_moving_hovered: Sprite;
  starmap_platform_stacked: Sprite;
  starmap_platform_stacked_clicked: Sprite;
  starmap_platform_stacked_hovered: Sprite;
  starmap_platform_stopped: Sprite;
  starmap_platform_stopped_clicked: Sprite;
  starmap_platform_stopped_hovered: Sprite;
  starmap_star: Sprite;
  station_name: Sprite;
  status_blue: Sprite;
  status_inactive: Sprite;
  status_not_working: Sprite;
  status_working: Sprite;
  status_yellow: Sprite;
  stop: Sprite;
  surface_editor_icon: Sprite;
  sync_mods: Sprite;
  technology_white: Sprite;
  tick_custom: Sprite;
  tick_once: Sprite;
  tick_sixty: Sprite;
  tile_editor_icon: Sprite;
  tile_ghost_cursor: Sprite;
  time_editor_icon: Sprite;
  tip_icon: Sprite;
  too_far: Sprite;
  too_far_from_roboport_icon: Sprite;
  tooltip_category_spoilable: Sprite;
  track_button: Sprite;
  track_button_white: Sprite;
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
  unclaimed_cargo_icon: Sprite;
  underground_pipe_connection: Sprite;
  underground_remove_belts: Sprite;
  underground_remove_pipes: Sprite;
  unlock_circuit_network_modifier_constant?: Sprite;
  unlock_circuit_network_modifier_icon: Sprite;
  unlock_quality_modifier_constant?: Sprite;
  unlock_quality_modifier_icon: Sprite;
  unlock_recipe_modifier_constant?: Sprite;
  unlock_recipe_modifier_icon: Sprite;
  unlock_space_location_modifier_constant?: Sprite;
  unlock_space_location_modifier_icon: Sprite;
  unlock_space_platforms_modifier_constant?: Sprite;
  unlock_space_platforms_modifier_icon: Sprite;
  upgrade_blueprint: Sprite;
  upgrade_mark: Sprite;
  variations_tool_icon: Sprite;
  vehicle_logistics_modifier_constant?: Sprite;
  vehicle_logistics_modifier_icon: Sprite;
  warning: Sprite;
  warning_icon: Sprite;
  warning_white: Sprite;
  white_mask: Sprite;
  white_square: Sprite;
  white_square_icon: Sprite;
  wire_shadow: Sprite;
  worker_robot_battery_modifier_constant?: Sprite;
  worker_robot_battery_modifier_icon: Sprite;
  worker_robot_speed_modifier_constant?: Sprite;
  worker_robot_speed_modifier_icon: Sprite;
  worker_robot_storage_modifier_constant?: Sprite;
  worker_robot_storage_modifier_icon: Sprite;
}
export interface VehiclePrototype extends EntityWithOwnerPrototype {
  allow_passengers?: bool;
  allow_remote_driving?: bool;
  braking_power: Energy | double;
  chunk_exploration_radius?: uint32;
  crash_trigger?: TriggerEffect;
  deliver_category?: string;
  energy_per_hit_point: double;
  equipment_grid?: EquipmentGridID;
  friction: double;
  impact_speed_to_volume_ratio?: double;
  minimap_representation?: Sprite;
  selected_minimap_representation?: Sprite;
  stop_trigger?: TriggerEffect;
  stop_trigger_speed?: double;
  terrain_friction_modifier?: float;
  weight: double;
}
export interface VirtualSignalPrototype extends Prototype {
  icon?: FileName;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
}
export interface WallPrototype extends EntityWithOwnerPrototype {
  circuit_connector?: CircuitConnectorDefinition;
  circuit_wire_max_distance?: double;
  connected_gate_visualization?: Sprite;
  default_output_signal?: SignalIDConnector;
  draw_circuit_wires?: bool;
  draw_copper_wires?: bool;
  pictures?: WallPictures;
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
export type ActivateEquipmentCapsuleAction = {
  equipment: EquipmentID;
  type: 'equipment-remote';
};
export type ActivateImpactTriggerEffectItem = TriggerEffectItem & {
  deliver_category?: string;
  type: 'activate-impact';
};
export type ActivatePasteTipTrigger = CountBasedTipTrigger & {
  type: 'activate-paste';
};
export type ActiveTriggerID = string;
export type ActivityBarStyleSpecification = BaseStyleSpecification & {
  bar?: ElementImageSet;
  bar_background?: ElementImageSet;
  bar_size_ratio?: float;
  bar_width?: uint32;
  color?: Color;
  speed?: float;
  type: 'activity_bar_style';
};
export type ActivityMatchingModifiers = {
  inverted?: bool;
  maximum?: float;
  minimum?: float;
  multiplier?: float;
  offset?: float;
};
export type AdvancedMapGenSettings = {
  asteroids?: MapGenPresetAsteroidSettings;
  difficulty_settings?: MapGenPresetDifficultySettings;
  enemy_evolution?: MapGenPresetEnemyEvolutionSettings;
  enemy_expansion?: MapGenPresetEnemyExpansionSettings;
  pollution?: MapGenPresetPollutionSettings;
};
export type AdvancedVolumeControl = {
  attenuation?: Fade;
  darkness_threshold?: float;
  fades?: Fades;
};
export type AggregationSpecification = {
  count_already_playing?: bool;
  max_count: uint32;
  priority?: 'closest' | 'farthest' | 'newest' | 'oldest';
  progress_threshold?: float;
  remove: bool;
  volume_reduction_rate?: float;
};
export type AgriculturalCraneProperties = {
  min_arm_extent?: double;
  min_grappler_extent?: double;
  operation_angle?: float;
  origin: Vector3D;
  parts: CranePart[];
  shadow_direction: Vector3D;
  speed: AgriculturalCraneSpeed;
  telescope_default_extention?: double;
};
export type AgriculturalCraneSpeed = {
  arm: AgriculturalCraneSpeedArm;
  grappler: AgriculturalCraneSpeedGrappler;
};
export type AgriculturalCraneSpeedArm = {
  extension_speed?: double;
  turn_rate?: double;
};
export type AgriculturalCraneSpeedGrappler = {
  allow_transpolar_movement?: bool;
  extension_speed?: double;
  horizontal_turn_rate?: double;
  vertical_turn_rate?: double;
};
export type AirbornePollutantID = string;
export type AlternativeBuildTipTrigger = CountBasedTipTrigger & {
  type: 'alternative-build';
};
export type AmbientSoundType =
  | 'menu-track'
  | 'main-track'
  | 'hero-track'
  | 'interlude';
export type AmmoCategoryID = string;
export type AmmoDamageModifier = BaseModifier & {
  ammo_category: AmmoCategoryID;
  infer_icon?: bool;
  modifier: double;
  type: 'ammo-damage';
  use_icon_overlay_constant?: bool;
};
export type AmmoSourceType = 'default' | 'player' | 'turret' | 'vehicle';
export type AmmoType = {
  action?: Trigger;
  clamp_position?: bool;
  consumption_modifier?: float;
  cooldown_modifier?: double;
  energy_consumption?: Energy;
  range_modifier?: double;
  source_type?: AmmoSourceType;
  target_filter?: EntityID[];
  target_type?: 'entity' | 'position' | 'direction';
};
export type AndTipTrigger = { triggers: TipTrigger[]; type: 'and' };
export type AnimatedVector = {
  direction_shift?: DirectionShift;
  render_layer?: RenderLayer;
  rotations: VectorRotation[];
};
export type Animation = AnimationParameters & {
  filename?: FileName;
  filenames?: FileName[];
  layers?: Animation[];
  lines_per_file?: uint32;
  slice?: uint32;
  stripes?: Stripe[];
};
export type Animation4Way =
  | {
      east?: Animation;
      north: Animation;
      north_east?: Animation;
      north_west?: Animation;
      south?: Animation;
      south_east?: Animation;
      south_west?: Animation;
      west?: Animation;
    }
  | Animation;
export type AnimationElement = {
  always_draw?: bool;
  animation?: Animation;
  apply_tint?: bool;
  render_layer?: RenderLayer;
  secondary_draw_order?: int8;
};
export type AnimationFrameSequence = uint16[];
export type AnimationParameters = SpriteParameters & {
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
  run_mode?: AnimationRunMode;
  size?: SpriteSizeType | [SpriteSizeType, SpriteSizeType];
  width?: SpriteSizeType;
};
export type AnimationRunMode = 'forward' | 'backward' | 'forward-then-backward';
export type AnimationSheet = AnimationParameters & {
  filename?: FileName;
  filenames?: FileName[];
  line_length?: uint32;
  lines_per_file?: uint32;
  variation_count: uint32;
};
export type AnimationVariations =
  | { sheet?: AnimationSheet; sheets?: AnimationSheet[] }
  | Animation
  | Animation[];
export type AnyPrototype =
  | AccumulatorPrototype
  | AchievementPrototype
  | AchievementPrototypeWithCondition
  | ActiveDefenseEquipmentPrototype
  | ActiveTriggerPrototype
  | AgriculturalTowerPrototype
  | AirbornePollutantPrototype
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
  | AsteroidChunkPrototype
  | AsteroidCollectorPrototype
  | AsteroidPrototype
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
  | BurnerUsagePrototype
  | CapsulePrototype
  | CaptureRobotPrototype
  | CarPrototype
  | CargoBayPrototype
  | CargoLandingPadPrototype
  | CargoPodPrototype
  | CargoWagonPrototype
  | ChainActiveTriggerPrototype
  | ChangedSurfaceAchievementPrototype
  | CharacterCorpsePrototype
  | CharacterPrototype
  | CliffPrototype
  | CollisionLayerPrototype
  | CombatRobotCountAchievementPrototype
  | CombatRobotPrototype
  | CombinatorPrototype
  | CompleteObjectiveAchievementPrototype
  | ConstantCombinatorPrototype
  | ConstructWithRobotsAchievementPrototype
  | ConstructionRobotPrototype
  | ContainerPrototype
  | CopyPasteToolPrototype
  | CorpsePrototype
  | CraftingMachinePrototype
  | CreatePlatformAchievementPrototype
  | CurvedRailAPrototype
  | CurvedRailBPrototype
  | CustomEventPrototype
  | CustomInputPrototype
  | DamageType
  | DeciderCombinatorPrototype
  | DeconstructWithRobotsAchievementPrototype
  | DeconstructibleTileProxyPrototype
  | DeconstructionItemPrototype
  | DecorativePrototype
  | DelayedActiveTriggerPrototype
  | DeliverByRobotsAchievementPrototype
  | DeliverCategory
  | DeliverImpactCombination
  | DepleteResourceAchievementPrototype
  | DestroyCliffAchievementPrototype
  | DisplayPanelPrototype
  | DontBuildEntityAchievementPrototype
  | DontCraftManuallyAchievementPrototype
  | DontKillManuallyAchievementPrototype
  | DontResearchBeforeResearchingAchievementPrototype
  | DontUseEntityInEnergyProductionAchievementPrototype
  | EditorControllerPrototype
  | ElectricEnergyInterfacePrototype
  | ElectricPolePrototype
  | ElectricTurretPrototype
  | ElevatedCurvedRailAPrototype
  | ElevatedCurvedRailBPrototype
  | ElevatedHalfDiagonalRailPrototype
  | ElevatedStraightRailPrototype
  | EnemySpawnerPrototype
  | EnergyShieldEquipmentPrototype
  | EntityGhostPrototype
  | EntityPrototype
  | EntityWithHealthPrototype
  | EntityWithOwnerPrototype
  | EquipArmorAchievementPrototype
  | EquipmentCategory
  | EquipmentGhostPrototype
  | EquipmentGridPrototype
  | EquipmentPrototype
  | ExplosionPrototype
  | FireFlamePrototype
  | FishPrototype
  | FluidPrototype
  | FluidStreamPrototype
  | FluidTurretPrototype
  | FluidWagonPrototype
  | FlyingRobotPrototype
  | FontPrototype
  | FuelCategory
  | FurnacePrototype
  | FusionGeneratorPrototype
  | FusionReactorPrototype
  | GatePrototype
  | GeneratorEquipmentPrototype
  | GeneratorPrototype
  | GodControllerPrototype
  | GroupAttackAchievementPrototype
  | GuiStyle
  | GunPrototype
  | HalfDiagonalRailPrototype
  | HeatInterfacePrototype
  | HeatPipePrototype
  | HighlightBoxEntityPrototype
  | ImpactCategory
  | InfinityContainerPrototype
  | InfinityPipePrototype
  | InserterPrototype
  | InventoryBonusEquipmentPrototype
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
  | LaneSplitterPrototype
  | LegacyCurvedRailPrototype
  | LegacyStraightRailPrototype
  | LightningAttractorPrototype
  | LightningPrototype
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
  | ModuleCategory
  | ModulePrototype
  | ModuleTransferAchievementPrototype
  | MouseCursor
  | MovementBonusEquipmentPrototype
  | NamedNoiseExpression
  | NamedNoiseFunction
  | NightVisionEquipmentPrototype
  | OffshorePumpPrototype
  | ParticlePrototype
  | ParticleSourcePrototype
  | PipePrototype
  | PipeToGroundPrototype
  | PlaceEquipmentAchievementPrototype
  | PlanetPrototype
  | PlantPrototype
  | PlayerDamagedAchievementPrototype
  | PlayerPortPrototype
  | PowerSwitchPrototype
  | ProcessionLayerInheritanceGroup
  | ProcessionPrototype
  | ProduceAchievementPrototype
  | ProducePerHourAchievementPrototype
  | ProgrammableSpeakerPrototype
  | ProjectilePrototype
  | Prototype
  | PrototypeBase
  | PumpPrototype
  | QualityPrototype
  | RadarPrototype
  | RailChainSignalPrototype
  | RailPlannerPrototype
  | RailPrototype
  | RailRampPrototype
  | RailRemnantsPrototype
  | RailSignalBasePrototype
  | RailSignalPrototype
  | RailSupportPrototype
  | ReactorPrototype
  | RecipeCategory
  | RecipePrototype
  | RemoteControllerPrototype
  | RepairToolPrototype
  | ResearchAchievementPrototype
  | ResearchWithSciencePackAchievementPrototype
  | ResourceCategory
  | ResourceEntityPrototype
  | RoboportEquipmentPrototype
  | RoboportPrototype
  | RobotWithLogisticInterfacePrototype
  | RocketSiloPrototype
  | RocketSiloRocketPrototype
  | RocketSiloRocketShadowPrototype
  | RollingStockPrototype
  | SegmentPrototype
  | SegmentedUnitPrototype
  | SelectionToolPrototype
  | SelectorCombinatorPrototype
  | ShootAchievementPrototype
  | ShortcutPrototype
  | SimpleEntityPrototype
  | SimpleEntityWithForcePrototype
  | SimpleEntityWithOwnerPrototype
  | SmokePrototype
  | SmokeWithTriggerPrototype
  | SolarPanelEquipmentPrototype
  | SolarPanelPrototype
  | SoundPrototype
  | SpaceConnectionDistanceTraveledAchievementPrototype
  | SpaceConnectionPrototype
  | SpaceLocationPrototype
  | SpacePlatformHubPrototype
  | SpacePlatformStarterPackPrototype
  | SpectatorControllerPrototype
  | SpeechBubblePrototype
  | SpiderLegPrototype
  | SpiderUnitPrototype
  | SpiderVehiclePrototype
  | SpidertronRemotePrototype
  | SplitterPrototype
  | SpritePrototype
  | StickerPrototype
  | StorageTankPrototype
  | StraightRailPrototype
  | SurfacePropertyPrototype
  | SurfacePrototype
  | TechnologyPrototype
  | TemporaryContainerPrototype
  | ThrusterPrototype
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
  | UseEntityInEnergyProductionAchievementPrototype
  | UseItemAchievementPrototype
  | UtilityConstants
  | UtilitySounds
  | UtilitySprites
  | VehiclePrototype
  | VirtualSignalPrototype
  | WallPrototype;
export type ApplyStarterPackTipTrigger = CountBasedTipTrigger & {
  type: 'apply-starter-pack';
};
export type AreaTriggerItem = TriggerItem & {
  collision_mode?: 'distance-from-collision-box' | 'distance-from-center';
  radius: double;
  show_in_tooltip?: bool;
  target_enemies?: bool;
  target_entities?: bool;
  trigger_from_target?: bool;
  type: 'area';
};
export type ArtilleryRangeModifier = SimpleModifier & {
  infer_icon?: bool;
  type: 'artillery-range';
  use_icon_overlay_constant?: bool;
};
export type ArtilleryRemoteCapsuleAction = {
  flare: EntityID;
  play_sound_on_failure?: bool;
  type: 'artillery-remote';
};
export type ArtilleryTriggerDelivery = TriggerDeliveryItem & {
  direction_deviation?: float;
  projectile: EntityID;
  range_deviation?: float;
  starting_speed: float;
  starting_speed_deviation?: float;
  trigger_fired_artillery?: bool;
  type: 'artillery';
};
export type AsteroidChunkID = string;
export type AsteroidCollectorGraphicsSet = {
  animation?: Animation4Way;
  arm_head_animation?: RotatedAnimation;
  arm_head_top_animation?: RotatedAnimation;
  arm_link?: RotatedSprite;
  below_arm_pictures?: RotatedSprite;
  below_ground_pictures?: RotatedSprite;
  status_lamp_picture_full?: RotatedSprite;
  status_lamp_picture_off?: RotatedSprite;
  status_lamp_picture_on?: RotatedSprite;
};
export type AsteroidGraphicsSet = {
  ambient_light?: Color;
  brightness?: float;
  light_width?: float;
  lights?: LightProperties | LightProperties[];
  normal_strength?: float;
  rotation_speed?: float;
  specular_power?: float;
  specular_purity?: float;
  specular_strength?: float;
  sprite?: Sprite;
  sss_amount?: float;
  sss_contrast?: float;
  variations?: AsteroidVariation | AsteroidVariation[];
};
export type AsteroidSettings = {
  max_ray_portals_expanded_per_tick: uint32;
  spawning_rate: double;
};
export type AsteroidSpawnPoint = {
  angle_when_stopped?: double;
  probability: double;
  speed: double;
};
export type AsteroidVariation = {
  color_texture: Sprite;
  normal_map: Sprite;
  roughness_map: Sprite;
  shadow_shift?: Vector;
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
export type Attenuation = {
  curve_type: AttenuationType;
  tuning_parameter?: float;
};
export type AttenuationType =
  | 'none'
  | 'linear'
  | 'logarithmic'
  | 'exponential'
  | 'cosine'
  | 'S-curve';
export type AutoplaceControlID = string;
export type AutoplaceSettings = {
  settings?: Record<EntityID | TileID | DecorativeID, FrequencySizeRichness>;
  treat_missing_as_default?: bool;
};
export type AutoplaceSpecification = {
  control?: AutoplaceControlID;
  default_enabled?: bool;
  force?: 'enemy' | 'player' | 'neutral' | string;
  local_expressions?: Record<string, NoiseExpression>;
  local_functions?: Record<string, NoiseFunction>;
  order?: Order;
  placement_density?: uint32;
  probability_expression: NoiseExpression;
  richness_expression?: NoiseExpression;
  tile_restriction?: TileIDRestriction[];
};
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
  lead_target_for_projectile_delay?: uint32;
  lead_target_for_projectile_speed?: float;
  min_attack_distance?: float;
  min_range?: float;
  movement_slow_down_cooldown?: float;
  movement_slow_down_factor?: double;
  range: float;
  range_mode?: RangeMode;
  rotate_penalty?: float;
  sound?: LayeredSound;
  turn_range?: float;
  use_shooter_direction?: bool;
  warmup?: uint32;
};
export type BaseEnergySource = {
  emissions_per_minute?: Record<AirbornePollutantID, double>;
  render_no_network_icon?: bool;
  render_no_power_icon?: bool;
};
export type BaseModifier = {
  hidden?: bool;
  icon?: FileName;
  icon_size?: SpriteSizeType;
  icons?: IconData[];
};
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
export type BeaconDistributionModifier = SimpleModifier & {
  infer_icon?: bool;
  type: 'beacon-distribution';
  use_icon_overlay_constant?: bool;
};
export type BeaconGraphicsSet = {
  animation_layer?: RenderLayer;
  animation_list?: AnimationElement[];
  animation_progress?: float;
  apply_module_tint?: ModuleTint;
  base_layer?: RenderLayer;
  draw_animation_when_idle?: bool;
  draw_light_when_idle?: bool;
  frozen_patch?: Sprite;
  light?: LightDefinition;
  module_icons_suppressed?: bool;
  module_tint_mode?: 'single-module' | 'mix';
  module_visualisations?: BeaconModuleVisualizations[];
  no_modules_tint?: Color;
  random_animation_offset?: bool;
  reset_animation_when_frozen?: bool;
  top_layer?: RenderLayer;
};
export type BeaconModuleVisualization = {
  apply_module_tint?: ModuleTint;
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
  render_layer?: RenderLayer;
  start?: Animation;
  tail?: Animation;
};
export type BeamAttackParameters = BaseAttackParameters & {
  source_direction_count?: uint32;
  source_offset?: Vector;
  type: 'beam';
};
export type BeamGraphicsSet = {
  beam?: BeamAnimationSet;
  desired_segment_length?: float;
  ground?: BeamAnimationSet;
  random_end_animation_rotation?: bool;
  randomize_animation_per_segment?: bool;
  transparent_start_end_animations?: bool;
};
export type BeamTriggerDelivery = TriggerDeliveryItem & {
  add_to_shooter?: bool;
  beam: EntityID;
  destroy_with_source_or_target?: bool;
  duration?: uint32;
  max_length?: uint32;
  source_offset?: Vector;
  type: 'beam';
};
export type BeltReaderLayer = {
  render_layer?: RenderLayer;
  sprites: RotatedAnimation;
};
export type BeltStackSizeBonusModifier = SimpleModifier & {
  type: 'belt-stack-size-bonus';
  use_icon_overlay_constant?: bool;
};
export type BeltTraverseTipTrigger = CountBasedTipTrigger & {
  type: 'belt-traverse';
};
export type BlendMode =
  | 'normal'
  | 'additive'
  | 'additive-soft'
  | 'multiplicative'
  | 'multiplicative-with-alpha'
  | 'overwrite';
export type BoilerPictureSet = {
  east: BoilerPictures;
  north: BoilerPictures;
  south: BoilerPictures;
  west: BoilerPictures;
};
export type BoilerPictures = {
  fire?: Animation;
  fire_glow?: Animation;
  patch?: Sprite;
  structure: Animation;
};
export type BonusGuiOrdering = {
  artillery_range: Order;
  beacon_distribution: Order;
  bulk_inserter: Order;
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
export type BoolModifier = BaseModifier & { modifier: bool };
export type BorderImageSet = {
  border_width?: int32;
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
export type BoundingBox =
  | {
      left_top: MapPosition;
      orientation?: RealOrientation;
      right_bottom: MapPosition;
    }
  | [MapPosition, MapPosition];
export type BoxSpecification = {
  is_whole_box?: bool;
  max_side_length?: double;
  side_height?: double;
  side_length?: double;
  sprite: Sprite;
};
export type BuildEntityByRobotTipTrigger = CountBasedTipTrigger & {
  type: 'build-entity-by-robot';
};
export type BuildEntityTechnologyTrigger = {
  entity: EntityIDFilter;
  type: 'build-entity';
};
export type BuildEntityTipTrigger = CountBasedTipTrigger & {
  build_by_dragging?: bool;
  build_in_line?: bool;
  consecutive?: bool;
  entity?: EntityID;
  linear_power_pole_line?: bool;
  match_type_only?: bool;
  quality?: QualityID;
  type: 'build-entity';
};
export type BuildMode = 'normal' | 'forced' | 'superforced';
export type BulkInserterCapacityBonusModifier = SimpleModifier & {
  infer_icon?: bool;
  type: 'bulk-inserter-capacity-bonus';
  use_icon_overlay_constant?: bool;
};
export type BurnerEnergySource = BaseEnergySource & {
  burner_usage?: BurnerUsageID;
  burnt_inventory_size?: ItemStackIndex;
  effectivity?: double;
  fuel_categories?: FuelCategoryID[];
  fuel_inventory_size: ItemStackIndex;
  initial_fuel?: ItemID;
  initial_fuel_percent?: double;
  light_flicker?: LightFlickeringDefinition;
  smoke?: SmokeSource[];
  type: 'burner';
};
export type BurnerUsageID = string;
export type ButtonStyleSpecification =
  StyleWithClickableGraphicalSetSpecification & {
    clicked_font_color?: Color;
    clicked_vertical_offset?: uint32;
    default_font_color?: Color;
    disabled_font_color?: Color;
    draw_grayscale_picture?: bool;
    draw_shadow_under_picture?: bool;
    font?: string;
    hovered_font_color?: Color;
    icon_horizontal_align?: HorizontalAlign;
    invert_colors_of_picture_when_disabled?: bool;
    invert_colors_of_picture_when_hovered_or_toggled?: bool;
    pie_progress_color?: Color;
    selected_clicked_font_color?: Color;
    selected_font_color?: Color;
    selected_hovered_font_color?: Color;
    strikethrough_color?: Color;
    type: 'button_style';
  };
export type CameraEffectTriggerEffectItem = TriggerEffectItem & {
  delay?: uint8;
  duration: uint8;
  ease_in_duration?: uint8;
  ease_out_duration?: uint8;
  full_strength_max_distance?: uint16;
  max_distance?: uint16;
  strength?: float;
  type: 'camera-effect';
};
export type CameraStyleSpecification = EmptyWidgetStyleSpecification & {
  type: 'camera_style';
};
export type CapsuleAction =
  | ThrowCapsuleAction
  | ActivateEquipmentCapsuleAction
  | UseOnSelfCapsuleAction
  | DestroyCliffsCapsuleAction
  | ArtilleryRemoteCapsuleAction;
export type CaptureSpawnerTechnologyTrigger = {
  entity?: EntityID;
  type: 'capture-spawner';
};
export type CargoBayConnectableGraphicsSet = {
  animation?: Animation;
  animation_render_layer?: RenderLayer;
  connections?: CargoBayConnections;
  picture?: LayeredSprite;
};
export type CargoBayConnections = {
  bottom_left_inner_corner?: LayeredSpriteVariations;
  bottom_left_outer_corner?: LayeredSpriteVariations;
  bottom_right_inner_corner?: LayeredSpriteVariations;
  bottom_right_outer_corner?: LayeredSpriteVariations;
  bottom_wall?: LayeredSpriteVariations;
  bridge_crossing?: LayeredSpriteVariations;
  bridge_horizontal_narrow?: LayeredSpriteVariations;
  bridge_horizontal_wide?: LayeredSpriteVariations;
  bridge_vertical_narrow?: LayeredSpriteVariations;
  bridge_vertical_wide?: LayeredSpriteVariations;
  left_wall?: LayeredSpriteVariations;
  right_wall?: LayeredSpriteVariations;
  top_left_inner_corner?: LayeredSpriteVariations;
  top_left_outer_corner?: LayeredSpriteVariations;
  top_right_inner_corner?: LayeredSpriteVariations;
  top_right_outer_corner?: LayeredSpriteVariations;
  top_wall?: LayeredSpriteVariations;
};
export type CargoHatchDefinition = {
  busy_timeout_ticks?: uint32;
  cargo_unit_entity_to_spawn?: EntityID;
  closing_sound?: InterruptibleSound;
  entering_render_layer?: RenderLayer;
  hatch_graphics?: Animation;
  hatch_opening_ticks?: uint32;
  hatch_render_layer?: RenderLayer;
  illumination_graphic_index?: uint32;
  offset?: Vector;
  opening_sound?: InterruptibleSound;
  pod_shadow_offset?: Vector;
  receiving_cargo_units?: EntityID[];
  sky_slice_height?: float;
  slice_height?: float;
  travel_height?: float;
};
export type CargoLandingPadLimitModifier = SimpleModifier & {
  type: 'cargo-landing-pad-count';
  use_icon_overlay_constant?: bool;
};
export type CargoStationParameters = {
  giga_hatch_definitions?: GigaCargoHatchDefinition[];
  hatch_definitions?: CargoHatchDefinition[];
  prefer_packed_cargo_units?: bool;
};
export type ChainTriggerDelivery = TriggerDeliveryItem & {
  chain: ActiveTriggerID;
  type: 'chain';
};
export type ChangeRecipeProductivityModifier = BaseModifier & {
  change: EffectValue;
  recipe: RecipeID;
  type: 'change-recipe-productivity';
  use_icon_overlay_constant?: bool;
};
export type ChangeSurfaceTipTrigger = CountBasedTipTrigger & {
  surface: string;
  type: 'change-surface';
};
export type CharacterArmorAnimation = {
  armors?: ItemID[];
  extra_smoke_cycles_per_tile?: float;
  flipped_shadow_running_with_gun?: RotatedAnimation;
  flying?: RotatedAnimation;
  flying_with_gun?: RotatedAnimation;
  idle?: RotatedAnimation;
  idle_in_air?: RotatedAnimation;
  idle_with_gun: RotatedAnimation;
  idle_with_gun_in_air?: RotatedAnimation;
  landing?: RotatedAnimation;
  mining_with_tool: RotatedAnimation;
  mining_with_tool_particles_animation_positions?: float[];
  running?: RotatedAnimation;
  running_with_gun: RotatedAnimation;
  smoke_cycles_per_tick?: float;
  smoke_in_air?: SmokeSource[];
  take_off?: RotatedAnimation;
};
export type CharacterBuildDistanceModifier = SimpleModifier & {
  type: 'character-build-distance';
  use_icon_overlay_constant?: bool;
};
export type CharacterCraftingSpeedModifier = SimpleModifier & {
  type: 'character-crafting-speed';
  use_icon_overlay_constant?: bool;
};
export type CharacterHealthBonusModifier = SimpleModifier & {
  type: 'character-health-bonus';
  use_icon_overlay_constant?: bool;
};
export type CharacterInventorySlotsBonusModifier = SimpleModifier & {
  type: 'character-inventory-slots-bonus';
  use_icon_overlay_constant?: bool;
};
export type CharacterItemDropDistanceModifier = SimpleModifier & {
  type: 'character-item-drop-distance';
  use_icon_overlay_constant?: bool;
};
export type CharacterItemPickupDistanceModifier = SimpleModifier & {
  type: 'character-item-pickup-distance';
  use_icon_overlay_constant?: bool;
};
export type CharacterLogisticRequestsModifier = BoolModifier & {
  type: 'character-logistic-requests';
  use_icon_overlay_constant?: bool;
};
export type CharacterLogisticTrashSlotsModifier = SimpleModifier & {
  type: 'character-logistic-trash-slots';
  use_icon_overlay_constant?: bool;
};
export type CharacterLootPickupDistanceModifier = SimpleModifier & {
  type: 'character-loot-pickup-distance';
  use_icon_overlay_constant?: bool;
};
export type CharacterMiningSpeedModifier = SimpleModifier & {
  type: 'character-mining-speed';
  use_icon_overlay_constant?: bool;
};
export type CharacterReachDistanceModifier = SimpleModifier & {
  type: 'character-reach-distance';
  use_icon_overlay_constant?: bool;
};
export type CharacterResourceReachDistanceModifier = SimpleModifier & {
  type: 'character-resource-reach-distance';
  use_icon_overlay_constant?: bool;
};
export type CharacterRunningSpeedModifier = SimpleModifier & {
  type: 'character-running-speed';
  use_icon_overlay_constant?: bool;
};
export type ChargableGraphics = {
  charge_animation?: Animation;
  charge_animation_is_looped?: bool;
  charge_cooldown?: uint16;
  charge_light?: LightDefinition;
  discharge_animation?: Animation;
  discharge_cooldown?: uint16;
  discharge_light?: LightDefinition;
  picture?: Sprite;
};
export type ChartUtilityConstants = {
  artillery_range_color: Color;
  blue_signal_color: Color;
  chart_construction_robot_color: Color;
  chart_deconstruct_active_color: Color;
  chart_deconstruct_tint: Color;
  chart_delivery_to_me_logistic_robot_color: Color;
  chart_logistic_robot_color: Color;
  chart_mobile_construction_robot_color: Color;
  chart_personal_construction_robot_color: Color;
  chart_player_circle_size: float;
  chart_train_stop_disabled_text_color: Color;
  chart_train_stop_full_text_color: Color;
  chart_train_stop_text_color: Color;
  circuit_network_member_color: Color;
  copper_wire_color: Color;
  custom_tag_max_scale?: float;
  custom_tag_scale?: float;
  custom_tag_selected_overlay_tint?: Color;
  default_color_by_type?: Record<string, Color>;
  default_enemy_color: Color;
  default_enemy_territory_color: Color;
  default_friendly_color: Color;
  default_friendly_color_by_type?: Record<string, Color>;
  disabled_switch_color: Color;
  electric_line_minimum_absolute_width: float;
  electric_line_width: float;
  electric_power_pole_color: Color;
  elevated_rail_color: Color;
  enabled_switch_color: Color;
  entity_ghost_color: Color;
  explosion_visualization_duration: uint32;
  green_signal_color: Color;
  green_wire_color: Color;
  rail_color: Color;
  rail_ramp_color: Color;
  red_signal_color: Color;
  red_wire_color: Color;
  resource_outline_selection_color: Color;
  tile_ghost_color: Color;
  train_current_path_outline_color: Color;
  train_path_color: Color;
  train_preview_path_outline_color: Color;
  turret_range_color: Color;
  vehicle_inner_color: Color;
  vehicle_outer_color: Color;
  vehicle_outer_color_selected: Color;
  vehicle_wagon_connection_color: Color;
  yellow_signal_color: Color;
  zoom_threshold_to_draw_spider_path: double;
};
export type CheckBoxStyleSpecification =
  StyleWithClickableGraphicalSetSpecification & {
    checkmark?: Sprite;
    disabled_checkmark?: Sprite;
    disabled_font_color?: Color;
    font?: string;
    font_color?: Color;
    intermediate_mark?: Sprite;
    text_padding?: uint32;
    type: 'checkbox_style';
  };
export type CircuitConnectorDefinition = {
  points?: WireConnectionPoint;
  sprites?: CircuitConnectorSprites;
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
export type CircuitNetworkModifier = BoolModifier & {
  type: 'unlock-circuit-network';
  use_icon_overlay_constant?: bool;
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
export type ClearCursorTipTrigger = CountBasedTipTrigger & {
  type: 'clear-cursor';
};
export type CliffDeconstructionEnabledModifier = BoolModifier & {
  type: 'cliff-deconstruction-enabled';
  use_icon_overlay_constant?: bool;
};
export type CliffPlacementSettings = {
  cliff_elevation_0?: float;
  cliff_elevation_interval?: float;
  cliff_smoothing?: float;
  control?: AutoplaceControlID;
  name?: EntityID;
  richness?: float;
};
export type CloudEffectStyle =
  | 'none'
  | 'euclidean'
  | 'manhattan'
  | 'euclidean-outside'
  | 'manhattan-outside'
  | 'horizontal-stripe'
  | 'texture'
  | 'texture-outside';
export type CloudsEffectProperties = {
  additional_density_sample: CloudsTextureCoordinateTransformation;
  density?: float;
  density_at_night?: float;
  detail_exponent?: float;
  detail_factor?: float;
  detail_factor_at_night?: float;
  detail_noise_texture: EffectTexture;
  detail_sample_1: CloudsTextureCoordinateTransformation;
  detail_sample_2: CloudsTextureCoordinateTransformation;
  detail_sample_morph_duration?: uint32;
  movement_speed_multiplier?: float;
  opacity?: float;
  opacity_at_night?: float;
  scale?: float;
  shape_factor?: float;
  shape_noise_texture: EffectTexture;
  shape_warp_strength?: float;
  shape_warp_weight?: float;
  warp_sample_1: CloudsTextureCoordinateTransformation;
  warp_sample_2: CloudsTextureCoordinateTransformation;
  warped_shape_sample: CloudsTextureCoordinateTransformation;
};
export type CloudsTextureCoordinateTransformation = {
  scale: float;
  wind_speed_factor?: float;
};
export type ClusterTriggerItem = TriggerItem & {
  cluster_count: uint32;
  distance: float;
  distance_deviation?: float;
  type: 'cluster';
};
export type CollisionLayerID = string;
export type CollisionMaskConnector = {
  colliding_with_tiles_only?: bool;
  consider_tile_transitions?: bool;
  layers: Record<CollisionLayerID, true>;
  not_colliding_with_itself?: bool;
};
export type Color =
  | { a?: float; b?: float; g?: float; r?: float }
  | [float, float, float]
  | [float, float, float, float];
export type ColorFilterData = {
  localised_name: LocalisedString;
  matrix: float[][];
  name: string;
};
export type ColorHintSpecification = { text?: string; text_color?: Color };
export type ColorLookupTable = FileName | 'identity';
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
export type ColumnWidth = ColumnWidthItem & { column: uint32 };
export type ColumnWidthItem = {
  maximal_width?: int32;
  minimal_width?: int32;
  width?: int32;
};
export type ComparatorString =
  | '='
  | '>'
  | '<'
  | '≥'
  | '>='
  | '≤'
  | '<='
  | '≠'
  | '!=';
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
export type ConsumingType = 'none' | 'game-only';
export type ControlPoint =
  | { control: float; volume_percentage: float }
  | [float, float];
export type CountBasedTipTrigger = { count?: uint32 };
export type CoverGraphicEffectData = {
  distance_traveled_strength?: Vector;
  pod_movement_strength?: Vector;
  relative_to?: EffectRelativeTo;
  style?: CloudEffectStyle;
};
export type CoverGraphicProcessionLayer = {
  alt_effect?: CoverGraphicEffectData;
  distance_traveled_strength?: Vector;
  effect?: CoverGraphicEffectData;
  effect_graphic?: ProcessionGraphic;
  frames: CoverGraphicProcessionLayerBezierControlPoint[];
  graphic?: ProcessionGraphic;
  inherit_from?: ProcessionLayerInheritanceGroupID;
  is_cloud_effect_advanced?: bool;
  is_quad_texture?: bool;
  mask_graphic?: ProcessionGraphic;
  pod_movement_strength?: Vector;
  reference_group?: ProcessionLayerInheritanceGroupID;
  render_layer?: RenderLayer;
  rotate_with_pod?: bool;
  secondary_draw_order?: int8;
  texture_relative_to?: EffectRelativeTo;
  type: 'cover-graphic';
  world_size?: Vector;
};
export type CoverGraphicProcessionLayerBezierControlPoint = {
  alt_effect_scale_max?: double;
  alt_effect_scale_max_t?: double;
  alt_effect_scale_min?: double;
  alt_effect_scale_min_t?: double;
  alt_effect_shift?: Vector;
  alt_effect_shift_rate?: double;
  alt_effect_shift_rate_t?: double;
  alt_effect_shift_t?: Vector;
  effect_scale_max?: double;
  effect_scale_max_t?: double;
  effect_scale_min?: double;
  effect_scale_min_t?: double;
  effect_shift?: Vector;
  effect_shift_rate?: double;
  effect_shift_rate_t?: double;
  effect_shift_t?: Vector;
  offset?: Vector;
  offset_rate?: double;
  offset_rate_t?: double;
  offset_t?: Vector;
  opacity?: double;
  opacity_t?: double;
  rotation?: double;
  rotation_t?: double;
  timestamp?: MapTick;
};
export type CraftFluidTechnologyTrigger = {
  amount?: double;
  fluid: FluidID;
  type: 'craft-fluid';
};
export type CraftItemTechnologyTrigger = {
  count?: ItemCountType;
  item: ItemIDFilter;
  type: 'craft-item';
};
export type CraftItemTipTrigger = CountBasedTipTrigger & {
  consecutive?: bool;
  event_type:
    | 'crafting-of-single-item-ordered'
    | 'crafting-of-multiple-items-ordered'
    | 'crafting-finished';
  item?: ItemID;
  type: 'craft-item';
};
export type CraftingMachineGraphicsSet = WorkingVisualisations & {
  animation_progress?: float;
  circuit_connector_layer?: RenderLayer | CircuitConnectorLayer;
  circuit_connector_secondary_draw_order?:
    | int8
    | CircuitConnectorSecondaryDrawOrder;
  frozen_patch?: Sprite4Way;
  reset_animation_when_frozen?: bool;
};
export type CranePart = {
  allow_sprite_rotation?: bool;
  dying_effect?: CranePartDyingEffect;
  extendable_length?: Vector3D;
  extendable_length_grappler?: Vector3D;
  is_contractible_by_cropping?: bool;
  layer?: int8;
  name?: string;
  orientation_shift?: float;
  relative_position?: Vector3D;
  relative_position_grappler?: Vector3D;
  rotated_sprite?: RotatedSprite;
  rotated_sprite_reflection?: RotatedSprite;
  rotated_sprite_shadow?: RotatedSprite;
  scale_to_fit_model?: bool;
  should_scale_for_perspective?: bool;
  snap_end?: float;
  snap_end_arm_extent_multiplier?: float;
  snap_start?: float;
  sprite?: Sprite;
  sprite_reflection?: Sprite;
  sprite_shadow?: Sprite;
  static_length?: Vector3D;
  static_length_grappler?: Vector3D;
};
export type CranePartDyingEffect = {
  explosion?: ExplosionDefinition;
  explosion_linear_distance_step?: float;
  particle_effect_linear_distance_step?: float;
  particle_effects?: CreateParticleTriggerEffectItem[];
};
export type CraterPlacementDefinition = {
  minimum_segments_to_place?: uint32;
  segment_probability?: float;
  segments: CraterSegment[];
};
export type CraterSegment = { offset: Vector; orientation: float };
export type CreateAsteroidChunkEffectItem = TriggerEffectItem & {
  asteroid_name: AsteroidChunkID;
  offset_deviation?: BoundingBox;
  offsets?: Vector[];
  type: 'create-asteroid-chunk';
};
export type CreateDecorativesTriggerEffectItem = TriggerEffectItem & {
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
export type CreateEntityTriggerEffectItem = TriggerEffectItem & {
  as_enemy?: bool;
  check_buildability?: bool;
  entity_name: EntityID;
  find_non_colliding_position?: bool;
  ignore_no_enemies_mode?: bool;
  non_colliding_fail_result?: Trigger;
  non_colliding_search_precision?: double;
  non_colliding_search_radius?: double;
  offset_deviation?: BoundingBox;
  offsets?: Vector[];
  protected?: bool;
  show_in_tooltip?: bool;
  tile_collision_mask?: CollisionMaskConnector;
  trigger_created_entity?: bool;
  type: 'create-entity';
};
export type CreateExplosionTriggerEffectItem = CreateEntityTriggerEffectItem & {
  cycle_while_moving?: bool;
  inherit_movement_distance_from_projectile?: bool;
  max_movement_distance?: float;
  max_movement_distance_deviation?: float;
  type: 'create-explosion';
};
export type CreateFireTriggerEffectItem = CreateEntityTriggerEffectItem & {
  initial_ground_flame_count?: uint8;
  type: 'create-fire';
};
export type CreateGhostOnEntityDeathModifier = BoolModifier & {
  type: 'create-ghost-on-entity-death';
  use_icon_overlay_constant?: bool;
};
export type CreateParticleTriggerEffectItem = TriggerEffectItem & {
  apply_tile_tint?: 'primary' | 'secondary';
  frame_speed?: float;
  frame_speed_deviation?: float;
  initial_height: float;
  initial_height_deviation?: float;
  initial_vertical_speed?: float;
  initial_vertical_speed_deviation?: float;
  movement_multiplier?: float;
  offset_deviation?: SimpleBoundingBox;
  offsets?: Vector[];
  only_when_visible?: bool;
  particle_name: ParticleID;
  rotate_offsets?: bool;
  show_in_tooltip?: bool;
  speed_from_center?: float;
  speed_from_center_deviation?: float;
  tail_length?: uint8;
  tail_length_deviation?: uint8;
  tail_width?: float;
  tile_collision_mask?: CollisionMaskConnector;
  tint?: Color;
  type: 'create-particle';
};
export type CreateSmokeTriggerEffectItem = CreateEntityTriggerEffectItem & {
  initial_height?: float;
  speed?: Vector;
  speed_from_center?: float;
  speed_from_center_deviation?: float;
  speed_multiplier?: float;
  speed_multiplier_deviation?: float;
  starting_frame?: float;
  starting_frame_deviation?: float;
  type: 'create-smoke';
};
export type CreateSpacePlatformTechnologyTrigger = {
  type: 'create-space-platform';
};
export type CreateStickerTriggerEffectItem = TriggerEffectItem & {
  show_in_tooltip?: bool;
  sticker: EntityID;
  trigger_created_entity?: bool;
  type: 'create-sticker';
};
export type CreateTrivialSmokeEffectItem = TriggerEffectItem & {
  initial_height?: float;
  max_radius?: float;
  offset_deviation?: BoundingBox;
  offsets?: Vector[];
  smoke_name: TrivialSmokeID;
  speed?: Vector;
  speed_from_center?: float;
  speed_from_center_deviation?: float;
  speed_multiplier?: float;
  speed_multiplier_deviation?: float;
  starting_frame?: float;
  starting_frame_deviation?: float;
  type: 'create-trivial-smoke';
};
export type CursorBoxSpecification = {
  blueprint_snap_rectangle: BoxSpecification[];
  copy: BoxSpecification[];
  electricity: BoxSpecification[];
  logistics: BoxSpecification[];
  multiplayer_selection: BoxSpecification[];
  not_allowed: BoxSpecification[];
  pair: BoxSpecification[];
  regular: BoxSpecification[];
  rts_selected: BoxSpecification[];
  rts_to_be_selected: BoxSpecification[];
  train_visualization: BoxSpecification[];
};
export type CursorBoxType =
  | 'entity'
  | 'multiplayer-entity'
  | 'electricity'
  | 'copy'
  | 'not-allowed'
  | 'pair'
  | 'logistics'
  | 'train-visualization'
  | 'blueprint-snap-rectangle'
  | 'spidertron-remote-selected'
  | 'spidertron-remote-to-be-selected';
export type CyclicSound = {
  begin_sound?: Sound;
  end_sound?: Sound;
  middle_sound?: Sound;
};
export type DamageParameters = { amount: float; type: DamageTypeID };
export type DamageTileTriggerEffectItem = TriggerEffectItem & {
  damage: DamageParameters;
  radius?: float;
  type: 'damage';
};
export type DamageTriggerEffectItem = TriggerEffectItem & {
  apply_damage_to_trees?: bool;
  damage: DamageParameters;
  lower_damage_modifier?: float;
  lower_distance_threshold?: uint16;
  type: 'damage';
  upper_damage_modifier?: float;
  upper_distance_threshold?: uint16;
  use_substitute?: bool;
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
export type DaytimeColorLookupTable = [double, ColorLookupTable][];
export type DeconstructionTimeToLiveModifier = SimpleModifier & {
  type: 'deconstruction-time-to-live';
  use_icon_overlay_constant?: bool;
};
export type DecorativeID = string;
export type DelayedTriggerDelivery = TriggerDeliveryItem & {
  delayed_trigger: ActiveTriggerID;
  type: 'delayed';
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
export type DestroyCliffsTriggerEffectItem = TriggerEffectItem & {
  explosion_at_cliff?: EntityID;
  explosion_at_trigger?: EntityID;
  radius: float;
  type: 'destroy-cliffs';
};
export type DestroyDecorativesTriggerEffectItem = TriggerEffectItem & {
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
  spoil_time_modifier?: double;
  technology_price_multiplier?: double;
};
export type DirectTriggerItem = TriggerItem & {
  filter_enabled?: bool;
  type: 'direct';
};
export type Direction =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15;
export type DirectionShift = {
  east?: Vector;
  north?: Vector;
  south?: Vector;
  west?: Vector;
};
export type DirectionString =
  | 'north'
  | 'north_north_east'
  | 'north_east'
  | 'east_north_east'
  | 'east'
  | 'east_south_east'
  | 'south_east'
  | 'south_south_east'
  | 'south'
  | 'south_south_west'
  | 'south_west'
  | 'west_south_west'
  | 'west'
  | 'west_north_west'
  | 'north_west'
  | 'north_north_west';
export type DoubleSliderStyleSpecification = SliderStyleSpecification & {
  type: 'double_slider_style';
};
export type DropDownStyleSpecification = BaseStyleSpecification & {
  button_style?: ButtonStyleSpecification;
  icon?: Sprite;
  list_box_style?: ListBoxStyleSpecification;
  opened_sound?: Sound;
  selector_and_title_spacing?: int16;
  type: 'dropdown_style';
};
export type DropItemTipTrigger = CountBasedTipTrigger & {
  drop_into_entity?: bool;
  type: 'drop-item';
};
export type Effect = {
  consumption?: EffectValue;
  pollution?: EffectValue;
  productivity?: EffectValue;
  quality?: EffectValue;
  speed?: EffectValue;
};
export type EffectReceiver = {
  base_effect?: Effect;
  uses_beacon_effects?: bool;
  uses_module_effects?: bool;
  uses_surface_effects?: bool;
};
export type EffectRelativeTo = 'ground-origin' | 'pod' | 'spawn-origin';
export type EffectTexture = SpriteSource & {};
export type EffectTypeLimitation =
  | ('speed' | 'productivity' | 'consumption' | 'pollution' | 'quality')
  | ('speed' | 'productivity' | 'consumption' | 'pollution' | 'quality')[];
export type EffectValue = float;
export type EffectVariation = 'lava' | 'wetland-water' | 'oil' | 'water';
export type ElectricEnergySource = BaseEnergySource & {
  buffer_capacity?: Energy;
  drain?: Energy;
  input_flow_limit?: Energy;
  output_flow_limit?: Energy;
  type: 'electric';
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
export type EmptyWidgetStyleSpecification = BaseStyleSpecification & {
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
export type EnemySpawnerAbsorption = { absolute: double; proportional: double };
export type EnemySpawnerGraphicsSet = {
  animations?: AnimationVariations;
  integration?: SpriteVariations;
  random_animation_offset?: bool;
  underwater_animations?: AnimationVariations;
  underwater_layer_offset?: int8;
  water_effect_map_animations?: AnimationVariations;
};
export type Energy = string;
export type EnergySource =
  | ElectricEnergySource
  | BurnerEnergySource
  | HeatEnergySource
  | FluidEnergySource
  | VoidEnergySource;
export type EnterVehicleTipTrigger = CountBasedTipTrigger & {
  match_type_only?: bool;
  type: 'enter-vehicle';
  vehicle?: EntityID;
};
export type EntityBuildAnimationPiece = { body: Animation; top: Animation };
export type EntityBuildAnimations = {
  back_left: EntityBuildAnimationPiece;
  back_right: EntityBuildAnimationPiece;
  front_left: EntityBuildAnimationPiece;
  front_right: EntityBuildAnimationPiece;
};
export type EntityID = string;
export type EntityIDFilter =
  | { comparator?: ComparatorString; name: EntityID; quality?: QualityID }
  | EntityID;
export type EntityPrototypeFlags = (
  | 'not-rotatable'
  | 'placeable-neutral'
  | 'placeable-player'
  | 'placeable-enemy'
  | 'placeable-off-grid'
  | 'player-creation'
  | 'building-direction-8-way'
  | 'filter-directions'
  | 'get-by-unit-number'
  | 'breaths-air'
  | 'not-repairable'
  | 'not-on-map'
  | 'not-deconstructable'
  | 'not-blueprintable'
  | 'hide-alt-info'
  | 'no-gap-fill-while-building'
  | 'not-flammable'
  | 'no-automated-item-removal'
  | 'no-automated-item-insertion'
  | 'no-copy-paste'
  | 'not-selectable-in-game'
  | 'not-upgradable'
  | 'not-in-kill-statistics'
  | 'building-direction-16-way'
  | 'snap-to-rail-support-spot'
  | 'not-in-made-in'
)[];
export type EntityRendererSearchBoxLimits = {
  bottom: uint8;
  left: uint8;
  right: uint8;
  top: uint8;
};
export type EntityStatus =
  | 'working'
  | 'normal'
  | 'ghost'
  | 'not-plugged-in-electric-network'
  | 'networks-connected'
  | 'networks-disconnected'
  | 'no-ammo'
  | 'waiting-for-target-to-be-built'
  | 'waiting-for-train'
  | 'no-power'
  | 'low-temperature'
  | 'charging'
  | 'discharging'
  | 'fully-charged'
  | 'no-fuel'
  | 'no-food'
  | 'out-of-logistic-network'
  | 'no-recipe'
  | 'no-ingredients'
  | 'no-input-fluid'
  | 'no-research-in-progress'
  | 'no-minable-resources'
  | 'low-input-fluid'
  | 'low-power'
  | 'not-connected-to-rail'
  | 'cant-divide-segments'
  | 'recharging-after-power-outage'
  | 'no-modules-to-transmit'
  | 'disabled-by-control-behavior'
  | 'opened-by-circuit-network'
  | 'closed-by-circuit-network'
  | 'disabled-by-script'
  | 'disabled'
  | 'turned-off-during-daytime'
  | 'fluid-ingredient-shortage'
  | 'item-ingredient-shortage'
  | 'full-output'
  | 'not-enough-space-in-output'
  | 'full-burnt-result-output'
  | 'marked-for-deconstruction'
  | 'missing-required-fluid'
  | 'missing-science-packs'
  | 'waiting-for-source-items'
  | 'waiting-for-space-in-destination'
  | 'preparing-rocket-for-launch'
  | 'waiting-to-launch-rocket'
  | 'waiting-for-space-in-platform-hub'
  | 'launching-rocket'
  | 'thrust-not-required'
  | 'not-enough-thrust'
  | 'on-the-way'
  | 'waiting-in-orbit'
  | 'waiting-for-rocket-to-arrive'
  | 'no-path'
  | 'broken'
  | 'none'
  | 'frozen'
  | 'paused'
  | 'not-connected-to-hub-or-pad'
  | 'computing-navigation'
  | 'no-filter'
  | 'waiting-at-stop'
  | 'destination-stop-full'
  | 'pipeline-overextended'
  | 'no-spot-seedable-by-inputs'
  | 'waiting-for-plants-to-grow'
  | 'recipe-not-researched';
export type EntityTransferTipTrigger = CountBasedTipTrigger & {
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
export type Fade = Attenuation &
  ({ from?: ControlPoint; to?: ControlPoint } | AttenuationType);
export type Fades = { fade_in?: Fade; fade_out?: Fade };
export type FastBeltBendTipTrigger = CountBasedTipTrigger & {
  type: 'fast-belt-bend';
};
export type FastReplaceTipTrigger = CountBasedTipTrigger & {
  match_type_only?: bool;
  source?: EntityID;
  target?: EntityID;
  type: 'fast-replace';
};
export type FeatureFlags = {
  expansion_shaders: bool;
  freezing: bool;
  quality: bool;
  rail_bridges: bool;
  segmented_units: bool;
  space_travel: bool;
  spoiling: bool;
};
export type FileName = string;
export type FlipEntityTipTrigger = CountBasedTipTrigger & {
  type: 'flip-entity';
};
export type FlowStyleSpecification = BaseStyleSpecification & {
  horizontal_spacing?: int32;
  max_on_row?: int32;
  type: 'flow_style';
  vertical_spacing?: int32;
};
export type FluidAmount = double;
export type FluidBox = {
  always_draw_covers?: bool;
  draw_only_when_connected?: bool;
  enable_working_visualisations?: string[];
  filter?: FluidID;
  hide_connection_info?: bool;
  max_pipeline_extent?: uint32;
  maximum_temperature?: float;
  minimum_temperature?: float;
  mirrored_pipe_picture?: Sprite4Way;
  mirrored_pipe_picture_frozen?: Sprite4Way;
  pipe_connections: PipeConnectionDefinition[];
  pipe_covers?: Sprite4Way;
  pipe_covers_frozen?: Sprite4Way;
  pipe_picture?: Sprite4Way;
  pipe_picture_frozen?: Sprite4Way;
  production_type?: ProductionType;
  render_layer?: RenderLayer;
  secondary_draw_order?: int8;
  secondary_draw_orders?: FluidBoxSecondaryDrawOrders;
  volume: FluidAmount;
};
export type FluidBoxLinkedConnectionID = uint32;
export type FluidBoxSecondaryDrawOrders = {
  east?: int8;
  north?: int8;
  south?: int8;
  west?: int8;
};
export type FluidEnergySource = BaseEnergySource & {
  burns_fluid?: bool;
  destroy_non_fuel_fluid?: bool;
  effectivity?: double;
  fluid_box: FluidBox;
  fluid_usage_per_tick?: FluidAmount;
  light_flicker?: LightFlickeringDefinition;
  maximum_temperature?: float;
  scale_fluid_usage?: bool;
  smoke?: SmokeSource[];
  type: 'fluid';
};
export type FluidID = string;
export type FluidIngredientPrototype = {
  amount: FluidAmount;
  fluidbox_index?: uint32;
  fluidbox_multiplier?: uint8;
  ignored_by_stats?: FluidAmount;
  maximum_temperature?: float;
  minimum_temperature?: float;
  name: FluidID;
  temperature?: float;
  type: 'fluid';
};
export type FluidProductPrototype = {
  amount?: FluidAmount;
  amount_max?: FluidAmount;
  amount_min?: FluidAmount;
  fluidbox_index?: uint32;
  ignored_by_productivity?: FluidAmount;
  ignored_by_stats?: FluidAmount;
  name: FluidID;
  probability?: double;
  show_details_in_recipe_tooltip?: bool;
  temperature?: float;
  type: 'fluid';
};
export type FluidWagonConnectorGraphics = {
  load_animations: PumpConnectorGraphics;
  unload_animations: PumpConnectorGraphics;
};
export type FogEffectProperties = {
  color1?: Color;
  color2?: Color;
  detail_noise_texture: EffectTexture;
  fog_type?: 'vulcanus' | 'gleba';
  shape_noise_texture: EffectTexture;
  tick_factor?: float;
};
export type FogMaskShapeDefinition = {
  falloff?: float;
  rect: SimpleBoundingBox;
};
export type FollowerRobotLifetimeModifier = SimpleModifier & {
  infer_icon?: bool;
  type: 'follower-robot-lifetime';
  use_icon_overlay_constant?: bool;
};
export type FootprintParticle = {
  particle_name?: ParticleID;
  tiles: TileID[];
  use_as_default?: bool;
};
export type FootstepTriggerEffectItem = CreateParticleTriggerEffectItem & {
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
export type FrameStyleSpecification = BaseStyleSpecification & {
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
export type FusionGeneratorDirectionGraphicsSet = {
  animation?: Animation;
  fluid_input_graphics?: FusionGeneratorFluidInputGraphics[];
  fusion_effect_uv_map?: Sprite;
  working_light?: Animation;
};
export type FusionGeneratorFluidInputGraphics = {
  fusion_effect_uv_map?: Sprite;
  sprite?: Sprite;
  working_light?: Sprite;
};
export type FusionGeneratorGraphicsSet = {
  east_graphics_set: FusionGeneratorDirectionGraphicsSet;
  glow_color?: Color;
  light?: LightDefinition;
  north_graphics_set: FusionGeneratorDirectionGraphicsSet;
  render_layer?: RenderLayer;
  south_graphics_set: FusionGeneratorDirectionGraphicsSet;
  west_graphics_set: FusionGeneratorDirectionGraphicsSet;
};
export type FusionReactorConnectionGraphics = {
  fusion_effect_uv_map?: Sprite;
  pictures?: Animation;
  working_light_pictures?: Animation;
};
export type FusionReactorGraphicsSet = {
  connections_graphics?: FusionReactorConnectionGraphics[];
  default_fuel_glow_color?: Color;
  direction_to_connections_graphics?: Record<DirectionString, uint8[]>;
  fusion_effect_uv_map?: Sprite;
  light?: LightDefinition;
  plasma_category: NeighbourConnectableConnectionCategory;
  render_layer?: RenderLayer;
  structure?: Sprite4Way;
  use_fuel_glow_color?: bool;
  working_light_pictures?: Sprite4Way;
};
export type GameControllerVibrationData = {
  duration?: uint32;
  high_frequency_vibration_intensity?: float;
  low_frequency_vibration_intensity?: float;
  play_for?: PlayFor;
};
export type GameViewSettings = {
  default_show_value?: bool;
  show_alert_gui?: bool;
  show_controller_gui?: bool;
  show_crafting_queue?: bool;
  show_entity_info?: bool;
  show_entity_tooltip?: bool;
  show_hotkey_suggestions?: bool;
  show_map_view_options?: bool;
  show_minimap?: bool;
  show_quickbar?: bool;
  show_rail_block_visualisation?: bool;
  show_research_info?: bool;
  show_shortcut_bar?: bool;
  show_side_menu?: bool;
  show_surface_list?: bool;
  show_tool_bar?: bool;
  update_entity_selection?: bool;
};
export type GateOverRailBuildTipTrigger = CountBasedTipTrigger & {
  type: 'gate-over-rail-build';
};
export type GeneratingPowerTipTrigger = CountBasedTipTrigger & {
  type: 'generating-power';
};
export type GhostShimmerConfig = {
  blend_mode: int32;
  distortion: float;
  distortion_layers: GhostShimmerDistortionData[];
  overlay_layers: GhostShimmerOverlayData[];
  proportional_distortion: bool;
  tint: Color;
  visualize_borders: bool;
  world_uv_modulo: int32;
};
export type GhostShimmerDistortionData = {
  intensity: float;
  shape: int32;
  x: float;
  y: float;
};
export type GhostShimmerOverlayData = {
  blend_mode: int32;
  cutoff: float;
  shape: int32;
  tint: Color;
  x: float;
  y: float;
};
export type GhostTintSet = {
  ghost_delivery_tint: Color;
  ghost_tint: Color;
  tile_ghost_delivery_tint: Color;
  tile_ghost_tint: Color;
  wire_tint: Color;
};
export type GigaCargoHatchDefinition = {
  closing_sound?: InterruptibleSound;
  covered_hatches: uint32[];
  hatch_graphics_back?: Animation;
  hatch_graphics_front?: Animation;
  hatch_render_layer_back?: RenderLayer;
  hatch_render_layer_front?: RenderLayer;
  opening_sound?: InterruptibleSound;
};
export type GiveItemModifier = BaseModifier & {
  count?: ItemCountType;
  item: ItemID;
  quality?: QualityID;
  type: 'give-item';
  use_icon_overlay_constant?: bool;
};
export type GlobalRecipeTints = {
  primary?: Color;
  quaternary?: Color;
  secondary?: Color;
  tertiary?: Color;
};
export type GlobalTintEffectProperties = {
  global_intensity: float;
  global_scale: float;
  intensity: Vector4f;
  noise_texture: EffectTexture;
  offset: Vector4f;
  scale_u: Vector4f;
  scale_v: Vector4f;
  zoom_factor: float;
  zoom_intensity: float;
};
export type GlowStyleSpecification = BaseStyleSpecification & {
  image_set?: ElementImageSet;
  type: 'glow_style';
};
export type GraphStyleSpecification = BaseStyleSpecification & {
  background_color?: Color;
  data_line_highlight_distance?: uint32;
  font?: string;
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
export type GroupAttackTipTrigger = CountBasedTipTrigger & {
  type: 'group-attack';
};
export type GunShift4Way = {
  east?: Vector;
  north: Vector;
  south?: Vector;
  west?: Vector;
};
export type GunSpeedModifier = BaseModifier & {
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
export type HeatEnergySource = BaseEnergySource & {
  connections?: HeatConnection[];
  default_temperature?: double;
  emissions_per_minute?: Record<AirbornePollutantID, double>;
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
export type HorizontalFlowStyleSpecification = BaseStyleSpecification & {
  horizontal_spacing?: int32;
  type: 'horizontal_flow_style';
};
export type HorizontalScrollBarStyleSpecification =
  ScrollBarStyleSpecification & { type: 'horizontal_scrollbar_style' };
export type IconData = {
  draw_background?: bool;
  icon: FileName;
  icon_size?: SpriteSizeType;
  scale?: double;
  shift?: Vector;
  tint?: Color;
};
export type IconDrawSpecification = {
  renderLayer?:
    | 'entity-info-icon-below'
    | 'entity-info-icon-above'
    | 'air-entity-info-icon';
  scale?: float;
  scale_for_many?: float;
  shift?: Vector;
};
export type IconSequencePositioning = {
  inventory_index: unknown /* defines.inventory */;
  max_icon_rows?: uint8;
  max_icons_per_row?: uint8;
  multi_row_initial_height_modifier?: float;
  scale?: float;
  separation_multiplier?: float;
  shift?: Vector;
};
export type ImageStyleSpecification = BaseStyleSpecification & {
  graphical_set?: ElementImageSet;
  invert_colors_of_picture_when_hovered_or_toggled?: bool;
  stretch_image_to_widget_size?: bool;
  type: 'image_style';
};
export type IngredientPrototype =
  | ItemIngredientPrototype
  | FluidIngredientPrototype;
export type InsertItemTriggerEffectItem = TriggerEffectItem & {
  count?: ItemCountType;
  item: ItemID;
  quality?: QualityID;
  type: 'insert-item';
};
export type InserterStackSizeBonusModifier = SimpleModifier & {
  infer_icon?: bool;
  type: 'inserter-stack-size-bonus';
  use_icon_overlay_constant?: bool;
};
export type InstantTriggerDelivery = TriggerDeliveryItem & { type: 'instant' };
export type InterruptibleSound = {
  fade_ticks?: uint32;
  minimal_change_per_tick?: float;
  minimal_sound_duration_for_stopped_sound?: uint16;
  sound?: Sound;
  stopped_sound?: Sound;
};
export type InvokeTileEffectTriggerEffectItem = TriggerEffectItem & {
  tile_collision_mask?: CollisionMaskConnector;
  type: 'invoke-tile-trigger';
};
export type ItemCountType = uint32;
export type ItemGroupID = string;
export type ItemHealthColorData = { color: Color; threshold: float };
export type ItemID = string;
export type ItemIDFilter =
  | { comparator?: ComparatorString; name: ItemID; quality?: QualityID }
  | ItemID;
export type ItemIngredientPrototype = {
  amount: uint16;
  ignored_by_stats?: uint16;
  name: ItemID;
  type: 'item';
};
export type ItemProductPrototype = {
  amount?: uint16;
  amount_max?: uint16;
  amount_min?: uint16;
  extra_count_fraction?: float;
  ignored_by_productivity?: uint16;
  ignored_by_stats?: uint16;
  name: ItemID;
  percent_spoiled?: float;
  probability?: double;
  show_details_in_recipe_tooltip?: bool;
  type: 'item';
};
export type ItemPrototypeFlags = (
  | 'draw-logistic-overlay'
  | 'excluded-from-trash-unrequested'
  | 'always-show'
  | 'hide-from-bonus-gui'
  | 'hide-from-fuel-tooltip'
  | 'not-stackable'
  | 'primary-place-result'
  | 'mod-openable'
  | 'only-in-cursor'
  | 'spawnable'
  | 'spoil-result'
  | 'ignore-spoil-time-modifier'
)[];
export type ItemStackIndex = uint16;
export type ItemSubGroupID = string;
export type ItemToPlace = { count: ItemCountType; item: ItemID };
export type KillTipTrigger = CountBasedTipTrigger & {
  damage_type?: DamageTypeID;
  entity?: EntityID;
  match_type_only?: bool;
  type: 'kill';
};
export type LabelStyleSpecification = BaseStyleSpecification & {
  clicked_font_color?: Color;
  disabled_font_color?: Color;
  font?: string;
  font_color?: Color;
  game_controller_hovered_font_color?: Color;
  hovered_font_color?: Color;
  parent_hovered_font_color?: Color;
  rich_text_highlight_error_color?: Color;
  rich_text_highlight_ok_color?: Color;
  rich_text_highlight_warning_color?: Color;
  rich_text_setting?: RichTextSetting;
  single_line?: bool;
  type: 'label_style';
  underlined?: bool;
};
export type LaboratoryProductivityModifier = SimpleModifier & {
  infer_icon?: bool;
  type: 'laboratory-productivity';
  use_icon_overlay_constant?: bool;
};
export type LaboratorySpeedModifier = SimpleModifier & {
  infer_icon?: bool;
  type: 'laboratory-speed';
  use_icon_overlay_constant?: bool;
};
export type LayeredSound = { layers: Sound[] } | Sound;
export type LayeredSprite = Sprite &
  ({ render_layer: RenderLayer } | LayeredSprite[]);
export type LayeredSpriteVariations = LayeredSprite[];
export type LightDefinition =
  | {
      add_perspective?: bool;
      color?: Color;
      flicker_interval?: uint8;
      flicker_max_modifier?: float;
      flicker_min_modifier?: float;
      intensity: float;
      minimum_darkness?: float;
      offset_flicker?: bool;
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
      flicker_interval?: uint8;
      flicker_max_modifier?: float;
      flicker_min_modifier?: float;
      intensity: float;
      minimum_darkness?: float;
      offset_flicker?: bool;
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
export type LightProperties = { color?: Color; direction?: Vector3D };
export type LightningGraphicsSet = {
  attractor_hit_animation?: Animation;
  bolt_detail_level?: uint8;
  bolt_half_width?: float;
  bolt_midpoint_variance?: float;
  cloud_background?: Animation;
  cloud_detail_level?: uint8;
  cloud_fork_orientation_variance?: float;
  cloud_forks?: uint8;
  explosion?: AnimationVariations;
  fork_intensity_multiplier?: float;
  fork_orientation_variance?: float;
  ground_streamer_variance?: float;
  ground_streamers?: Animation[];
  light?: LightDefinition;
  max_bolt_offset?: float;
  max_fork_probability?: float;
  max_ground_streamer_distance?: float;
  max_relative_fork_length?: float;
  min_ground_streamer_distance?: float;
  min_relative_fork_length?: float;
  relative_cloud_fork_length?: float;
  shader_configuration?: LightningShaderConfiguration[];
};
export type LightningPriorityRule = LightningRuleBase & {
  priority_bonus: int32;
};
export type LightningProperties = {
  exemption_rules: LightningRuleBase[];
  lightning_types: EntityID[];
  lightnings_per_chunk_per_tick: double;
  priority_rules: LightningPriorityRule[];
  search_radius: double;
};
export type LightningRuleBase = {
  string: string;
  type:
    | 'impact-soundset'
    | 'prototype'
    | 'id'
    | 'countAsRockForFilteredDeconstruction';
};
export type LightningShaderConfiguration = {
  color: Color;
  distortion: float;
  power: float;
  thickness: float;
};
export type LimitChestTipTrigger = CountBasedTipTrigger & {
  type: 'limit-chest';
};
export type LineStyleSpecification = BaseStyleSpecification & {
  border?: BorderImageSet;
  type: 'line_style';
};
export type LineTriggerItem = TriggerItem & {
  range: double;
  range_effects?: TriggerEffect;
  type: 'line';
  width: double;
};
export type LinkedBeltStructure = {
  back_patch?: Sprite4Way;
  direction_in?: Sprite4Way;
  direction_in_side_loading?: Sprite4Way;
  direction_out?: Sprite4Way;
  direction_out_side_loading?: Sprite4Way;
  front_patch?: Sprite4Way;
};
export type LinkedGameControl =
  | 'move-up'
  | 'move-down'
  | 'move-left'
  | 'move-right'
  | 'open-character-gui'
  | 'open-gui'
  | 'confirm-gui'
  | 'toggle-free-cursor'
  | 'mine'
  | 'build'
  | 'build-ghost'
  | 'super-forced-build'
  | 'clear-cursor'
  | 'pipette'
  | 'rotate'
  | 'reverse-rotate'
  | 'flip-horizontal'
  | 'flip-vertical'
  | 'pick-items'
  | 'drop-cursor'
  | 'show-info'
  | 'shoot-enemy'
  | 'shoot-selected'
  | 'next-weapon'
  | 'toggle-driving'
  | 'zoom-in'
  | 'zoom-out'
  | 'use-item'
  | 'alternative-use-item'
  | 'toggle-console'
  | 'copy-entity-settings'
  | 'paste-entity-settings'
  | 'controller-gui-logistics-tab'
  | 'controller-gui-character-tab'
  | 'controller-gui-crafting-tab'
  | 'toggle-rail-layer'
  | 'select-for-blueprint'
  | 'select-for-cancel-deconstruct'
  | 'select-for-super-forced-deconstruct'
  | 'reverse-select'
  | 'alt-reverse-select'
  | 'deselect'
  | 'cycle-blueprint-forwards'
  | 'cycle-blueprint-backwards'
  | 'focus-search'
  | 'larger-terrain-building-area'
  | 'smaller-terrain-building-area'
  | 'remove-pole-cables'
  | 'build-with-obstacle-avoidance'
  | 'add-station'
  | 'add-temporary-station'
  | 'rename-all'
  | 'fast-wait-condition'
  | 'drag-map'
  | 'move-tag'
  | 'place-in-chat'
  | 'place-ping'
  | 'pin'
  | 'activate-tooltip'
  | 'next-surface'
  | 'previous-surface'
  | 'cycle-quality-up'
  | 'cycle-quality-down'
  | 'craft'
  | 'craft-5'
  | 'craft-all'
  | 'cancel-craft'
  | 'cancel-craft-5'
  | 'cancel-craft-all'
  | 'pick-item'
  | 'stack-transfer'
  | 'inventory-transfer'
  | 'fast-entity-transfer'
  | 'cursor-split'
  | 'stack-split'
  | 'inventory-split'
  | 'fast-entity-split'
  | 'toggle-filter'
  | 'open-item'
  | 'copy-inventory-filter'
  | 'paste-inventory-filter'
  | 'show-quick-panel'
  | 'next-quick-panel-page'
  | 'previous-quick-panel-page'
  | 'next-quick-panel-tab'
  | 'previous-quick-panel-tab'
  | 'rotate-active-quick-bars'
  | 'next-active-quick-bar'
  | 'previous-active-quick-bar'
  | 'quick-bar-button-1'
  | 'quick-bar-button-2'
  | 'quick-bar-button-3'
  | 'quick-bar-button-4'
  | 'quick-bar-button-5'
  | 'quick-bar-button-6'
  | 'quick-bar-button-7'
  | 'quick-bar-button-8'
  | 'quick-bar-button-9'
  | 'quick-bar-button-10'
  | 'quick-bar-button-1-secondary'
  | 'quick-bar-button-2-secondary'
  | 'quick-bar-button-3-secondary'
  | 'quick-bar-button-4-secondary'
  | 'quick-bar-button-5-secondary'
  | 'quick-bar-button-6-secondary'
  | 'quick-bar-button-7-secondary'
  | 'quick-bar-button-8-secondary'
  | 'quick-bar-button-9-secondary'
  | 'quick-bar-button-10-secondary'
  | 'action-bar-select-page-1'
  | 'action-bar-select-page-2'
  | 'action-bar-select-page-3'
  | 'action-bar-select-page-4'
  | 'action-bar-select-page-5'
  | 'action-bar-select-page-6'
  | 'action-bar-select-page-7'
  | 'action-bar-select-page-8'
  | 'action-bar-select-page-9'
  | 'action-bar-select-page-10'
  | 'copy'
  | 'cut'
  | 'paste'
  | 'cycle-clipboard-forwards'
  | 'cycle-clipboard-backwards'
  | 'undo'
  | 'redo'
  | 'toggle-menu'
  | 'toggle-map'
  | 'close-menu'
  | 'open-technology-gui'
  | 'production-statistics'
  | 'logistic-networks'
  | 'toggle-blueprint-library'
  | 'open-trains-gui'
  | 'open-factoriopedia'
  | 'back'
  | 'forward'
  | 'pause-game'
  | 'confirm-message'
  | 'previous-technology'
  | 'previous-mod'
  | 'connect-train'
  | 'disconnect-train'
  | 'submit-feedback'
  | 'editor-next-variation'
  | 'editor-previous-variation'
  | 'editor-clone-item'
  | 'editor-delete-item'
  | 'editor-toggle-pause'
  | 'editor-tick-once'
  | 'editor-speed-up'
  | 'editor-speed-down'
  | 'editor-reset-speed'
  | 'editor-set-clone-brush-source'
  | 'editor-set-clone-brush-destination'
  | 'editor-switch-to-surface'
  | 'editor-remove-scripting-object'
  | 'debug-toggle-atlas-gui'
  | 'debug-toggle-gui-visibility'
  | 'debug-toggle-debug-settings'
  | 'debug-toggle-basic'
  | 'debug-reset-zoom'
  | 'debug-reset-zoom-2x'
  | 'toggle-gui-debug'
  | 'toggle-gui-style-view'
  | 'toggle-gui-shadows'
  | 'toggle-gui-glows'
  | 'open-prototypes-gui'
  | 'open-prototype-explorer-gui'
  | 'increase-ui-scale'
  | 'decrease-ui-scale'
  | 'reset-ui-scale'
  | 'slash-editor'
  | 'toggle-entity'
  | 'next-player-in-replay'
  | 'move-blueprint-absolute-grid-up'
  | 'move-blueprint-absolute-grid-down'
  | 'move-blueprint-absolute-grid-left'
  | 'move-blueprint-absolute-grid-right'
  | 'move-blueprint-entities-up'
  | 'move-blueprint-entities-down'
  | 'move-blueprint-entities-left'
  | 'move-blueprint-entities-right'
  | 'play-next-track'
  | 'play-previous-track'
  | 'pause-resume-music';
export type ListBoxStyleSpecification = BaseStyleSpecification & {
  item_style?: ButtonStyleSpecification;
  scroll_pane_style?: ScrollPaneStyleSpecification;
  type: 'list_box_style';
};
export type LoaderStructure = {
  back_patch?: Sprite4Way;
  direction_in?: Sprite4Way;
  direction_out?: Sprite4Way;
  front_patch?: Sprite4Way;
  frozen_patch_in?: Sprite4Way;
  frozen_patch_out?: Sprite4Way;
};
export type LocalisedString = string | LocalisedString[];
export type LogisticFilterIndex = uint16;
export type LootItem = {
  count_max?: double;
  count_min?: double;
  item: ItemID;
  probability?: double;
};
export type LowPowerTipTrigger = CountBasedTipTrigger & { type: 'low-power' };
export type MainSound = {
  activity_to_speed_modifiers?: ActivityMatchingModifiers;
  activity_to_volume_modifiers?: ActivityMatchingModifiers;
  audible_distance_modifier?: double;
  fade_in_ticks?: uint32;
  fade_out_ticks?: uint32;
  match_progress_to_activity?: bool;
  match_speed_to_activity?: bool;
  match_volume_to_activity?: bool;
  play_for_working_visualisations?: string[];
  probability?: double;
  sound?: Sound;
  volume_smoothing_window_size?: uint32;
};
export type ManualTransferTipTrigger = CountBasedTipTrigger & {
  type: 'manual-transfer';
};
export type ManualWireDragTipTrigger = CountBasedTipTrigger & {
  match_type_only?: bool;
  source?: EntityID;
  target?: EntityID;
  type: 'manual-wire-drag';
  wire_type?: 'red' | 'green' | 'copper';
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
export type MapGenPresetAsteroidSettings = {
  max_ray_portals_expanded_per_tick?: uint32;
  spawning_rate?: double;
};
export type MapGenPresetDifficultySettings = {
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
  no_enemies_mode?: bool;
  peaceful_mode?: bool;
  property_expression_names?: Record<string, string | bool | double>;
  seed?: uint32;
  starting_area?: MapGenSize;
  starting_points?: MapPosition[];
  territory_settings?: TerritorySettings;
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
export type MapLocation = { direction: MapPosition; position: MapPosition };
export type MapPosition = { x: double; y: double } | [double, double];
export type MapTick = uint64;
export type MaterialAmountType = double;
export type MaterialTextureParameters = {
  count: uint32;
  line_length?: uint32;
  picture: FileName;
  scale?: float;
  x?: SpriteSizeType;
  y?: SpriteSizeType;
};
export type MathExpression = string;
export type MaxFailedAttemptsPerTickPerConstructionQueueModifier =
  SimpleModifier & {
    type: 'max-failed-attempts-per-tick-per-construction-queue';
    use_icon_overlay_constant?: bool;
  };
export type MaxSuccessfulAttemptsPerTickPerConstructionQueueModifier =
  SimpleModifier & {
    type: 'max-successful-attempts-per-tick-per-construction-queue';
    use_icon_overlay_constant?: bool;
  };
export type MaximumFollowingRobotsCountModifier = SimpleModifier & {
  infer_icon?: bool;
  type: 'maximum-following-robots-count';
  use_icon_overlay_constant?: bool;
};
export type MinableProperties = {
  count?: uint16;
  fluid_amount?: FluidAmount;
  include_in_show_counts?: bool;
  mining_particle?: ParticleID;
  mining_time: double;
  mining_trigger?: Trigger;
  required_fluid?: FluidID;
  result?: ItemID;
  results?: ProductPrototype[];
};
export type MineEntityTechnologyTrigger = {
  entity: EntityID;
  type: 'mine-entity';
};
export type MineItemByRobotTipTrigger = CountBasedTipTrigger & {
  type: 'mine-item-by-robot';
};
export type MinimapStyleSpecification = EmptyWidgetStyleSpecification & {
  type: 'minimap_style';
};
export type MiningDrillGraphicsSet = WorkingVisualisations & {
  animation_progress?: float;
  circuit_connector_layer?: RenderLayer | CircuitConnectorLayer;
  circuit_connector_secondary_draw_order?:
    | int8
    | CircuitConnectorSecondaryDrawOrder;
  drilling_vertical_movement_duration?: uint16;
  frozen_patch?: Sprite4Way;
  reset_animation_when_frozen?: bool;
};
export type MiningDrillProductivityBonusModifier = SimpleModifier & {
  infer_icon?: bool;
  type: 'mining-drill-productivity-bonus';
  use_icon_overlay_constant?: bool;
};
export type MiningWithFluidModifier = BoolModifier & {
  type: 'mining-with-fluid';
  use_icon_overlay_constant?: bool;
};
export type Mirroring =
  | 'horizontal'
  | 'vertical'
  | 'diagonal-pos'
  | 'diagonal-neg';
export type ModSetting = { value: int32 | double | bool | string | Color };
export type Modifier =
  | InserterStackSizeBonusModifier
  | BulkInserterCapacityBonusModifier
  | LaboratorySpeedModifier
  | CharacterLogisticTrashSlotsModifier
  | MaximumFollowingRobotsCountModifier
  | WorkerRobotSpeedModifier
  | WorkerRobotStorageModifier
  | TurretAttackModifier
  | AmmoDamageModifier
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
  | DeconstructionTimeToLiveModifier
  | MaxFailedAttemptsPerTickPerConstructionQueueModifier
  | MaxSuccessfulAttemptsPerTickPerConstructionQueueModifier
  | CharacterHealthBonusModifier
  | MiningDrillProductivityBonusModifier
  | TrainBrakingForceBonusModifier
  | WorkerRobotBatteryModifier
  | LaboratoryProductivityModifier
  | FollowerRobotLifetimeModifier
  | ArtilleryRangeModifier
  | NothingModifier
  | CharacterLogisticRequestsModifier
  | VehicleLogisticsModifier
  | UnlockSpaceLocationModifier
  | UnlockQualityModifier
  | SpacePlatformsModifier
  | CircuitNetworkModifier
  | CargoLandingPadLimitModifier
  | ChangeRecipeProductivityModifier
  | CliffDeconstructionEnabledModifier
  | MiningWithFluidModifier
  | RailSupportOnDeepOilOceanModifier
  | RailPlannerAllowElevatedRailsModifier
  | BeaconDistributionModifier
  | CreateGhostOnEntityDeathModifier
  | BeltStackSizeBonusModifier;
export type Mods = Record<string, string>;
export type ModuleCategoryID = string;
export type ModuleTint =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'none';
export type ModuleTransferTipTrigger = CountBasedTipTrigger & {
  module: ItemID;
  type: 'module-transfer';
};
export type MouseCursorID = string;
export type NeighbourConnectable = {
  affected_by_direction?: bool;
  connections: NeighbourConnectableConnectionDefinition[];
  neighbour_search_distance?: float;
};
export type NeighbourConnectableConnectionCategory = string;
export type NeighbourConnectableConnectionDefinition = {
  category: NeighbourConnectableConnectionCategory;
  location: MapLocation;
  neighbour_category?: NeighbourConnectableConnectionCategory[];
};
export type NestedTriggerEffectItem = TriggerEffectItem & {
  action: Trigger;
  type: 'nested-result';
};
export type NoiseExpression = string | bool | double;
export type NoiseFunction = {
  expression: NoiseExpression;
  local_expressions?: Record<string, NoiseExpression>;
  local_functions?: Record<string, NoiseFunction>;
  parameters: string[];
};
export type NothingModifier = BaseModifier & {
  effect_description?: LocalisedString;
  type: 'nothing';
  use_icon_overlay_constant?: bool;
};
export type OffshorePumpGraphicsSet = {
  animation?: Animation4Way;
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
  pictures?: SpriteVariations;
  pictures_lower?: SpriteVariations;
  render_layer?: RenderLayer;
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
export type PasteEntitySettingsTipTrigger = CountBasedTipTrigger & {
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
  negative_path_cache_delay_interval: uint32;
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
export type PerceivedPerformance = {
  maximum?: double;
  minimum?: double;
  performance_to_activity_rate?: double;
};
export type PersistentWorldAmbientSoundDefinition = { sound: Sound } | Sound;
export type PersistentWorldAmbientSoundsDefinition = {
  base_ambience?:
    | PersistentWorldAmbientSoundDefinition
    | PersistentWorldAmbientSoundDefinition[];
  crossfade?: PersistentWorldAmbientSoundsDefinitionCrossfade;
  semi_persistent?:
    | SemiPersistentWorldAmbientSoundDefinition
    | SemiPersistentWorldAmbientSoundDefinition[];
  wind?:
    | PersistentWorldAmbientSoundDefinition
    | PersistentWorldAmbientSoundDefinition[];
};
export type PersistentWorldAmbientSoundsDefinitionCrossfade = Fade & {
  order: ['wind' | 'base_ambience', 'wind' | 'base_ambience'];
};
export type PipeConnectionDefinition = {
  connection_category?: string | string[];
  connection_type?: PipeConnectionType;
  direction?: Direction;
  enable_working_visualisations?: string[];
  flow_direction?: 'input-output' | 'input' | 'output';
  linked_connection_id?: FluidBoxLinkedConnectionID;
  max_distance_tint?: Color;
  max_underground_distance?: uint8;
  position?: MapPosition;
  positions?: [MapPosition, MapPosition, MapPosition, MapPosition];
  underground_collision_mask?: CollisionMaskConnector;
};
export type PipeConnectionType = 'normal' | 'underground' | 'linked';
export type PipePictures = {
  corner_down_left?: Sprite;
  corner_down_left_disabled_visualization?: Sprite;
  corner_down_left_frozen?: Sprite;
  corner_down_left_visualization?: Sprite;
  corner_down_right?: Sprite;
  corner_down_right_disabled_visualization?: Sprite;
  corner_down_right_frozen?: Sprite;
  corner_down_right_visualization?: Sprite;
  corner_up_left?: Sprite;
  corner_up_left_disabled_visualization?: Sprite;
  corner_up_left_frozen?: Sprite;
  corner_up_left_visualization?: Sprite;
  corner_up_right?: Sprite;
  corner_up_right_disabled_visualization?: Sprite;
  corner_up_right_frozen?: Sprite;
  corner_up_right_visualization?: Sprite;
  cross?: Sprite;
  cross_disabled_visualization?: Sprite;
  cross_frozen?: Sprite;
  cross_visualization?: Sprite;
  ending_down?: Sprite;
  ending_down_disabled_visualization?: Sprite;
  ending_down_frozen?: Sprite;
  ending_down_visualization?: Sprite;
  ending_left?: Sprite;
  ending_left_disabled_visualization?: Sprite;
  ending_left_frozen?: Sprite;
  ending_left_visualization?: Sprite;
  ending_right?: Sprite;
  ending_right_disabled_visualization?: Sprite;
  ending_right_frozen?: Sprite;
  ending_right_visualization?: Sprite;
  ending_up?: Sprite;
  ending_up_disabled_visualization?: Sprite;
  ending_up_frozen?: Sprite;
  ending_up_visualization?: Sprite;
  fluid_background?: Sprite;
  gas_flow?: Animation;
  high_temperature_flow?: Sprite;
  horizontal_window_background?: Sprite;
  low_temperature_flow?: Sprite;
  middle_temperature_flow?: Sprite;
  straight_horizontal?: Sprite;
  straight_horizontal_disabled_visualization?: Sprite;
  straight_horizontal_frozen?: Sprite;
  straight_horizontal_visualization?: Sprite;
  straight_horizontal_window?: Sprite;
  straight_horizontal_window_disabled_visualization?: Sprite;
  straight_horizontal_window_frozen?: Sprite;
  straight_horizontal_window_visualization?: Sprite;
  straight_vertical?: Sprite;
  straight_vertical_disabled_visualization?: Sprite;
  straight_vertical_frozen?: Sprite;
  straight_vertical_single?: Sprite;
  straight_vertical_single_disabled_visualization?: Sprite;
  straight_vertical_single_frozen?: Sprite;
  straight_vertical_single_visualization?: Sprite;
  straight_vertical_visualization?: Sprite;
  straight_vertical_window?: Sprite;
  straight_vertical_window_disabled_visualization?: Sprite;
  straight_vertical_window_frozen?: Sprite;
  straight_vertical_window_visualization?: Sprite;
  t_down?: Sprite;
  t_down_disabled_visualization?: Sprite;
  t_down_frozen?: Sprite;
  t_down_visualization?: Sprite;
  t_left?: Sprite;
  t_left_disabled_visualization?: Sprite;
  t_left_frozen?: Sprite;
  t_left_visualization?: Sprite;
  t_right?: Sprite;
  t_right_disabled_visualization?: Sprite;
  t_right_frozen?: Sprite;
  t_right_visualization?: Sprite;
  t_up?: Sprite;
  t_up_disabled_visualization?: Sprite;
  t_up_frozen?: Sprite;
  t_up_visualization?: Sprite;
  vertical_window_background?: Sprite;
};
export type PlaceAsTile = {
  condition: CollisionMaskConnector;
  condition_size: uint32;
  invert?: bool;
  result: TileID;
  tile_condition?: TileID[];
};
export type PlaceEquipmentTipTrigger = CountBasedTipTrigger & {
  equipment?: EquipmentID;
  type: 'place-equipment';
};
export type PlanTrainPathTipTrigger = {
  distance: double;
  type: 'plan-train-path';
};
export type PlanetPrototypeMapGenSettings = {
  autoplace_controls?: Record<AutoplaceControlID, FrequencySizeRichness>;
  autoplace_settings?: Record<
    'entity' | 'tile' | 'decorative',
    AutoplaceSettings
  >;
  aux_climate_control?: bool;
  cliff_settings?: CliffPlacementSettings;
  moisture_climate_control?: bool;
  property_expression_names?: Record<string, string | bool | double>;
  territory_settings?: TerritorySettings;
};
export type PlayFor = 'character_actions' | 'everything';
export type PlaySoundTriggerEffectItem = TriggerEffectItem & {
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
export type PlumeEffect = StatelessVisualisation & {
  age_discrimination?: int8;
};
export type PlumesSpecification = {
  max_probability?: float;
  max_y_offset?: float;
  min_probability?: float;
  min_y_offset?: float;
  stateless_visualisations?: PlumeEffect | PlumeEffect[];
};
export type PodAnimationProcessionBezierControlPoint = {
  frame: float;
  timestamp: MapTick;
};
export type PodAnimationProcessionLayer = {
  frames: PodAnimationProcessionBezierControlPoint[];
  graphic?: ProcessionGraphic;
  type: 'pod-animation';
};
export type PodDistanceTraveledProcessionBezierControlPoint = {
  distance?: double;
  distance_t?: double;
  timestamp?: MapTick;
};
export type PodDistanceTraveledProcessionLayer = {
  contribute_to_distance_traveled?: bool;
  distance_traveled_contribution?: float;
  frames: PodDistanceTraveledProcessionBezierControlPoint[];
  reference_group?: ProcessionLayerInheritanceGroupID;
  type: 'pod-distance-traveled';
};
export type PodMovementProcessionBezierControlPoint = {
  offset?: Vector;
  offset_rate?: double;
  offset_rate_t?: double;
  offset_t?: Vector;
  tilt?: double;
  tilt_t?: double;
  timestamp?: MapTick;
};
export type PodMovementProcessionLayer = {
  contribute_to_distance_traveled?: bool;
  distance_traveled_contribution?: float;
  frames: PodMovementProcessionBezierControlPoint[];
  inherit_from?: ProcessionLayerInheritanceGroupID;
  reference_group?: ProcessionLayerInheritanceGroupID;
  type: 'pod-movement';
};
export type PodOpacityProcessionBezierControlPoint = {
  cutscene_opacity?: double;
  cutscene_opacity_t?: double;
  lut_blend?: double;
  lut_blend_t?: double;
  outside_opacity?: double;
  outside_opacity_t?: double;
  timestamp?: MapTick;
};
export type PodOpacityProcessionLayer = {
  frames: PodOpacityProcessionBezierControlPoint[];
  lut: ColorLookupTable;
  type: 'pod-opacity';
};
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
export type ProbabilityTable = ProbabilityTableItem[];
export type ProbabilityTableItem = [uint8, uint8];
export type ProcessionAudio = {
  catalogue_id?: uint32;
  looped_sound?: InterruptibleSound;
  sound?: Sound;
  type: ProcessionAudioType;
};
export type ProcessionAudioCatalogue = ProcessionAudioCatalogueItem[];
export type ProcessionAudioCatalogueItem = {
  index: uint32;
  looped_sound?: InterruptibleSound;
  sound?: Sound;
};
export type ProcessionAudioEvent = {
  audio?: ProcessionAudio;
  loop_id?: uint32;
  type: ProcessionAudioEventType;
  usage?: ProcessionAudioUsage;
};
export type ProcessionAudioEventType =
  | 'play-sound'
  | 'start-looped-sound'
  | 'stop-looped-sound';
export type ProcessionAudioType =
  | 'none'
  | 'sound'
  | 'looped-sound'
  | 'pod-catalogue'
  | 'location-catalogue';
export type ProcessionAudioUsage = 'both' | 'passenger' | 'outside';
export type ProcessionGraphic = {
  animation?: Animation;
  catalogue_id?: uint32;
  sprite?: Sprite;
  type: ProcessionGraphicType;
};
export type ProcessionGraphicCatalogue = ProcessionGraphicCatalogueItem[];
export type ProcessionGraphicCatalogueItem = {
  animation?: Animation;
  index: uint32;
  picture?: Sprite;
};
export type ProcessionGraphicType =
  | 'none'
  | 'sprite'
  | 'animation'
  | 'pod-catalogue'
  | 'location-catalogue'
  | 'hatch-location-catalogue-index';
export type ProcessionID = string;
export type ProcessionLayer =
  | PodDistanceTraveledProcessionLayer
  | PodMovementProcessionLayer
  | PodOpacityProcessionLayer
  | SingleGraphicProcessionLayer
  | CoverGraphicProcessionLayer
  | TintProcessionLayer
  | PodAnimationProcessionLayer;
export type ProcessionLayerInheritanceGroupID = string;
export type ProcessionLayerWithTime = ProcessionLayer;
export type ProcessionSet = {
  arrival: ProcessionID[];
  departure: ProcessionID[];
};
export type ProcessionTimeline = {
  audio_events: ProcessionAudioEvent[];
  draw_switch_tick?: MapTick;
  duration: MapTick;
  intermezzo_max_duration?: MapTick;
  intermezzo_min_duration?: MapTick;
  layers: ProcessionLayer[];
  special_action_tick?: MapTick;
};
export type ProductPrototype =
  | ItemProductPrototype
  | FluidProductPrototype
  | ResearchProgressProductPrototype;
export type ProductionHealthEffect = {
  not_producing?: float;
  producing?: float;
};
export type ProductionType = 'none' | 'input' | 'input-output' | 'output';
export type ProgrammableSpeakerInstrument = {
  name: string;
  notes: ProgrammableSpeakerNote[];
};
export type ProgrammableSpeakerNote = { name: string; sound: Sound };
export type ProgressBarStyleSpecification = BaseStyleSpecification & {
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
export type ProjectileAttackParameters = BaseAttackParameters & {
  apply_projection_to_projectile_creation_position?: bool;
  projectile_center?: Vector;
  projectile_creation_distance?: float;
  projectile_creation_offsets?: Vector[];
  projectile_creation_parameters?: CircularProjectileCreationSpecification;
  projectile_orientation_offset?: RealOrientation;
  shell_particle?: CircularParticleCreationSpecification;
  type: 'projectile';
};
export type ProjectileTriggerDelivery = TriggerDeliveryItem & {
  direction_deviation?: float;
  max_range?: double;
  min_range?: double;
  projectile: EntityID;
  range_deviation?: float;
  starting_speed: float;
  starting_speed_deviation?: float;
  type: 'projectile';
};
export type PrototypeStrafeSettings = {
  clockwise_chance?: float;
  face_target?: bool;
  ideal_distance?: double;
  ideal_distance_importance?: float;
  ideal_distance_importance_variance?: float;
  ideal_distance_tolerance?: double;
  ideal_distance_variance?: double;
  max_distance?: double;
};
export type PuddleTileEffectParameters = {
  puddle_noise_texture: EffectTexture;
  water_effect?: TileEffectDefinitionID;
  water_effect_parameters?: WaterTileEffectParameters;
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
export type PushBackTriggerEffectItem = TriggerEffectItem & {
  distance: float;
  type: 'push-back';
};
export type QualityID = string;
export type RadioButtonStyleSpecification =
  StyleWithClickableGraphicalSetSpecification & {
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
export type RailFenceDirectionSet = {
  east?: SpriteVariations;
  north?: SpriteVariations;
  northeast?: SpriteVariations;
  northwest?: SpriteVariations;
  south?: SpriteVariations;
  southeast?: SpriteVariations;
  southwest?: SpriteVariations;
  west?: SpriteVariations;
};
export type RailFenceGraphicsSet = {
  back_fence_render_layer?: RenderLayer;
  back_fence_render_layer_secondary?: RenderLayer;
  front_fence_render_layer?: RenderLayer;
  front_fence_render_layer_secondary?: RenderLayer;
  segment_count: uint8;
  side_A: RailFencePictureSet;
  side_B: RailFencePictureSet;
};
export type RailFencePictureSet = {
  ends: [
    RailFenceDirectionSet,
    RailFenceDirectionSet,
    RailFenceDirectionSet,
    RailFenceDirectionSet,
  ];
  ends_upper?: [
    RailFenceDirectionSet,
    RailFenceDirectionSet,
    RailFenceDirectionSet,
    RailFenceDirectionSet,
  ];
  fence: RailFenceDirectionSet;
  fence_upper?: RailFenceDirectionSet;
};
export type RailPictureSet = {
  back_rail_endings?: Sprite16Way;
  east: RailPieceLayers;
  fog_mask?: RailsFogMaskDefinitions;
  front_rail_endings?: Sprite16Way;
  north: RailPieceLayers;
  northeast: RailPieceLayers;
  northwest: RailPieceLayers;
  rail_endings: Sprite16Way;
  render_layers: RailRenderLayers;
  secondary_render_layers?: RailRenderLayers;
  segment_visualisation_endings?: RotatedAnimation;
  slice_origin?: RailsSliceOffsets;
  south: RailPieceLayers;
  southeast: RailPieceLayers;
  southwest: RailPieceLayers;
  west: RailPieceLayers;
};
export type RailPieceLayers = {
  backplates?: SpriteVariations;
  metals?: SpriteVariations;
  segment_visualisation_middle?: Sprite;
  shadow_mask?: Sprite;
  shadow_subtract_mask?: Sprite;
  stone_path?: SpriteVariations;
  stone_path_background?: SpriteVariations;
  ties?: SpriteVariations;
  underwater_structure?: Sprite;
  water_reflection?: Sprite;
};
export type RailPlannerAllowElevatedRailsModifier = BoolModifier & {
  type: 'rail-planner-allow-elevated-rails';
  use_icon_overlay_constant?: bool;
};
export type RailRenderLayers = {
  back_end?: RenderLayer;
  front_end?: RenderLayer;
  metal?: RenderLayer;
  screw?: RenderLayer;
  stone_path?: RenderLayer;
  stone_path_lower?: RenderLayer;
  tie?: RenderLayer;
  underwater_layer_offset?: int8;
};
export type RailSignalColorToFrameIndex = {
  blue?: uint8;
  green?: uint8;
  none?: uint8;
  red?: uint8;
  yellow?: uint8;
};
export type RailSignalLightDefinition = {
  light: LightDefinition;
  shift?: Vector;
};
export type RailSignalLights = {
  blue?: RailSignalLightDefinition;
  green?: RailSignalLightDefinition;
  red?: RailSignalLightDefinition;
  yellow?: RailSignalLightDefinition;
};
export type RailSignalPictureSet = {
  circuit_connector?: CircuitConnectorDefinition[];
  circuit_connector_render_layer?: RenderLayer;
  lights: RailSignalLights;
  rail_piece?: RailSignalStaticSpriteLayer;
  selection_box_shift?: Vector[];
  signal_color_to_structure_frame_index: RailSignalColorToFrameIndex;
  structure: RotatedAnimation;
  structure_align_to_animation_index?: uint8[];
  structure_render_layer?: RenderLayer;
  upper_rail_piece?: RailSignalStaticSpriteLayer;
};
export type RailSignalStaticSpriteLayer = {
  align_to_frame_index?: uint8[];
  hide_if_not_connected_to_rails?: bool;
  hide_if_simulation?: bool;
  render_layer?: RenderLayer;
  shifts?: MapPosition[];
  sprites: Animation;
};
export type RailSupportGraphicsSet = {
  render_layer?: RenderLayer;
  structure: RotatedSprite;
  underwater_layer_offset?: int8;
  underwater_structure?: RotatedSprite;
};
export type RailSupportOnDeepOilOceanModifier = BoolModifier & {
  type: 'rail-support-on-deep-oil-ocean';
  use_icon_overlay_constant?: bool;
};
export type RailsFogMaskDefinitions = {
  east?: FogMaskShapeDefinition;
  north?: FogMaskShapeDefinition;
  south?: FogMaskShapeDefinition;
  west?: FogMaskShapeDefinition;
};
export type RailsSliceOffsets = {
  east?: Vector;
  north?: Vector;
  south?: Vector;
  west?: Vector;
};
export type RandomRange = [uint8, uint8] | uint8;
export type RangeMode =
  | 'center-to-center'
  | 'bounding-box-to-bounding-box'
  | 'center-to-bounding-box';
export type RangedValue = [float, float] | float;
export type RealOrientation = float;
export type RecipeCategoryID = string;
export type RecipeID = string;
export type RecipeTints = {
  primary?: Color;
  quaternary?: Color;
  secondary?: Color;
  tertiary?: Color;
};
export type RenderLayer =
  | 'zero'
  | 'background-transitions'
  | 'under-tiles'
  | 'decals'
  | 'above-tiles'
  | 'ground-layer-1'
  | 'ground-layer-2'
  | 'ground-layer-3'
  | 'ground-layer-4'
  | 'ground-layer-5'
  | 'lower-radius-visualization'
  | 'radius-visualization'
  | 'transport-belt-integration'
  | 'resource'
  | 'building-smoke'
  | 'rail-stone-path-lower'
  | 'rail-stone-path'
  | 'rail-tie'
  | 'decorative'
  | 'ground-patch'
  | 'ground-patch-higher'
  | 'ground-patch-higher2'
  | 'rail-chain-signal-metal'
  | 'rail-screw'
  | 'rail-metal'
  | 'remnants'
  | 'floor'
  | 'transport-belt'
  | 'transport-belt-endings'
  | 'floor-mechanics-under-corpse'
  | 'corpse'
  | 'floor-mechanics'
  | 'item'
  | 'transport-belt-reader'
  | 'lower-object'
  | 'transport-belt-circuit-connector'
  | 'lower-object-above-shadow'
  | 'lower-object-overlay'
  | 'object-under'
  | 'object'
  | 'cargo-hatch'
  | 'higher-object-under'
  | 'higher-object-above'
  | 'train-stop-top'
  | 'item-in-inserter-hand'
  | 'above-inserters'
  | 'wires'
  | 'under-elevated'
  | 'elevated-rail-stone-path-lower'
  | 'elevated-rail-stone-path'
  | 'elevated-rail-tie'
  | 'elevated-rail-screw'
  | 'elevated-rail-metal'
  | 'elevated-lower-object'
  | 'elevated-object'
  | 'elevated-higher-object'
  | 'fluid-visualization'
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
export type ResearchIngredient = [ItemID, uint16];
export type ResearchProgressProductPrototype = {
  amount?: double;
  research_item: ItemID;
  type: 'research-progress';
};
export type ResearchTechnologyTipTrigger = {
  technology: TechnologyID;
  type: 'research';
};
export type ResearchWithSciencePackTipTrigger = {
  science_pack: ItemID;
  type: 'research-with-science-pack';
};
export type Resistance = {
  decrease?: float;
  percent?: float;
  type: DamageTypeID;
};
export type ResourceCategoryID = string;
export type RichTextSetting = 'enabled' | 'disabled' | 'highlight';
export type RollingStockRotatedSlopedGraphics = {
  rotated: RotatedSprite;
  slope_angle_between_frames?: double;
  slope_back_equals_front?: bool;
  sloped?: RotatedSprite;
};
export type RotateEntityTipTrigger = CountBasedTipTrigger & {
  type: 'rotate-entity';
};
export type RotatedAnimation = AnimationParameters & {
  apply_projection?: bool;
  axially_symmetrical?: bool;
  counterclockwise?: bool;
  direction_count?: uint32;
  filename?: FileName;
  filenames?: FileName[];
  layers?: RotatedAnimation[];
  lines_per_file?: uint32;
  middle_orientation?: RealOrientation;
  orientation_range?: float;
  slice?: uint32;
  still_frame?: uint32;
  stripes?: Stripe[];
};
export type RotatedAnimation8Way =
  | {
      east?: RotatedAnimation;
      north: RotatedAnimation;
      north_east?: RotatedAnimation;
      north_west?: RotatedAnimation;
      south?: RotatedAnimation;
      south_east?: RotatedAnimation;
      south_west?: RotatedAnimation;
      west?: RotatedAnimation;
    }
  | RotatedAnimation;
export type RotatedAnimationVariations = RotatedAnimation | RotatedAnimation[];
export type RotatedSprite = SpriteParameters & {
  allow_low_quality_rotation?: bool;
  apply_projection?: bool;
  axially_symmetrical?: bool;
  back_equals_front?: bool;
  counterclockwise?: bool;
  dice?: SpriteSizeType;
  dice_x?: SpriteSizeType;
  dice_y?: SpriteSizeType;
  direction_count?: uint16;
  filename?: FileName;
  filenames?: FileName[];
  frames?: RotatedSpriteFrame[];
  generate_sdf?: bool;
  layers?: RotatedSprite[];
  line_length?: uint32;
  lines_per_file?: uint64;
};
export type RotatedSpriteFrame = {
  height?: SpriteSizeType;
  shift?: Vector;
  width?: SpriteSizeType;
  x?: SpriteSizeType;
  y?: SpriteSizeType;
};
export type ScriptTriggerEffectItem = TriggerEffectItem & {
  effect_id: string;
  type: 'script';
};
export type ScrollBarStyleSpecification = BaseStyleSpecification & {
  background_graphical_set?: ElementImageSet;
  thumb_button_style?: ButtonStyleSpecification;
};
export type ScrollPaneStyleSpecification = BaseStyleSpecification & {
  always_draw_borders?: bool;
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
  scrollbars_go_outside?: bool;
  type: 'scroll_pane_style';
  vertical_flow_style?: VerticalFlowStyleSpecification;
  vertical_scrollbar_style?: VerticalScrollBarStyleSpecification;
};
export type SegmentEngineSpecification = { segments: SegmentSpecification[] };
export type SegmentSpecification = { segment: EntityID };
export type SelectionModeData = {
  border_color: Color;
  chart_color?: Color;
  count_button_color?: Color;
  cursor_box_type: CursorBoxType;
  ended_sound?: Sound;
  entity_filter_mode?: 'whitelist' | 'blacklist';
  entity_filters?: EntityID[];
  entity_type_filters?: string[];
  mode: SelectionModeFlags;
  play_ended_sound_when_nothing_selected?: bool;
  started_sound?: Sound;
  tile_filter_mode?: 'whitelist' | 'blacklist';
  tile_filters?: TileID[];
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
      | 'is-military-target'
      | 'entity-with-owner'
      | 'avoid-rolling-stock'
      | 'avoid-vehicle'
      | 'controllable'
      | 'controllable-add'
      | 'controllable-remove'
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
      | 'is-military-target'
      | 'entity-with-owner'
      | 'avoid-rolling-stock'
      | 'avoid-vehicle'
      | 'controllable'
      | 'controllable-add'
      | 'controllable-remove'
      | 'entity-ghost'
      | 'tile-ghost'
    )[];
export type SemiPersistentWorldAmbientSoundDefinition =
  | { delay_mean_seconds?: float; delay_variance_seconds?: float; sound: Sound }
  | Sound;
export type SendItemToOrbitTechnologyTrigger = {
  item: ItemIDFilter;
  type: 'send-item-to-orbit';
};
export type SendSpidertronTipTrigger = CountBasedTipTrigger & {
  append?: bool;
  type: 'send-spidertron';
};
export type SendToOrbitMode = 'not-sendable' | 'manual' | 'automated';
export type SequenceTipTrigger = { triggers: TipTrigger[]; type: 'sequence' };
export type SetFilterTipTrigger = CountBasedTipTrigger & {
  consecutive?: bool;
  entity?: EntityID;
  match_type_only?: bool;
  type: 'set-filter';
};
export type SetLogisticRequestTipTrigger = CountBasedTipTrigger & {
  entity?: EntityID;
  logistic_chest_only?: bool;
  type: 'set-logistic-request';
};
export type SetRecipeTipTrigger = CountBasedTipTrigger & {
  any_quality?: bool;
  consecutive?: bool;
  machine?: EntityID;
  recipe?: RecipeID;
  type: 'set-recipe';
  uses_fluid?: bool;
};
export type SetTileTriggerEffectItem = TriggerEffectItem & {
  apply_on_space_platform?: bool;
  apply_projection?: bool;
  radius: float;
  tile_collision_mask?: CollisionMaskConnector;
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
export type ShootTipTrigger = CountBasedTipTrigger & {
  target?: 'enemy' | 'entity';
  type: 'shoot';
};
export type ShowExplosionOnChartTriggerEffectItem = TriggerEffectItem & {
  scale: float;
  type: 'show-explosion-on-chart';
};
export type SignalColorMapping = SignalIDConnector & { color: Color };
export type SignalIDConnector = {
  name:
    | VirtualSignalID
    | ItemID
    | FluidID
    | RecipeID
    | EntityID
    | SpaceLocationID
    | AsteroidChunkID
    | QualityID;
  type:
    | 'virtual'
    | 'item'
    | 'fluid'
    | 'recipe'
    | 'entity'
    | 'space-location'
    | 'asteroid-chunk'
    | 'quality';
};
export type SimpleBoundingBox =
  | { left_top: MapPosition; right_bottom: MapPosition }
  | [MapPosition, MapPosition];
export type SimpleModifier = BaseModifier & { modifier: double };
export type SimulationDefinition = {
  checkboard?: bool;
  game_view_settings?: GameViewSettings;
  generate_map?: bool;
  hide_factoriopedia_gradient?: bool;
  hide_health_bars?: bool;
  init?: string;
  init_file?: FileName;
  init_update_count?: uint32;
  length?: uint32;
  mods?: string[];
  mute_alert_sounds?: bool;
  mute_technology_finished_sound?: bool;
  mute_wind_sounds?: bool;
  override_volume?: bool;
  planet?: SpaceLocationID;
  save?: FileName;
  update?: string;
  update_file?: FileName;
  volume_modifier?: float;
};
export type SingleGraphicLayerProcessionBezierControlPoint = {
  frame: float;
  opacity?: double;
  opacity_t?: double;
  rotation?: double;
  rotation_t?: double;
  scale?: double;
  scale_t?: double;
  shift?: Vector;
  shift_rate?: double;
  shift_rate_t?: double;
  shift_t?: Vector;
  timestamp?: MapTick;
  tint?: Color;
  tint_t?: Color;
};
export type SingleGraphicProcessionLayer = {
  animation_driven_by_curve?: bool;
  clip_with_hatches?: bool;
  compensated_pivot?: bool;
  frames: SingleGraphicLayerProcessionBezierControlPoint[];
  graphic: ProcessionGraphic;
  is_passenger_only?: bool;
  relative_to?: EffectRelativeTo;
  render_layer?: RenderLayer;
  rotates_with_pod?: bool;
  secondary_draw_order?: int8;
  shift_rotates_with_pod?: bool;
  type: 'single-graphic';
};
export type SliderStyleSpecification = BaseStyleSpecification & {
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
  deviation?: Vector;
  east_position?: Vector;
  frequency: float;
  has_8_directions?: bool;
  height?: float;
  height_deviation?: float;
  name: TrivialSmokeID;
  north_east_position?: Vector;
  north_position?: Vector;
  north_west_position?: Vector;
  offset?: float;
  position?: Vector;
  south_east_position?: Vector;
  south_position?: Vector;
  south_west_position?: Vector;
  starting_frame?: uint16;
  starting_frame_deviation?: uint16;
  starting_vertical_speed?: float;
  starting_vertical_speed_deviation?: float;
  vertical_speed_slowdown?: float;
  west_position?: Vector;
};
export type Sound =
  | {
      advanced_volume_control?: AdvancedVolumeControl;
      aggregation?: AggregationSpecification;
      allow_random_repeat?: bool;
      audible_distance_modifier?: double;
      category?: SoundType;
      filename?: FileName;
      game_controller_vibration_data?: GameControllerVibrationData;
      max_speed?: float;
      max_volume?: float;
      min_speed?: float;
      min_volume?: float;
      modifiers?: SoundModifier | SoundModifier[];
      preload?: bool;
      priority?: uint8;
      speed?: float;
      speed_smoothing_window_size?: uint32;
      variations?: SoundDefinition | SoundDefinition[];
      volume?: float;
    }
  | SoundDefinition[];
export type SoundAccent = {
  audible_distance_modifier?: float;
  frame?: uint16;
  play_for_working_visualisations?: string[];
  sound?: Sound;
};
export type SoundDefinition =
  | {
      filename: FileName;
      max_speed?: float;
      max_volume?: float;
      min_speed?: float;
      min_volume?: float;
      modifiers?: SoundModifier | SoundModifier[];
      preload?: bool;
      speed?: float;
      volume?: float;
    }
  | FileName;
export type SoundModifier = {
  type: SoundModifierType;
  volume_multiplier: float;
};
export type SoundModifierType =
  | 'game'
  | 'main-menu'
  | 'tips-and-tricks'
  | 'driving'
  | 'elevation'
  | 'space-platform';
export type SoundType =
  | 'game-effect'
  | 'gui-effect'
  | 'ambient'
  | 'environment'
  | 'walking'
  | 'alert'
  | 'wind'
  | 'world-ambient'
  | 'weapon'
  | 'explosion'
  | 'enemy';
export type SpaceConnectionAsteroidSpawnDefinition =
  | {
      asteroid: EntityID | AsteroidChunkID;
      spawn_points: SpaceConnectionAsteroidSpawnPoint[];
      type?: 'entity' | 'asteroid-chunk';
    }
  | [EntityID, SpaceConnectionAsteroidSpawnPoint[]];
export type SpaceConnectionAsteroidSpawnPoint = AsteroidSpawnPoint & {
  distance: double;
};
export type SpaceConnectionID = string;
export type SpaceDustEffectProperties = {
  animation_speed?: float;
  asteroid_normal_texture: EffectTexture;
  asteroid_texture: EffectTexture;
  noise_texture: EffectTexture;
};
export type SpaceLocationAsteroidSpawnDefinition = AsteroidSpawnPoint & {
  asteroid: EntityID | AsteroidChunkID;
  type?: 'entity' | 'asteroid-chunk';
};
export type SpaceLocationID = string;
export type SpacePlatformTileDefinition = {
  position: TilePosition;
  tile: TileID;
};
export type SpacePlatformsModifier = BoolModifier & {
  type: 'unlock-space-platforms';
  use_icon_overlay_constant?: bool;
};
export type SpaceTileEffectParameters = {
  nebula_brightness?: float;
  nebula_saturation?: float;
  nebula_scale?: float;
  scroll_factor?: float;
  star_brightness?: float;
  star_density?: float;
  star_parallax?: float;
  star_saturations?: float;
  star_scale?: float;
  star_shape?: float;
  zoom_base_factor?: float;
  zoom_base_offset?: float;
  zoom_exponent?: float;
  zoom_factor?: float;
  zoom_offset?: float;
};
export type SpacingItem = { index: uint32; spacing: int32 };
export type SpawnPoint =
  | { evolution_factor: double; spawn_weight: double }
  | [double, double];
export type SpeechBubbleStyleSpecification = BaseStyleSpecification & {
  arrow_graphical_set?: ElementImageSet;
  arrow_indent?: double;
  close_color?: Color;
  frame_style?: FrameStyleSpecification;
  label_style?: LabelStyleSpecification;
  pass_through_mouse?: bool;
  type: 'speech_bubble_style';
};
export type SpiderEngineSpecification = {
  legs: SpiderLegSpecification | SpiderLegSpecification[];
  walking_group_overlap?: float;
};
export type SpiderLegGraphicsSet = {
  foot?: RotatedSprite;
  foot_shadow?: RotatedSprite;
  joint?: RotatedSprite;
  joint_render_layer?: RenderLayer;
  joint_shadow?: RotatedSprite;
  joint_turn_offset?: float;
  lower_part?: SpiderLegPart;
  lower_part_shadow?: SpiderLegPart;
  lower_part_water_reflection?: SpiderLegPart;
  upper_part?: SpiderLegPart;
  upper_part_shadow?: SpiderLegPart;
  upper_part_water_reflection?: SpiderLegPart;
};
export type SpiderLegPart = {
  bottom_end?: RotatedSprite;
  bottom_end_length?: float;
  bottom_end_offset?: float;
  middle?: RotatedSprite;
  middle_offset_from_bottom?: float;
  middle_offset_from_top?: float;
  render_layer?: RenderLayer;
  top_end?: RotatedSprite;
  top_end_length?: float;
  top_end_offset?: float;
};
export type SpiderLegSpecification = {
  ground_position: Vector;
  leg: EntityID;
  leg_hit_the_ground_trigger?: TriggerEffect;
  leg_hit_the_ground_when_attacking_trigger?: TriggerEffect;
  mount_position: Vector;
  walking_group: uint8;
};
export type SpiderLegTriggerEffect = { effect: TriggerEffect; position: float };
export type SpiderTorsoGraphicsSet = {
  animation?: RotatedAnimation;
  base_animation?: RotatedAnimation;
  base_render_layer?: RenderLayer;
  render_layer?: RenderLayer;
  shadow_animation?: RotatedAnimation;
  shadow_base_animation?: RotatedAnimation;
};
export type SpiderVehicleGraphicsSet = SpiderTorsoGraphicsSet & {
  autopilot_destination_on_map_visualisation?: Animation;
  autopilot_destination_queue_on_map_visualisation?: Animation;
  autopilot_destination_queue_visualisation?: Animation;
  autopilot_destination_visualisation?: Animation;
  autopilot_destination_visualisation_render_layer?: RenderLayer;
  autopilot_path_visualisation_line_width?: float;
  autopilot_path_visualisation_on_map_line_width?: float;
  eye_light?: LightDefinition;
  light?: LightDefinition;
  light_positions?: Vector[][];
};
export type SpoilToTriggerResult = {
  items_per_trigger: ItemCountType;
  trigger: Trigger;
};
export type Sprite = SpriteParameters & {
  dice?: SpriteSizeType;
  dice_x?: SpriteSizeType;
  dice_y?: SpriteSizeType;
  filename?: FileName;
  layers?: Sprite[];
};
export type Sprite16Way = {
  east?: Sprite;
  east_north_east?: Sprite;
  east_south_east?: Sprite;
  north?: Sprite;
  north_east?: Sprite;
  north_north_east?: Sprite;
  north_north_west?: Sprite;
  north_west?: Sprite;
  sheet?: SpriteNWaySheet;
  sheets?: SpriteNWaySheet[];
  south?: Sprite;
  south_east?: Sprite;
  south_south_east?: Sprite;
  south_south_west?: Sprite;
  south_west?: Sprite;
  west?: Sprite;
  west_north_west?: Sprite;
  west_south_west?: Sprite;
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
  | 'reflection-effect-map'
  | 'shadow'
  | 'smoke'
  | 'decal'
  | 'low-object'
  | 'corpse-decay'
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
  | 'group=effect-texture'
)[];
export type SpriteNWaySheet = SpriteParameters & {
  frames?: uint32;
  generate_sdf?: bool;
};
export type SpriteParameters = SpriteSource & {
  apply_runtime_tint?: bool;
  apply_special_effect?: bool;
  blend_mode?: BlendMode;
  draw_as_glow?: bool;
  draw_as_light?: bool;
  draw_as_shadow?: bool;
  flags?: SpriteFlags;
  generate_sdf?: bool;
  invert_colors?: bool;
  mipmap_count?: uint8;
  priority?: SpritePriority;
  rotate_shift?: bool;
  scale?: double;
  shift?: Vector;
  surface?: SpriteUsageSurfaceHint;
  tint?: Color;
  tint_as_overlay?: bool;
  usage?: SpriteUsageHint;
};
export type SpritePriority =
  | 'extra-high-no-scale'
  | 'extra-high'
  | 'high'
  | 'medium'
  | 'low'
  | 'very-low'
  | 'no-atlas';
export type SpriteSheet = SpriteParameters & {
  dice?: SpriteSizeType;
  dice_x?: SpriteSizeType;
  dice_y?: SpriteSizeType;
  filenames?: FileName[];
  layers?: SpriteSheet[];
  line_length?: uint32;
  lines_per_file?: uint32;
  repeat_count?: uint32;
  variation_count?: uint32;
};
export type SpriteSizeType = int16;
export type SpriteSource = {
  allow_forced_downscale?: bool;
  filename: FileName;
  height?: SpriteSizeType;
  load_in_minimal_mode?: bool;
  position?: [SpriteSizeType, SpriteSizeType];
  premul_alpha?: bool;
  size?: SpriteSizeType | [SpriteSizeType, SpriteSizeType];
  width?: SpriteSizeType;
  x?: SpriteSizeType;
  y?: SpriteSizeType;
};
export type SpriteUsageHint =
  | 'any'
  | 'mining'
  | 'tile-artifical'
  | 'corpse-decay'
  | 'enemy'
  | 'player'
  | 'train'
  | 'vehicle'
  | 'explosion'
  | 'rail'
  | 'elevated-rail'
  | 'air'
  | 'remnant'
  | 'decorative';
export type SpriteUsageSurfaceHint =
  | 'any'
  | 'nauvis'
  | 'vulcanus'
  | 'gleba'
  | 'fulgora'
  | 'aquilo'
  | 'space';
export type SpriteVariations = { sheet: SpriteSheet } | SpriteSheet | Sprite[];
export type StackTransferTipTrigger = CountBasedTipTrigger & {
  transfer?: 'stack' | 'inventory' | 'whole-inventory';
  type: 'stack-transfer';
};
export type StateSteeringSettings = {
  force_unit_fuzzy_goto_behavior: bool;
  radius: double;
  separation_factor: double;
  separation_force: double;
};
export type StatelessVisualisation = {
  acceleration_x?: float;
  acceleration_y?: float;
  acceleration_z?: float;
  adjust_animation_speed_by_base_scale?: bool;
  affected_by_wind?: bool;
  animation?: AnimationVariations;
  begin_scale?: float;
  can_lay_on_the_ground?: bool;
  count?: uint16;
  end_scale?: float;
  fade_in_progress_duration?: float;
  fade_out_progress_duration?: float;
  light?: LightDefinition;
  max_count?: uint16;
  min_count?: uint16;
  movement_slowdown_factor_x?: float;
  movement_slowdown_factor_y?: float;
  movement_slowdown_factor_z?: float;
  nested_visualisations?: StatelessVisualisation | StatelessVisualisation[];
  offset_x?: RangedValue;
  offset_y?: RangedValue;
  offset_z?: RangedValue;
  particle_tick_offset?: float;
  period?: uint16;
  positions?: Vector[];
  probability?: float;
  render_layer?: RenderLayer;
  scale?: RangedValue;
  shadow?: AnimationVariations;
  speed_x?: RangedValue;
  speed_y?: RangedValue;
  speed_z?: RangedValue;
  spread_progress_duration?: float;
};
export type StatelessVisualisations =
  | StatelessVisualisation
  | StatelessVisualisation[];
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
  flow_sprite?: Sprite;
  fluid_background?: Sprite;
  frozen_patch?: Sprite4Way;
  gas_flow?: Animation;
  picture?: Sprite4Way;
  window_background?: Sprite;
};
export type StreamAttackParameters = BaseAttackParameters & {
  fluid_consumption?: FluidAmount;
  fluids?: StreamFluidProperties[];
  gun_barrel_length?: float;
  gun_center_shift?: Vector | GunShift4Way;
  projectile_creation_parameters?: CircularProjectileCreationSpecification;
  type: 'stream';
};
export type StreamFluidProperties = { damage_modifier?: double; type: FluidID };
export type StreamTriggerDelivery = TriggerDeliveryItem & {
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
export type StyleWithClickableGraphicalSetSpecification =
  BaseStyleSpecification & {
    clicked_graphical_set?: ElementImageSet;
    default_graphical_set?: ElementImageSet;
    disabled_graphical_set?: ElementImageSet;
    game_controller_selected_hovered_graphical_set?: ElementImageSet;
    hovered_graphical_set?: ElementImageSet;
    left_click_sound?: Sound;
    selected_clicked_graphical_set?: ElementImageSet;
    selected_graphical_set?: ElementImageSet;
    selected_hovered_graphical_set?: ElementImageSet;
  };
export type SurfaceCondition = {
  max?: double;
  min?: double;
  property: SurfacePropertyID;
};
export type SurfaceID = string;
export type SurfacePropertyID = string;
export type SurfaceRenderParameters = {
  clouds?: CloudsEffectProperties;
  day_night_cycle_color_lookup?: DaytimeColorLookupTable;
  draw_sprite_clouds?: bool;
  fog?: FogEffectProperties;
  shadow_opacity?: float;
  space_dust_background?: SpaceDustEffectProperties;
  space_dust_foreground?: SpaceDustEffectProperties;
  terrain_tint_effect?: GlobalTintEffectProperties;
};
export type SwitchStyleSpecification = BaseStyleSpecification & {
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
export type TabStyleSpecification =
  StyleWithClickableGraphicalSetSpecification & {
    badge_font?: string;
    badge_horizontal_spacing?: int16;
    default_badge_font_color?: Color;
    default_badge_graphical_set?: ElementImageSet;
    default_font_color?: Color;
    disabled_badge_font_color?: Color;
    disabled_badge_graphical_set?: ElementImageSet;
    disabled_font_color?: Color;
    draw_grayscale_picture?: bool;
    font?: string;
    hover_badge_graphical_set?: ElementImageSet;
    increase_height_when_selected?: bool;
    left_edge_selected_graphical_set?: ElementImageSet;
    override_graphics_on_edges?: bool;
    press_badge_graphical_set?: ElementImageSet;
    right_edge_selected_graphical_set?: ElementImageSet;
    selected_badge_font_color?: Color;
    selected_badge_graphical_set?: ElementImageSet;
    selected_font_color?: Color;
    type: 'tab_style';
  };
export type TabbedPaneStyleSpecification = BaseStyleSpecification & {
  tab_container?: TableStyleSpecification;
  tab_content_frame?: FrameStyleSpecification;
  type: 'tabbed_pane_style';
  vertical_spacing?: uint32;
};
export type TableStyleSpecification = BaseStyleSpecification & {
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
  column_widths?: ColumnWidthItem | ColumnWidth[];
  default_row_graphical_set?: ElementImageSet;
  even_row_graphical_set?: ElementImageSet;
  horizontal_line_color?: Color;
  horizontal_spacing?: int32 | SpacingItem[];
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
  vertical_spacing?: int32 | SpacingItem[];
  wide_as_column_count?: bool;
};
export type TechnologyID = string;
export type TechnologySlotStyleSpecification = ButtonStyleSpecification & {
  clicked_ingredients_background?: ElementImageSet;
  clicked_overlay?: ElementImageSet;
  default_background_shadow?: ElementImageSet;
  default_ingredients_background?: ElementImageSet;
  disabled_ingredients_background?: ElementImageSet;
  drag_handle_style?: EmptyWidgetStyleSpecification;
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
export type TechnologyTrigger =
  | MineEntityTechnologyTrigger
  | CraftItemTechnologyTrigger
  | CraftFluidTechnologyTrigger
  | SendItemToOrbitTechnologyTrigger
  | CaptureSpawnerTechnologyTrigger
  | BuildEntityTechnologyTrigger
  | CreateSpacePlatformTechnologyTrigger;
export type TechnologyUnit = {
  count?: uint64;
  count_formula?: MathExpression;
  ingredients: ResearchIngredient[];
  time: double;
};
export type TerritorySettings = {
  minimum_territory_size?: uint32;
  territory_index_expression?: string;
  territory_variation_expression?: string;
  units?: EntityID[];
};
export type TextBoxStyleSpecification = BaseStyleSpecification & {
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
export type ThrusterGraphicsSet = WorkingVisualisations & {
  flame?: Sprite;
  flame_effect?: EffectTexture;
  flame_effect_height?: float;
  flame_effect_offset?: float;
  flame_effect_width?: float;
  flame_half_height?: float;
  flame_position?: Vector;
};
export type ThrusterPerformancePoint =
  | { effectivity: double; fluid_usage: FluidAmount; fluid_volume: double }
  | [double, double, double];
export type TileAndAlpha = { alpha: float; tile: TileID };
export type TileBasedParticleTints = { primary?: Color; secondary?: Color };
export type TileBuildSound = {
  animated?: Sound;
  large?: Sound;
  medium?: Sound;
  small?: Sound;
};
export type TileBuildabilityRule = {
  area: SimpleBoundingBox;
  colliding_tiles?: CollisionMaskConnector;
  remove_on_collision?: bool;
  required_tiles?: CollisionMaskConnector;
};
export type TileEffectDefinitionID = string;
export type TileID = string;
export type TileIDRestriction = TileID | [TileID, TileID];
export type TileLightPictures = TileSpriteLayout & { size: uint32 };
export type TileMainPictures = TileSpriteLayout & {
  probability?: double;
  size: uint32;
  weights?: double[];
};
export type TilePosition = { x: int32; y: int32 } | [int32, int32];
export type TileRenderLayer =
  | 'zero'
  | 'water'
  | 'water-overlay'
  | 'ground-natural'
  | 'ground-artificial'
  | 'top';
export type TileSpriteLayout = {
  count?: uint8;
  line_length?: uint8;
  picture: FileName;
  scale?: float;
  x?: SpriteSizeType;
  y?: SpriteSizeType;
};
export type TileSpriteLayoutVariant = {
  count?: uint8;
  line_length?: uint8;
  scale?: float;
  spritesheet?: FileName;
  tile_height?: uint8;
  x?: SpriteSizeType;
  y?: SpriteSizeType;
};
export type TileTransitionSpritesheetLayout = TileSpriteLayoutVariant & {
  auxiliary_effect_mask?: TileTransitionVariantLayout;
  background?: TileTransitionVariantLayout;
  background_mask?: TileTransitionVariantLayout;
  double_side_count?: uint8;
  double_side_line_length?: uint8;
  double_side_scale?: float;
  double_side_tile_height?: uint8;
  double_side_x?: SpriteSizeType;
  double_side_y?: SpriteSizeType;
  effect_map?: TileTransitionVariantLayout;
  inner_corner_count?: uint8;
  inner_corner_line_length?: uint8;
  inner_corner_scale?: float;
  inner_corner_tile_height?: uint8;
  inner_corner_x?: SpriteSizeType;
  inner_corner_y?: SpriteSizeType;
  lightmap?: TileTransitionVariantLayout;
  mask?: TileTransitionVariantLayout;
  o_transition_count?: uint8;
  o_transition_line_length?: uint8;
  o_transition_scale?: float;
  o_transition_tile_height?: uint8;
  o_transition_x?: SpriteSizeType;
  o_transition_y?: SpriteSizeType;
  outer_corner_count?: uint8;
  outer_corner_line_length?: uint8;
  outer_corner_scale?: float;
  outer_corner_tile_height?: uint8;
  outer_corner_x?: SpriteSizeType;
  outer_corner_y?: SpriteSizeType;
  overlay?: TileTransitionVariantLayout;
  side_count?: uint8;
  side_line_length?: uint8;
  side_scale?: float;
  side_tile_height?: uint8;
  side_x?: SpriteSizeType;
  side_y?: SpriteSizeType;
  u_transition_count?: uint8;
  u_transition_line_length?: uint8;
  u_transition_scale?: float;
  u_transition_tile_height?: uint8;
  u_transition_x?: SpriteSizeType;
  u_transition_y?: SpriteSizeType;
};
export type TileTransitionVariantLayout = TileSpriteLayoutVariant & {
  double_side?: TileSpriteLayoutVariant;
  double_side_count?: uint8;
  double_side_line_length?: uint8;
  double_side_scale?: float;
  double_side_tile_height?: uint8;
  double_side_x?: SpriteSizeType;
  double_side_y?: SpriteSizeType;
  inner_corner?: TileSpriteLayoutVariant;
  inner_corner_count?: uint8;
  inner_corner_line_length?: uint8;
  inner_corner_scale?: float;
  inner_corner_tile_height?: uint8;
  inner_corner_x?: SpriteSizeType;
  inner_corner_y?: SpriteSizeType;
  o_transition?: TileSpriteLayoutVariant;
  o_transition_count?: uint8;
  o_transition_line_length?: uint8;
  o_transition_scale?: float;
  o_transition_tile_height?: uint8;
  o_transition_x?: SpriteSizeType;
  o_transition_y?: SpriteSizeType;
  outer_corner?: TileSpriteLayoutVariant;
  outer_corner_count?: uint8;
  outer_corner_line_length?: uint8;
  outer_corner_scale?: float;
  outer_corner_tile_height?: uint8;
  outer_corner_x?: SpriteSizeType;
  outer_corner_y?: SpriteSizeType;
  side?: TileSpriteLayoutVariant;
  side_count?: uint8;
  side_line_length?: uint8;
  side_scale?: float;
  side_tile_height?: uint8;
  side_x?: SpriteSizeType;
  side_y?: SpriteSizeType;
  u_transition?: TileSpriteLayoutVariant;
  u_transition_count?: uint8;
  u_transition_line_length?: uint8;
  u_transition_scale?: float;
  u_transition_tile_height?: uint8;
  u_transition_x?: SpriteSizeType;
  u_transition_y?: SpriteSizeType;
  x_offset?: SpriteSizeType;
  y_offset?: SpriteSizeType;
};
export type TileTransitions = {
  apply_effect_color_to_overlay?: bool;
  apply_waving_effect_on_background_mask?: bool;
  apply_waving_effect_on_masks?: bool;
  auxiliary_effect_mask_enabled?: bool;
  auxiliary_effect_mask_layout?: TileTransitionVariantLayout;
  auxiliary_effect_mask_spritesheet?: FileName;
  background_enabled?: bool;
  background_layer_group?: TileRenderLayer;
  background_layer_offset?: int8;
  background_layout?: TileTransitionVariantLayout;
  background_mask_enabled?: bool;
  background_mask_layout?: TileTransitionVariantLayout;
  background_mask_spritesheet?: FileName;
  background_spritesheet?: FileName;
  double_side_variations_in_group?: uint8;
  double_side_weights?: float[];
  draw_background_layer_under_tiles?: bool;
  draw_simple_outer_corner_over_diagonal?: bool;
  effect_map_enabled?: bool;
  effect_map_layout?: TileTransitionVariantLayout;
  effect_map_spritesheet?: FileName;
  inner_corner_weights?: float[];
  layout?: TileTransitionSpritesheetLayout;
  lightmap_enabled?: bool;
  lightmap_layout?: TileTransitionVariantLayout;
  lightmap_spritesheet?: FileName;
  mask_enabled?: bool;
  mask_layout?: TileTransitionVariantLayout;
  mask_spritesheet?: FileName;
  masked_background_layer_offset?: int8;
  masked_overlay_layer_offset?: int8;
  offset_background_layer_by_tile_layer?: bool;
  outer_corner_weights?: float[];
  overlay_enabled?: bool;
  overlay_layer_group?: TileRenderLayer;
  overlay_layer_offset?: int8;
  overlay_layout?: TileTransitionVariantLayout;
  side_variations_in_group?: uint8;
  side_weights?: float[];
  spritesheet?: FileName;
  u_transition_weights?: float[];
  water_patch?: Sprite;
  waving_effect_time_scale?: float;
};
export type TileTransitionsBetweenTransitions = TileTransitions & {
  transition_group1: uint8;
  transition_group2: uint8;
};
export type TileTransitionsToTiles = TileTransitions & {
  to_tiles: TileID[];
  transition_group: uint8;
};
export type TileTransitionsVariants = {
  empty_transitions?: bool;
  light?: TileLightPictures[];
  main?: TileMainPictures[];
  material_background?: MaterialTextureParameters;
  material_light?: MaterialTextureParameters;
  material_texture_height_in_tiles?: uint8;
  material_texture_width_in_tiles?: uint8;
  transition?: TileTransitions;
};
export type TimeElapsedTipTrigger = { ticks: uint32; type: 'time-elapsed' };
export type TimeSinceLastTipActivationTipTrigger = {
  ticks: MapTick;
  type: 'time-since-last-tip-activation';
};
export type TintProcessionBezierControlPoint = {
  opacity?: double;
  opacity_t?: double;
  timestamp?: MapTick;
  tint_lower?: Color;
  tint_lower_t?: Color;
  tint_upper?: Color;
  tint_upper_t?: Color;
};
export type TintProcessionLayer = {
  frames: TintProcessionBezierControlPoint[];
  render_layer?: RenderLayer;
  type: 'tint';
};
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
  | TimeSinceLastTipActivationTipTrigger
  | ResearchTechnologyTipTrigger
  | ResearchWithSciencePackTipTrigger
  | UnlockRecipeTipTrigger
  | CraftItemTipTrigger
  | BuildEntityTipTrigger
  | ManualTransferTipTrigger
  | ModuleTransferTipTrigger
  | StackTransferTipTrigger
  | EntityTransferTipTrigger
  | DropItemTipTrigger
  | SetRecipeTipTrigger
  | SetFilterTipTrigger
  | LimitChestTipTrigger
  | UsePipetteTipTrigger
  | SetLogisticRequestTipTrigger
  | UseConfirmTipTrigger
  | ToggleShowEntityInfoTipTrigger
  | GeneratingPowerTipTrigger
  | LowPowerTipTrigger
  | PasteEntitySettingsTipTrigger
  | FastReplaceTipTrigger
  | GroupAttackTipTrigger
  | FastBeltBendTipTrigger
  | BeltTraverseTipTrigger
  | PlaceEquipmentTipTrigger
  | ClearCursorTipTrigger
  | RotateEntityTipTrigger
  | FlipEntityTipTrigger
  | AlternativeBuildTipTrigger
  | GateOverRailBuildTipTrigger
  | ManualWireDragTipTrigger
  | ShootTipTrigger
  | ChangeSurfaceTipTrigger
  | ApplyStarterPackTipTrigger
  | MineItemByRobotTipTrigger
  | BuildEntityByRobotTipTrigger
  | PlanTrainPathTipTrigger
  | UseRailPlannerTipTrigger
  | ToggleRailLayerTipTrigger
  | EnterVehicleTipTrigger
  | SendSpidertronTipTrigger
  | ActivatePasteTipTrigger
  | KillTipTrigger;
export type ToggleRailLayerTipTrigger = CountBasedTipTrigger & {
  type: 'toggle-rail-layer';
};
export type ToggleShowEntityInfoTipTrigger = CountBasedTipTrigger & {
  type: 'toggle-show-entity-info';
};
export type TrainBrakingForceBonusModifier = SimpleModifier & {
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
export type TrainVisualizationConstants = {
  box_length: float;
  box_width: float;
  connection_distance: float;
  final_margin: float;
  joint_distance: float;
  last_box_color: Color;
  not_last_box_color: Color;
  stock_number_scale: float;
};
export type TransitionApplication = {
  offset?: bool;
  pod_offset?: bool;
  rotation?: bool;
};
export type TransportBeltAnimationSet = {
  alternate?: bool;
  animation_set: RotatedAnimation;
  belt_reader?: BeltReaderLayer[];
  east_index?: uint8;
  east_index_frozen?: uint8;
  ending_east_index?: uint8;
  ending_east_index_frozen?: uint8;
  ending_north_index?: uint8;
  ending_north_index_frozen?: uint8;
  ending_south_index?: uint8;
  ending_south_index_frozen?: uint8;
  ending_west_index?: uint8;
  ending_west_index_frozen?: uint8;
  frozen_patch?: RotatedSprite;
  north_index?: uint8;
  north_index_frozen?: uint8;
  south_index?: uint8;
  south_index_frozen?: uint8;
  starting_east_index?: uint8;
  starting_east_index_frozen?: uint8;
  starting_north_index?: uint8;
  starting_north_index_frozen?: uint8;
  starting_south_index?: uint8;
  starting_south_index_frozen?: uint8;
  starting_west_index?: uint8;
  starting_west_index_frozen?: uint8;
  west_index?: uint8;
  west_index_frozen?: uint8;
};
export type TransportBeltAnimationSetWithCorners = TransportBeltAnimationSet & {
  east_to_north_index?: uint8;
  east_to_north_index_frozen?: uint8;
  east_to_south_index?: uint8;
  east_to_south_index_frozen?: uint8;
  north_to_east_index?: uint8;
  north_to_east_index_frozen?: uint8;
  north_to_west_index?: uint8;
  north_to_west_index_frozen?: uint8;
  south_to_east_index?: uint8;
  south_to_east_index_frozen?: uint8;
  south_to_west_index?: uint8;
  south_to_west_index_frozen?: uint8;
  west_to_north_index?: uint8;
  west_to_north_index_frozen?: uint8;
  west_to_south_index?: uint8;
  west_to_south_index_frozen?: uint8;
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
  underwater?: Animation;
  underwater_layer_offset?: int8;
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
  | BeamTriggerDelivery
  | StreamTriggerDelivery
  | ArtilleryTriggerDelivery
  | ChainTriggerDelivery
  | DelayedTriggerDelivery;
export type TriggerDeliveryItem = {
  source_effects?: TriggerEffect;
  target_effects?: TriggerEffect;
};
export type TriggerEffect =
  | (
      | DamageTileTriggerEffectItem /* LIE */
      | DamageTileTriggerEffectItem
      | CreateEntityTriggerEffectItem
      | CreateExplosionTriggerEffectItem
      | CreateFireTriggerEffectItem
      | CreateSmokeTriggerEffectItem
      | CreateTrivialSmokeEffectItem
      | CreateAsteroidChunkEffectItem
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
      | ActivateImpactTriggerEffectItem
    )
  | (
      | DamageTileTriggerEffectItem /* LIE */
      | DamageTileTriggerEffectItem
      | CreateEntityTriggerEffectItem
      | CreateExplosionTriggerEffectItem
      | CreateFireTriggerEffectItem
      | CreateSmokeTriggerEffectItem
      | CreateTrivialSmokeEffectItem
      | CreateAsteroidChunkEffectItem
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
      | ActivateImpactTriggerEffectItem
    )[];
export type TriggerEffectItem = {
  affects_target?: bool;
  damage_type_filters?: DamageTypeFilters;
  probability?: float;
  repeat_count?: uint16;
  repeat_count_deviation?: uint16;
  show_in_tooltip?: bool;
};
export type TriggerEffectWithCooldown = {
  distance_cooldown?: double;
  effect: TriggerEffect;
  initial_distance_cooldown?: double;
  initial_time_cooldown?: MapTick;
  time_cooldown?: MapTick;
};
export type TriggerItem = {
  action_delivery?: TriggerDelivery | TriggerDelivery[];
  collision_mask?: CollisionMaskConnector;
  entity_flags?: EntityPrototypeFlags;
  force?: ForceCondition;
  ignore_collision_condition?: bool;
  probability?: float;
  repeat_count?: uint32;
  trigger_target_mask?: TriggerTargetMask;
};
export type TriggerTargetMask = string[];
export type TrivialSmokeID = string;
export type TurretAttackModifier = BaseModifier & {
  infer_icon?: bool;
  modifier: double;
  turret_id: EntityID;
  type: 'turret-attack';
  use_icon_overlay_constant?: bool;
};
export type TurretBaseVisualisation = {
  animation: Animation4Way;
  draw_when_frozen?: bool;
  draw_when_has_ammo?: bool;
  draw_when_has_energy?: bool;
  draw_when_no_ammo?: bool;
  draw_when_no_energy?: bool;
  draw_when_not_frozen?: bool;
  enabled_states?: TurretState[];
  render_layer?: RenderLayer;
  secondary_draw_order?: int8;
};
export type TurretGraphicsSet = {
  base_visualisation?: TurretBaseVisualisation | TurretBaseVisualisation[];
};
export type TurretSpecialEffect = {
  attacking_falloff?: float;
  attacking_max_radius?: float;
  attacking_min_radius?: float;
  center?: TurretSpecialEffectCenter;
  falloff?: float;
  max_radius?: float;
  min_radius?: float;
  type: 'mask-by-circle';
};
export type TurretSpecialEffectCenter =
  | {
      default?: Vector;
      east?: Vector;
      north?: Vector;
      north_east?: Vector;
      north_west?: Vector;
      south?: Vector;
      south_east?: Vector;
      south_west?: Vector;
      west?: Vector;
    }
  | Vector;
export type TurretState =
  | 'folded'
  | 'preparing'
  | 'prepared'
  | 'starting-attack'
  | 'attacking'
  | 'ending-attack'
  | 'rotate-for-folding'
  | 'folding';
export type UndergroundBeltStructure = {
  back_patch?: Sprite4Way;
  direction_in?: Sprite4Way;
  direction_in_side_loading?: Sprite4Way;
  direction_out?: Sprite4Way;
  direction_out_side_loading?: Sprite4Way;
  front_patch?: Sprite4Way;
  frozen_patch_in?: Sprite4Way;
  frozen_patch_out?: Sprite4Way;
};
export type UnitAISettings = {
  allow_try_return_to_spawner?: bool;
  destroy_when_commands_fail?: bool;
  do_separation?: bool;
  join_attacks?: bool;
  path_resolution_modifier?: int8;
  size_in_group?: float;
  strafe_settings?: PrototypeStrafeSettings;
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
export type UnlockQualityModifier = BaseModifier & {
  quality: QualityID;
  type: 'unlock-quality';
  use_icon_overlay_constant?: bool;
};
export type UnlockRecipeModifier = BaseModifier & {
  recipe: RecipeID;
  type: 'unlock-recipe';
  use_icon_overlay_constant?: bool;
};
export type UnlockRecipeTipTrigger = {
  recipe: RecipeID;
  type: 'unlock-recipe';
};
export type UnlockSpaceLocationModifier = BaseModifier & {
  space_location: SpaceLocationID;
  type: 'unlock-space-location';
  use_icon_overlay_constant?: bool;
};
export type UseConfirmTipTrigger = CountBasedTipTrigger & {
  type: 'use-confirm';
};
export type UseOnSelfCapsuleAction = {
  attack_parameters: AttackParameters;
  type: 'use-on-self';
  uses_stack?: bool;
};
export type UsePipetteTipTrigger = CountBasedTipTrigger & {
  type: 'use-pipette';
};
export type UseRailPlannerTipTrigger = CountBasedTipTrigger & {
  build_mode: BuildMode;
  type: 'use-rail-planner';
};
export type VariableAmbientSoundCompositionMode =
  | 'randomized'
  | 'semi-randomized'
  | 'shuffled'
  | 'layer-controlled';
export type VariableAmbientSoundLayer = {
  composition_mode: VariableAmbientSoundCompositionMode;
  control_layer?: string;
  control_layer_sample_mapping?: uint8[][];
  has_end_sample?: bool;
  has_start_sample?: bool;
  name: string;
  number_of_sublayers?: uint8;
  sample_length?: RandomRange;
  sublayer_offset?: RandomRange | ProbabilityTable;
  sublayer_starting_offset?: RandomRange | ProbabilityTable;
  variants: Sound[];
};
export type VariableAmbientSoundLayerSample = [string, uint32];
export type VariableAmbientSoundLayerStateProperties = {
  enabled?: bool;
  end_pause?: RandomRange;
  number_of_repetitions?: RandomRange | ProbabilityTable;
  pause_between_repetitions?: RandomRange;
  pause_between_samples?: RandomRange;
  sequence_length?: RandomRange;
  silence_instead_of_sample_probability?: float;
  start_pause?: RandomRange;
  variant?: uint8;
};
export type VariableAmbientSoundNextStateConditions = {
  layer_sample?: VariableAmbientSoundLayerSample;
  previous_state?: string;
  weight: uint32;
};
export type VariableAmbientSoundNextStateItem = {
  conditions: VariableAmbientSoundNextStateConditions;
  state: string;
};
export type VariableAmbientSoundNextStateTrigger =
  | 'layers-finished'
  | 'duration';
export type VariableAmbientSoundState = {
  end_pause?: RandomRange;
  layers_properties?: VariableAmbientSoundLayerStateProperties[];
  name: string;
  next_state?: string;
  next_state_layers_finished_layers?: string[];
  next_state_trigger?: VariableAmbientSoundNextStateTrigger;
  next_states?: VariableAmbientSoundNextStateItem[];
  number_of_enabled_layers?: RandomRange;
  start_pause?: RandomRange;
  state_duration_seconds?: uint32;
  type?: VariableAmbientSoundStateType;
};
export type VariableAmbientSoundStateType =
  | 'regular'
  | 'intermezzo'
  | 'final'
  | 'stop';
export type VariableAmbientSoundVariableSound = {
  alignment_samples?: uint32;
  intermezzo?: Sound;
  layers: VariableAmbientSoundLayer[];
  length_seconds: uint32;
  states: VariableAmbientSoundState[];
};
export type Vector = { x: double; y: double } | [double, double];
export type Vector3D = { x: float; y: float; z: float } | [float, float, float];
export type Vector4f =
  | { w: float; x: float; y: float; z: float }
  | [float, float, float, float];
export type VectorRotation = { frames: Vector[]; render_layer?: RenderLayer };
export type VehicleLogisticsModifier = BoolModifier & {
  type: 'vehicle-logistics';
  use_icon_overlay_constant?: bool;
};
export type VerticalAlign = 'top' | 'center' | 'bottom';
export type VerticalFlowStyleSpecification = BaseStyleSpecification & {
  type: 'vertical_flow_style';
  vertical_spacing?: int32;
};
export type VerticalScrollBarStyleSpecification =
  ScrollBarStyleSpecification & { type: 'vertical_scrollbar_style' };
export type VirtualSignalID = string;
export type VisualState = {
  color?: Color;
  duration: uint8;
  name: string;
  next_active: string;
  next_inactive: string;
};
export type VoidEnergySource = BaseEnergySource & { type: 'void' };
export type WallPictures = {
  corner_left_down?: SpriteVariations;
  corner_right_down?: SpriteVariations;
  ending_left?: SpriteVariations;
  ending_right?: SpriteVariations;
  filling?: SpriteVariations;
  gate_connection_patch?: Sprite4Way;
  single?: SpriteVariations;
  straight_horizontal?: SpriteVariations;
  straight_vertical?: SpriteVariations;
  t_up?: SpriteVariations;
  water_connection_patch?: Sprite4Way;
};
export type WaterReflectionDefinition = {
  orientation_to_variation?: bool;
  pictures?: SpriteVariations;
  rotate?: bool;
};
export type WaterTileEffectParameters = {
  animation_scale: float | [float, float];
  animation_speed: float;
  dark_threshold: float | [float, float];
  far_zoom?: float;
  foam_color: Color;
  foam_color_multiplier: float;
  near_zoom?: float;
  reflection_threshold: float | [float, float];
  secondary_texture_variations_columns?: uint8;
  secondary_texture_variations_rows?: uint8;
  shader_variation?: EffectVariation;
  specular_lightness: Color;
  specular_threshold: float | [float, float];
  texture_variations_columns?: uint8;
  texture_variations_rows?: uint8;
  textures: EffectTexture[];
  tick_scale: float;
};
export type Weight = double;
export type WireConnectionPoint = { shadow: WirePosition; wire: WirePosition };
export type WirePosition = { copper?: Vector; green?: Vector; red?: Vector };
export type WorkerRobotBatteryModifier = SimpleModifier & {
  infer_icon?: bool;
  type: 'worker-robot-battery';
  use_icon_overlay_constant?: bool;
};
export type WorkerRobotSpeedModifier = SimpleModifier & {
  infer_icon?: bool;
  type: 'worker-robot-speed';
  use_icon_overlay_constant?: bool;
};
export type WorkerRobotStorageModifier = SimpleModifier & {
  infer_icon?: bool;
  type: 'worker-robot-storage';
  use_icon_overlay_constant?: bool;
};
export type WorkingSound = MainSound &
  (
    | {
        activate_sound?: Sound;
        apparent_volume?: float;
        audible_distance_modifier?: double;
        deactivate_sound?: Sound;
        extra_sounds_ignore_limit?: bool;
        idle_sound?: Sound;
        main_sounds?: MainSound | MainSound[];
        max_sounds_per_type?: uint8;
        persistent?: bool;
        sound_accents?: SoundAccent | SoundAccent[];
        use_doppler_shift?: bool;
      }
    | Sound
  );
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
    | 'none'
    | 'visual-state-color';
  constant_speed?: bool;
  draw_in_states?: string[];
  draw_when_state_filter_matches?: bool;
  east_animation?: Animation;
  east_fog_mask?: FogMaskShapeDefinition;
  east_position?: Vector;
  east_secondary_draw_order?: int8;
  effect?: 'flicker' | 'uranium-glow' | 'none';
  enabled_by_name?: bool;
  enabled_in_animated_shift_during_transition?: bool;
  enabled_in_animated_shift_during_waypoint_stop?: bool;
  fadeout?: bool;
  fog_mask?: FogMaskShapeDefinition;
  frame_based_on_shift_animation_progress?: bool;
  light?: LightDefinition;
  mining_drill_scorch_mark?: bool;
  name?: string;
  north_animation?: Animation;
  north_fog_mask?: FogMaskShapeDefinition;
  north_position?: Vector;
  north_secondary_draw_order?: int8;
  render_layer?: RenderLayer;
  scorch_mark_fade_in_frames?: uint8;
  scorch_mark_fade_out_duration?: uint16;
  scorch_mark_lifetime?: uint16;
  secondary_draw_order?: int8;
  south_animation?: Animation;
  south_fog_mask?: FogMaskShapeDefinition;
  south_position?: Vector;
  south_secondary_draw_order?: int8;
  synced_fadeout?: bool;
  west_animation?: Animation;
  west_fog_mask?: FogMaskShapeDefinition;
  west_position?: Vector;
  west_secondary_draw_order?: int8;
};
export type WorkingVisualisations = {
  always_draw_idle_animation?: bool;
  animation?: Animation4Way;
  default_recipe_tint?: GlobalRecipeTints;
  idle_animation?: Animation4Way;
  recipe_not_set_tint?: GlobalRecipeTints;
  shift_animation_transition_duration?: uint16;
  shift_animation_waypoint_stop_duration?: uint16;
  shift_animation_waypoints?: ShiftAnimationWaypoints;
  states?: VisualState[];
  status_colors?: StatusColors;
  working_visualisations?: WorkingVisualisation[];
};
export type WorldAmbientSoundDefinition =
  | {
      average_pause_seconds?: double;
      entity_to_sound_ratio?: float;
      max_entity_count?: uint32;
      min_entity_count?: uint32;
      radius?: double;
      sound?: Sound;
    }
  | Sound;
export type bool = boolean;
export type double = number;
export type float = number;
export type int16 = number;
export type int32 = number;
export type int64 = number;
export type int8 = number;
export type uint16 = number;
export type uint32 = number;
export type uint64 = number;
export type uint8 = number;
export interface RawData {
  accumulator: Record<string, AccumulatorPrototype>;
  achievement: Record<string, AchievementPrototype>;
  'active-defense-equipment': Record<string, ActiveDefenseEquipmentPrototype>;
  'agricultural-tower': Record<string, AgriculturalTowerPrototype>;
  'airborne-pollutant': Record<AirbornePollutantID, AirbornePollutantPrototype>;
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
  'asteroid-chunk': Record<AsteroidChunkID, AsteroidChunkPrototype>;
  'asteroid-collector': Record<string, AsteroidCollectorPrototype>;
  asteroid: Record<string, AsteroidPrototype>;
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
  'burner-usage': Record<BurnerUsageID, BurnerUsagePrototype>;
  capsule: Record<string, CapsulePrototype>;
  'capture-robot': Record<string, CaptureRobotPrototype>;
  car: Record<string, CarPrototype>;
  'cargo-bay': Record<string, CargoBayPrototype>;
  'cargo-landing-pad': Record<string, CargoLandingPadPrototype>;
  'cargo-pod': Record<string, CargoPodPrototype>;
  'cargo-wagon': Record<string, CargoWagonPrototype>;
  'chain-active-trigger': Record<string, ChainActiveTriggerPrototype>;
  'change-surface-achievement': Record<
    string,
    ChangedSurfaceAchievementPrototype
  >;
  'character-corpse': Record<string, CharacterCorpsePrototype>;
  character: Record<string, CharacterPrototype>;
  cliff: Record<string, CliffPrototype>;
  'collision-layer': Record<CollisionLayerID, CollisionLayerPrototype>;
  'combat-robot-count-achievement': Record<
    string,
    CombatRobotCountAchievementPrototype
  >;
  'combat-robot': Record<string, CombatRobotPrototype>;
  'complete-objective-achievement': Record<
    string,
    CompleteObjectiveAchievementPrototype
  >;
  'constant-combinator': Record<string, ConstantCombinatorPrototype>;
  'construct-with-robots-achievement': Record<
    string,
    ConstructWithRobotsAchievementPrototype
  >;
  'construction-robot': Record<string, ConstructionRobotPrototype>;
  container: Record<string, ContainerPrototype>;
  'copy-paste-tool': Record<string, CopyPasteToolPrototype>;
  corpse: Record<string, CorpsePrototype>;
  'create-platform-achievement': Record<
    string,
    CreatePlatformAchievementPrototype
  >;
  'curved-rail-a': Record<string, CurvedRailAPrototype>;
  'curved-rail-b': Record<string, CurvedRailBPrototype>;
  'custom-event': Record<string, CustomEventPrototype>;
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
  'delayed-active-trigger': Record<string, DelayedActiveTriggerPrototype>;
  'deliver-by-robots-achievement': Record<
    string,
    DeliverByRobotsAchievementPrototype
  >;
  'deliver-category': Record<string, DeliverCategory>;
  'deliver-impact-combination': Record<string, DeliverImpactCombination>;
  'deplete-resource-achievement': Record<
    string,
    DepleteResourceAchievementPrototype
  >;
  'destroy-cliff-achievement': Record<string, DestroyCliffAchievementPrototype>;
  'display-panel': Record<string, DisplayPanelPrototype>;
  'dont-build-entity-achievement': Record<
    string,
    DontBuildEntityAchievementPrototype
  >;
  'dont-craft-manually-achievement': Record<
    string,
    DontCraftManuallyAchievementPrototype
  >;
  'dont-kill-manually-achievement': Record<
    string,
    DontKillManuallyAchievementPrototype
  >;
  'dont-research-before-researching-achievement': Record<
    string,
    DontResearchBeforeResearchingAchievementPrototype
  >;
  'dont-use-entity-in-energy-production-achievement': Record<
    string,
    DontUseEntityInEnergyProductionAchievementPrototype
  >;
  'editor-controller': Record<string, EditorControllerPrototype>;
  'electric-energy-interface': Record<string, ElectricEnergyInterfacePrototype>;
  'electric-pole': Record<string, ElectricPolePrototype>;
  'electric-turret': Record<string, ElectricTurretPrototype>;
  'elevated-curved-rail-a': Record<string, ElevatedCurvedRailAPrototype>;
  'elevated-curved-rail-b': Record<string, ElevatedCurvedRailBPrototype>;
  'elevated-half-diagonal-rail': Record<
    string,
    ElevatedHalfDiagonalRailPrototype
  >;
  'elevated-straight-rail': Record<string, ElevatedStraightRailPrototype>;
  'unit-spawner': Record<string, EnemySpawnerPrototype>;
  'energy-shield-equipment': Record<string, EnergyShieldEquipmentPrototype>;
  'entity-ghost': Record<string, EntityGhostPrototype>;
  'equip-armor-achievement': Record<string, EquipArmorAchievementPrototype>;
  'equipment-category': Record<EquipmentCategoryID, EquipmentCategory>;
  'equipment-ghost': Record<string, EquipmentGhostPrototype>;
  'equipment-grid': Record<EquipmentGridID, EquipmentGridPrototype>;
  explosion: Record<string, ExplosionPrototype>;
  fire: Record<string, FireFlamePrototype>;
  fish: Record<string, FishPrototype>;
  fluid: Record<FluidID, FluidPrototype>;
  stream: Record<string, FluidStreamPrototype>;
  'fluid-turret': Record<string, FluidTurretPrototype>;
  'fluid-wagon': Record<string, FluidWagonPrototype>;
  font: Record<string, FontPrototype>;
  'fuel-category': Record<FuelCategoryID, FuelCategory>;
  furnace: Record<string, FurnacePrototype>;
  'fusion-generator': Record<string, FusionGeneratorPrototype>;
  'fusion-reactor': Record<string, FusionReactorPrototype>;
  gate: Record<string, GatePrototype>;
  'generator-equipment': Record<string, GeneratorEquipmentPrototype>;
  generator: Record<string, GeneratorPrototype>;
  'god-controller': Record<string, GodControllerPrototype>;
  'group-attack-achievement': Record<string, GroupAttackAchievementPrototype>;
  'gui-style': Record<string, GuiStyle>;
  gun: Record<string, GunPrototype>;
  'half-diagonal-rail': Record<string, HalfDiagonalRailPrototype>;
  'heat-interface': Record<string, HeatInterfacePrototype>;
  'heat-pipe': Record<string, HeatPipePrototype>;
  'highlight-box': Record<string, HighlightBoxEntityPrototype>;
  'impact-category': Record<string, ImpactCategory>;
  'infinity-container': Record<string, InfinityContainerPrototype>;
  'infinity-pipe': Record<string, InfinityPipePrototype>;
  inserter: Record<string, InserterPrototype>;
  'inventory-bonus-equipment': Record<string, InventoryBonusEquipmentPrototype>;
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
  'lane-splitter': Record<string, LaneSplitterPrototype>;
  'legacy-curved-rail': Record<string, LegacyCurvedRailPrototype>;
  'legacy-straight-rail': Record<string, LegacyStraightRailPrototype>;
  'lightning-attractor': Record<string, LightningAttractorPrototype>;
  lightning: Record<string, LightningPrototype>;
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
  'module-category': Record<ModuleCategoryID, ModuleCategory>;
  module: Record<string, ModulePrototype>;
  'module-transfer-achievement': Record<
    string,
    ModuleTransferAchievementPrototype
  >;
  'mouse-cursor': Record<MouseCursorID, MouseCursor>;
  'movement-bonus-equipment': Record<string, MovementBonusEquipmentPrototype>;
  'noise-expression': Record<string, NamedNoiseExpression>;
  'noise-function': Record<string, NamedNoiseFunction>;
  'night-vision-equipment': Record<string, NightVisionEquipmentPrototype>;
  'offshore-pump': Record<string, OffshorePumpPrototype>;
  'optimized-particle': Record<ParticleID, ParticlePrototype>;
  'particle-source': Record<string, ParticleSourcePrototype>;
  pipe: Record<string, PipePrototype>;
  'pipe-to-ground': Record<string, PipeToGroundPrototype>;
  'place-equipment-achievement': Record<
    string,
    PlaceEquipmentAchievementPrototype
  >;
  planet: Record<string, PlanetPrototype>;
  plant: Record<string, PlantPrototype>;
  'player-damaged-achievement': Record<
    string,
    PlayerDamagedAchievementPrototype
  >;
  'player-port': Record<string, PlayerPortPrototype>;
  'power-switch': Record<string, PowerSwitchPrototype>;
  'procession-layer-inheritance-group': Record<
    ProcessionLayerInheritanceGroupID,
    ProcessionLayerInheritanceGroup
  >;
  procession: Record<ProcessionID, ProcessionPrototype>;
  'produce-achievement': Record<string, ProduceAchievementPrototype>;
  'produce-per-hour-achievement': Record<
    string,
    ProducePerHourAchievementPrototype
  >;
  'programmable-speaker': Record<string, ProgrammableSpeakerPrototype>;
  projectile: Record<string, ProjectilePrototype>;
  pump: Record<string, PumpPrototype>;
  quality: Record<QualityID, QualityPrototype>;
  radar: Record<string, RadarPrototype>;
  'rail-chain-signal': Record<string, RailChainSignalPrototype>;
  'rail-planner': Record<string, RailPlannerPrototype>;
  'rail-ramp': Record<string, RailRampPrototype>;
  'rail-remnants': Record<string, RailRemnantsPrototype>;
  'rail-signal': Record<string, RailSignalPrototype>;
  'rail-support': Record<string, RailSupportPrototype>;
  reactor: Record<string, ReactorPrototype>;
  'recipe-category': Record<RecipeCategoryID, RecipeCategory>;
  recipe: Record<RecipeID, RecipePrototype>;
  'remote-controller': Record<string, RemoteControllerPrototype>;
  'repair-tool': Record<string, RepairToolPrototype>;
  'research-achievement': Record<string, ResearchAchievementPrototype>;
  'research-with-science-pack-achievement': Record<
    string,
    ResearchWithSciencePackAchievementPrototype
  >;
  'resource-category': Record<ResourceCategoryID, ResourceCategory>;
  resource: Record<string, ResourceEntityPrototype>;
  'roboport-equipment': Record<string, RoboportEquipmentPrototype>;
  roboport: Record<string, RoboportPrototype>;
  'rocket-silo': Record<string, RocketSiloPrototype>;
  'rocket-silo-rocket': Record<string, RocketSiloRocketPrototype>;
  'rocket-silo-rocket-shadow': Record<string, RocketSiloRocketShadowPrototype>;
  segment: Record<string, SegmentPrototype>;
  'segmented-unit': Record<string, SegmentedUnitPrototype>;
  'selection-tool': Record<string, SelectionToolPrototype>;
  'selector-combinator': Record<string, SelectorCombinatorPrototype>;
  'shoot-achievement': Record<string, ShootAchievementPrototype>;
  shortcut: Record<string, ShortcutPrototype>;
  'simple-entity': Record<string, SimpleEntityPrototype>;
  'simple-entity-with-force': Record<string, SimpleEntityWithForcePrototype>;
  'simple-entity-with-owner': Record<string, SimpleEntityWithOwnerPrototype>;
  'smoke-with-trigger': Record<string, SmokeWithTriggerPrototype>;
  'solar-panel-equipment': Record<string, SolarPanelEquipmentPrototype>;
  'solar-panel': Record<string, SolarPanelPrototype>;
  sound: Record<string, SoundPrototype>;
  'space-connection-distance-traveled-achievement': Record<
    string,
    SpaceConnectionDistanceTraveledAchievementPrototype
  >;
  'space-connection': Record<SpaceConnectionID, SpaceConnectionPrototype>;
  'space-location': Record<SpaceLocationID, SpaceLocationPrototype>;
  'space-platform-hub': Record<string, SpacePlatformHubPrototype>;
  'space-platform-starter-pack': Record<
    string,
    SpacePlatformStarterPackPrototype
  >;
  'spectator-controller': Record<string, SpectatorControllerPrototype>;
  'speech-bubble': Record<string, SpeechBubblePrototype>;
  'spider-leg': Record<string, SpiderLegPrototype>;
  'spider-unit': Record<string, SpiderUnitPrototype>;
  'spider-vehicle': Record<string, SpiderVehiclePrototype>;
  'spidertron-remote': Record<string, SpidertronRemotePrototype>;
  splitter: Record<string, SplitterPrototype>;
  sprite: Record<string, SpritePrototype>;
  sticker: Record<string, StickerPrototype>;
  'storage-tank': Record<string, StorageTankPrototype>;
  'straight-rail': Record<string, StraightRailPrototype>;
  'surface-property': Record<SurfacePropertyID, SurfacePropertyPrototype>;
  surface: Record<SurfaceID, SurfacePrototype>;
  technology: Record<TechnologyID, TechnologyPrototype>;
  'temporary-container': Record<string, TemporaryContainerPrototype>;
  thruster: Record<string, ThrusterPrototype>;
  'tile-effect': Record<TileEffectDefinitionID, TileEffectDefinition>;
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
  'use-entity-in-energy-production-achievement': Record<
    string,
    UseEntityInEnergyProductionAchievementPrototype
  >;
  'use-item-achievement': Record<string, UseItemAchievementPrototype>;
  'utility-constants': Record<string, UtilityConstants>;
  'utility-sounds': Record<string, UtilitySounds>;
  'utility-sprites': Record<string, UtilitySprites>;
  'virtual-signal': Record<VirtualSignalID, VirtualSignalPrototype>;
  wall: Record<string, WallPrototype>;
}
export const allKeys: (keyof RawData)[] = [
  'accumulator',
  'achievement',
  'active-defense-equipment',
  'agricultural-tower',
  'airborne-pollutant',
  'ambient-sound',
  'ammo',
  'ammo-category',
  'ammo-turret',
  'animation',
  'arithmetic-combinator',
  'armor',
  'arrow',
  'artillery-flare',
  'artillery-projectile',
  'artillery-turret',
  'artillery-wagon',
  'assembling-machine',
  'asteroid',
  'asteroid-chunk',
  'asteroid-collector',
  'autoplace-control',
  'battery-equipment',
  'beacon',
  'beam',
  'belt-immunity-equipment',
  'blueprint',
  'blueprint-book',
  'boiler',
  'build-entity-achievement',
  'burner-generator',
  'burner-usage',
  'capsule',
  'capture-robot',
  'car',
  'cargo-bay',
  'cargo-landing-pad',
  'cargo-pod',
  'cargo-wagon',
  'chain-active-trigger',
  'change-surface-achievement',
  'character',
  'character-corpse',
  'cliff',
  'collision-layer',
  'combat-robot',
  'combat-robot-count-achievement',
  'complete-objective-achievement',
  'constant-combinator',
  'construct-with-robots-achievement',
  'construction-robot',
  'container',
  'copy-paste-tool',
  'corpse',
  'create-platform-achievement',
  'curved-rail-a',
  'curved-rail-b',
  'custom-event',
  'custom-input',
  'damage-type',
  'decider-combinator',
  'deconstruct-with-robots-achievement',
  'deconstructible-tile-proxy',
  'deconstruction-item',
  'delayed-active-trigger',
  'deliver-by-robots-achievement',
  'deliver-category',
  'deliver-impact-combination',
  'deplete-resource-achievement',
  'destroy-cliff-achievement',
  'display-panel',
  'dont-build-entity-achievement',
  'dont-craft-manually-achievement',
  'dont-kill-manually-achievement',
  'dont-research-before-researching-achievement',
  'dont-use-entity-in-energy-production-achievement',
  'editor-controller',
  'electric-energy-interface',
  'electric-pole',
  'electric-turret',
  'elevated-curved-rail-a',
  'elevated-curved-rail-b',
  'elevated-half-diagonal-rail',
  'elevated-straight-rail',
  'energy-shield-equipment',
  'entity-ghost',
  'equip-armor-achievement',
  'equipment-category',
  'equipment-ghost',
  'equipment-grid',
  'explosion',
  'fire',
  'fish',
  'fluid',
  'fluid-turret',
  'fluid-wagon',
  'font',
  'fuel-category',
  'furnace',
  'fusion-generator',
  'fusion-reactor',
  'gate',
  'generator',
  'generator-equipment',
  'god-controller',
  'group-attack-achievement',
  'gui-style',
  'gun',
  'half-diagonal-rail',
  'heat-interface',
  'heat-pipe',
  'highlight-box',
  'impact-category',
  'infinity-container',
  'infinity-pipe',
  'inserter',
  'inventory-bonus-equipment',
  'item',
  'item-entity',
  'item-group',
  'item-request-proxy',
  'item-subgroup',
  'item-with-entity-data',
  'item-with-inventory',
  'item-with-label',
  'item-with-tags',
  'kill-achievement',
  'lab',
  'lamp',
  'land-mine',
  'lane-splitter',
  'legacy-curved-rail',
  'legacy-straight-rail',
  'lightning',
  'lightning-attractor',
  'linked-belt',
  'linked-container',
  'loader',
  'loader-1x1',
  'locomotive',
  'logistic-container',
  'logistic-robot',
  'map-gen-presets',
  'map-settings',
  'market',
  'mining-drill',
  'module',
  'module-category',
  'module-transfer-achievement',
  'mouse-cursor',
  'movement-bonus-equipment',
  'night-vision-equipment',
  'noise-expression',
  'noise-function',
  'offshore-pump',
  'optimized-decorative',
  'optimized-particle',
  'particle-source',
  'pipe',
  'pipe-to-ground',
  'place-equipment-achievement',
  'planet',
  'plant',
  'player-damaged-achievement',
  'player-port',
  'power-switch',
  'procession',
  'procession-layer-inheritance-group',
  'produce-achievement',
  'produce-per-hour-achievement',
  'programmable-speaker',
  'projectile',
  'pump',
  'quality',
  'radar',
  'rail-chain-signal',
  'rail-planner',
  'rail-ramp',
  'rail-remnants',
  'rail-signal',
  'rail-support',
  'reactor',
  'recipe',
  'recipe-category',
  'remote-controller',
  'repair-tool',
  'research-achievement',
  'research-with-science-pack-achievement',
  'resource',
  'resource-category',
  'roboport',
  'roboport-equipment',
  'rocket-silo',
  'rocket-silo-rocket',
  'rocket-silo-rocket-shadow',
  'segment',
  'segmented-unit',
  'selection-tool',
  'selector-combinator',
  'shoot-achievement',
  'shortcut',
  'simple-entity',
  'simple-entity-with-force',
  'simple-entity-with-owner',
  'smoke-with-trigger',
  'solar-panel',
  'solar-panel-equipment',
  'sound',
  'space-connection',
  'space-connection-distance-traveled-achievement',
  'space-location',
  'space-platform-hub',
  'space-platform-starter-pack',
  'spectator-controller',
  'speech-bubble',
  'spider-leg',
  'spider-unit',
  'spider-vehicle',
  'spidertron-remote',
  'splitter',
  'sprite',
  'sticker',
  'storage-tank',
  'straight-rail',
  'stream',
  'surface',
  'surface-property',
  'technology',
  'temporary-container',
  'thruster',
  'tile',
  'tile-effect',
  'tile-ghost',
  'tips-and-tricks-item',
  'tips-and-tricks-item-category',
  'tool',
  'train-path-achievement',
  'train-stop',
  'transport-belt',
  'tree',
  'trigger-target-type',
  'trivial-smoke',
  'turret',
  'tutorial',
  'underground-belt',
  'unit',
  'unit-spawner',
  'upgrade-item',
  'use-entity-in-energy-production-achievement',
  'use-item-achievement',
  'utility-constants',
  'utility-sounds',
  'utility-sprites',
  'virtual-signal',
  'wall',
];
