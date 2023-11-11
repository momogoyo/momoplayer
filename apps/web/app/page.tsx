'use client'

import { useEffect, useRef, useState } from 'react'
import { createPlayer } from '@momoplayer/core'

const Page = ({
  children
}: React.PropsWithChildren): JSX.Element => {
  const [mounted, setMounted] = useState<boolean>(false)
  const mediaRef1 = useRef<HTMLVideoElement | null>(null)
  const mediaRef2 = useRef<HTMLVideoElement | null>(null)
  const mediaRef3 = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && mediaRef1.current) {
      const player1 = createPlayer(mediaRef1.current, { ui: true })
      console.log(player1)
    }
  }, [mounted, mediaRef1.current])
  
  useEffect(() => {
    if (mounted && mediaRef2.current) {
      const player2 = createPlayer(mediaRef2.current, { autoplay: true })
      console.log(player2) 
    }
  }, [mounted, mediaRef2.current])

  useEffect(() => {
    if (mounted && mediaRef3.current) {
      const player3 = createPlayer(mediaRef3.current, { muted: true })
      console.log(player3)
    }
  }, [mounted, mediaRef3.current])

  return (
    <div className={'momoplayer'}>
      <video ref={mediaRef1} />
      <video ref={mediaRef2} />
      <audio ref={mediaRef3} />

      {children}
    </div>
  )
}

export default Page