import { DismissButton, Overlay, usePopover } from '@react-aria/overlays';
import type { AriaPopoverProps } from '@react-aria/overlays';
import { useMemo, useRef } from 'react';
import type { OverlayTriggerState } from 'react-stately';

export type Placement =
  | 'bottom'
  | 'bottom left'
  | 'bottom right'
  | 'bottom start'
  | 'bottom end'
  | 'top'
  | 'top left'
  | 'top right'
  | 'top start'
  | 'top end'
  | 'left'
  | 'left top'
  | 'left bottom'
  | 'start'
  | 'start top'
  | 'start bottom'
  | 'right'
  | 'right top'
  | 'right bottom'
  | 'end'
  | 'end top'
  | 'end bottom';

/* eslint-disable-next-line */
export interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  children?: React.ReactNode;
  state: OverlayTriggerState;
  offset?: number;
  className?: string;
  crossOffset?: number;
}

function Popover({
  children,
  state,
  offset = 8,
  className: Cls,
  triggerRef,
  placement: plcmProps,
  ...props
}: PopoverProps) {
  const popoverRef = useRef(null);

  const { popoverProps, underlayProps, arrowProps, placement } = usePopover(
    {
      ...props,
      offset,
      popoverRef: popoverRef,
      triggerRef,
      placement: plcmProps,
    },
    state
  );

  const placeCls = useMemo(() => {
    const bottomCls =
      ' left-1/2 transform -translate-x-1/2 -translate-y-full rotate-180';
    const leftCls = ' left-full transform -translate-y-1/2 -rotate-90';
    const rightCls = ' right-full transform -translate-y-1/2 rotate-90';
    const topCls = ' top-full transform -translate-x-1/2';

    switch (placement) {
      case 'bottom':
        return bottomCls;
      case 'left':
        return leftCls;
      case 'right':
        return rightCls;
      case 'top':
        return topCls;
      default:
        return bottomCls;
    }
  }, [placement]);

  return (
    <Overlay>
      <div {...underlayProps} className={`bg-gray-700 opacity-50 ` + Cls} />
      <div
        {...popoverProps}
        ref={popoverRef}
        className="bg-warning border border-solid border-gray-300 shadow-md rounded-md"
      >
        <svg
          {...arrowProps}
          data-placement={placement}
          className={
            `absolute w-4 h-4 fill-current text-warning stroke-gray-400` +
            placeCls
          }
          viewBox="0 0 12 12"
        >
          <path d="M0 0,L6 6,L12 0" />
        </svg>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}

export default Popover;
