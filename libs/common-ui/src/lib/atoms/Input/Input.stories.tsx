import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
  title: 'UI/Atoms/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    label: 'Default',
  },
};

export const Primary: Story = {
  args: {
    type: 'email',
    label: 'Email',
  },
};

export const Secondary: Story = {
  args: {
    type: 'checkbox',
    label: 'Checkbox',
  },
};
