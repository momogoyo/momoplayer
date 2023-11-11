import { createCommands } from './commands'

import type { Config } from './config'

let uid = 0

// global context
const momoContext = {}

export const getContext = () => {
  return momoContext[uid]
}

export const createContext = (
  element: HTMLElement,
  config: Config
) => {
  uid++

  momoContext[uid] = {
    element,
    config,
    instance: null
  }

  return momoContext[uid]
}

export const provider = (
  callback: any
) => {
  const context = momoContext[uid]

  return callback(context)
}