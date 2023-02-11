import { ComponentMeta, ComponentStory } from "@storybook/react";
import Modal from "./modal";


export default {
    title: 'Beta/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;   

const Template:ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Simple = Template.bind({});
Simple.args = {
}