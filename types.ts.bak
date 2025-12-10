// Adapted from https://github.com/redruin1/factorio-draftsman/blob/064a6677b5e31cede8bd20763eed835626cfc8c3/draftsman/signatures.py#L1521

/**
 * Blueprint parameter discriminators defined by `draftsman.signatures.Parameter`.
 * @see https://github.com/redruin1/factorio-draftsman/blob/064a6677b5e31cede8bd20763eed835626cfc8c3/draftsman/signatures.py#L1529
 */
export enum ParameterType {
  /** Signal ID substitution (`draftsman.signatures.IDParameter`). */
  Id = 'id',
  /** Numeric substitution (`draftsman.signatures.NumberParameter`). */
  Number = 'number',
}

/**
 * Comparison operators accepted by Draftsman validation utilities.
 * @see https://github.com/redruin1/factorio-draftsman/blob/064a6677b5e31cede8bd20763eed835626cfc8c3/draftsman/signatures.py#L117
 */
export enum Comparator {
  /** Strictly greater-than comparison (`>`). */
  Greater = '>',
  /** Strictly less-than comparison (`<`). */
  Less = '<',
  /** Equality comparison (`=`). */
  Equal = '=',
  /** Equality comparison alias (`==`). */
  DoubleEqual = '==',
  /** Greater-than-or-equal Unicode form (`≥`). */
  GreaterOrEqualUnicode = '≥',
  /** Greater-than-or-equal ASCII form (`>=`). */
  GreaterOrEqual = '>=',
  /** Less-than-or-equal Unicode form (`≤`). */
  LessOrEqualUnicode = '≤',
  /** Less-than-or-equal ASCII form (`<=`). */
  LessOrEqual = '<=',
  /** Not-equal Unicode form (`≠`). */
  NotEqualUnicode = '≠',
  /** Not-equal ASCII form (`!=`). */
  NotEqual = '!=',
}

/**
 * Quality tiers supported by `draftsman.data.qualities`.
 * @see https://github.com/redruin1/factorio-draftsman/blob/064a6677b5e31cede8bd20763eed835626cfc8c3/draftsman/signatures.py#L87
 */
export enum QualityId {
  /** Default quality. */
  Normal = 'normal',
  /** First upgraded quality tier. */
  Uncommon = 'uncommon',
  /** Second upgraded quality tier. */
  Rare = 'rare',
  /** Third upgraded quality tier. */
  Epic = 'epic',
  /** Fourth upgraded quality tier. */
  Legendary = 'legendary',
  /** Placeholder when quality cannot be discerned. */
  QualityUnknown = 'quality-unknown',
}

/**
 * Selection constraints for filtering signal quality ranges.
 * Mirrors `draftsman.signatures.QualityFilter`.
 * @see https://github.com/redruin1/factorio-draftsman/blob/064a6677b5e31cede8bd20763eed835626cfc8c3/draftsman/signatures.py#L1014-L1030
 */
export interface QualityFilter {
  /**
   * Target quality to compare against; `null` matches any signal quality.
   */
  quality?: QualityId | null
  /**
   * Comparison operator used when evaluating the selected quality.
   */
  comparator?: Comparator
}

/**
 * Factorio signal categories recognised by Draftsman.
 * @see https://github.com/redruin1/factorio-draftsman/blob/main/draftsman/signatures.py#L69
 */
export type SignalType = 'virtual'
  | 'item'
  | 'fluid'
  | 'recipe'
  | 'entity'
  | 'space-location'
  | 'asteroid-chunk'
  | 'quality'

/**
 * Arithmetic operations supported by circuit combinators.
 * @see https://github.com/redruin1/factorio-draftsman/blob/main/draftsman/signatures.py#L88
 */
export type ArithmeticOperation = '*'
  | '/'
  | '+'
  | '-'
  | '%'
  | '^'
  | '<<'
  | '>>'
  | 'AND'
  | 'OR'
  | 'XOR'

/** Circuit wire colours available in Factorio. */
export type CircuitColor = 'red' | 'green'

