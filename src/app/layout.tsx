import '../styles/global.scss'
import { Inter } from 'next/font/google'
import Header from '@components/layouts/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Movie Database (TMDB)',
  description:
    'The Movie Database (TMDB) is a popular, user editable database for movies and TV shows.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/source-sans-pro"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icon/favicon-16x16.png"
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
