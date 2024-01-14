import React from 'react'

export interface MenuItemProps {
  children: React.ReactNode
  className: string
  selected?: boolean
  onClick: () => void
}

const MenuItem = ({
  children,
  className,
  selected = false,
  onClick,
}: MenuItemProps) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )
}

export default React.memo(MenuItem)
