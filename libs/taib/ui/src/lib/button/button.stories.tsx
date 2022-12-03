import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './button';
import { IconHome, IconLoader } from '@longstupay/taib-ui';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'General/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

//create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Simple = Template.bind({});
Simple.args = {
  buttonText: 'Button',
};
Simple.storyName = 'Pure Style';

export const WithStyle = Template.bind({});
WithStyle.args = {
  buttonText: 'Button',
  style: { backgroundColor: 'red', color: 'white',border:'none' },
}
WithStyle.storyName = 'With Styles';

export const Color = Template.bind({});
Color.args = {
  buttonText: 'Button',
  type: 'primary',
};
Color.storyName = 'Color';

export const IconButton = Template.bind({});
IconButton.args = {
  buttonText: 'Home',
  type: 'success',
  icon: <IconHome />
}
IconButton.storyName = 'With Icon';

export const OnlyICon = Template.bind({});
OnlyICon.args = {
  onlyIcon:true,
  type: 'primary',
  icon: <IconHome />
}
OnlyICon.storyName = 'With Only Icon';

export const LoaderBtn = Template.bind({});
LoaderBtn.args = {
  isLoader: true,
  onlyIcon: true,
  type: 'primary',
  icon: <IconLoader />
}
LoaderBtn.storyName = 'With Only Loading';

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  type: 'primary',
  isBtnRight: true,
  buttonText: 'Button Text',
}

export const WithBlock = Template.bind({});
WithBlock.args = {
  block: true,
  buttonText: 'Button Text',
  type: "info",
}

export const WithCustomTag = Template.bind({});
WithCustomTag.args = {
  as: 'span',
  buttonText: 'Button Text',
  type: "dark"
}

export const WithRef = () => {
  const buttonRef = useRef<any>(null)
  const clickHandle = () => {
    console.log(buttonRef.current)
    buttonRef.current.clickFn(); //父组件调用子组件内部 addCount函数
  }
  return (
    <div className='bg-primary' onClick={clickHandle}>点击绿布改变子组件的值
        <div>
          <Button ref={buttonRef} isCount={true} type="link" />
        </div>
      </div>
  )
}