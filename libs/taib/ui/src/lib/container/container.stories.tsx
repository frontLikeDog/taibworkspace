import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Container } from './';


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Layout/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

//create a “template” of how args map to rendering
const Template: ComponentStory<typeof Container> = (args) => <Container {...args} >
  <div className='p6 bg-primary'>1</div>
  <div className='p6 bg-danger max-w-[40%]'>1</div>
</Container>

export const Simple = Template.bind({})
Simple.args = {
  size: 'lg',
  // centerContent: true,
}
Simple.storyName = "Default"