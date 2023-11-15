import { h, render } from 'preact'
import createEmotion from '@emotion/css/create-instance'
import { provider } from '@/context'
import Container from '@/components/Container'
import Media from '@/components/Media'

import type { Config } from '@/types'

export const createRender = () => provider(async (context) => {
  // await loadMedia(context)
  const { ui, spatial, source, ...mediaProps } = context.config

  context.emotion = createEmotion({ key: 'momoplayer' })

  const mediaComponent = h(Media, {
    source,
    ...mediaProps
  })
  const containerComponent = h(Container, {
    context,
    mediaComponent
  })
  
  render(containerComponent, context.element)
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