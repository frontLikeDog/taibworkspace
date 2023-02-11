import { ComponentMeta, ComponentStory } from "@storybook/react";
import Toast from "./toast";


export default {
    title: 'Beta/Toast',
    component: Toast,
} as ComponentMeta<typeof Toast>;

const Template:ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Simple = Template.bind({});

export const WithColor = () => (
    <div className="grid grid-cols-3">
        <Toast color="primary" />
        <Toast color="link" />
        <Toast color="black" />
        <Toast color="gray" />
        <Toast color="light" />
        <Toast color="success" />
        <Toast color="info" />
        <Toast color="warning" />
        <Toast color="danger" />
        <Toast color="white" />
        <Toast color="dark" />
    </div>
)