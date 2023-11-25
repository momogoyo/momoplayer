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

  const onToggle = () => {
    if (!playerRef.current) return

    // playerRef.current.commands({ play: true })
    // const { play } = playerRef.current.commands()

    // console.log(playerRef.current)
  }

  const onPlay = () => {
    const media = playerRef.current
    
    console.log(media.play())
  }

  const onPause = () => {
    const media = playerRef.current
    
    media.pause()
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
      <Video ref={mediaRef} onClick={onToggle} />

      <Button p={8} bg="blue" color="white" borderRadius={6} onClick={onPlay}>Play</Button>
      <Button p={8} bg="pink" color="black" borderRadius={6} onClick={onPause}>Pause</Button>
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