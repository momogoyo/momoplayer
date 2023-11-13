import { initializeMedia } from '@/configs'

import type { MediaTypes, Config } from '@/types'
import type { Context } from './types'

let uid = 0

// global context
const momoContext = {}

export const getContext = () => {
  return momoContext[uid]
}

export const createContext = (
  element: MediaTypes,
  config: Config
) => {
  uid++

  momoContext[uid] = {
    uid,
    element,
    config,
    instance: null
  }

  initializeMedia(element, config)

  return momoContext[uid]
}

export const provider = <T>(
  callback: (context: Context) => T
): T => {
  const context = momoContext[uid]

  return callback(context)
}