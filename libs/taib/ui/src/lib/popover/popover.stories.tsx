import { useOverlayTrigger, usePopover } from "@react-aria/overlays";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { useOverlayTriggerState } from "react-stately";
import Popover from "./popover";


export default {
    title: 'Beta/Popover',
    component: Popover,
} as ComponentMeta<typeof Popover>;

const Template:ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Simple = Template.bind({});
Simple.args = {
}

// const Test = () => {
//     const state = useOverlayTriggerState({});
//     const {popoverProps} = usePopover({} as any, state);
  
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <button {...triggerProps} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Open popover
//         </button>
//         {state.isOpen && (
//           <div {...popoverProps} className="absolute bg-white shadow-lg p-4 rounded border border-gray-300">
//             <p>This is a popover.</p>
//           </div>
//         )}
//       </div>
// }

// function PopoverTrigger({ label, children, ...props }:any) {
//     let ref = React.useRef();
//     let state = useOverlayTriggerState(props);
//     let { triggerProps, overlayProps } = useOverlayTrigger(
//       { type: 'dialog' },
//       state,
//       ref
//     );
  
//     return (
//       <>
//         <Button {...triggerProps} buttonRef={ref}>{label}</Button>
//         {state.isOpen &&
//           (
//             <Popover {...props} triggerRef={ref} state={state}>
//               {React.cloneElement(children, overlayProps)}
//             </Popover>
//           )}
//       </>
//     );
//   }