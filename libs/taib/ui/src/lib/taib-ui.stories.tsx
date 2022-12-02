import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { TaibUi } from './taib-ui';

const Story: ComponentMeta<typeof TaibUi> = {
  component: TaibUi,
  title: 'TaibUi',
};
export default Story;

const Template: ComponentStory<typeof TaibUi> = (args) => <TaibUi {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
