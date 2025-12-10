import { deserializeBlueprint } from 'factorio-blueprints/src/parsing/blueprintParser'
import { blueprintContentSchema, type RawBlueprintData } from 'factorio-blueprints/src/schemas'
import path from 'node:path'
import { z } from 'zod'
import { ParameterType, type Blueprint, type BlueprintParameter, type NumberParameter } from './types'

export const extendedBlueprintContentSchema = z.strictObject(blueprintContentSchema.extend({
  wires: z.optional(z.array(z.array(z.number()))),
}).shape)

/**
 * Parses a blueprint string, either encoded or raw JSON
 * @param bpString - The blueprint string to parse
 * @returns The parsed blueprint data
 */
export function parseBlueprint(bpString: string): RawBlueprintData {
  // Probably an encoded blueprint
  if (bpString.trim().startsWith('0')) {
    return deserializeBlueprint(bpString)
  } else if (bpString.trim().startsWith('{')) {
    // Probably a raw JSON blueprint
    return JSON.parse(bpString) as RawBlueprintData
  }
  throw new Error('Unsupported blueprint format')
}

/**
 * Parses a blueprint file from the given path
 * @param filePath - The path to the blueprint file
 * @param saveDecoded - Whether to save the decoded blueprint as JSON in the same directory
 * @returns The parsed blueprint data
 */
export async function parseBlueprintFile(filePath: string, saveDecoded = false): Promise<RawBlueprintData> {
  const bpString = await Bun.file(filePath).text()
  const blueprint = parseBlueprint(bpString)
  if (saveDecoded) {
    const dir = path.dirname(filePath)
    const filenameParts = path.basename(filePath).split('.')
    if (filenameParts.pop() === 'json') {
      console.warn('File already has .json extension, skipping save')
    } else {
      filenameParts.push('json')
      const newFilePath = path.join(dir, filenameParts.join('.'))
      await Bun.write(newFilePath, JSON.stringify(blueprint, null, 2))
    }
  }
  return blueprint
}

/**
 * Checks if the provided data matches the schema for a single blueprint
 * @param data - The data to check
 * @returns True if the data is a single blueprint, false otherwise
 */
export const isSingleBlueprint = (data: unknown): data is Blueprint => {
  const result = extendedBlueprintContentSchema.safeParse(data)
  return result.success
}

/**
 * Checks if the provided parameter is a NumberParameter
 * @param param - The parameter to check
 * @returns True if the parameter is a NumberParameter, false otherwise
 */
export const isNumberParameter = (param: BlueprintParameter): param is NumberParameter => param.type === ParameterType.Number

export type BlueprintWithParameters = Blueprint & { parameters: BlueprintParameter[] }

export const isSingleBlueprintWithParameters = (data: unknown): data is BlueprintWithParameters => {
  if (!isSingleBlueprint(data)) return false
  if (!('parameters' in data)) return false
  if (!Array.isArray(data.parameters)) return false
  return true
}
