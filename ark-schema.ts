import { type } from 'arktype'

// ============================================================================
// Enums - Exported as TypeScript enums for consistency with schema.ts
// ============================================================================

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

// ============================================================================
// Arktype Schema Definitions
// ============================================================================

const comparatorSchema = type(
  '\'>\' | \'<\' | \'=\' | \'==\' | \'≥\' | \'>=\' | \'≤\' | \'<=\' | \'≠\' | \'!=\'',
)

const qualityIdSchema = type(
  '\'normal\' | \'uncommon\' | \'rare\' | \'epic\' | \'legendary\' | \'quality-unknown\'',
)

const signalTypeSchema = type(
  '\'virtual\' | \'item\' | \'fluid\' | \'recipe\' | \'entity\' | \'space-location\' | \'asteroid-chunk\' | \'quality\'',
)

const arithmeticOperationSchema = type(
  '\'*\' | \'/\' | \'+\' | \'-\' | \'%\' | \'^\' | \'<<\' | \'>>\' | \'AND\' | \'OR\' | \'XOR\'',
)

const waitConditionTypeSchema = type(
  '\'all_requests_satisfied\' | \'any_planet_import_zero\' | \'any_request_not_satisfied\' | \'any_request_zero\' | \'at_station\' | \'circuit\' | \'damage_taken\' | \'destination_full_or_no_path\' | \'empty\' | \'fluid_count\' | \'fuel_item_count_all\' | \'fuel_item_count_any\' | \'full\' | \'fuel_full\' | \'not_empty\' | \'inactivity\' | \'item_count\' | \'not_at_station\' | \'passenger_present\' | \'passenger_not_present\' | \'request_satisfied\' | \'request_not_satisfied\' | \'specific_destination_full\' | \'specific_destination_not_full\' | \'time\'',
)

const waitConditionCompareTypeSchema = type('\'and\' | \'or\'')

const railDirectionSchema = type('\'front\' | \'back\'')

const wireConnectorIdSchema = type('1 | 2 | 3 | 4 | 5 | 6')

const blueprintIconIndexSchema = type('1 | 2 | 3 | 4')

export const jsonObjectSchema = type('Record<string, unknown>')
export type JsonObjectSchema = typeof jsonObjectSchema.infer
export type JsonObject = JsonObjectSchema

export const jsonValueSchema = type(
  'string | number | boolean | null | unknown[] | Record<string, unknown>',
)
export type JsonValueSchema = typeof jsonValueSchema.infer
export type JsonValue = JsonValueSchema

/** Two-dimensional position measured in tiles. */
export const vector2Schema = type({
  /** Horizontal component measured in tiles. */
  x: 'number',
  /** Vertical component measured in tiles. */
  y: 'number',
})
export type Vector2Schema = typeof vector2Schema.infer

/** RGBA colour object encoded as floats or bytes (Factorio format). */
export const colorRgbaSchema = type({
  /** Red channel intensity (0..1 or 0..255). */
  'r': 'number',
  /** Green channel intensity (0..1 or 0..255). */
  'g': 'number',
  /** Blue channel intensity (0..1 or 0..255). */
  'b': 'number',
  /** Alpha transparency (defaults to 1.0 when omitted). */
  'a?': 'number',
})
export type ColorRgbaSchema = typeof colorRgbaSchema.infer

/** Selection constraints for filtering signal quality ranges. */
export const qualityFilterSchema = type({
  /** Target quality to compare against; `null` matches any signal quality. */
  'quality': 'string | null | undefined',
  /** Comparison operator used when evaluating the selected quality. */
  'comparator?': comparatorSchema,
})
export type QualityFilterSchema = typeof qualityFilterSchema.infer

/** Serialized signal identifier. */
export const signalIdSchema = type({
  /** Signal name; omitted entries are treated as no signal and stripped on round-trip. */
  name: 'string | null | undefined',
  /** Signal category (item, fluid, virtual, etc.). */
  type: signalTypeSchema,
  /** Signal quality flag. Defaults to normal when unspecified. */
  quality: 'string | null | undefined',
  /** Comparator for quality ranges; only meaningful when quality is also provided. */
  comparator: 'string | null | undefined',
})
export type SignalIdSchema = typeof signalIdSchema.infer

