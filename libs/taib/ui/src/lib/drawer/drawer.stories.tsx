import { OverlayProvider } from '@react-aria/overlays';
import { useButton } from '@react-aria/button';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useRef, useState } from 'react';
// import { OverlayProvider, useButton } from 'react-aria';
import Drawer from './drawer';

export default {
  title: 'Beta/Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Default = () => {
  // State for whether the drawer is open
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // A ref for the button element that opens the drawer
  const triggerRef = useRef<HTMLButtonElement>(null);

  // A function to toggle the drawer state
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  // A hook to handle the button interactions and accessibility features
  const { buttonProps } = useButton(
    {
      onPress: toggleDrawer,
    },
    triggerRef
  );

  return (
    <>
      {/* A button to open the drawer */}
      {isDrawerOpen ? (
        <OverlayProvider>
          <div className="app">
            {/* A drawer component that uses tailwindcss react-aria typescript */}
            <Drawer
              isOpen={isDrawerOpen}
              onClose={toggleDrawer}
              triggerRef={triggerRef}
              className="w-72 h-full bg-white shadow-lg"
            >
              {/* The rest of the drawer content */}
            </Drawer>
          </div>
        </OverlayProvider>
      ) : (
        <button
          {...buttonProps}
          ref={triggerRef}
          className="absolute top-2.5 left-2.5 px-3 py-2 rounded-full bg-primary"
        >
          Open Drawer
        </button>
      )}
    </>
  );
};
