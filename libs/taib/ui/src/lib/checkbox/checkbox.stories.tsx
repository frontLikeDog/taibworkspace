import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { useEffect } from "react";
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
  isIndeterminate:false
}
Primary.storyName = "Default"

export const Group = ()=> (
  <div>
    <Checkbox.Group color="red-400">
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

export const CustomColor = () => {
  const ref = React.useRef<HTMLInputElement>(null);
  useEffect(() => {
    // console.log(ref);
    (ref?.current?.indeterminate != null) && (ref.current.indeterminate = true);
    console.log(ref);
  }, [])
  return (
    <Stack>
      <Checkbox ref={ref} defaultChecked> Checkbox</Checkbox>
      {/* <Checkbox defaultChecked>Checkbox</Checkbox> */}
    </Stack>
  )
}