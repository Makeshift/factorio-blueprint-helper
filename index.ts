import { applyParameterReplacements, type ParameterMapping } from './param-replacement'
import { parseBlueprint } from './util'

const bpString = await Bun.file('./input/just-horizontal-pickup-item.json').text()

const debugBlueprint = parseBlueprint(bpString)

const paramMappings: ParameterMapping = {
  123123: {
    name: 'Stack Size',
    formula: 'p0_s',
    dependent: true,
    number: '0',
  },
}

const { blueprint: releaseBlueprint, stats } = applyParameterReplacements(
  structuredClone(debugBlueprint),
  paramMappings
)

console.log(JSON.stringify(stats, null, 2))

await Bun.write('./output/debug-blueprint.json', JSON.stringify(debugBlueprint, null, 2))
await Bun.write('./output/release-blueprint.json', JSON.stringify(releaseBlueprint, null, 2))


