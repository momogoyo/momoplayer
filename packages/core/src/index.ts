import { createObject } from '@/utils'
import { defineConfig } from '@/configs'
import { createContext } from '@/context'
import { createCommands } from '@/commands'
import { createUI } from '@/ui'
import { createSpatial } from '@/spatial'

import type { MediaTypes, Config } from './types'

export const createPlayer = (
  media: MediaTypes,
  config: Config
) => {
  const mergeConfig = defineConfig(config)
  
  const context = createContext(media, mergeConfig)
  
  const instance = context.instance = createObject({
    // commands: { ...createCommands() }
  }, {
    // config: {
    //   ...mergeConfig
    // },
    version: {
      value: '0.0.1'
    }
  })

  instance.commands = createCommands()
  instance.ui = createUI()
  instance.spatial = createSpatial()
  
  return instance
}

export default createPlayer