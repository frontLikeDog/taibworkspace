import { ComponentMeta, ComponentStory } from "@storybook/react";
import Rate from "./rate";


export default {
    title: 'Beta/Rate',
    component: Rate,
} as ComponentMeta<typeof Rate>;

const Template:ComponentStory<typeof Rate> = (args) => <Rate {...args} />;

export const Simple = Template.bind({});
Simple.args = {
}