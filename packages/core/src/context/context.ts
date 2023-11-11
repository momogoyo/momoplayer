import type { ElementTypes } from '@/types'
import type { Context } from './types'

let uid = 0

// global context
const momoContext = {}

export const getContext = () => {
  return momoContext[uid]
}

export const createContext = (
  element: ElementTypes
) => {
  uid++

  momoContext[uid] = {
    uid,
    element,
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