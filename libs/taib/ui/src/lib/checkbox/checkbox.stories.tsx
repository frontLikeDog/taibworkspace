import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Stack } from "../stack";

import Checkbox  from "./index";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Form/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
}
Primary.storyName = "Default"

export const Group = ()=> (
  <div>
    <Checkbox.Group>
      <Checkbox>tiny</Checkbox>
      <Checkbox>small</Checkbox>
      <Checkbox>medium</Checkbox>
      <Checkbox>large</Checkbox>
    </Checkbox.Group>
  </div>
)

export const DisableCheckbox = () => (
  <div className="flex flex-col">
    <Checkbox disabled={true}>Checkbox</Checkbox>
    <Checkbox disabled={true} defaultChecked={true}>Checkbox</Checkbox>
  </div>
)

export const CustomColor = () => (
  <Stack>
    <Checkbox color="red-400" defaultChecked> Checkbox</Checkbox>
    <Checkbox defaultChecked>Checkbox</Checkbox>
  </Stack>
)