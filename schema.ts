import { z } from 'zod'

export enum SignalType {
  /** Virtual-only signals such as letters, colors, and other UI icons (`draftsman.signatures.SignalID`). */
  Virtual = 'virtual',
  /** Signals that reference item prototypes from the Factorio item database. */
  Item = 'item',
  /** Signals representing fluid prototypes (e.g., steam, petroleum gas). */
  Fluid = 'fluid',
  /** Signals pointing to recipe prototypes for crafting combinators. */
  Recipe = 'recipe',
  /** Signals that encode entity prototypes (structures, units, rolling stock). */
  Entity = 'entity',
  /** Signals that select interstellar destinations for space platforms (Factorio 2.0). */
  SpaceLocation = 'space-location',
  /** Signals produced from asteroid chunk catalogues during space mining. */
  AsteroidChunk = 'asteroid-chunk',
  /** Dedicated quality signals used when filtering by `QualityID`. */
  Quality = 'quality',
}

export enum ArithmeticOperation {
  /** Multiply the first operand by the second (`draftsman.prototypes.arithmetic_combinator`). */
  Multiply = '*',
  /** Divide the first operand by the second, rounding toward zero. */
  Divide = '/',
  /** Add the two operands together. */
  Add = '+',
  /** Subtract the second operand from the first. */
  Subtract = '-',
  /** Compute the remainder of the first operand divided by the second. */
  Modulo = '%',
  /** Raise the first operand to the power of the second. */
  Power = '^',
  /** Bitwise left-shift the first operand by the second. */
  ShiftLeft = '<<',
  /** Bitwise right-shift the first operand by the second. */
  ShiftRight = '>>',
  /** Bitwise AND of both operands. */
  And = 'AND',
  /** Bitwise OR of both operands. */
  Or = 'OR',
  /** Bitwise XOR of both operands. */
  Xor = 'XOR',
}

export enum WaitConditionType {
  /** Triggered when all logistics requests at the current planet are satisfied. */
  AllRequestsSatisfied = 'all_requests_satisfied',
  /** Triggered if any planetary import request reaches zero. */
  AnyPlanetImportZero = 'any_planet_import_zero',
  /** Triggered when any request on the platform falls below its demand threshold. */
  AnyRequestNotSatisfied = 'any_request_not_satisfied',
  /** Triggered when any request on the platform hits zero. */
  AnyRequestZero = 'any_request_zero',
  /** Triggered when the vehicle is currently stopped at the named station. */
  AtStation = 'at_station',
  /** Triggered when the circuit condition assigned to the stop evaluates to true. */
  Circuit = 'circuit',
  /** Triggered once the space platform has taken damage past a configured limit. */
  DamageTaken = 'damage_taken',
  /** Triggered when the next destination has no space or no valid rail path. */
  DestinationFullOrNoPath = 'destination_full_or_no_path',
  /** Triggered when the vehicle's cargo inventory becomes empty. */
  Empty = 'empty',
  /** Triggered when the fluid cargo exceeds the supplied threshold. */
  FluidCount = 'fluid_count',
  /** Triggered when the fuel across all locomotives exceeds the given threshold. */
  FuelItemCountAll = 'fuel_item_count_all',
  /** Triggered when the fuel in any locomotive exceeds the given threshold. */
  FuelItemCountAny = 'fuel_item_count_any',
  /** Triggered when the vehicle's cargo inventory becomes full. */
  Full = 'full',
  /** Triggered when all locomotives are completely fuelled. */
  FuelFull = 'fuel_full',
  /** Triggered when the vehicle contains any cargo at all. */
  NotEmpty = 'not_empty',
  /** Triggered after the vehicle has been inactive for the configured number of ticks. */
  Inactivity = 'inactivity',
  /** Triggered when the vehicle holds at least the specified count of a given item. */
  ItemCount = 'item_count',
  /** Triggered while the train is not located at the named station. */
  NotAtStation = 'not_at_station',
  /** Triggered when a passenger is present aboard the train or platform. */
  PassengerPresent = 'passenger_present',
  /** Triggered when no passengers remain aboard the train or platform. */
  PassengerNotPresent = 'passenger_not_present',
  /** Triggered when a space platform request is satisfied. */
  RequestSatisfied = 'request_satisfied',
  /** Triggered when a space platform request is not satisfied. */
  RequestNotSatisfied = 'request_not_satisfied',
  /** Triggered when the specified station name is full. */
  SpecificDestinationFull = 'specific_destination_full',
  /** Triggered when the specified station name has room available. */
  SpecificDestinationNotFull = 'specific_destination_not_full',
  /** Triggered after the specified number of ticks elapses. */
  Time = 'time',
}

