import { extend } from '@/utils'
import { defaultConfig } from './types'

import type { MediaTypes } from '@/types'
import type { Config } from './types'

export const defineConfig = (
  config: Config
) => {
  return extend(
    {},
    defaultConfig,
    config
  )
}

export const initializeMedia = (
  media: MediaTypes,
  config: Config
) => {
  // 각 키 값에 맞는 데이터를 세팅 해주는 로직...

  Object.keys(config).forEach((key) => {
    switch (key) {
      case 'source': 
        media.src = config[key]
        break
      default:
        if (key in media) {
          media[key] = config[key]
        }
        break
    }
  })
}