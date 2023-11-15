import type { Config } from '@/types'
import type { Context } from './types'

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
    uid,
    element,
    config,
    emotion: null,
    instance: null
  }

  // initializeLoad(element, config)

  return momoContext[uid]
}

export const provider = <T>(
  callback: (context: Context) => T
): T => {
  const context = momoContext[uid]

  return callback(context)
}