export enum WaitConditionCompareType {
  /** Chain the next wait condition with a Boolean AND. */
  And = 'and',
  /** Chain the next wait condition with a Boolean OR. */
  Or = 'or',
}

export enum RailDirection {
  /** Train approaches or departs using its front (forward) direction. */
  Front = 'front',
  /** Train approaches or departs in reverse using its back direction. */
  Back = 'back',
}

export enum ComparatorSymbol {
  /** Strictly greater-than comparison. */
  Greater = '>',
  /** Strictly less-than comparison. */
  Less = '<',
  /** Equality comparison using a single equals sign. */
  Equal = '=',
  /** Equality comparison using a double equals sign (legacy string form). */
  DoubleEqual = '==',
  /** Greater-than-or-equal comparison represented with the Unicode glyph. */
  GreaterOrEqualUnicode = '≥',
  /** Greater-than-or-equal comparison using ASCII characters. */
  GreaterOrEqual = '>=',
  /** Less-than-or-equal comparison represented with the Unicode glyph. */
  LessOrEqualUnicode = '≤',
  /** Less-than-or-equal comparison using ASCII characters. */
  LessOrEqual = '<=',
  /** Not-equal comparison represented with the Unicode glyph. */
  NotEqualUnicode = '≠',
  /** Not-equal comparison using ASCII characters. */
  NotEqual = '!=',
}

export enum QualityId {
  /** Default quality tier produced without quality modules. */
  Normal = 'normal',
  /** First upgraded quality tier. */
  Uncommon = 'uncommon',
  /** Second upgraded quality tier. */
  Rare = 'rare',
  /** Third upgraded quality tier. */
  Epic = 'epic',
  /** Highest standard quality tier. */
  Legendary = 'legendary',
  /** Placeholder quality signal representing any/unknown quality. */
  QualityUnknown = 'quality-unknown',
}

export enum ParameterType {
  /** Parameter entry describing a signal substitution (`draftsman.signatures.IDParameter`). */
  Id = 'id',
  /** Parameter entry describing a numeric substitution (`draftsman.signatures.NumberParameter`). */
  Number = 'number',
}

export enum WireConnectorId {
  /** Red circuit input connector on combinators (WireConnectorID.COMBINATOR_INPUT_RED). */
  CircuitInputRed = 1,
  /** Green circuit input connector on combinators. */
  CircuitInputGreen = 2,
  /** Red circuit output connector on combinators. */
  CircuitOutputRed = 3,
  /** Green circuit output connector on combinators. */
  CircuitOutputGreen = 4,
  /** Copper connector shared by power poles and the left terminal of power switches. */
  PoleCopper = 5,
  /** Copper connector used by the right-hand terminal of power switches. */
  PowerSwitchCopper = 6,
}

const enumValues = <T extends Record<string, string>>(
  enumObj: T,
): [T[keyof T], ...Array<T[keyof T]>] =>
  Object.values(enumObj) as [T[keyof T], ...Array<T[keyof T]>]

const comparatorSchema = z.enum(enumValues(ComparatorSymbol))

const qualityIdSchema = z.enum(enumValues(QualityId))

