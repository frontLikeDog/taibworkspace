import { HandlerFunction } from '@storybook/addon-actions'
import React from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import LinkStyles from './Link.module.css'

interface Props {
  children?: React.ReactNode
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename'
  href?: string
  className?: string
  style?: React.CSSProperties
  onClick?: HandlerFunction
}

function Link({
  children,
  target = '_blank',
  href,
  className,
  onClick,
  style,
}: Props) {
  const classes = [
    LinkStyles['taibui-typography'],
    LinkStyles['taibui-typography-link'],
  ]
  if (className) {
    classes.push(className)
  }

  return (
    <a
      onClick={onClick}
      className={classes.join(' ')}
      href={href}
      target={target}
      rel="noopener noreferrer"
      style={style}
    >
      {children}
    </a>
  )
}

export default Link
