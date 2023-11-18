import { createObject } from '@/lib'
import { defineConfig } from '@/configs'
import { createContext } from '@/context'
import { createEvents } from '@/events'
import { createCommands } from '@/commands'
import { createRender } from '@/render/load'
import { createUI } from '@/render/ui'
import { createSpatial } from '@/render/spatial'

import type { MediaTypes, Config } from './types'

export const createPlayer = (
  element: HTMLElement,
  config: Config
) => {
  const mergeConfig = defineConfig(config)
  
  const context = createContext(element, mergeConfig)
  
  const instance = context.instance = createObject({
    // commands: { ...createCommands() }
    ...createEvents()
  }, {
    config: {
      ...mergeConfig
    },
    version: {
      value: '0.0.1'
    }
  })

  instance.commands = createCommands()
  instance.render = createRender()
  // instance.ui = createUI()
  // instance.spatial = createSpatial()
  
  return instance
}

export default createPlayer