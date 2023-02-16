import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useDisclosesure } from '../hooks';
import { IconWarning } from '../icons';
import Alert from './alert';

export default {
  title: 'Beta/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <div className="max-w-4xl">
    {' '}
    <Alert {...args} />
  </div>
);

export const Simple = Template.bind({});
Simple.args = {
  label: 'Data uploaded to the server. Fire on!',
};

export const Color = Template.bind({});
Color.args = {
  color: 'warning',
};

export const Icon = () => (
  <div className="max-w-4xl">
    <Alert
      icon={<IconWarning className="mr-2" />}
      label={
        'Sunt deserunt eiusmod cupidatat nostrud adipisicing culpa elit minim aute amet adipisicing non sint.'
      }
    />
  </div>
);

export const WithClose = () => {
  const {
    isOpen: isVisable,
    onClose,
    onOpen,
  } = useDisclosesure({ isOpen: true });

  return isVisable ? (
    <div className="">
      <Alert
        isClose
        icon={<IconWarning className="mr-2" />}
        label={
          'Sunt deserunt eiusmod cupidatat nostrud adipisicing culpa elit minim aute amet adipisicing non sint.'
        }
        onCloseFn={onClose}
      />
    </div>
  ) : (
    <div className='flex'>
        <button onClick={onOpen} className="px-2 py-3 bg-primary rounded-lg">Open</button>
    </div>
  );
};
