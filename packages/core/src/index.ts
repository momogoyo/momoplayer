import { defineConfig } from './configs/config'
import { createContext } from './context/context'
import { createCommands } from './commands'
import { createObject } from './utils'

import type { ElementTypes, Config } from './types'

export const createPlayer = (
  element: ElementTypes,
  config: Config
) => {
  const mergeConfig = defineConfig(config)
  const context = createContext(element, mergeConfig)
  const instance = context.instance = createObject({
    ...createCommands()
  }, {
    version: {
      value: '1.0.0'
    }
  })
  
  return instance
}

export default createPlayer