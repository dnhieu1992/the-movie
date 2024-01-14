import React from 'react'

export interface MenuListProps{
  children:React.ReactNode
}

const MenuList = ({children}: MenuListProps) => {
  return (
    <div>{children}</div>
  )
}

export default MenuList