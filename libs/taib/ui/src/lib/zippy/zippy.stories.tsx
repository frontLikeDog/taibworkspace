import { ComponentMeta, ComponentStory } from "@storybook/react";
import Zippy from "./zippy";

export default {
    title: 'Beta/Zippy',
    component: Zippy,
} as ComponentMeta<typeof Zippy>;

const Template:ComponentStory<typeof Zippy> = (args) => <Zippy {...args} />;

export const Simple = Template.bind({});
Simple.args = {
}