/**
 * All wait condition discriminators recognised by Factorio 2.0.
 * @see https://github.com/redruin1/factorio-draftsman/blob/main/draftsman/constants.py#L1033
 */
export type WaitConditionType = 'all_requests_satisfied'
  | 'any_planet_import_zero'
  | 'any_request_not_satisfied'
  | 'any_request_zero'
  | 'at_station'
  | 'circuit'
  | 'damage_taken'
  | 'destination_full_or_no_path'
  | 'empty'
  | 'fluid_count'
  | 'fuel_item_count_all'
  | 'fuel_item_count_any'
  | 'full'
  | 'fuel_full'
  | 'not_empty'
  | 'inactivity'
  | 'item_count'
  | 'not_at_station'
  | 'passenger_present'
  | 'passenger_not_present'
  | 'request_satisfied'
  | 'request_not_satisfied'
  | 'specific_destination_full'
  | 'specific_destination_not_full'
  | 'time'

/** Boolean operator applied between sequential wait conditions. */
export type WaitConditionCompareType = 'and' | 'or'

/** JSON-compatible scalar value. */
export type JsonPrimitive = string | number | boolean | null

/** JSON-compatible value. */
export type JsonValue = JsonPrimitive | JsonValue[] | JsonObject

/** JSON-compatible object used for extensibility hooks. */
export interface JsonObject {
  [key: string]: JsonValue
}

/** Two-dimensional position measured in tiles. */
export interface Vector2 {
  x: number
  y: number
}

/** RGBA colour object encoded as floats or bytes (Factorio format). */
export interface ColorRgba {
  r: number
  g: number
  b: number
  a?: number
}

/**
 * Serialized signal identifier.
 * @see https://github.com/redruin1/factorio-draftsman/blob/main/draftsman/signatures.py#L125
 */
export interface SignalId {
  /** Signal name; omitted entries are treated as no signal and stripped on round-trip. */
  name?: string | null
  /** Signal category (item, fluid, virtual, etc.). */
  type: SignalType
  /** Signal quality flag. Defaults to normal when unspecified. */
  quality?: QualityId | null
  /** Comparator for quality ranges; only meaningful when quality is also provided. */
  comparator?: Comparator | null
}

/**
 * Circuit network selection toggles derived from Draftsman.
 * @see https://github.com/redruin1/factorio-draftsman/blob/main/draftsman/signatures.py#L207
 */
export interface CircuitNetworkSelection {
  /** Whether to draw values from the red circuit wire. */
  red?: boolean
  /** Whether to draw values from the green circuit wire. */
  green?: boolean
}

/**
 * Simplified Draftsman condition payload used for logistic and circuit checks.
 * @see https://github.com/redruin1/factorio-draftsman/blob/main/draftsman/signatures.py#L448
 */
export interface Condition {
  /** Signal occupying the left-hand slot in the GUI. */
  first_signal?: SignalId | null
  /** Comparison operator controlling the condition. */
  comparator?: Comparator
  /** Literal constant occupying the right-hand slot (overridden by second_signal). */
  constant?: number
  /** Optional signal occupying the right-hand slot; takes precedence over constant. */
  second_signal?: SignalId | null
  /** When true, copies operand counts from input wires instead of using constant values. */
  count_from_input?: boolean
  /** Quality discriminator used by quality-aware conditions. */
  quality?: QualityId | null
  /** Comparison operator used when evaluating quality ranges. */
  quality_comparator?: Comparator
}

/**
 * Common Draftsman blueprint parameter attributes.
 * @see https://github.com/redruin1/factorio-draftsman/blob/064a6677b5e31cede8bd20763eed835626cfc8c3/draftsman/signatures.py#L1519-L1528
 */
export interface Parameter {
  /**
   * Discriminator describing the parameter structure.
   */
  type: ParameterType
  /**
   * User-facing display name for the parameter.
   */
  name?: string
  /**
   * Optional descriptive text exposed in UI exports (not serialized by Draftsman).
   */
  description?: string
}

