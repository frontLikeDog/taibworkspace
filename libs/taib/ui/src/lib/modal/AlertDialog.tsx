import { AriaDialogProps, useDialog } from "@react-aria/dialog";
import React from "react";
import { Button } from "./Button";



interface AlertDialogProps extends AriaDialogProps {
    children: React.ReactNode;
    title: string;
    variant?: "default" | "destructive";
    confirmLabel: string;
    onClose: () => void;
  }
  
  export function AlertDialog(props: AlertDialogProps) {
    const { children, onClose, confirmLabel } = props;
  
    const ref = React.useRef(null);
    const { dialogProps, titleProps } = useDialog(
      {
        ...props,
        role: "alertdialog"
      },
      ref
    );
  
    return (
      <div {...dialogProps} ref={ref} className="outline-none">
        <h3 {...titleProps} className="text-lg font-medium pb-2">
          {props.title}
        </h3>
        <p className="text-sm text-gray-600">{children}</p>
        <div className="pt-8 flex space-x-3 justify-end">
          <Button onPress={onClose}>Cancel</Button>
          <Button variant={props.variant || "cta"} onPress={onClose}>
            {confirmLabel}
          </Button>
        </div>
      </div>
    );
  }
  
