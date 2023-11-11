export const RootLayout = ({
  children
}: React.PropsWithChildren): JSX.Element => {
  return (
    <html lang="ko">
      <head></head>
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout