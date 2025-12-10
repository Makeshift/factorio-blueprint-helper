import { z } from 'zod'

import type {
  Blueprint,
  JsonObject,
  JsonValue,
} from './types.js'
import {
  Comparator,
  ParameterType,
  QualityId,
  WireConnectorId,
} from './types.js'

const signalTypeValues = [
  'virtual',
  'item',
  'fluid',
  'recipe',
  'entity',
  'space-location',
  'asteroid-chunk',
  'quality',
] as const

const arithmeticOperationValues = [
  '*',
  '/',
  '+',
  '-',
  '%',
  '^',
  '<<',
  '>>',
  'AND',
  'OR',
  'XOR',
] as const

const waitConditionTypeValues = [
  'all_requests_satisfied',
  'any_planet_import_zero',
  'any_request_not_satisfied',
  'any_request_zero',
  'at_station',
  'circuit',
  'damage_taken',
  'destination_full_or_no_path',
  'empty',
  'fluid_count',
  'fuel_item_count_all',
  'fuel_item_count_any',
  'full',
  'fuel_full',
  'not_empty',
  'inactivity',
  'item_count',
  'not_at_station',
  'passenger_present',
  'passenger_not_present',
  'request_satisfied',
  'request_not_satisfied',
  'specific_destination_full',
  'specific_destination_not_full',
  'time',
] as const

const waitConditionCompareTypeValues = [
  'and',
  'or',
] as const

const railDirectionValues = [
  'front',
  'back',
] as const

const comparatorValues = [
  Comparator.Greater,
  Comparator.Less,
  Comparator.Equal,
  Comparator.DoubleEqual,
  Comparator.GreaterOrEqualUnicode,
  Comparator.GreaterOrEqual,
  Comparator.LessOrEqualUnicode,
  Comparator.LessOrEqual,
  Comparator.NotEqualUnicode,
  Comparator.NotEqual,
] as const

const qualityIdValues = [
  QualityId.Normal,
  QualityId.Uncommon,
  QualityId.Rare,
  QualityId.Epic,
  QualityId.Legendary,
  QualityId.QualityUnknown,
] as const

const parameterTypeValues = [
  ParameterType.Id,
  ParameterType.Number,
] as const

const comparatorSchema = z.enum(comparatorValues)

const qualityIdSchema = z.enum(qualityIdValues)

const parameterTypeSchema = z.enum(parameterTypeValues)

const wireConnectorIdSchema = z.union([
  z.literal(WireConnectorId.CircuitInputRed),
  z.literal(WireConnectorId.CircuitInputGreen),
  z.literal(WireConnectorId.CircuitOutputRed),
  z.literal(WireConnectorId.CircuitOutputGreen),
  z.literal(WireConnectorId.PoleCopper),
  z.literal(WireConnectorId.PowerSwitchCopper),
])

const blueprintIconIndexSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
])

const signalTypeSchema = z.enum(signalTypeValues)

const arithmeticOperationSchema = z.enum(arithmeticOperationValues)

const waitConditionTypeSchema = z.enum(waitConditionTypeValues)

const waitConditionCompareTypeSchema = z.enum(waitConditionCompareTypeValues)

const railDirectionSchema = z.enum(railDirectionValues)

const jsonPrimitiveSchema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.null(),
])

export const jsonObjectSchema: z.ZodType<JsonObject> = z.lazy(() =>
  z.record(z.string(), jsonValueSchema),
)

export const jsonValueSchema: z.ZodType<JsonValue> = z.lazy(() =>
  z.union([
    jsonPrimitiveSchema,
    z.array(jsonValueSchema),
    jsonObjectSchema,
  ]),
)

/** Two-dimensional position measured in tiles. */
export const vector2Schema = z.object({
  /** Horizontal component measured in tiles. */
  x: z.number(),
  /** Vertical component measured in tiles. */
  y: z.number(),
})

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

/** Selection constraints for filtering signal quality ranges. */
export const qualityFilterSchema = z.object({
  /** Target quality to compare against; `null` matches any signal quality. */
  quality: qualityIdSchema.nullish(),
  /** Comparison operator used when evaluating the selected quality. */
  comparator: comparatorSchema.optional(),
})

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

/** Circuit network selection toggles derived from Draftsman. */
export const circuitNetworkSelectionSchema = z.object({
  /** Whether to draw values from the red circuit wire. */
  red: z.boolean().optional(),
  /** Whether to draw values from the green circuit wire. */
  green: z.boolean().optional(),
})

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

/** Draftsman decider combinator condition payload. */
export const deciderConditionSchema = conditionSchema.extend({
  /** Circuit network selection for the first operand. */
  first_signal_networks: circuitNetworkSelectionSchema.optional(),
  /** Circuit network selection for the second operand. */
  second_signal_networks: circuitNetworkSelectionSchema.optional(),
  /** Boolean operator used when chaining wait conditions. */
  compare_type: waitConditionCompareTypeSchema.optional(),
})

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
  /** Prototype-specific or mod-added control properties. */
  custom_properties: jsonObjectSchema.optional(),
})

