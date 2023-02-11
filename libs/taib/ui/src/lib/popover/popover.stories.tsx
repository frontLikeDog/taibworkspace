import { ComponentMeta, ComponentStory } from "@storybook/react";
import Popover from "./popover";


export default {
    title: 'Beta/Popover',
    component: Popover,
} as ComponentMeta<typeof Popover>;

const Template:ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Simple = Template.bind({});
Simple.args = {
}