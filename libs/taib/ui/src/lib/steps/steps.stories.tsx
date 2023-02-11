import { ComponentMeta, ComponentStory } from "@storybook/react";
import Steps from "./steps";

export default {
    title: 'Beta/Steps',
    component: Steps,
} as ComponentMeta<typeof Steps>;

const Template:ComponentStory<typeof Steps> = (args) => <Steps {...args} />;
export const Simple = Template.bind({});