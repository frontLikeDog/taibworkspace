import { useState } from 'react';
import TooltipButton from './TooltipButton';

export default {
  title: 'Beta/Tooltip',
};

export const Simple = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <p>Tooltip is {isOpen ? 'showing' : 'not showing'}</p>
      <TooltipButton
        tooltip="Notifications"
        isOpen={isOpen}
        onOpenChange={setOpen}
      >
        <span role="img" aria-label="horn">
          {' '}
          📣
        </span>
      </TooltipButton>
      <p>第一个会有明显延迟1500s左右，往后延迟感降低</p>
      <TooltipButton placement="top" tooltip="Burn CD">
        <span role="img" aria-label="CD">
          💿
        </span>
      </TooltipButton>
      <TooltipButton tooltip="Burn CD">
        <span role="img" aria-label="Edit">
          ✏️
        </span>
      </TooltipButton>
      <TooltipButton tooltip="Burn CD">
        <span role="img" aria-label="Delete">
          🚮
        </span>
      </TooltipButton>
    </div>
  );
};

export const WithTrigger = () => (
  <TooltipButton tooltip="Burn CD" trigger="focus">
    <span role="img" aria-label="CD">
      💿
    </span>
  </TooltipButton>
);

export const position = () => (
  <div className="flex flex-col items-center justify-center space-y-12 mt-14">
    <div>
      top
      <TooltipButton placement="top" tooltip="Burn CD">
        <span role="img" aria-label="CD">
          💿
        </span>
      </TooltipButton>
    </div>
    <div>
      right
      <TooltipButton placement="right" tooltip="edit">
        <span role="img" aria-label="Edit">
          ✏️
        </span>
      </TooltipButton>
    </div>
    <div>
      bottom
      <TooltipButton placement="bottom" tooltip="delete">
        <span role="img" aria-label="Delete">
          🚮
        </span>
      </TooltipButton>
    </div>
    <div>
      left
      <TooltipButton placement="left" tooltip="horn">
        <span role="img" aria-label="horn">
          📣
        </span>
      </TooltipButton>
    </div>
  </div>
);
