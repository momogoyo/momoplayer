import { useRef } from 'react'

import type { Context } from '@/context/types'

interface ContainerProps {
  context: Context
  mediaComponent: JSX.Element
}

const Container = ({
  context,
  mediaComponent
}: ContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef}>
      {mediaComponent}
    </div>
  )
}

export default Container
