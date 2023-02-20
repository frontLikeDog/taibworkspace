import type { AriaDialogProps } from '@react-aria/dialog';
import React from 'react';
import { Button } from './Button';
import { useOverlayTriggerState } from 'react-stately';
import { Modal } from './modal';
import { ComponentMeta } from '@storybook/react';
import { AlertDialog } from './AlertDialog';
import { FormDialog } from './formDialog';
import { ModalTrigger } from './ModalTrigger';

export default {
  title: 'Beta/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

interface AlertDialogProps extends AriaDialogProps {
  children: React.ReactNode;
  title: string;
  variant?: 'default' | 'destructive';
  confirmLabel: string;
  onClose: () => void;
}

export function AlertDialogComponent(props: AlertDialogProps) {
  const state = useOverlayTriggerState({});
  return (
    <div className="flex flex-col items-center max-w-lg mx-auto">
      <Button variant="cta" onPress={state.open}>
        删除
      </Button>
      <Modal state={state}>
        <AlertDialog
          title="Delete folder"
          confirmLabel="Delete"
          variant="destructive"
          onClose={state.close}
        >
          Are you sure you want to delete "Documents"? All contents will be
          perminately destroyed.
        </AlertDialog>
      </Modal>
    </div>
  );
}

export function FormDialogComponet() {
  return (
    <ModalTrigger label="Open Form Dialog">
      {(close) => (
          <FormDialog title='Please Enter Your Name' onClose={close} />
      )}
    </ModalTrigger>
  );
}
 