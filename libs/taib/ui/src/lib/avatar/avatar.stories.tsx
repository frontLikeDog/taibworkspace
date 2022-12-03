import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconHome } from "@longstupay/taib-ui";
import Avatar from "./";



export default {
    title: 'General/Avatar',
    component: Avatar,
  } as ComponentMeta<typeof Avatar>;
  
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'Img',
  src: "https://picsum.photos/200",
  status: 'available',
}

export const Text = Template.bind({});
Text.args = {
  type: 'Text',
}

export const Icon = Template.bind({});
Icon.args = {
  type: 'Icon',
  AvaIcon: IconHome,
}

const TemplateGroup: ComponentStory<typeof Avatar.Group> = (args) => <Avatar.Group {...args} maxCount={3} >
  <Avatar type="Img" src="https://picsum.photos/200" />
  <Avatar type="Img" src="https://picsum.photos/300" />
  <Avatar type="Img" src="https://picsum.photos/100" />
  <Avatar type="Img" src="https://picsum.photos/200" />
  <Avatar type="Img" src="https://picsum.photos/300" />
  <Avatar type="Img" src="https://picsum.photos/100" />
</Avatar.Group>;
export const Group = TemplateGroup.bind({});