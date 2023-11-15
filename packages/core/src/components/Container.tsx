import { useEffect, useRef } from 'react'

import type { Emotion } from '@emotion/css/types/create-instance'
import type { Context } from '@/context/types'

const Container = (
  context: Context
) => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (containerRef.current && context.refs.media) {
      containerRef.current.appendChild(context.refs.media)
    }
  }, [context])

  return (
    <div ref={containerRef}></div>
  )
}

export default Container
