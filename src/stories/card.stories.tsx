import type { Meta, StoryObj } from '@storybook/react';

import { Card, Button, CardHeader, CardBody, CardFooter } from '@lib/components';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Raised: Story = {
  args: {
    children: (
      <>
        {/* css props will be transformed into className before being passed to the component */}
        <CardHeader css={{ fontSize: '1.25rem' }}>Card Component</CardHeader>
        <CardBody>Use the 3 components CardHeader, CardBody and CardFooter to organize the content of the card</CardBody>
        <CardFooter css={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button>OK</Button>
        </CardFooter>
      </>
    ),
    css: {
      width: '400px',
    },
  },
};

export const Outlined: Story = {
  args: {
    children: (
      <>
        <CardHeader css={{ fontSize: '1.25rem' }}>Card Component</CardHeader>
        <CardBody>Use the 3 components CardHeader, CardBody and CardFooter to organize the content of the card</CardBody>
        <CardFooter css={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button>OK</Button>
        </CardFooter>
      </>
    ),
    css: {
      width: '400px',
    },
    variant: 'outlined',
  },
};
