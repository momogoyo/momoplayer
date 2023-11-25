import { useEffect, useRef, useState } from 'react'
import {
  checkMediaType,
  isHlsExtension,
  isDashExtension
} from '@/lib'

// import { load as loadHls } from '@/media/hls'
// import { load as loadDash } from '@/media/dash'
// import { load as loadHTMLMedia } from '@/media/html'

export const Media = ({
  context,
  ...props
}) => {
  const { source } = context.config
  const mediaRef = useRef<HTMLMediaElement | null>(null)
  const [mediaType, setMediaType] = useState<string>('')

  // const loadSource = () => {
  //   if (isHlsExtension(source)) {
  //     const media = loadHls(source, mediaRef.current)
  //     context.instance.media = media
  //   } else if (isDashExtension(source)) {
  //     const media = loadDash(source, mediaRef.current)
  //     context.instance.media = media
  //   } else {
  //     const media = loadHTMLMedia(source, mediaRef.current)
  //     context.instance.media = media
  //   }
  // }

  useEffect(() => {
    const mediaType = checkMediaType(source)
    setMediaType(mediaType)
  }, [source])
  
  useEffect(() => {
    if (mediaRef.current) {
      // loadSource()
    }
  }, [mediaType])

  return (
    <>
      {mediaType === 'video' && (
        <video
          ref={el => mediaRef.current = el as HTMLVideoElement}
          src={source}
          {...props}
        />
      )}
      {mediaType === 'audio' && (
        <audio 
          ref={el => mediaRef.current = el as HTMLAudioElement}
          src={source}
          controls
          {...props}
        />
      )}
    </>
  )

}

export default Media