'use client'

import { useEffect, useState } from 'react'
import core from '@momogoyo/core'

const Page = ({
  children
}: React.PropsWithChildren): JSX.Element => {
  useEffect(() => {
    console.log(core)
  }, [])

  return (
    <div>
      {children}
    </div>
  )
}

export default Page