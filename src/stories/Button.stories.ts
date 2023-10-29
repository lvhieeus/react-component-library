import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@lib/components';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { description: 'Component content' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    children: 'Click me',
    variant: 'contained',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Click me',
    variant: 'outlined',
  },
};

export const DisabledContained: Story = {
  args: {
    children: 'Click me',
    disabled: true,
  },
};
DisabledContained.storyName ='Disabled (Contained variant)';

export const DisabledOutlined: Story = {
  args: {
    children: 'Click me',
    variant: 'outlined',
    disabled: true,
  },
};
DisabledOutlined.storyName ='Disabled (Outlined variant)';
