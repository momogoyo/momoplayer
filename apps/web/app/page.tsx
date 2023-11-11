'use client'

import { useEffect, useState, useRef } from 'react'
import { createPlayer } from '@momoplayer/core'

const Page = ({
  children
}: React.PropsWithChildren): JSX.Element => {
  const videoRef = useRef(null)

  useEffect(() => {
    const player = createPlayer(videoRef.current, {})
    console.log(player)
  }, [])

  return (
    <div className={'momoplayer'}>
      <video ref={videoRef} />
    </div>
  )
}

export default Page