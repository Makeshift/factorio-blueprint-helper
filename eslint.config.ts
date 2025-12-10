import config from '@makeshift27015/eslint-config'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

export default await config({
  languageOptions: {
    parserOptions: {
      tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
    },
  },
  ignores: [
    '**/node_modules/**',
  ],
  rules: {
    '@typescript-eslint/require-await': 'off',
    'import-x/no-nodejs-modules': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/no-duplicate-enum-values': 'off',
  },
})