const parameterTypeSchema = z.enum(enumValues(ParameterType))

const signalTypeSchema = z.enum(enumValues(SignalType))

const arithmeticOperationSchema = z.enum(enumValues(ArithmeticOperation))

const waitConditionTypeSchema = z.enum(enumValues(WaitConditionType))

const waitConditionCompareTypeSchema = z.enum(
  enumValues(WaitConditionCompareType),
)

const railDirectionSchema = z.enum(enumValues(RailDirection))

const wireConnectorIdSchema = z.enum(WireConnectorId)

const blueprintIconIndexSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
])

const jsonPrimitiveSchema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.null(),
])

export const jsonObjectSchema = z.record(z.string(), z.unknown())

export type JsonObjectSchema = z.output<typeof jsonObjectSchema>
export type JsonObject = JsonObjectSchema

export const jsonValueSchema = z.union([
  jsonPrimitiveSchema,
  z.array(z.unknown()),
  jsonObjectSchema,
])

export type JsonValueSchema = z.output<typeof jsonValueSchema>
export type JsonValue = JsonValueSchema

/** Two-dimensional position measured in tiles. */
export const vector2Schema = z.object({
  /** Horizontal component measured in tiles. */
  x: z.number(),
  /** Vertical component measured in tiles. */
  y: z.number(),
})

export type Vector2Schema = z.output<typeof vector2Schema>

/** RGBA colour object encoded as floats or bytes (Factorio format). */
export const colorRgbaSchema = z.object({
  /** Red channel intensity (0..1 or 0..255). */
  r: z.number(),
  /** Green channel intensity (0..1 or 0..255). */
  g: z.number(),
  /** Blue channel intensity (0..1 or 0..255). */
  b: z.number(),
  /** Alpha transparency (defaults to 1.0 when omitted). */
  a: z.number().optional(),
})

export type ColorRgbaSchema = z.output<typeof colorRgbaSchema>

/** Selection constraints for filtering signal quality ranges. */
export const qualityFilterSchema = z.object({
  /** Target quality to compare against; `null` matches any signal quality. */
  quality: qualityIdSchema.nullish(),
  /** Comparison operator used when evaluating the selected quality. */
  comparator: comparatorSchema.optional(),
})

export type QualityFilterSchema = z.output<typeof qualityFilterSchema>

/** Serialized signal identifier. */
export const signalIdSchema = z.object({
  /** Signal name; omitted entries are treated as no signal and stripped on round-trip. */
  name: z.string().nullish(),
  /** Signal category (item, fluid, virtual, etc.). */
  type: signalTypeSchema,
  /** Signal quality flag. Defaults to normal when unspecified. */
  quality: qualityIdSchema.nullish(),
  /** Comparator for quality ranges; only meaningful when quality is also provided. */
  comparator: comparatorSchema.nullish(),
})

export type SignalIdSchema = z.output<typeof signalIdSchema>

/** Circuit network selection toggles derived from Draftsman. */
export const circuitNetworkSelectionSchema = z.object({
  /** Whether to draw values from the red circuit wire. */
  red: z.boolean().optional(),
  /** Whether to draw values from the green circuit wire. */
  green: z.boolean().optional(),
})

export type CircuitNetworkSelectionSchema = z.output<
  typeof circuitNetworkSelectionSchema
>

/** Simplified Draftsman condition payload used for logistic and circuit checks. */
export const conditionSchema = z.object({
  /** Signal occupying the left-hand slot in the GUI. */
  first_signal: signalIdSchema.nullish(),
  /** Comparison operator controlling the condition. */
  comparator: comparatorSchema.optional(),
  /** Literal constant occupying the right-hand slot (overridden by second_signal). */
  constant: z.number().optional(),
  /** Optional signal occupying the right-hand slot; takes precedence over constant. */
  second_signal: signalIdSchema.nullish(),
  /** When true, copies operand counts from input wires instead of using constant values. */
  count_from_input: z.boolean().optional(),
  /** Quality discriminator used by quality-aware conditions. */
  quality: qualityIdSchema.nullish(),
  /** Comparison operator used when evaluating quality ranges. */
  quality_comparator: comparatorSchema.optional(),
})

