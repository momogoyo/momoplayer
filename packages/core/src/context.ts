import { createCommands } from './commands'
let uid = 0

const momoContext = {}

export const createContext = (
  element: HTMLElement
) => {
  uid++

  const commands = createCommands()

  momoContext[uid] = {
    element,
    commands
  }

  return momoContext[uid]
}

export default createContext