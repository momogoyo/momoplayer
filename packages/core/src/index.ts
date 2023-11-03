import { createContext } from './context'

export const createPlayer = (
  element: HTMLElement
) => {
  const context = createContext(element)

  const api = {
    element,
    context
  }

  return api
}

export default createPlayer