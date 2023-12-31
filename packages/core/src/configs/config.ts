import { extend } from '@/lib/utils'
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