export type ConditionSchema = z.output<typeof conditionSchema>

/** Draftsman decider combinator condition payload. */
export const deciderConditionSchema = conditionSchema.extend({
  /** Circuit network selection for the first operand. */
  first_signal_networks: circuitNetworkSelectionSchema.optional(),
  /** Circuit network selection for the second operand. */
  second_signal_networks: circuitNetworkSelectionSchema.optional(),
  /** Boolean operator used when chaining wait conditions. */
  compare_type: waitConditionCompareTypeSchema.optional(),
})

export type DeciderConditionSchema = z.output<typeof deciderConditionSchema>

/** Draftsman decider combinator output payload. */
export const deciderOutputSchema = z.object({
  /** Output signal emitted by the combinator. */
  signal: signalIdSchema.nullish(),
  /** Whether to source the output count from input wires. */
  copy_count_from_input: z.boolean().optional(),
  /** Circuit networks the output should read from when copying counts. */
  networks: circuitNetworkSelectionSchema.optional(),
  /** Constant value emitted when copy_count_from_input is false. */
  constant: z.number().optional(),
})

export type DeciderOutputSchema = z.output<typeof deciderOutputSchema>

/** Arithmetic combinator configuration payload. */
export const arithmeticConditionSchema = z.object({
  /** First operand signal reference (if not using a constant). */
  first_signal: signalIdSchema.nullish(),
  /** Network selection for the first operand signal. */
  first_signal_networks: circuitNetworkSelectionSchema.optional(),
  /** First operand literal constant (used when first_signal is absent). */
  first_constant: z.number().nullish(),
  /** Second operand signal reference (if not using a constant). */
  second_signal: signalIdSchema.nullish(),
  /** Network selection for the second operand signal. */
  second_signal_networks: circuitNetworkSelectionSchema.optional(),
  /** Second operand literal constant (used when second_signal is absent). */
  second_constant: z.number().nullish(),
  /** Arithmetic operator applied between the two operands. */
  operation: arithmeticOperationSchema.optional(),
  /** Output signal receiving the computed result. */
  output_signal: signalIdSchema.nullish(),
  /** Network selection that determines which wires observe the output. */
  output_signal_networks: circuitNetworkSelectionSchema.optional(),
})

export type ArithmeticConditionSchema = z.output<
  typeof arithmeticConditionSchema
>

/** Signal filter entry used by constant combinators and logistic sections. */
export const signalFilterSchema = z.object({
  /** Index of the filter entry within the owning GUI list. */
  index: z.number(),
  /** Signal name being filtered, or null to represent an empty slot. */
  name: z.string().nullish(),
  /** Numeric value of the filter (or lower bound when max_count is provided). */
  count: z.number().nullish(),
  /** Specific signal type to enforce when multiple categories share a name. */
  type: signalTypeSchema.nullish(),
  /** Quality flag applied to the signal request/output. */
  quality: qualityIdSchema.nullish(),
  /** Comparator used to evaluate counted ranges for the filter. */
  comparator: comparatorSchema.optional(),
  /** Upper bound when representing a range of counts. */
  max_count: z.number().nullish(),
})

export type SignalFilterSchema = z.output<typeof signalFilterSchema>

/** Item filter entry used by inserters and requester chests. */
export const itemFilterSchema = z.object({
  /** Index of the filter entry within the owning GUI list. */
  index: z.number(),
  /** Item prototype name requested by this filter. */
  name: z.string(),
  /** Item count or lower bound for ranged comparisons. */
  count: z.number().nullish(),
  /** Quality flag applied to the item. */
  quality: qualityIdSchema.nullish(),
  /** Comparator used when bounding quality ranges. */
  comparator: comparatorSchema.optional(),
  /** Upper bound for ranged item counts. */
  max_count: z.number().nullish(),
})

