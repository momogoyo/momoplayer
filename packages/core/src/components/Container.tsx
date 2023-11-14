import type { Emotion } from '@emotion/css/types/create-instance'
import type { Context } from '@/context/types'
import { useEffect, useRef } from 'react'

const Container = (
  context: Context
) => {
  const mediaRef = useRef(null)
  // 미디어 종류에 따라서 video / audio 세팅해주기
  
  useEffect(() => {
    if (mediaRef.current) {
      Object.keys(context.config).forEach((key) => {
        switch (key) {
          case 'source': 
            mediaRef.current.src = context.config[key]
            break
          case 'ui': 
            break
          case 'spatial':
            break
          default:
            if (key in mediaRef.current) {
              mediaRef.current[key] = context.config[key]
            }
            break
        }
      })
    }
  }, [])

  return (
    <div>
      <video ref={mediaRef} />
    </div>
  )
}

export default Container
