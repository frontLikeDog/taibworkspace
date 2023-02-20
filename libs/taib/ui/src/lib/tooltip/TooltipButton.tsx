import { useRef } from "react";
import { useTooltipTriggerState } from "react-stately";
import { useTooltipTrigger } from "@react-aria/tooltip";
import Tooltip from "./tooltip";

import type { TooltipTriggerProps } from "react-stately";

interface ITooltipButtonProps extends TooltipTriggerProps {
    children: React.ReactNode;
    tooltip: React.ReactNode;
    placement?: 'top' | 'bottom' | 'left' | 'right';
}


function TooltipButton(props: ITooltipButtonProps) {
    const state = useTooltipTriggerState(props);
    const ref = useRef(null);
   
    // Get props for the trigger and its tooltip
    const { triggerProps, tooltipProps } = useTooltipTrigger(
      { 
        ...props
    }, state, ref
    );
   
    return (
      <span style={{ position: 'relative' }} className="inline-flex items-center">
        <button
          ref={ref}
          {...triggerProps}
          style={{ fontSize: 18 }}
          onClick={() => alert('Pressed button')}
        >
          {props.children}
        </button>
        {state.isOpen &&
          <Tooltip placement={props.placement} state={state} {...tooltipProps}>{props.tooltip}</Tooltip>}
      </span>
    );
  }

  export default TooltipButton;