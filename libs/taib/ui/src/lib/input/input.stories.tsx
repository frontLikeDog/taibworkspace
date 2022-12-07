import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './input';
import { IconHome, IconLoader } from '@longstupay/taib-ui';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form/Input',
Input} as ComponentMeta<typeof Input>;

//create a “template” of how args map to rendering
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Simple = Template.bind({});
Simple.args = {
    size: 'base',
    variant: "info"
}
Simple.storyName = 'Default';