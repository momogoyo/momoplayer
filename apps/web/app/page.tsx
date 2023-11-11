'use client'

import { use, useEffect, useRef, useState } from 'react'
import { createPlayer } from '@momoplayer/core'

const Page = ({
  children
}: React.PropsWithChildren): JSX.Element => {
  const [mounted, setMounted] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && videoRef.current) {
      const player = createPlayer(videoRef.current, {})
      console.log(player) 
    }

  }, [mounted, videoRef.current])

  return (
    <div className={'momoplayer'}>
      <video ref={videoRef} />
    </div>
  )
}

export default Page