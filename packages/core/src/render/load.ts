import { h, render } from 'preact'
import createEmotion from '@emotion/css/create-instance'
import Hls from 'hls.js'
import Dash from 'dashjs'
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
    context,
    ...mediaProps
  })
  const containerComponent = h(Container, {
    context,
    mediaComponent
  })
  
  render(containerComponent, context.element)
})

export const loadHls = (
  source: string,
  mediaElement: HTMLMediaElement
) => {
  // HLS를 지원하는 브라우저인지 확인
  if (Hls.isSupported()) {
    console.log('HLS is supported')
    const hls = new Hls()
    // 매니페이스 URL을 로드
    hls.loadSource(source)
    // 비디오 요소를 hls 객체에 바인딩
    hls.attachMedia(mediaElement)
    
    return hls
  }
}

export const loadDash = (
  source: string,
  mediaElement: HTMLMediaElement
) => {
  // MediaPlayer 생성
  const dash = Dash.MediaPlayer().create()
  // MediaPlayer 인스턴스 초기화
  dash.initialize()
  // 매니페스트 URL 로드
  dash.attachSource(source)
  // 비디어 요소 바인딩
  dash.attachView(mediaElement)
  // 자동 재생 비활성화
  dash.setAutoPlay(false)

  return dash
}

export const loadHTMLMedia = (
  mediaElement: HTMLMediaElement
) => {
  const htmlMedia = mediaElement.load()

  return htmlMedia
}