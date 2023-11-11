import { defineConfig } from './config'
import { createContext } from './context'
import { createCommands } from './commands'
import { createObject } from './utils'

export const createPlayer = (
  element: HTMLElement | HTMLDivElement | HTMLVideoElement | HTMLAudioElement | HTMLMediaElement,
  config: any
) => {
  const mergeConfig = defineConfig(config)
  const context = createContext(element, mergeConfig)
  const instance = context.instance.createObject(
    ...createCommands(),
    {}
  )

  return instance
}

export default createPlayer