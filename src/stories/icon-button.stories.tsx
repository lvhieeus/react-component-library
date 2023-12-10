import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '@lib/components';
import { CloseIcon } from '@lib/icons';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { description: 'Icon' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <CloseIcon />,
  },
};

export const Disabled: Story = {
  args: {
    children: <CloseIcon />,
    disabled: true,
  },
};
