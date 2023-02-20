import React, { useState } from "react";
import type { AriaModalOverlayProps } from "@react-aria/overlays";
import { Overlay, useModalOverlay } from "@react-aria/overlays";
import { CSSTransition } from "react-transition-group";
import { OverlayTriggerState } from "react-stately";

interface ModalProps extends AriaModalOverlayProps {
  children: React.ReactNode;
  state: OverlayTriggerState;
}

export function Modal(props: ModalProps) {
  const { children, state } = props;

  const ref = React.useRef(null);
  const { modalProps, underlayProps } = useModalOverlay(props, state, ref);
  const [exited, setExited] = useState(!state.isOpen);

  // Don't render anything if the modal is not open and we're not animating out.
  if (!(state.isOpen || !exited)) {
    return null;
  }

  return (
    // Animate opacity and backdrop blur of underlay
    <Overlay>
      <CSSTransition
        in={state.isOpen}
        appear
        onEntered={() => setExited(false)}
        onExited={() => setExited(true)}
        timeout={{ enter: 0, exit: 250 }}
        classNames={{
          enter: "opacity-0",
          enterDone: "opacity-1 backdrop-blur-md transition ease-in",
          exit: "opacity-0 backdrop-blur-none transition ease-out"
        }}
      >
        <div
          className="fixed inset-0 flex justify-center z-100 bg-slate-400/20"
          {...underlayProps}
        >
          {/* Animate modal slightly upward when entering, and downward when exiting. */}
          <CSSTransition
            in={state.isOpen}
            appear
            nodeRef={ref}
            timeout={{ enter: 0, exit: 250 }}
            classNames={{
              appear: "translate-y-2",
              appearDone: "translate-y-0 transition ease-in",
              exit: "translate-y-2 transition ease-out"
            }}
          >
            <div
              {...modalProps}
              ref={ref}
              className="p-6 max-w-sm bg-white/90 border border-gray-300 shadow-2xl rounded-lg z-1 top-[10%] h-fit max-h-[80vh] relative focus:outline-none"
            >
              {children}
            </div>
          </CSSTransition>
        </div>
      </CSSTransition>
    </Overlay>
  );
}

export default Modal;