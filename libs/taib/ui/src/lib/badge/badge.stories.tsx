import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Badge from './badge';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Data Display/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

//create a “template” of how args map to rendering
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Simple = Template.bind({});
