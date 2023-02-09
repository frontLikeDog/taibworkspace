import { ComponentMeta, ComponentStory } from "@storybook/react";
import Chips from "./chips";



export default {
    title: 'Beta/Chips',
    component: Chips,
} as ComponentMeta<typeof Chips>;

const Template:ComponentStory<typeof Chips> = (args) =>(<div className="max-w-4xl"> <Chips {...args} /></div>);

export const Base = Template.bind({});
Base.args = {
    type: "base",
}

export const Sizing = Template.bind({});
Sizing.args = {
    type: "sizing",
}