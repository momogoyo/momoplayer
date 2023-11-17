import { useEffect, useRef, useState } from 'react'
import Hls from 'hls.js'
import { checkMediaType } from '@/utils'

export const Media = ({
  source,
  ...props
}) => {
  const mediaRef = useRef<HTMLMediaElement | null>(null)
  const [mediaType, setMediaType] = useState<string>('video')

  const loadSource = () => {
    if (source.endsWith('.m3u8')) {
      // HLS를 지원하는 브라우저인지 확인
      if (Hls.isSupported()) {
        console.log('HLS is supported')
        const hls = new Hls()
        // 매니페이스 URL을 로드
        hls.loadSource(source)
        // 비디오 요소를 hls 객체에 바인딩
        hls.attachMedia(mediaRef.current)
      }
    } else if (source.endsWith('.mpd')) {
      // dash.js 관련 load 로직
      console.log('dash')
    } else {
      new Promise((resolve, reject) => {
        mediaRef.current.load()
        mediaRef.current.onloadeddata = resolve
        mediaRef.current.onerror = reject
      })
    }
  }

  useEffect(() => {
    setMediaType(checkMediaType(source))

    if (mediaRef.current) {
      loadSource()
    }
  }, [source])

  return (
    mediaType === 'video'
    ? <video
        ref={el => mediaRef.current = el as HTMLVideoElement}
        src={source}
        {...props}
      />
    : <audio 
        ref={el => mediaRef.current = el as HTMLAudioElement}
        src={source}
        controls
        {...props}
      />
  )
}

export default Media