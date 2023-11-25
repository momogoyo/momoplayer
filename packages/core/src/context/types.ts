import type { MediaTypes, Config } from '@/types'

export interface Instance {
  version: string
  commands: () => void
  media: any
  spatial: () => void
}

export interface Context {
  uid: number
  config: Config
  element: MediaTypes
  emotion: any
  instance: Instance
}