/**
 * Blueprint parameter specification representing a signal ID substitution.
 * Mirrors `draftsman.signatures.IDParameter`.
 * @see https://github.com/redruin1/factorio-draftsman/blob/064a6677b5e31cede8bd20763eed835626cfc8c3/draftsman/signatures.py#L1532-L1582
 */
export interface IdParameter extends Parameter {
  type: ParameterType.Id
  /**
   * Signal identifier or parameter token to substitute.
   */
  id: string
  /**
   * Quality constraint applied when resolving the signal.
   */
  quality_condition?: QualityFilter
  /**
   * Name of another parameter to inherit signal type information from.
   */
  ingredient_of?: string | null
  /**
   * Indicates whether the parameter is selectable during placement.
   */
  parameter?: boolean
}

/**
 * Blueprint parameter specification representing a numeric substitution.
 * Mirrors `draftsman.signatures.NumberParameter`.
 * @see https://github.com/redruin1/factorio-draftsman/blob/064a6677b5e31cede8bd20763eed835626cfc8c3/draftsman/signatures.py#L1599-L1649
 */
export interface NumberParameter extends Parameter {
  type: ParameterType.Number
  /**
   * Literal string encoding of the constant numeric value to replace.
   * This is the final 'release' value. If `formula` is used, the
   * release value will be set to the debug value.
   */
  number?: string
  /**
   * When `true`, leaves the original blueprint value untouched.
   */
  not_parametrised?: boolean
  /**
   * Variable name that other formulas may reference.
   */
  variable?: string
  /**
   * Arithmetic expression used to compute the final value.
   */
  formula?: string
  /**
   * Marks the parameter as dependent on earlier variables within the set.
   */
  dependent?: boolean
}

/** Union of all supported blueprint parameter specifications. */
export type BlueprintParameter = IdParameter | NumberParameter

/**
 * Signal filter entry used by constant combinators and logistic sections.
 */
export interface SignalFilter {
  /** Index of the filter entry within the owning GUI list. */
  index: number
  /** Signal name being filtered, or null to represent an empty slot. */
  name?: string | null
  /** Numeric value of the filter (or lower bound when max_count is provided). */
  count?: number | null
  /** Specific signal type to enforce when multiple categories share a name. */
  type?: SignalType | null
  /** Quality flag applied to the signal request/output. */
  quality?: QualityId | null
  /** Comparator used to evaluate counted ranges for the filter. */
  comparator?: Comparator
  /** Upper bound when representing a range of counts. */
  max_count?: number | null
}

/** Item filter entry used by inserters and requester chests. */
export interface ItemFilter {
  /** Index of the filter entry within the owning GUI list. */
  index: number
  /** Item prototype name requested by this filter. */
  name: string
  /** Item count or lower bound for ranged comparisons. */
  count?: number | null
  /** Quality flag applied to the item. */
  quality?: QualityId | null
  /** Comparator used when bounding quality ranges. */
  comparator?: Comparator
  /** Upper bound for ranged item counts. */
  max_count?: number | null
}

/** Manual signal section exported by constant combinators (Factorio 2.0). */
export interface ManualSection {
  /** Section index within the constant combinator (0 ≤ index < 100). */
  index: number
  /** Ordered set of signal filters contained inside this section. */
  filters: SignalFilter[]
  /** Optional section label registered within the save. */
  group?: string
  /** Whether the section currently contributes to the output. */
  active?: boolean
}

/** Alert configuration serialised alongside certain entities. */
export interface AlertParameters {
  /** Alert type discriminator from Factorio's alert prototype table. */
  alert_type: string
  /** Icon used when presenting the alert. */
  icon_signal_id?: SignalId | null
  /** Localised alert message. */
  message?: string
  /** Whether the alert should be shown on the world map. */
  show_on_map?: boolean
  /** Prototype-specific extension data. */
  additional_properties?: JsonObject
}

/** Draftsman decider combinator condition payload. */
export interface DeciderCondition extends Condition {
  /** Circuit network selection for the first operand. */
  first_signal_networks?: CircuitNetworkSelection
  /** Circuit network selection for the second operand. */
  second_signal_networks?: CircuitNetworkSelection
  /** Boolean operator used when chaining wait conditions. */
  compare_type?: WaitConditionCompareType
}

