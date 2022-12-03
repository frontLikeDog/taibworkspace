import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Stack } from "./index";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Layout/Stack",
  component: Stack,
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} >
    <div style={{backgroundColor:'red', height:'100px', width:'100px',color:'white',textAlign:'center',lineHeight:'100px',fontSize:'32px',fontWeight:"bolder"}}>1</div>
    <div style={{backgroundColor:'blue', height:'100px', width:'100px',color:'white',textAlign:'center',lineHeight:'100px',fontSize:'32px',fontWeight:"bolder"}}>2</div>
    <div style={{backgroundColor:'green', height:'100px', width:'100px',color:'white',textAlign:'center',lineHeight:'100px',fontSize:'32px',fontWeight:"bolder"}}>3</div>
</Stack>;

export const Simple = Template.bind({});
Simple.storyName = "Default";

export const Row = Template.bind({});
Row.args = {
    row: true,
};

export const ReverseRow = Template.bind({});
ReverseRow.args = {
    revrow: true,
};

export const ReverseColumn = Template.bind({});
ReverseColumn.args = {
    revcol: true,
};
