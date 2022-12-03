import { FC } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
/* eslint-disable-next-line */
type MyPick<T, K extends keyof T> = { [key in K]:T[key] }

export type IconBaseProps = Partial<MyPick<FontAwesomeIconProps, 'className' | 'spin' | 'size'>>

export interface myIconProps extends IconBaseProps{
  icon?:IconProp
}


export const IconBase:FC<myIconProps> = ({icon=faHouse,className,...props}) => {
  return (
    <FontAwesomeIcon icon={icon} className={className} {...props} />
  )
}

// export default IconBaseProps;
export default IconBase;