export type ItemFilterSchema = z.output<typeof itemFilterSchema>

/** Manual signal section exported by constant combinators (Factorio 2.0). */
export const manualSectionSchema = z.object({
  /** Section index within the constant combinator (0 ≤ index < 100). */
  index: z.number(),
  /** Ordered set of signal filters contained inside this section. */
  filters: z.array(signalFilterSchema),
  /** Optional section label registered within the save. */
  group: z.string().optional(),
  /** Whether the section currently contributes to the output. */
  active: z.boolean().optional(),
})

export type ManualSectionSchema = z.output<typeof manualSectionSchema>

/** Alert configuration serialised alongside certain entities. */
export const alertParametersSchema = z.object({
  /** Alert type discriminator from Factorio's alert prototype table. */
  alert_type: z.string(),
  /** Icon used when presenting the alert. */
  icon_signal_id: signalIdSchema.nullish(),
  /** Localised alert message. */
  message: z.string().optional(),
  /** Whether the alert should be shown on the world map. */
  show_on_map: z.boolean().optional(),
  /** Prototype-specific extension data. */
  additional_properties: jsonObjectSchema.optional(),
})

export type AlertParametersSchema = z.output<typeof alertParametersSchema>

/** Control behaviour bag used across multiple entity classes. */
export const controlBehaviorSchema = z.object({
  /** Circuit condition attached to the entity (eg inserters, lamps). */
  circuit_condition: conditionSchema.optional(),
  /** Logistic condition attached to the entity (eg logistic chests). */
  logistic_condition: conditionSchema.optional(),
  /** One or more decider-style conditions backing the entity behaviour. */
  decider_conditions: z
    .union([
      deciderConditionSchema,
      z.array(deciderConditionSchema),
    ])
    .optional(),
  /** Definition of output behaviour for decider combinators. */
  decider_outputs: z
    .union([
      deciderOutputSchema,
      z.array(deciderOutputSchema),
    ])
    .optional(),
  /** Arithmetic combinator configuration. */
  arithmetic_conditions: arithmeticConditionSchema.optional(),
  /** Flat list of signal filters (legacy constant combinator format). */
  filters: z.array(signalFilterSchema).optional(),
  /** Factorio 2.0 manual sections. */
  sections: z.array(manualSectionSchema).optional(),
})

export type ControlBehaviorSchema = z.output<typeof controlBehaviorSchema>

/** Circuit network connection description to another entity. */
export const circuitWireConnectionSchema = z.object({
  /** Target entity number receiving the wire connection. */
  entity_id: z.number(),
  /** Target connection point/circuit ID within the entity. */
  circuit_id: z.number().optional(),
  /** Source connector identifier when multiple sockets exist. */
  wire_id: z.number().optional(),
})

export type CircuitWireConnectionSchema = z.output<
  typeof circuitWireConnectionSchema
>

/** Power network connection description to another entity. */
export const powerWireConnectionSchema = z.object({
  /** Target entity number receiving the wire connection. */
  entity_id: z.number(),
  /** Source connector identifier when multiple sockets exist. */
  wire_id: z.number().optional(),
})

export type PowerWireConnectionSchema = z.output<
  typeof powerWireConnectionSchema
>

/** Port definition for a specific connection point. */
export const entityCircuitPortSchema = z.object({
  /** Red wire connections originating from this port. */
  red: z.array(circuitWireConnectionSchema).optional(),
  /** Green wire connections originating from this port. */
  green: z.array(circuitWireConnectionSchema).optional(),
})

export type EntityCircuitPortSchema = z.output<
  typeof entityCircuitPortSchema
>

/** Union of circuit- and power-wire connection payloads. */
export const entityConnectionPortSchema = z.union([
  entityCircuitPortSchema,
  z.array(powerWireConnectionSchema),
])

