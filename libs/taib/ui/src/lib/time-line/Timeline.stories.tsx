import { ComponentMeta, ComponentStory } from "@storybook/react";
import TimeLine from "./time-line";


export default {
    title: 'Beta/TimeLine',
    component: TimeLine,
} as ComponentMeta<typeof TimeLine>;

const Template:ComponentStory<typeof TimeLine> = (args) =>(<div className=""> <TimeLine {...args} /></div>);

export const Simple = Template.bind({});
Simple.args = {
}