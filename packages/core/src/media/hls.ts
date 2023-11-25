import Hls from 'hls.js'
import { provider } from '@/context'

export const load = () => provider(({
  config,
  element
}) => {
  const videoElement = element.querySelector('video')

  if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
    // 기본 HLS가 지원되는지 확인
    videoElement.src = config.source

    return videoElement
  } else if (Hls.isSupported()) {
    // HLS를 지원하는 브라우저인지 확인
    console.log('HLS is supported')
    const hls = new Hls()
    // 매니페이스 URL을 로드
    hls.loadSource(config.source)
    // 비디오 요소를 hls 객체에 바인딩
    hls.attachMedia(videoElement)
    
    return hls
  }
})

export const play  = () => provider(({
  config,
  instance
}) => {
  instance.media.play()
})

export const pause  = () => provider(({
  config,
  element
}) => {

})

export default {
  load,
  play,
  pause
}