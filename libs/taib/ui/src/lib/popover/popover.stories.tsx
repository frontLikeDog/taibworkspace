import { ComponentMeta } from '@storybook/react';
import Popover from './popover';
import PopoverTrigger from './PopoverTrigger';
import { Dialog } from './Dialog';

export default {
  title: 'Beta/Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

export const Simple = () => (
  <div className="flex flex-col space-y-6 items-center justify-center h-[1800px] bg-gray-200">
    <p className='mt-8'>
      1.能相对于触发元素定位，并自动翻转和调整，能避免与浏览器窗口的边缘重叠
    </p>
    <p>2.进行交互或按下Escape键时，弹出窗口会关闭 </p>
    <p className='my-5'>3.在Popover组件激活时，窗口禁止滚动，以避免无意中重新定位或关闭它。</p>
    <div className="flex flex-1 items-start justify-center space-x-4">
      <PopoverTrigger placement="start" label="⬅️">
        <Dialog>
          In left-to-right, this is on the left. In right-to-left, this is on
          the right.
        </Dialog>
      </PopoverTrigger>
      <PopoverTrigger crossOffset={80} placement="top" label="⬆️">
        <Dialog>This popover is above the button.</Dialog>
      </PopoverTrigger>
      <PopoverTrigger placement="bottom" label="⬇️">
        <Dialog>This popover is below the button.</Dialog>
      </PopoverTrigger>
      <PopoverTrigger placement="end" offset={30} label="➡️">
        <Dialog>
          In left-to-right, this is on the right. In right-to-left, this is on
          the left.
        </Dialog>
      </PopoverTrigger>
    </div>
  </div>
);
