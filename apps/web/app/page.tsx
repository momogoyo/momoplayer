import * as React from 'react'

export const Page = ({
  children
}: React.PropsWithChildren): JSX.Element => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Page