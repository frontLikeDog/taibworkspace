import { useDialog } from "@react-aria/dialog";
import { useRef } from "react";

import type { AriaDialogProps } from "@react-aria/dialog";

/* eslint-disable-next-line */
interface IDialogProps extends AriaDialogProps {
    title?: string;
    children?: React.ReactNode;

}

function Dialog({ title, children, ...props }: IDialogProps) {
  const ref = useRef(null);
  const { dialogProps, titleProps } = useDialog(props, ref);
 
  return (
    <div
      {...dialogProps}
      ref={ref}
      style={{ padding: 5, maxWidth: 200, outline: 'none' }}
    >
      {title &&
        (
          <h3 {...titleProps} style={{ marginTop: 0 }} className="text-primary" >
            {title}
          </h3>
        )}
      {children}
    </div>
  );
}

export { Dialog }