import { ComponentStory, ComponentMeta } from "@storybook/react";

import  FormControl  from "./form-control";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Form/FormControl",
  component: FormControl,
} as ComponentMeta<typeof FormControl>;

const Template: ComponentStory<typeof FormControl> = (args) => <FormControl {...args} />;

export const Primary = Template.bind({});
Primary.args = {
}
Primary.storyName = "Default"