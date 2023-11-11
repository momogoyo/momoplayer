import { extend } from '../utils'
import { defaultConfig } from './types'

import type { Config } from './types'

export const defineConfig = (
  config: Config
) => {
  return extend(
    {},
    defaultConfig,
    config
  )
}

export default defineConfig