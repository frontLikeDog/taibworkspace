import { ComponentMeta, ComponentStory } from "@storybook/react";
import Drawer from "./drawer";



export default {
    title: 'Beta/Drawer',
    component: Drawer,
} as ComponentMeta<typeof Drawer>;

const Template:ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;


export const Simple = Template.bind({});
Simple.args = {
}