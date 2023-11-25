import Dash from 'dashjs'
import { provider } from '@/context'

export const load = () => provider(({
  config,
  element
}) => {
  const videoElement = element.querySelector('video')

  // MediaPlayer 생성
  const dash = Dash.MediaPlayer().create()
  // MediaPlayer 인스턴스 초기화
  dash.initialize()
  // 매니페스트 URL 로드
  dash.attachSource(config.source)
  // 비디어 요소 바인딩
  dash.attachView(videoElement)
  // 자동 재생 비활성화
  dash.setAutoPlay(false)

  return dash
})

export const play = () => {

}

export const pause = () => {

}

export default {
  load,
  play,
  pause
}