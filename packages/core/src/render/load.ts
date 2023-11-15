import { h, render } from 'preact'
import createEmotion from '@emotion/css/create-instance'
import { provider } from '@/context'
import Container from '@/components/Container'
import Media from '@/components/Media'

import type { Context } from '@/context/types'

export const createRender = () => provider((
  context: Context
) => {
  context.emotion = createEmotion({ key: 'momoplayer' })
  
  const { ui, spatial, source, ...mediaProps } = context.config

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