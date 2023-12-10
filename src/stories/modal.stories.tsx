import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Modal, Button, CardHeader, CardBody, CardFooter } from '@lib/components';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

function DefaultStoryRenderer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <CardHeader css={{ fontSize: '1.25rem' }}>Default Modal</CardHeader>
        <CardBody>Click the X icon or OK to close this modal</CardBody>
        <CardFooter css={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={() => setIsOpen(false)}>OK</Button>
        </CardFooter>
      </Modal>
    </>
  );
}
export const Default: Story = {
  render: () => <DefaultStoryRenderer />,
};

function DismissibleStoryRenderer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} isDismissible isClosable={false}>
        <CardHeader css={{ fontSize: '1.25rem' }}>Dismissible Modal</CardHeader>
        <CardBody>Click outside this modal to close it</CardBody>
      </Modal>
    </>
  );
}
export const Dismissible: Story = {
  render: () => <DismissibleStoryRenderer />,
};
