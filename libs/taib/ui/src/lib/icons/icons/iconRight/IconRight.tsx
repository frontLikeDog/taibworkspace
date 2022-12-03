import { FC } from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { IconBase } from '@longstupay/taib-ui';
import { myIconProps } from '../../iconBase';


const IconRight:FC<myIconProps> = ({icon=faChevronRight,className,...args}) => {
    return <IconBase icon={icon} className={className} {...args} />
}

export default IconRight;