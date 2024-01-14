import Header from '@components/layouts/Header'
import React from 'react'

export interface MovieLayoutProps {
  children: React.ReactNode
}

const MovieLayout = ({ children }: MovieLayoutProps) => {
  return (
    <>
      {children}
    </>
  )
}

export default MovieLayout
