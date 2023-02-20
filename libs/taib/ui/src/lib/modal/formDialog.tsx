import { AriaDialogProps, useDialog } from "@react-aria/dialog";
import { useRef } from "react";
import { Button } from "./Button";


 interface IFormDialogProps extends AriaDialogProps {
    children?: React.ReactNode;
    title: string;
    className?: string;
    felxDirec?: 'row' | 'column';
    onClose: () => void;
}


export function FormDialog(props: IFormDialogProps) {
    const ref = useRef(null);
    const {felxDirec,children,onClose:close,...rest} = props;

    const { dialogProps, titleProps } = useDialog({
        ...rest,
    },ref);

    return (
        <div {...dialogProps} ref={ref} style={{ padding: 30 }} className=" outline-double">
          <h3 {...titleProps} style={{ marginTop: 0 }}>
            {props.title}
          </h3>
          <form className="flex flex-col space-y-2">
            <label htmlFor="first-name" className="font-medium text-gray-700">
              First Name:
            </label>
            <input
              id="first-name"
              type="text"
              className="form-input block w-full rounded-md shadow-sm focus:ring-dark focus:border-dark sm:text-sm border-gray-300"
            />
            <label htmlFor="last-name" className="font-medium text-gray-700">
              Last Name:
            </label>
            <input
              id="last-name"
              type="text"
              className="form-input block w-full rounded-md shadow-sm focus:ring-dark focus:border-dark sm:text-sm border-gray-300"
            />
            <Button
               onPress={close}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </Button>
          </form>
        </div>
      );

}
