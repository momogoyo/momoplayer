import type { MediaTypes, Config } from '@/types'

export interface Instance {
  version: string
  commands: () => void
  ui: () => void
  spatial: () => void
}

export interface Context {
  
  uid: number
  config: Config
  element: MediaTypes
  refs: {
    media: HTMLMediaElement
  }
  emotion: any
  instance: Instance
}