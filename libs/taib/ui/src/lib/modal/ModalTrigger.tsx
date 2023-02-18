import { useOverlayTriggerState } from 'react-stately';
import type { OverlayTriggerProps } from 'react-stately';
import { useOverlayTrigger } from '@react-aria/overlays';
import React from 'react';
import { Button } from './Button';
import Modal from './modal';

export interface IModalTriggerProps extends OverlayTriggerProps {
  children: (close: () => void) => React.ReactElement;
  label?: string;
}

export function ModalTrigger(props: IModalTriggerProps) {
    const { children } = props;
  const state = useOverlayTriggerState(props);
  const ref = React.useRef(null);

  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
    ref
  );

  return (
    <>
      <Button {...triggerProps}>Open Form Dialog</Button>
      {state.isOpen &&
        (
          <Modal state={state}>
             {React.cloneElement(children(state.close), overlayProps)}
          </Modal>
        )}
    </>
  );
}
