import { useOverlayPosition, useOverlayTrigger } from '@react-aria/overlays';
import { useOverlayTriggerState } from 'react-stately';
import type { OverlayTriggerProps } from 'react-stately';
import type {Placement} from './popover'
import { cloneElement, useRef } from 'react';
import Popover from './popover';
import { Button } from './Button';

interface PopoverTriggerProps extends OverlayTriggerProps {
  children: React.ReactElement;
  label?: string;
  placement?: Placement;
  offset?: number;
  crossOffset?: number;
}

function PopoverTrigger({ label, children,placement, ...props }: PopoverTriggerProps) {
  const ref = useRef<any>();
  const state = useOverlayTriggerState(props);

  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
    ref
  );


  return (
    <div className=''>
      <Button {...triggerProps} buttonRef={ref}>
        {label}
      </Button>

      {state.isOpen && (
        <Popover {...props} triggerRef={ref} placement={placement} className={``} state={state}>
          {cloneElement(children, overlayProps)}
        </Popover>
      )}
    </div>
  );
}

export default PopoverTrigger;
