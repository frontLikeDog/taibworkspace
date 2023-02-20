import { useTooltip} from '@react-aria/tooltip';
import { mergeProps } from '@react-aria/utils';

import type { AriaTooltipProps } from '@react-aria/tooltip';
import type { TooltipTriggerState } from "react-stately";
import { useMemo } from 'react';

/* eslint-disable-next-line */
export interface TooltipProps extends AriaTooltipProps {
  children?: React.ReactNode;
  state: TooltipTriggerState;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

export function Tooltip(props: TooltipProps) {

  const { tooltipProps } = useTooltip(props);

  const plcmentCls = useMemo(() => {
    console.log('props.placement', props.placement);
    switch (props.placement) {
      case 'top':
        return ' bottom-full -right-full my-2';
      case 'bottom':
        return ' top-full -right-full my-2';
      case 'left':
        return ' right-full mx-2';
      case 'right':
        return ' left-full mx-2';
      default:
        return ' top-tull -right-full my-2';
    }
  }, [props.placement]);
 
  
  return (
    <span
      // style={{
      //   position: 'absolute',
      //   left: '35px',
      //   // top: '100%',
      //   maxWidth: 150,
      //   // marginTop: '10px',
      //   backgroundColor: 'white',
      //   color: 'black',
      //   padding: '5px',
      //   border: '1px solid gray'
      // }}
      className={`absolute whitespace-nowrap w-auto bg-warning text-black p-2 border border-gray-400` + plcmentCls}
      {...mergeProps(props, tooltipProps)}
    >
      {props.children}
    </span>
  );
}

export default Tooltip;