import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Stack } from "../stack";

import Radio  from "./index";
import { RadioChangeEvent } from "./radio";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Form/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Primary = Template.bind({});
Primary.args = {
}
Primary.storyName = "Default"

export const Disabled = () => <Template>disabled</Template>

export const WithSize = () => {
    const sizes = ["sm","md","lg"]
    return (
            <Stack >
                {sizes.map((size:any,index)=>(
                <Template key={index} value={size} >
                    {size}
                </Template>))}
            </Stack>
    )
}

export const Group = () => {
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
  
    return (
      <Radio.Group  onChange={onChange} value={value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
    );
}