import React, { useRef } from "react";
import { FocusScope, mergeProps, OverlayContainer, useDialog, useModal, useOverlay } from "react-aria";


interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLElement>;
  className?: string;
  children?: React.ReactNode;
}

const Drawer = (props: DrawerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { overlayProps, underlayProps } = useOverlay(props, ref);
  const { modalProps } = useModal();
  const { dialogProps, titleProps } = useDialog(props as any, ref);

  return (
    <OverlayContainer>
      {/* A semi-transparent backdrop that covers the screen when the drawer is open */}
      <div
        {...underlayProps}
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={props.onClose}
      />
      {/* A drawer component that slides in from the left */}
      <div
        {...mergeProps(overlayProps, dialogProps, modalProps)}
        ref={ref}
        className={`fixed right-0 top-0 h-full transform transition duration-300 ${
          props.isOpen ? "translate-x-0" : "translate-x-full"
        } ${props.className}`}
      >
        {/* The rest of the drawer content */}
        <FocusScope contain restoreFocus autoFocus>
          <div className="p-4">
            <h1 {...titleProps} className="text-xl font-bold">
              Drawer Title
            </h1>
            <p>This is a drawer component made with tailwindcss react-aria typescript.</p>
            <ul className="list-disc list-inside">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
        </FocusScope>
      </div>
    </OverlayContainer>
  );
};

export default Drawer;