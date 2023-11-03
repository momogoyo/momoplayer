import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Momo Player',
  description: '모든거시 모구모구 있는 플레이어, 모모플레이어',
}

export const RootLayout = ({
  children
}: React.PropsWithChildren): JSX.Element => {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout