import React from 'react'
import clsx from 'clsx'

export interface MenuProps {
  className?: string
  children: React.ReactNode
}

const Menu = ({ children, className }: MenuProps) => {
  return <div className={clsx({ className: !!className })}>{children}</div>
}

export default React.memo(Menu)
