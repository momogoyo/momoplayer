import { h, render } from 'preact'
import createEmotion from '@emotion/css/create-instance'
import { provider } from '@/context'
import Container from '@/components/Container'

import type { MediaTypes, Config } from '@/types'

// 여기서 초기 설정까지하고 새로운 비디오 요소까지 만들어서 넘겨주는거 하면 될듯
export const createRender = () => provider((
  context
) => {
  context.emotion = createEmotion({ key: 'momoplayer' })

  const component = h(Container, context)
  render(component, context.element)
})

export const initializeLoad = (
  media: HTMLElement,
  config: Config
) => {
  // Object.keys(config).forEach((key) => {
  //   switch (key) {
  //     case 'source': 
  //       media.src = config[key]
  //       break
  //     default:
  //       if (key in media) {
  //         media[key] = config[key]
  //       }
  //       break
  //   }
  // })
}