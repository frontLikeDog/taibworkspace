import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "./card";



export default {
    title: 'Beta/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template:ComponentStory<typeof Card> = (args) =>(<div className="max-w-4xl"> <Card {...args} /></div>);

export const Simple = Template.bind({});
Simple.args = {
    type: "simple",
}

export const Img = Template.bind({});
Img.args = {
    type: "img",
}
Img.storyName = "With image"