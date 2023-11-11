import { createObject } from '@/utils'
import { defineConfig } from '@/configs'
import { createContext } from '@/context'
import { createCommands } from '@/commands'
import { createUI } from '@/ui'
import { createSpatial } from '@/spatial'

import type { ElementTypes, Config } from './types'

export const createPlayer = (
  element: ElementTypes,
  config: Config
) => {
  const mergeConfig = defineConfig(config)
  
  const context = createContext(element)
  
  const instance = context.instance = createObject({
    ...createCommands()
  }, {
    config: {
      ...mergeConfig
    },
    version: {
      value: '0.0.1'
    }
  })

  instance.ui = createUI()
  instance.spatial = createSpatial()
  
  return instance
}

export default createPlayer