/** Draftsman decider combinator output payload. */
export interface DeciderOutput {
  /** Output signal emitted by the combinator. */
  signal?: SignalId | null
  /** Whether to source the output count from input wires. */
  copy_count_from_input?: boolean
  /** Circuit networks the output should read from when copying counts. */
  networks?: CircuitNetworkSelection
  /** Constant value emitted when copy_count_from_input is false. */
  constant?: number
}

/** Arithmetic combinator configuration payload. */
export interface ArithmeticCondition {
  /** First operand signal reference (if not using a constant). */
  first_signal?: SignalId | null
  /** Network selection for the first operand signal. */
  first_signal_networks?: CircuitNetworkSelection
  /** First operand literal constant (used when first_signal is absent). */
  first_constant?: number | null
  /** Second operand signal reference (if not using a constant). */
  second_signal?: SignalId | null
  /** Network selection for the second operand signal. */
  second_signal_networks?: CircuitNetworkSelection
  /** Second operand literal constant (used when second_signal is absent). */
  second_constant?: number | null
  /** Arithmetic operator applied between the two operands. */
  operation?: ArithmeticOperation
  /** Output signal receiving the computed result. */
  output_signal?: SignalId | null
  /** Network selection that determines which wires observe the output. */
  output_signal_networks?: CircuitNetworkSelection
}

/**
 * Control behaviour bag used across multiple entity classes.
 * Consumers may extend via the generic parameter for modded fields.
 */
export interface ControlBehavior<TCustom extends JsonObject = JsonObject> {
  /** Circuit condition attached to the entity (eg inserters, lamps). */
  circuit_condition?: Condition
  /** Logistic condition attached to the entity (eg logistic chests). */
  logistic_condition?: Condition
  /** One or more decider-style conditions backing the entity behaviour. */
  decider_conditions?: DeciderCondition | DeciderCondition[]
  /** Definition of output behaviour for decider combinators. */
  decider_outputs?: DeciderOutput | DeciderOutput[]
  /** Arithmetic combinator configuration. */
  arithmetic_conditions?: ArithmeticCondition
  /** Flat list of signal filters (legacy constant combinator format). */
  filters?: SignalFilter[]
  /** Factorio 2.0 manual sections. */
  sections?: ManualSection[]
  /** Prototype-specific or mod-added control properties. */
  custom_properties?: TCustom
}

/** Circuit network connection description to another entity. */
export interface CircuitWireConnection {
  /** Target entity number receiving the wire connection. */
  entity_id: number
  /** Target connection point/circuit ID within the entity. */
  circuit_id?: number
  /** Source connector identifier when multiple sockets exist. */
  wire_id?: number
}

/** Power network connection description to another entity. */
export interface PowerWireConnection {
  /** Target entity number receiving the wire connection. */
  entity_id: number
  /** Source connector identifier when multiple sockets exist. */
  wire_id?: number
}

/** Port definition for a specific connection point. */
export interface EntityCircuitPort {
  /** Red wire connections originating from this port. */
  red?: CircuitWireConnection[]
  /** Green wire connections originating from this port. */
  green?: CircuitWireConnection[]
}

/** Union of circuit- and power-wire connection payloads. */
export type EntityConnectionPort = EntityCircuitPort | PowerWireConnection[]

/** Map of connection point identifiers to wire definitions. */
export type EntityConnections = Partial<Record<string, EntityConnectionPort>>

/**
 * Identifiers used by Factorio for wiring endpoints. Mirrors Draftsman enum.
 * @see https://github.com/redruin1/factorio-draftsman/blob/main/draftsman/constants.py#L1094
 */
export enum WireConnectorId {
  CircuitInputRed = 1,
  CircuitInputGreen = 2,
  CircuitOutputRed = 3,
  CircuitOutputGreen = 4,
  PoleCopper = 5,
  PowerSwitchCopper = 6,
}

