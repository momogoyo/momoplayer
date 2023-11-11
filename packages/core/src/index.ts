import { createContext } from './context'
import { defineConfig } from './config'

export const createPlayer = (
  element: HTMLElement | HTMLDivElement | HTMLVideoElement | HTMLAudioElement | HTMLMediaElement,
  config: any
) => {
  const mergeConfig = defineConfig(config)
  const context = createContext(element)

  const api = {
    element,
    context
  }

  console.log('config: ', mergeConfig)
  console.log('api: ', api)

  return api
}

export default createPlayer