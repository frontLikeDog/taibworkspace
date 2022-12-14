import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './input';
import { Button, IconHome, IconLoader,IconRight,Stack } from '@longstupay/taib-ui';
import React from 'react';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form/Input',
Input} as ComponentMeta<typeof Input>;

//create a “template” of how args map to rendering
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Simple = Template.bind({});
Simple.args = {
    size: 'base',
    variant: "info"
}
Simple.storyName = 'Default';


export const WithRef = () => {
  const inputRef = React.useRef<any>(null);
  const [str, setStr] = React.useState<string>('');
  const [Istate, setIstate] = React.useState<boolean>(true);
  const handleClick = () => {
    Istate ? inputRef.current.focus() : inputRef.current.blur();
    setIstate(!Istate);
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStr(e.target.value);
  }
  return (
    <div className='flex gap-4 flex-col'>
      <Input ref={inputRef} variant="primary" size="lg" onChange={handleChange} addonLeft={<IconHome />} />
      <div><Button onClick={handleClick} type="primary">点击改变聚焦状态</Button></div>
      <p>输入框的值为{str}</p>
    </div>
  )
}

export const WithJsx = () => {
  return (
    <div className='flex gap-4 flex-col'>
      <Input variant="primary" size="lg" addonLeft={<IconHome />} addonRight={<IconRight />} />
    </div>
  )
}