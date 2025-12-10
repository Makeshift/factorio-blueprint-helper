import { walk } from 'walkjs'
import z from 'zod'
import type { Blueprint, NumberParameter } from './types'
import { isNumberParameter, isSingleBlueprintWithParameters, type BlueprintWithParameters } from './util'

/**
 * A mapping of unique parameter numbers to their desired 'release' definitions.
 */
export type ParameterMapping = Record<string, Partial<Omit<NumberParameter, 'type'>>>

// export function applyParameterReplacements(blueprint: )

export const blueprintContentSchema = z
  .object({
    /** test */
    label: z.string().optional(),
    /** test2 */
    description: z.string().optional(),
    version: z.number().optional(),
    item: z.string().optional(),
    parameters: z.array(z.any()).optional(),
  })

interface Stats {
  blueprints: number
  parameters: number
  numberParameters: number
  parameterUpdateInstances: Record<string, number>
}

/**
 *
 * @param blueprint
 * @param mappings
 */
export function applyParameterReplacements(blueprint: Blueprint, mappings: ParameterMapping) {
  const stats: Stats = {
    blueprints: 0,
    parameters: 0,
    numberParameters: 0,
    parameterUpdateInstances: {},
  }

  walk(blueprint, {
    onVisit: {
      callback: node => {
        stats.blueprints++
        const singleBp = node.val as BlueprintWithParameters
        singleBp.parameters = singleBp.parameters.map(param => {
          stats.parameters++
          if (isNumberParameter(param) && param.number) {
            stats.numberParameters++
            for (const [uniqueNumber, mapping] of Object.entries(mappings)) {
              if (param.number === uniqueNumber) {
                stats.parameterUpdateInstances[uniqueNumber] ??= 0
                stats.parameterUpdateInstances[uniqueNumber]++
                return {
                  ...param,
                  ...mapping,
                }
              }
            }
          }
          return param
        })
      },
      filters: node => isSingleBlueprintWithParameters(node.val),
    },
  })

  return {
    blueprint,
    stats,
  }
}
