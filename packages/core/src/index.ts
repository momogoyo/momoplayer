import { createObject } from '@/lib'
import { defineConfig } from '@/configs'
import { createContext } from '@/context'
import { createEvents } from '@/events'
import { checkMediaType } from '@/lib'
import { loadMedia } from '@/media'
import { createCommands } from '@/commands'
import { createStyles } from '@/styles'
import { createSpatial } from '@/media/spatial'

import type { Config } from './types'

export const createPlayer = (
  element: HTMLElement,
  config: Config
) => {
  const mergeConfig = defineConfig(config)
  mergeConfig.mediaType = checkMediaType(config.source)
  
  const context = createContext(element, mergeConfig)

  if (!(element instanceof HTMLMediaElement)) {
    const mediaElement = document.createElement(mergeConfig.mediaType)
    element.appendChild(mediaElement)
  }

  const media = { ...loadMedia() }

  const instance = context.instance = createObject({
    ...media,
    ...createEvents()
  }, {
    // get config () {
    //   return {
    //     ...mergeConfig
    //   }
    // },
    config: {
      ...mergeConfig
    },
    version: {
      value: '0.0.1'
    }
  })

  instance.media = media.load()
  instance.commands = createCommands()
  instance.styles = createStyles()

  // instance.spatial = createSpatial()
  
  return instance
}

export default createPlayer