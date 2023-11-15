import { useEffect, useRef, useState } from 'react'
import { checkMediaType } from '@/utils'

export const Media = ({
  source,
  ...props
}) => {
  const mediaRef = useRef<HTMLMediaElement | null>(null)
  const [mediaType, setMediaType] = useState<string>('video')

  const loadSource = () => {
    if (!source.endsWith('.m3u8') || !source.endsWith('.mpd')) {
      new Promise((resolve, reject) => {
        mediaRef.current.load()
        mediaRef.current.onloadeddata = resolve
        mediaRef.current.onerror = reject
      })
    } else if (source.endsWith('.m3u8')) {
      // hls.js 관련 load 로직
      console.log('hls')
    } else if (source.endsWith('.mpd')) {
      // dash.js 관련 load 로직
      console.log('dash')
    } else {
      new Error('지원하지 않는 타입 입니다.')
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