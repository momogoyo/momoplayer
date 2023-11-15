import { useEffect, useRef, useState } from 'react'
import { checkMediaType } from '@/utils'

export const Media = ({
  source,
  ...props
}) => {
  const mediaRef = useRef<HTMLMediaElement | null>(null)
  const [mediaType, setMediaType] = useState<string>('video')

  useEffect(() => {
    setMediaType(checkMediaType(source))
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