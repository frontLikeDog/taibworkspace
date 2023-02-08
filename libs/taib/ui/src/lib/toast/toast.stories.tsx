import { ComponentMeta, ComponentStory } from "@storybook/react";
import Toast from "./toast";




export default {
    title: 'DEV/Toast',
    component: Toast,
} as ComponentMeta<typeof Toast>;

const Template:ComponentStory<typeof Toast> = (args) =>(<div className="max-w-4xl"> <Toast {...args} /></div>);

export const Simple = Template.bind({});
Simple.args = {

}