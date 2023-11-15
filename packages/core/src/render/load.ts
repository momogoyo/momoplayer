import { h, render } from 'preact'
import createEmotion from '@emotion/css/create-instance'
import { provider } from '@/context'
import Container from '@/components/Container'

import type { MediaTypes, Config } from '@/types'

export const createRender = () => provider(async (context) => {
  await loadMedia(context)

  context.emotion = createEmotion({ key: 'momoplayer' })

  const component = h(Container, { ...context })
  render(component, context.element)
})

const loadMedia = async (context) => {
  const mediaElement = document.createElement('video')

  if (context.config.source.endsWith('.m3u8')) {
    // HLS
  } else if (context.config.source.endsWith('.mp4') || context.config.source.endsWith('.mp3')) {
    mediaElement.src = context.config.source

    await new Promise((resolve, reject) => {
      mediaElement.load()
      mediaElement.onloadeddata = resolve
      mediaElement.onerror = reject
    })
  } else {
    
  }

  context.refs.media = mediaElement
}

export const initializeLoad = (
  media: HTMLMediaElement,
  config: Config
) => {
  Object.keys(config).forEach((key) => {
    switch (key) {
      case 'source': 
        media.src = config[key]
        break
      case 'ui': 
          break
      case 'spatial':
        break
      default:
        if (key in media) {
          media[key] = config[key]
        }
        break
    }
  })
}