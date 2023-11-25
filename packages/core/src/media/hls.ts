import Hls from 'hls.js'

export const load = (
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
export const play = () => {

}

export const pause = () => {

}