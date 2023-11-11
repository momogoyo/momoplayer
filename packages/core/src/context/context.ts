import type { ElementTypes, Config } from '@/types'
import type { Context } from './types'

let uid = 0

// global context
const momoContext = {}

export const getContext = () => {
  return momoContext[uid]
}

export const createContext = (
  element: ElementTypes,
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

export const provider = <T>(
  callback: (context: Context) => T
): T => {
  const context = momoContext[uid]

  return callback(context)
}