/** Circuit network selection toggles derived from Draftsman. */
export const circuitNetworkSelectionSchema = type({
  /** Whether to draw values from the red circuit wire. */
  'red?': 'boolean',
  /** Whether to draw values from the green circuit wire. */
  'green?': 'boolean',
})
export type CircuitNetworkSelectionSchema
  = typeof circuitNetworkSelectionSchema.infer

/** Simplified Draftsman condition payload used for logistic and circuit checks. */
export const conditionSchema = type({
  /** Signal occupying the left-hand slot in the GUI. */
  'first_signal': [signalIdSchema, '|', 'null', '|', 'undefined'],
  /** Comparison operator controlling the condition. */
  'comparator?': comparatorSchema,
  /** Literal constant occupying the right-hand slot (overridden by second_signal). */
  'constant?': 'number',
  /** Optional signal occupying the right-hand slot; takes precedence over constant. */
  'second_signal': [signalIdSchema, '|', 'null', '|', 'undefined'],
  /** When true, copies operand counts from input wires instead of using constant values. */
  'count_from_input?': 'boolean',
  /** Quality discriminator used by quality-aware conditions. */
  'quality': 'string | null | undefined',
  /** Comparison operator used when evaluating quality ranges. */
  'quality_comparator?': comparatorSchema,
})
export type ConditionSchema = typeof conditionSchema.infer

/** Draftsman decider combinator condition payload. */
export const deciderConditionSchema = type({
  /** Signal occupying the left-hand slot in the GUI. */
  'first_signal': [signalIdSchema, '|', 'null', '|', 'undefined'],
  /** Comparison operator controlling the condition. */
  'comparator?': comparatorSchema,
  /** Literal constant occupying the right-hand slot (overridden by second_signal). */
  'constant?': 'number',
  /** Optional signal occupying the right-hand slot; takes precedence over constant. */
  'second_signal': [signalIdSchema, '|', 'null', '|', 'undefined'],
  /** When true, copies operand counts from input wires instead of using constant values. */
  'count_from_input?': 'boolean',
  /** Quality discriminator used by quality-aware conditions. */
  'quality': 'string | null | undefined',
  /** Comparison operator used when evaluating quality ranges. */
  'quality_comparator?': comparatorSchema,
  /** Circuit network selection for the first operand. */
  'first_signal_networks?': circuitNetworkSelectionSchema,
  /** Circuit network selection for the second operand. */
  'second_signal_networks?': circuitNetworkSelectionSchema,
  /** Boolean operator used when chaining wait conditions. */
  'compare_type?': waitConditionCompareTypeSchema,
})
export type DeciderConditionSchema = typeof deciderConditionSchema.infer

/** Draftsman decider combinator output payload. */
export const deciderOutputSchema = type({
  /** Output signal emitted by the combinator. */
  'signal': [signalIdSchema, '|', 'null', '|', 'undefined'],
  /** Whether to source the output count from input wires. */
  'copy_count_from_input?': 'boolean',
  /** Circuit networks the output should read from when copying counts. */
  'networks?': circuitNetworkSelectionSchema,
  /** Constant value emitted when copy_count_from_input is false. */
  'constant?': 'number',
})
export type DeciderOutputSchema = typeof deciderOutputSchema.infer

/** Arithmetic combinator configuration payload. */
export const arithmeticConditionSchema = type({
  /** First operand signal reference (if not using a constant). */
  'first_signal': [signalIdSchema, '|', 'null', '|', 'undefined'],
  /** Network selection for the first operand signal. */
  'first_signal_networks?': circuitNetworkSelectionSchema,
  /** First operand literal constant (used when first_signal is absent). */
  'first_constant': 'number | null | undefined',
  /** Second operand signal reference (if not using a constant). */
  'second_signal': [signalIdSchema, '|', 'null', '|', 'undefined'],
  /** Network selection for the second operand signal. */
  'second_signal_networks?': circuitNetworkSelectionSchema,
  /** Second operand literal constant (used when second_signal is absent). */
  'second_constant': 'number | null | undefined',
  /** Arithmetic operator applied between the two operands. */
  'operation?': arithmeticOperationSchema,
  /** Output signal receiving the computed result. */
  'output_signal': [signalIdSchema, '|', 'null', '|', 'undefined'],
  /** Network selection that determines which wires observe the output. */
  'output_signal_networks?': circuitNetworkSelectionSchema,
})
export type ArithmeticConditionSchema = typeof arithmeticConditionSchema.infer

