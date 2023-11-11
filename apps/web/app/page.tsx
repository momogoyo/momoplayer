'use client'

import { useEffect, useState, useRef } from 'react'
import { createPlayer } from '@momoplayer/core'

const Page = ({
  children
}: React.PropsWithChildren): JSX.Element => {
  const [mounted, setMounted] = useState<boolean>(false)
  const videoRef = useRef(null)

  useEffect(() => {
    setMounted(true)
    const player = createPlayer(videoRef.current, {})

    console.log(player)
  }, [])

  return (
    <div className={'momoplayer'}>
      {mounted && (
        <video ref={videoRef} />
      )}
    </div>
  )
}

export default Page