export type EntityConnectionPortSchema = z.output<
  typeof entityConnectionPortSchema
>

/** Map of connection point identifiers to wire definitions. */
export const entityConnectionsSchema = z.record(
  z.string(),
  entityConnectionPortSchema,
)

export type EntityConnectionsSchema = z.output<typeof entityConnectionsSchema>

/** Sparse array representing a Factorio 2.0 wire connection. */
export const blueprintWireSchema = z
  .tuple([
    z.number(),
    wireConnectorIdSchema,
    z.number(),
    wireConnectorIdSchema,
  ])
  .readonly()

export type BlueprintWireSchema = z.output<typeof blueprintWireSchema>

/** Wait condition definition in train schedules. */
export const waitConditionSchema = z.object({
  /** Wait condition discriminator (time, circuit, full, etc.). */
  type: waitConditionTypeSchema,
  /** Boolean operator used when chaining to the next condition. */
  compare_type: waitConditionCompareTypeSchema.optional(),
  /** Specific train stop name this condition references (station-type waits). */
  station: z.string().optional(),
  /** Duration in ticks used by time and inactivity waits. */
  ticks: z.number().optional(),
  /** Circuit/logistic condition payload when `type` is `circuit` or count-based. */
  condition: conditionSchema.optional(),
})

export type WaitConditionSchema = z.output<typeof waitConditionSchema>

/** Single schedule record (stop) entry. */
export const trainScheduleRecordSchema = z.object({
  /** Localised name of the station to visit. */
  station: z.string().optional(),
  /** Serialized rail reference for temporary/explicit target stops. */
  rail: jsonObjectSchema.optional(),
  /** Whether the train should arrive driving forward or reverse. */
  rail_direction: railDirectionSchema.optional(),
  /** Branch identifier for split junctions (Factorio 2.0). */
  rail_branch: z.number().optional(),
  /** Marks this record as a temporary stop. */
  temporary: z.boolean().optional(),
  /** When false, prevents the train from unloading at this stop. */
  allows_unloading: z.boolean().optional(),
  /** Sequence of wait conditions evaluated at this stop. */
  wait_conditions: z.array(waitConditionSchema).optional(),
})

export type TrainScheduleRecordSchema = z.output<
  typeof trainScheduleRecordSchema
>

/** Train schedule interrupt entry (Factorio 2.0). */
export const trainScheduleInterruptSchema = z.object({
  /** Interrupt identifier. */
  name: z.string(),
  /** Conditions that must be satisfied before this interrupt activates. */
  conditions: z.array(waitConditionSchema).optional(),
  /** Alternative records to execute while the interrupt is active. */
  targets: z.array(trainScheduleRecordSchema).optional(),
  /** Indicates whether nested interrupts are being resolved. */
  inside_interrupt: z.boolean().optional(),
})

export type TrainScheduleInterruptSchema = z.output<
  typeof trainScheduleInterruptSchema
>

/** Complete train schedule definition. */
export const trainScheduleSchema = z.object({
  /** Ordered list of planned stops. */
  records: z.array(trainScheduleRecordSchema),
  /** Optional interrupts evaluated alongside the base schedule. */
  interrupts: z.array(trainScheduleInterruptSchema).optional(),
})

export type TrainScheduleSchema = z.output<typeof trainScheduleSchema>

/** Assignment of a schedule to one or more locomotives. */
export const trainScheduleAssignmentSchema = z.object({
  /** Entity numbers of locomotives that own this schedule. */
  locomotives: z.array(z.number()),
  /** Schedule executed by the referenced locomotives. */
  schedule: trainScheduleSchema,
  /** Additional rolling stock indices included in the assignment. */
  rolling_stock: z.array(z.number()).optional(),
})

export type TrainScheduleAssignmentSchema = z.output<
  typeof trainScheduleAssignmentSchema
>