/** Signal filter entry used by constant combinators and logistic sections. */
export const signalFilterSchema = type({
  /** Index of the filter entry within the owning GUI list. */
  'index': 'number',
  /** Signal name being filtered, or null to represent an empty slot. */
  'name': 'string | null | undefined',
  /** Numeric value of the filter (or lower bound when max_count is provided). */
  'count': 'number | null | undefined',
  /** Specific signal type to enforce when multiple categories share a name. */
  'type': 'string | null | undefined',
  /** Quality flag applied to the signal request/output. */
  'quality': 'string | null | undefined',
  /** Comparator used to evaluate counted ranges for the filter. */
  'comparator?': comparatorSchema,
  /** Upper bound when representing a range of counts. */
  'max_count': 'number | null | undefined',
})
export type SignalFilterSchema = typeof signalFilterSchema.infer

/** Item filter entry used by inserters and requester chests. */
export const itemFilterSchema = type({
  /** Index of the filter entry within the owning GUI list. */
  'index': 'number',
  /** Item prototype name requested by this filter. */
  'name': 'string',
  /** Item count or lower bound for ranged comparisons. */
  'count': 'number | null | undefined',
  /** Quality flag applied to the item. */
  'quality': 'string | null | undefined',
  /** Comparator used when bounding quality ranges. */
  'comparator?': comparatorSchema,
  /** Upper bound for ranged item counts. */
  'max_count': 'number | null | undefined',
})
export type ItemFilterSchema = typeof itemFilterSchema.infer

/** Manual signal section exported by constant combinators (Factorio 2.0). */
export const manualSectionSchema = type({
  /** Section index within the constant combinator (0 ≤ index < 100). */
  'index': 'number',
  /** Ordered set of signal filters contained inside this section. */
  'filters': [signalFilterSchema, '[]'],
  /** Optional section label registered within the save. */
  'group?': 'string',
  /** Whether the section currently contributes to the output. */
  'active?': 'boolean',
})
export type ManualSectionSchema = typeof manualSectionSchema.infer

/** Alert configuration serialised alongside certain entities. */
export const alertParametersSchema = type({
  /** Alert type discriminator from Factorio's alert prototype table. */
  'alert_type': 'string',
  /** Icon used when presenting the alert. */
  'icon_signal_id': [signalIdSchema, '|', 'null', '|', 'undefined'],
  /** Localised alert message. */
  'message?': 'string',
  /** Whether the alert should be shown on the world map. */
  'show_on_map?': 'boolean',
  /** Prototype-specific extension data. */
  'additional_properties?': jsonObjectSchema,
})
export type AlertParametersSchema = typeof alertParametersSchema.infer

/** Control behaviour bag used across multiple entity classes. */
export const controlBehaviorSchema = type({
  /** Circuit condition attached to the entity (eg inserters, lamps). */
  'circuit_condition?': conditionSchema,
  /** Logistic condition attached to the entity (eg logistic chests). */
  'logistic_condition?': conditionSchema,
  /** One or more decider-style conditions backing the entity behaviour. */
  'decider_conditions?': [
    deciderConditionSchema,
    '|',
    [deciderConditionSchema, '[]'],
  ],
  /** Definition of output behaviour for decider combinators. */
  'decider_outputs?': [deciderOutputSchema, '|', [deciderOutputSchema, '[]']],
  /** Arithmetic combinator configuration. */
  'arithmetic_conditions?': arithmeticConditionSchema,
  /** Flat list of signal filters (legacy constant combinator format). */
  'filters?': [signalFilterSchema, '[]'],
  /** Factorio 2.0 manual sections. */
  'sections?': [manualSectionSchema, '[]'],
})
export type ControlBehaviorSchema = typeof controlBehaviorSchema.infer

