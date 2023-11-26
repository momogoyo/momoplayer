'use client'

import { useEffect, useRef, useState } from 'react'
import { Flex, Button, styled } from '@kuma-ui/core'
import { createPlayer } from '@momoplayer/core'

const Page = ({
  children
}: React.PropsWithChildren): JSX.Element => {
  const [mounted, setMounted] = useState<boolean>(false)
  const mediaRef = useRef<HTMLDivElement | null>(null)
  const playerRef = useRef<any>(null)

  // https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8
  // https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd
  // https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3

  const onPlay = () => {
    const media = playerRef.current
    
    media.play()
  }

  const onPause = () => {
    const media = playerRef.current
    
    media.pause()
  }

  const onUpdate = () => {
    if (!playerRef.current) return

    const { autoplay } = playerRef.current.commands()
    console.log(autoplay)
    playerRef.current.commands({ muted: true, autoplay: true })
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && mediaRef.current) {
      playerRef.current = createPlayer(mediaRef.current, {
        source: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3'
      })

      // playerRef.current.load()
      console.log(playerRef.current)
    }
  }, [mounted, mediaRef.current])

  return (
    <Flex justify={'center'} alignItems={'center'}>
      <Video ref={mediaRef} />

      <Button p={8} bg="blue" color="white" borderRadius={6} onClick={onPlay}>Play</Button>
      <Button p={8} bg="pink" color="black" borderRadius={6} onClick={onPause}>Pause</Button>
      <Button p={8} bg="yellow" color="black" borderRadius={6} onClick={onUpdate}>Update</Button>
    </Flex>
  )
}

const Video = styled.div`
  padding: 8px;

  video {
    width: 100%;
  }

  @media (max-width: 500px) {
    color: blue;
  }
`

export default Page