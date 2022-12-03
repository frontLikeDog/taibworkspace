import { ComponentMeta, ComponentStory } from '@storybook/react';
import type { ImageProps } from './index';

import {Image} from './index';

export default {
    title: 'General/Image',
    component: Image,
} as ComponentMeta<typeof Image>;

const ImgTemplate:ComponentStory<typeof Image> = (props:ImageProps) => <Image {...props} />

export const ImgDefault = ImgTemplate.bind({});
ImgDefault.args = {

}
ImgDefault.storyName = 'Default';

export const Circle = ImgTemplate.bind({});
Circle.args = {
    type: 'circle'
}

export const Rounded = ImgTemplate.bind({});
Rounded.args = {
    type: 'rounded'
}

export const Responsive = ImgTemplate.bind({});
Responsive.args = {
    isResponsive: true
}