/** Sparse array representing a Factorio 2.0 wire connection. */
export type BlueprintWire = readonly [number, WireConnectorId, number, WireConnectorId]

/** Wait condition definition in train schedules. */
export interface WaitCondition {
  /** Wait condition discriminator (time, circuit, full, etc.). */
  type: WaitConditionType
  /** Boolean operator used when chaining to the next condition. */
  compare_type?: WaitConditionCompareType
  /** Specific train stop name this condition references (station-type waits). */
  station?: string
  /** Duration in ticks used by time and inactivity waits. */
  ticks?: number
  /** Circuit/logistic condition payload when `type` is `circuit` or count-based. */
  condition?: Condition
  /** Mod-specific extension information. */
  custom_properties?: JsonObject
}

/** Single schedule record (stop) entry. */
export interface TrainScheduleRecord {
  /** Localised name of the station to visit. */
  station?: string
  /** Serialized rail reference for temporary/explicit target stops. */
  rail?: JsonObject
  /** Whether the train should arrive driving forward or reverse. */
  rail_direction?: 'front' | 'back'
  /** Branch identifier for split junctions (Factorio 2.0). */
  rail_branch?: number
  /** Marks this record as a temporary stop. */
  temporary?: boolean
  /** When false, prevents the train from unloading at this stop. */
  allows_unloading?: boolean
  /** Sequence of wait conditions evaluated at this stop. */
  wait_conditions?: WaitCondition[]
  /** Mod-specific extension block. */
  custom_properties?: JsonObject
}

/** Train schedule interrupt entry (Factorio 2.0). */
export interface TrainScheduleInterrupt {
  /** Interrupt identifier. */
  name: string
  /** Conditions that must be satisfied before this interrupt activates. */
  conditions?: WaitCondition[]
  /** Alternative records to execute while the interrupt is active. */
  targets?: TrainScheduleRecord[]
  /** Indicates whether nested interrupts are being resolved. */
  inside_interrupt?: boolean
  /** Mod-specific extension block. */
  custom_properties?: JsonObject
}

/** Complete train schedule definition. */
export interface TrainSchedule {
  /** Ordered list of planned stops. */
  records: TrainScheduleRecord[]
  /** Optional interrupts evaluated alongside the base schedule. */
  interrupts?: TrainScheduleInterrupt[]
  /** Mod-specific extension block. */
  custom_properties?: JsonObject
}

/** Assignment of a schedule to one or more locomotives. */
export interface TrainScheduleAssignment {
  /** Entity numbers of locomotives that own this schedule. */
  locomotives: number[]
  /** Schedule executed by the referenced locomotives. */
  schedule: TrainSchedule
  /** Additional rolling stock indices included in the assignment. */
  rolling_stock?: number[]
  /** Mod-specific extension block. */
  custom_properties?: JsonObject
}

/** Train coupling information used by Factorio 2.0 blueprints. */
export interface StockConnection {
  /** Entity number identifying the rolling stock being described. */
  stock: number
  /** Entity number connected to the front coupler, if any. */
  front?: number | null
  /** Entity number connected to the rear coupler, if any. */
  back?: number | null
  /** Mod-specific extension block. */
  custom_properties?: JsonObject
}

