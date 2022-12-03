import React, { FC } from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { IconBase } from '@longstupay/taib-ui';
import { myIconProps } from '../../iconBase';


const IconLoader:FC<myIconProps> = ({icon=faSpinner,className,...args}) => {
    return <IconBase icon={icon} className={className} {...args} />
}

export default IconLoader;
