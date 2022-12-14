import React from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import TitleStyles from './Title.module.css'

interface Props {
  className?: string
  level?: 1 | 2 | 3 | 4 | 5
  children: any
  style?: React.CSSProperties
}

function Title({ className, level = 1, children, style }: Props) {
  const classes = [TitleStyles['sbui-typography-title']]
  if (className) {
    classes.push(className)
  }
  const CustomTag: any = `h${level}`

  return (
    <CustomTag style={style} className={classes.join(' ')}>
      {children}
    </CustomTag>
  )
}

export default Title