/** Circuit network connection description to another entity. */
export const circuitWireConnectionSchema = type({
  /** Target entity number receiving the wire connection. */
  'entity_id': 'number',
  /** Target connection point/circuit ID within the entity. */
  'circuit_id?': 'number',
  /** Source connector identifier when multiple sockets exist. */
  'wire_id?': 'number',
})
export type CircuitWireConnectionSchema = typeof circuitWireConnectionSchema.infer

/** Power network connection description to another entity. */
export const powerWireConnectionSchema = type({
  /** Target entity number receiving the wire connection. */
  'entity_id': 'number',
  /** Source connector identifier when multiple sockets exist. */
  'wire_id?': 'number',
})
export type PowerWireConnectionSchema = typeof powerWireConnectionSchema.infer

/** Port definition for a specific connection point. */
export const entityCircuitPortSchema = type({
  /** Red wire connections originating from this port. */
  'red?': [circuitWireConnectionSchema, '[]'],
  /** Green wire connections originating from this port. */
  'green?': [circuitWireConnectionSchema, '[]'],
})
export type EntityCircuitPortSchema = typeof entityCircuitPortSchema.infer

/** Union of circuit- and power-wire connection payloads. */
export const entityConnectionPortSchema = type([
  entityCircuitPortSchema,
  '|',
  [powerWireConnectionSchema, '[]'],
])
export type EntityConnectionPortSchema = typeof entityConnectionPortSchema.infer

/** Map of connection point identifiers to wire definitions. */
export const entityConnectionsSchema = type({
  '[string]': entityConnectionPortSchema,
})
export type EntityConnectionsSchema = typeof entityConnectionsSchema.infer

/** Sparse array representing a Factorio 2.0 wire connection. */
export const blueprintWireSchema = type([
  'number',
  ',',
  wireConnectorIdSchema,
  ',',
  'number',
  ',',
  wireConnectorIdSchema,
])
export type BlueprintWireSchema = typeof blueprintWireSchema.infer

/** Wait condition definition in train schedules. */
export const waitConditionSchema = type({
  /** Wait condition discriminator (time, circuit, full, etc.). */
  'type': waitConditionTypeSchema,
  /** Boolean operator used when chaining to the next condition. */
  'compare_type?': waitConditionCompareTypeSchema,
  /** Specific train stop name this condition references (station-type waits). */
  'station?': 'string',
  /** Duration in ticks used by time and inactivity waits. */
  'ticks?': 'number',
  /** Circuit/logistic condition payload when `type` is `circuit` or count-based. */
  'condition?': conditionSchema,
})
export type WaitConditionSchema = typeof waitConditionSchema.infer

/** Single schedule record (stop) entry. */
export const trainScheduleRecordSchema = type({
  /** Localised name of the station to visit. */
  'station?': 'string',
  /** Serialized rail reference for temporary/explicit target stops. */
  'rail?': jsonObjectSchema,
  /** Whether the train should arrive driving forward or reverse. */
  'rail_direction?': railDirectionSchema,
  /** Branch identifier for split junctions (Factorio 2.0). */
  'rail_branch?': 'number',
  /** Marks this record as a temporary stop. */
  'temporary?': 'boolean',
  /** When false, prevents the train from unloading at this stop. */
  'allows_unloading?': 'boolean',
  /** Sequence of wait conditions evaluated at this stop. */
  'wait_conditions?': [waitConditionSchema, '[]'],
})
export type TrainScheduleRecordSchema = typeof trainScheduleRecordSchema.infer

/** Train schedule interrupt entry (Factorio 2.0). */
export const trainScheduleInterruptSchema = type({
  /** Interrupt identifier. */
  'name': 'string',
  /** Conditions that must be satisfied before this interrupt activates. */
  'conditions?': [waitConditionSchema, '[]'],
  /** Alternative records to execute while the interrupt is active. */
  'targets?': [trainScheduleRecordSchema, '[]'],
  /** Indicates whether nested interrupts are being resolved. */
  'inside_interrupt?': 'boolean',
})
export type TrainScheduleInterruptSchema
  = typeof trainScheduleInterruptSchema.infer

/** Complete train schedule definition. */
export const trainScheduleSchema = type({
  /** Ordered list of planned stops. */
  'records': [trainScheduleRecordSchema, '[]'],
  /** Optional interrupts evaluated alongside the base schedule. */
  'interrupts?': [trainScheduleInterruptSchema, '[]'],
})
export type TrainScheduleSchema = typeof trainScheduleSchema.infer

