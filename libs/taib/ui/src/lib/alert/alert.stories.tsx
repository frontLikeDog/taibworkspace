import { ComponentMeta, ComponentStory } from "@storybook/react";
import Alert from "./alert";




export default {
    title: 'Beta/Alert',
    component: Alert,
} as ComponentMeta<typeof Alert>;

const Template:ComponentStory<typeof Alert> = (args) =>(<div className="max-w-4xl"> <Alert {...args} /></div>);

export const Simple = Template.bind({});
Simple.args = {
    label: "Data uploaded to the server. Fire on!",
}

export const Color = Template.bind({});
Color.args = {
    color:"warning"
}