/** Blueprint entity definition (heavily specialised per prototype). */
export interface BlueprintEntity<TExtra extends JsonObject = JsonObject> {
  /** Unique entity identifier within the blueprint. */
  entity_number: number
  /** Prototype name (actor type) for the entity. */
  name: string
  /** World-space position of the entity, measured in tiles. */
  position: Vector2
  /** Cardinal direction index (0-7). */
  direction?: number
  /** Orientation value for rolling stock and curved entities. */
  orientation?: number
  /** Tile-aligned placement reference for combinators and rail signals. */
  tile_position?: Vector2
  /** Quality tier applied to the entity when importing into Factorio 2.0. */
  quality?: QualityId
  /** Force name that owns the entity (defaults to player force). */
  force?: string
  /** Inventory contents serialized alongside the entity. */
  items?: Record<string, number>
  /** Active recipe assigned to crafting entities. */
  recipe?: string
  /** Inventory bar limitation for container-style entities. */
  bar?: number
  /** Control behaviour payload used by circuit/logistic aware entities. */
  control_behavior?: ControlBehavior
  /** Wire connections originating from this entity. */
  connections?: EntityConnections
  /** Power pole neighbours for legacy wire serialization. */
  neighbours?: number[]
  /** Alert configuration emitted by the entity. */
  alert_parameters?: AlertParameters
  /** Item drop offset used by inserters. */
  drop_position?: Vector2
  /** Item pickup offset used by inserters. */
  pickup_position?: Vector2
  /** Item filter definitions (eg. belts, loaders). */
  filters?: ItemFilter[]
  /** Logistic request filters (eg. requester chests). */
  request_filters?: SignalFilter[]
  /** Logistic trash/request filters for character armor grids. */
  logistic_filters?: ItemFilter[]
  /** Arbitrary metadata tags stored on the entity. */
  tags?: JsonObject
  /** Entity type hint used by certain blueprint tools. */
  type?: string
  /** Custom station name for train stop entities. */
  train_stop_name?: string
  /** When false, keeps the train in manual mode after placement. */
  manual_mode?: boolean
  /** Embedded train schedule when blueprinting locomotives. */
  schedule?: TrainSchedule
  /** Requested module/item counts attached to the entity. */
  item_requests?: Record<string, number>
  /** Stack size override applied to stack inserters. */
  stack_size_override?: number
  /** Prototype-specific or mod-added metadata. */
  custom_properties?: TExtra
}

/** Blueprint tile definition. */
export interface BlueprintTile<TExtra extends JsonObject = JsonObject> {
  /** Tile prototype name being placed. */
  name: string
  /** World-space tile coordinates. */
  position: Vector2
  /** Optional tile orientation (used by hazard concrete). */
  direction?: number
  /** Mod-specific extension block. */
  custom_properties?: TExtra
}

/** Icon metadata for blueprints and planner items. */
export interface BlueprintIcon {
  /** One-based icon slot index (1-4). */
  index: 1 | 2 | 3 | 4
  /** Signal displayed in the icon slot. */
  signal: SignalId
}

/**
 * Factorio Blueprint, adapted from `draftsman.classes.blueprint.Blueprint`.
 * Represents the JSON structure under the root key `blueprint`.
 */
export interface Blueprint<TExtra extends JsonObject = JsonObject> {
  /** Always `'blueprint'`. Serialized. */
  item: 'blueprint'
  /** User-given title. Serialized. */
  label?: string
  /** Label color (RGBA 0..1). Serialized. */
  label_color?: ColorRgba | null
  /** Description text (<=500 bytes). Serialized. */
  description?: string
  /** Up to 4 icons. Serialized. */
  icons?: BlueprintIcon[]
  /** 64-bit encoded Factorio version. Serialized. */
  version: number
  /** Snapping grid size; presence enables snapping. Serialized. */
  snapping_grid_size?: Vector2 | null
  /** Absolute vs relative snapping. Serialized. */
  absolute_snapping?: boolean
  /** Position relative to grid when absolute snapping is true. Serialized. */
  position_relative_to_grid?: Vector2
  /** Entity list. Serialized. */
  entities?: Array<BlueprintEntity<TExtra>>
  /** Tile list. Serialized. */
  tiles?: Array<BlueprintTile<TExtra>>
  /** Circuit wires list (2.0 native; may be absent). Serialized. */
  wires?: BlueprintWire[]
  /** Train schedules list. Serialized. */
  schedules?: TrainScheduleAssignment[]
  /** Blueprint parameters (Factorio 2.0). Serialized. */
  parameters?: BlueprintParameter[]
  /** Stock connections (train couplings). Serialized. */
  stock_connections?: StockConnection[]
  /** Additional groups or metadata present in Draftsman exports. */
  groups?: JsonObject[]
  /** Reserved for forward-compatible metadata. */
  custom_properties?: JsonObject
}
