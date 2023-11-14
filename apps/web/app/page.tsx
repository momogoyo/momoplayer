'use client'

import { useEffect, useRef, useState } from 'react'
import { createPlayer } from '@momoplayer/core'

const Page = ({
  children
}: React.PropsWithChildren): JSX.Element => {
  const [mounted, setMounted] = useState<boolean>(false)
  const mediaRef1 = useRef<HTMLDivElement | null>(null)
  const mediaRef2 = useRef<HTMLDivElement | null>(null)
  const playerRef1 = useRef<any>(null)
  const playerRef2 = useRef<any>(null)

  const onClick1 = () => {
    if (!playerRef1.current) return

    playerRef1.current.commands({ play: true })
    const { play } = playerRef1.current.commands()

    console.log(playerRef1.current)
  }

  const onClick2 = () => {
    if (!playerRef2.current) return

    playerRef2.current.commands({ play: true })
    const { play } = playerRef2.current.commands()
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && mediaRef1.current) {
      playerRef1.current = createPlayer(mediaRef1.current, {
        source: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        autoplay: true,
        muted: true,
        ui: true,
      })

      // playerRef1.current.render(mediaRef1.current)
    }
  }, [mounted, mediaRef1.current])
  
  
  useEffect(() => {
    if (mounted && mediaRef2.current) {
      playerRef2.current = createPlayer(mediaRef2.current, {
        source: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
        autoplay: true,
        controls: true,
        volume: 0.8
      })
    }
  }, [mounted, mediaRef2.current])

  return (
    <div className={'momoplayer'}>
      <div 
        ref={mediaRef1}
        onClick={onClick1}
        ></div>
      <div 
        ref={mediaRef2}
        onClick={onClick2}
        ></div>

      {children}
    </div>
  )
}

export default Page