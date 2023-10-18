import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from '@lib/components';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { description: 'Placeholder' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Default text field',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled text field',
    disabled: true,
  },
};
