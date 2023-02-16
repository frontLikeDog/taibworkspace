import type { AriaDialogProps } from '@react-aria/dialog';
import React from 'react';
import { Button } from './Button';
import { useOverlayTriggerState } from 'react-stately';
import { Modal } from './modal';
import { ComponentMeta } from '@storybook/react';
import { AlertDialog } from './AlertDialog';

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
      {/* prettier-ignore */}
      <p className="mt-8 mb-16 text-gray-600">This sandbox shows an example <strong><code>AlertDialog</code></strong> component built with <a href="https://react-spectrum.adobe.com/react-aria/" rel="noreferrer" target="_blank" className="text-blue-700 underline">React Aria</a> and <a href="http://tailwindcss.com/" rel="noreferrer" target="_blank" className="text-blue-700 underline">Tailwind CSS</a> using the <code>useDialog</code> hook. It also uses <a href="https://reactcommunity.org/react-transition-group/" rel="noreferrer" target="_blank" className="text-blue-700 underline">React Transition Group</a> for CSS animations.</p>
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