/** Train coupling information used by Factorio 2.0 blueprints. */
export const stockConnectionSchema = z.object({
  /** Entity number identifying the rolling stock being described. */
  stock: z.number(),
  /** Entity number connected to the front coupler, if any. */
  front: z.number().nullish(),
  /** Entity number connected to the rear coupler, if any. */
  back: z.number().nullish(),
})

export type StockConnectionSchema = z.output<typeof stockConnectionSchema>

const parameterBaseSchema = z.object({
  /** Discriminator describing the parameter structure. */
  type: parameterTypeSchema,
  /** User-facing display name for the parameter. */
  name: z.string().optional(),
  /** Optional descriptive text exposed in UI exports (not serialized by Draftsman). */
  description: z.string().optional(),
})

/** Blueprint parameter specification representing a signal ID substitution. */
export const idParameterSchema = parameterBaseSchema.extend({
  type: z.literal(ParameterType.Id),
  /** Signal identifier or parameter token to substitute. */
  id: z.string(),
  /** Quality constraint applied when resolving the signal. */
  quality_condition: qualityFilterSchema.optional(),
  /** Name of another parameter to inherit signal type information from. */
  ingredient_of: z.string().nullish(),
  /** Indicates whether the parameter is selectable during placement. */
  parameter: z.boolean().optional(),
})

export type IdParameterSchema = z.output<typeof idParameterSchema>

/** Blueprint parameter specification representing a numeric substitution. */
export const numberParameterSchema = parameterBaseSchema.extend({
  type: z.literal(ParameterType.Number),
  /** Literal string encoding of the constant numeric value to replace. */
  number: z.string().optional(),
  /** When `true`, leaves the original blueprint value untouched. */
  not_parametrised: z.boolean().optional(),
  /** Variable name that other formulas may reference. */
  variable: z.string().optional(),
  /** Arithmetic expression used to compute the final value. */
  formula: z.string().optional(),
  /** Marks the parameter as dependent on earlier variables within the set. */
  dependent: z.boolean().optional(),
})

export type NumberParameterSchema = z.output<typeof numberParameterSchema>

/** Union of all supported blueprint parameter specifications. */
export const blueprintParameterSchema = z.discriminatedUnion('type', [
  idParameterSchema,
  numberParameterSchema,
])

export type BlueprintParameterSchema = z.output<typeof blueprintParameterSchema>

/** Blueprint tile definition. */
export const blueprintTileSchema = z.object({
  /** Tile prototype name being placed. */
  name: z.string(),
  /** World-space tile coordinates. */
  position: vector2Schema,
  /** Optional tile orientation (used by hazard concrete). */
  direction: z.number().optional(),
})

export type BlueprintTileSchema = z.output<typeof blueprintTileSchema>

/** Icon metadata for blueprints and planner items. */
export const blueprintIconSchema = z.object({
  /** One-based icon slot index (1-4). */
  index: blueprintIconIndexSchema,
  /** Signal displayed in the icon slot. */
  signal: signalIdSchema,
})

export type BlueprintIconSchema = z.output<typeof blueprintIconSchema>

