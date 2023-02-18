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
        <FormDialog title="Please Enter your name">
          <form className="flex flex-col space-y-2">
            <label htmlFor="first-name" className="font-medium text-gray-700">
              First Name:
            </label>
            <input
              id="first-name"
              type="text"
              className="form-input block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm border-gray-300"
            />
            <label htmlFor="last-name" className="font-medium text-gray-700">
              Last Name:
            </label>
            <input
              id="last-name"
              type="text"
              className="form-input block w-full rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm border-gray-300"
            />
            <Button
               onPress={close}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </Button>
          </form>
        </FormDialog>
      )}
    </ModalTrigger>
  );
}
