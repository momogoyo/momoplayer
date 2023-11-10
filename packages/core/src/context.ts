import { createCommands } from './commands'

let uid = 0

const momoContext = {}

export const getContext = () => {
  return momoContext[uid]
}

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

export const provider = (
  callback: any
) => {
  const context = momoContext[uid]

  return callback(context)
}