/** Blueprint entity definition (heavily specialised per prototype). */
export const blueprintEntitySchema = z.object({
  /** Unique entity identifier within the blueprint. */
  entity_number: z.number(),
  /** Prototype name (actor type) for the entity. */
  name: z.string(),
  /** World-space position of the entity, measured in tiles. */
  position: vector2Schema,
  /** Cardinal direction index (0-7). */
  direction: z.number().optional(),
  /** Orientation value for rolling stock and curved entities. */
  orientation: z.number().optional(),
  /** Tile-aligned placement reference for combinators and rail signals. */
  tile_position: vector2Schema.optional(),
  /** Quality tier applied to the entity when importing into Factorio 2.0. */
  quality: qualityIdSchema.optional(),
  /** Force name that owns the entity (defaults to player force). */
  force: z.string().optional(),
  /** Inventory contents serialized alongside the entity. */
  items: z.record(z.string(), z.number()).optional(),
  /** Active recipe assigned to crafting entities. */
  recipe: z.string().optional(),
  /** Inventory bar limitation for container-style entities. */
  bar: z.number().optional(),
  /** Control behaviour payload used by circuit/logistic aware entities. */
  control_behavior: controlBehaviorSchema.optional(),
  /** Wire connections originating from this entity. */
  connections: entityConnectionsSchema.optional(),
  /** Power pole neighbours for legacy wire serialization. */
  neighbours: z.array(z.number()).optional(),
  /** Alert configuration emitted by the entity. */
  alert_parameters: alertParametersSchema.optional(),
  /** Item drop offset used by inserters. */
  drop_position: vector2Schema.optional(),
  /** Item pickup offset used by inserters. */
  pickup_position: vector2Schema.optional(),
  /** Item filter definitions (eg. belts, loaders). */
  filters: z.array(itemFilterSchema).optional(),
  /** Logistic request filters (eg. requester chests). */
  request_filters: z.array(signalFilterSchema).optional(),
  /** Logistic trash/request filters for character armor grids. */
  logistic_filters: z.array(itemFilterSchema).optional(),
  /** Arbitrary metadata tags stored on the entity. */
  tags: jsonObjectSchema.optional(),
  /** Entity type hint used by certain blueprint tools. */
  type: z.string().optional(),
  /** Custom station name for train stop entities. */
  train_stop_name: z.string().optional(),
  /** When false, keeps the train in manual mode after placement. */
  manual_mode: z.boolean().optional(),
  /** Embedded train schedule when blueprinting locomotives. */
  schedule: trainScheduleSchema.optional(),
  /** Requested module/item counts attached to the entity. */
  item_requests: z.record(z.string(), z.number()).optional(),
  /** Stack size override applied to stack inserters. */
  stack_size_override: z.number().optional(),
})

export type BlueprintEntitySchema = z.output<typeof blueprintEntitySchema>

/**
 * Factorio Blueprint, adapted from `draftsman.classes.blueprint.Blueprint`.
 * Represents the JSON structure under the root key `blueprint`.
 */
export const blueprintSchema = z.object({
  /** Always `'blueprint'`. Serialized. */
  item: z.literal('blueprint'),
  /** User-given title. Serialized. */
  label: z.string().optional(),
  /** Label color (RGBA 0..1). Serialized. */
  label_color: colorRgbaSchema.nullish(),
  /** Description text (<=500 bytes). Serialized. */
  description: z.string().optional(),
  /** Up to 4 icons. Serialized. */
  icons: z.array(blueprintIconSchema).optional(),
  /** 64-bit encoded Factorio version. Serialized. */
  version: z.number(),
  /** Snapping grid size; presence enables snapping. Serialized. */
  snapping_grid_size: vector2Schema.nullish(),
  /** Absolute vs relative snapping. Serialized. */
  absolute_snapping: z.boolean().optional(),
  /** Position relative to grid when absolute snapping is true. Serialized. */
  position_relative_to_grid: vector2Schema.optional(),
  /** Entity list. Serialized. */
  entities: z.array(blueprintEntitySchema).optional(),
  /** Tile list. Serialized. */
  tiles: z.array(blueprintTileSchema).optional(),
  /** Circuit wires list (2.0 native; may be absent). Serialized. */
  wires: z.array(blueprintWireSchema).optional(),
  /** Train schedules list. Serialized. */
  schedules: z.array(trainScheduleAssignmentSchema).optional(),
  /** Blueprint parameters (Factorio 2.0). Serialized. */
  parameters: z.array(blueprintParameterSchema).optional(),
  /** Stock connections (train couplings). Serialized. */
  stock_connections: z.array(stockConnectionSchema).optional(),
  /** Additional groups or metadata present in Draftsman exports. */
  groups: z.array(jsonObjectSchema).optional(),
})

export type BlueprintSchema = z.output<typeof blueprintSchema>
