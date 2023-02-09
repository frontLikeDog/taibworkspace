import { ComponentMeta, ComponentStory } from "@storybook/react";
import Pagination from "./pagination";


export default {
    title: 'Beta/Pagination',
    component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template:ComponentStory<typeof Pagination> = (args) =>(<div className=""> <Pagination {...args} /></div>);

export const Base = Template.bind({});
Base.args = {
}