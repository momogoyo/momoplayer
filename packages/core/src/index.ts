import { createContext } from './context'
import { defineConfig } from './config'

export const createPlayer = (
  element: HTMLElement,
  config
) => {
  const mergeConfig = defineConfig(config)
  const context = createContext(element)

  const api = {
    element,
    context
  }

  return api
}

export default createPlayer