/** Circuit network connection description to another entity. */
export const circuitWireConnectionSchema = z.object({
  /** Target entity number receiving the wire connection. */
  entity_id: z.number(),
  /** Target connection point/circuit ID within the entity. */
  circuit_id: z.number().optional(),
  /** Source connector identifier when multiple sockets exist. */
  wire_id: z.number().optional(),
})

/** Power network connection description to another entity. */
export const powerWireConnectionSchema = z.object({
  /** Target entity number receiving the wire connection. */
  entity_id: z.number(),
  /** Source connector identifier when multiple sockets exist. */
  wire_id: z.number().optional(),
})

/** Port definition for a specific connection point. */
export const entityCircuitPortSchema = z.object({
  /** Red wire connections originating from this port. */
  red: z.array(circuitWireConnectionSchema).optional(),
  /** Green wire connections originating from this port. */
  green: z.array(circuitWireConnectionSchema).optional(),
})

/** Union of circuit- and power-wire connection payloads. */
export const entityConnectionPortSchema = z.union([
  entityCircuitPortSchema,
  z.array(powerWireConnectionSchema),
])

/** Map of connection point identifiers to wire definitions. */
export const entityConnectionsSchema = z.record(
  z.string(),
  entityConnectionPortSchema,
)

/** Sparse array representing a Factorio 2.0 wire connection. */
export const blueprintWireSchema = z
  .tuple([
    z.number(),
    wireConnectorIdSchema,
    z.number(),
    wireConnectorIdSchema,
  ])
  .readonly()

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
  /** Mod-specific extension information. */
  custom_properties: jsonObjectSchema.optional(),
})

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
  /** Mod-specific extension block. */
  custom_properties: jsonObjectSchema.optional(),
})

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
  /** Mod-specific extension block. */
  custom_properties: jsonObjectSchema.optional(),
})

/** Complete train schedule definition. */
export const trainScheduleSchema = z.object({
  /** Ordered list of planned stops. */
  records: z.array(trainScheduleRecordSchema),
  /** Optional interrupts evaluated alongside the base schedule. */
  interrupts: z.array(trainScheduleInterruptSchema).optional(),
  /** Mod-specific extension block. */
  custom_properties: jsonObjectSchema.optional(),
})

/** Assignment of a schedule to one or more locomotives. */
export const trainScheduleAssignmentSchema = z.object({
  /** Entity numbers of locomotives that own this schedule. */
  locomotives: z.array(z.number()),
  /** Schedule executed by the referenced locomotives. */
  schedule: trainScheduleSchema,
  /** Additional rolling stock indices included in the assignment. */
  rolling_stock: z.array(z.number()).optional(),
  /** Mod-specific extension block. */
  custom_properties: jsonObjectSchema.optional(),
})

/** Train coupling information used by Factorio 2.0 blueprints. */
export const stockConnectionSchema = z.object({
  /** Entity number identifying the rolling stock being described. */
  stock: z.number(),
  /** Entity number connected to the front coupler, if any. */
  front: z.number().nullish(),
  /** Entity number connected to the rear coupler, if any. */
  back: z.number().nullish(),
  /** Mod-specific extension block. */
  custom_properties: jsonObjectSchema.optional(),
})

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

/** Union of all supported blueprint parameter specifications. */
export const blueprintParameterSchema = z.discriminatedUnion('type', [
  idParameterSchema,
  numberParameterSchema,
])

/** Blueprint tile definition. */
export const blueprintTileSchema = z.object({
  /** Tile prototype name being placed. */
  name: z.string(),
  /** World-space tile coordinates. */
  position: vector2Schema,
  /** Optional tile orientation (used by hazard concrete). */
  direction: z.number().optional(),
  /** Mod-specific extension block. */
  custom_properties: jsonObjectSchema.optional(),
})

/** Icon metadata for blueprints and planner items. */
export const blueprintIconSchema = z.object({
  /** One-based icon slot index (1-4). */
  index: blueprintIconIndexSchema,
  /** Signal displayed in the icon slot. */
  signal: signalIdSchema,
})

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
  /** Prototype-specific or mod-added metadata. */
  custom_properties: jsonObjectSchema.optional(),
})

/**
 * Factorio Blueprint, adapted from `draftsman.classes.blueprint.Blueprint`.
 * Represents the JSON structure under the root key `blueprint`.
 */
export const blueprintSchema: z.ZodType<Blueprint> = z.object({
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
  /** Reserved for forward-compatible metadata. */
  custom_properties: jsonObjectSchema.optional(),
})

export type BlueprintSchema = typeof blueprintSchema
