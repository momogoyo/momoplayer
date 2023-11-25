import { provider } from '@/context'
import {
  isHlsExtension,
  isDashExtension
} from '@/lib'
import hls from './hls'
import dash from './dash'
import html from './html'

export const loadMedia = () => provider(({
  config
}) => {
  if (isHlsExtension(config.source)) {
    return hls
  } else if (isDashExtension(config.source)) {
    return dash
  } else {
    return html
  }
})