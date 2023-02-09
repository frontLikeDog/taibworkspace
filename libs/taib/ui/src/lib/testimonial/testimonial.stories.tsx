import { ComponentMeta, ComponentStory } from "@storybook/react";
import Testimonial from "./testimonial";


export default {
    title: 'Beta/Testimonial',
    component: Testimonial,
} as ComponentMeta<typeof Testimonial>;

const Template:ComponentStory<typeof Testimonial> = (args) =>(<div className="max-w-4xl"> <Testimonial {...args} /></div>);

export const Primary = Template.bind({});
Primary.args = {
    cardType: "Card1",
}