/** Assignment of a schedule to one or more locomotives. */
export const trainScheduleAssignmentSchema = type({
  /** Entity numbers of locomotives that own this schedule. */
  'locomotives': 'number[]',
  /** Schedule executed by the referenced locomotives. */
  'schedule': trainScheduleSchema,
  /** Additional rolling stock indices included in the assignment. */
  'rolling_stock?': 'number[]',
})
export type TrainScheduleAssignmentSchema
  = typeof trainScheduleAssignmentSchema.infer

/** Train coupling information used by Factorio 2.0 blueprints. */
export const stockConnectionSchema = type({
  /** Entity number identifying the rolling stock being described. */
  stock: 'number',
  /** Entity number connected to the front coupler, if any. */
  front: 'number | null | undefined',
  /** Entity number connected to the rear coupler, if any. */
  back: 'number | null | undefined',
})
export type StockConnectionSchema = typeof stockConnectionSchema.infer

/** Blueprint parameter specification representing a signal ID substitution. */
export const idParameterSchema = type({
  /** Discriminator describing the parameter structure. */
  'type': '\'id\'',
  /** User-facing display name for the parameter. */
  'name?': 'string',
  /** Optional descriptive text exposed in UI exports (not serialized by Draftsman). */
  'description?': 'string',
  /** Signal identifier or parameter token to substitute. */
  'id': 'string',
  /** Quality constraint applied when resolving the signal. */
  'quality_condition?': qualityFilterSchema,
  /** Name of another parameter to inherit signal type information from. */
  'ingredient_of': 'string | null | undefined',
  /** Indicates whether the parameter is selectable during placement. */
  'parameter?': 'boolean',
})
export type IdParameterSchema = typeof idParameterSchema.infer

/** Blueprint parameter specification representing a numeric substitution. */
export const numberParameterSchema = type({
  /** Discriminator describing the parameter structure. */
  'type': '\'number\'',
  /** User-facing display name for the parameter. */
  'name?': 'string',
  /** Optional descriptive text exposed in UI exports (not serialized by Draftsman). */
  'description?': 'string',
  /** Literal string encoding of the constant numeric value to replace. */
  'number?': 'string',
  /** When `true`, leaves the original blueprint value untouched. */
  'not_parametrised?': 'boolean',
  /** Variable name that other formulas may reference. */
  'variable?': 'string',
  /** Arithmetic expression used to compute the final value. */
  'formula?': 'string',
  /** Marks the parameter as dependent on earlier variables within the set. */
  'dependent?': 'boolean',
})
export type NumberParameterSchema = typeof numberParameterSchema.infer

/** Union of all supported blueprint parameter specifications. */
export const blueprintParameterSchema = type([
  idParameterSchema,
  '|',
  numberParameterSchema,
])
export type BlueprintParameterSchema = typeof blueprintParameterSchema.infer

/** Blueprint tile definition. */
export const blueprintTileSchema = type({
  /** Tile prototype name being placed. */
  'name': 'string',
  /** World-space tile coordinates. */
  'position': vector2Schema,
  /** Optional tile orientation (used by hazard concrete). */
  'direction?': 'number',
})
export type BlueprintTileSchema = typeof blueprintTileSchema.infer

/** Icon metadata for blueprints and planner items. */
export const blueprintIconSchema = type({
  /** One-based icon slot index (1-4). */
  index: blueprintIconIndexSchema,
  /** Signal displayed in the icon slot. */
  signal: signalIdSchema,
})
export type BlueprintIconSchema = typeof blueprintIconSchema.infer

