import Dash from 'dashjs'

export const load = (
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

export const play = () => {

}

export const pause = () => {

}