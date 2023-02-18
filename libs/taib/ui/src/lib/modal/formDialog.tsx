import { AriaDialogProps, useDialog } from "@react-aria/dialog";
import { useRef } from "react";


 interface IFormDialogProps extends AriaDialogProps {
    children: React.ReactNode;
    title: string;
    className?: string;
    felxDirec?: 'row' | 'column';
}


export function FormDialog(props: IFormDialogProps) {
    const ref = useRef(null);
    const {felxDirec,children,...rest} = props;

    const { dialogProps, titleProps } = useDialog({
        ...rest,
    },ref);

    return (
        <div {...dialogProps} ref={ref} style={{ padding: 30 }} className="border border-gray-400">
          <h3 {...titleProps} style={{ marginTop: 0 }}>
            {props.title}
          </h3>
          {children}
        </div>
      );

}