/** Blueprint entity definition (heavily specialised per prototype). */
export const blueprintEntitySchema = type({
  /** Unique entity identifier within the blueprint. */
  'entity_number': 'number',
  /** Prototype name (actor type) for the entity. */
  'name': 'string',
  /** World-space position of the entity, measured in tiles. */
  'position': vector2Schema,
  /** Cardinal direction index (0-7). */
  'direction?': 'number',
  /** Orientation value for rolling stock and curved entities. */
  'orientation?': 'number',
  /** Tile-aligned placement reference for combinators and rail signals. */
  'tile_position?': vector2Schema,
  /** Quality tier applied to the entity when importing into Factorio 2.0. */
  'quality?': qualityIdSchema,
  /** Force name that owns the entity (defaults to player force). */
  'force?': 'string',
  /** Inventory contents serialized alongside the entity. */
  'items?': 'Record<string, number>',
  /** Active recipe assigned to crafting entities. */
  'recipe?': 'string',
  /** Inventory bar limitation for container-style entities. */
  'bar?': 'number',
  /** Control behaviour payload used by circuit/logistic aware entities. */
  'control_behavior?': controlBehaviorSchema,
  /** Wire connections originating from this entity. */
  'connections?': entityConnectionsSchema,
  /** Power pole neighbours for legacy wire serialization. */
  'neighbours?': 'number[]',
  /** Alert configuration emitted by the entity. */
  'alert_parameters?': alertParametersSchema,
  /** Item drop offset used by inserters. */
  'drop_position?': vector2Schema,
  /** Item pickup offset used by inserters. */
  'pickup_position?': vector2Schema,
  /** Item filter definitions (eg. belts, loaders). */
  'filters?': [itemFilterSchema, '[]'],
  /** Logistic request filters (eg. requester chests). */
  'request_filters?': [signalFilterSchema, '[]'],
  /** Logistic trash/request filters for character armor grids. */
  'logistic_filters?': [itemFilterSchema, '[]'],
  /** Arbitrary metadata tags stored on the entity. */
  'tags?': jsonObjectSchema,
  /** Entity type hint used by certain blueprint tools. */
  'type?': 'string',
  /** Custom station name for train stop entities. */
  'train_stop_name?': 'string',
  /** When false, keeps the train in manual mode after placement. */
  'manual_mode?': 'boolean',
  /** Embedded train schedule when blueprinting locomotives. */
  'schedule?': trainScheduleSchema,
  /** Requested module/item counts attached to the entity. */
  'item_requests?': 'Record<string, number>',
  /** Stack size override applied to stack inserters. */
  'stack_size_override?': 'number',
})
export type BlueprintEntitySchema = typeof blueprintEntitySchema.infer

/**
 * Factorio Blueprint, adapted from `draftsman.classes.blueprint.Blueprint`.
 * Represents the JSON structure under the root key `blueprint`.
 */
export const blueprintSchema = type({
  /** Always `'blueprint'`. Serialized. */
  'item': '\'blueprint\'',
  /** User-given title. Serialized. */
  'label?': 'string',
  /** Label color (RGBA 0..1). Serialized. */
  'label_color': [colorRgbaSchema, '|', 'null', '|', 'undefined'],
  /** Description text (<=500 bytes). Serialized. */
  'description?': 'string',
  /** Up to 4 icons. Serialized. */
  'icons?': [blueprintIconSchema, '[]'],
  /** 64-bit encoded Factorio version. Serialized. */
  'version': 'number',
  /** Snapping grid size; presence enables snapping. Serialized. */
  'snapping_grid_size': [vector2Schema, '|', 'null', '|', 'undefined'],
  /** Absolute vs relative snapping. Serialized. */
  'absolute_snapping?': 'boolean',
  /** Position relative to grid when absolute snapping is true. Serialized. */
  'position_relative_to_grid?': vector2Schema,
  /** Entity list. Serialized. */
  'entities?': [blueprintEntitySchema, '[]'],
  /** Tile list. Serialized. */
  'tiles?': [blueprintTileSchema, '[]'],
  /** Circuit wires list (2.0 native; may be absent). Serialized. */
  'wires?': [blueprintWireSchema, '[]'],
  /** Train schedules list. Serialized. */
  'schedules?': [trainScheduleAssignmentSchema, '[]'],
  /** Blueprint parameters (Factorio 2.0). Serialized. */
  'parameters?': [blueprintParameterSchema, '[]'],
  /** Stock connections (train couplings). Serialized. */
  'stock_connections?': [stockConnectionSchema, '[]'],
  /** Additional groups or metadata present in Draftsman exports. */
  'groups?': [jsonObjectSchema, '[]'],
})
export type BlueprintSchema = typeof blueprintSchema.infer
