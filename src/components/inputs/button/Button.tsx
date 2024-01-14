import React from 'react'
import './button.scss'
import classNames from 'classnames'

export interface ButtonProps {
  variant?: 'contained' | 'outline' | 'text'
  color?: 'primary' | 'secondary' | 'default' | 'success' | 'error'
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
}

const Button = ({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
}: ButtonProps) => {
  return (
    <button className={classNames('btn', `btn__${variant}`, `btn__${color}`, `btn__${size}`)}>
      {children}
    </button>
  )
}

export default Button
