import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Botão Simples',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonProps>;

export const DefaultDesktop: StoryObj<ButtonProps> = {
  args: {
    buttonType: 'default',
    size: 'desktop',
  },
};

export const DefaultMobile: StoryObj<ButtonProps> = {
  args: {
    buttonType: 'default',
    size: 'mobile',
  },
};

export const OutlineDesktop: StoryObj<ButtonProps> = {
  args: {
    buttonType: 'outline',
    size: 'desktop',
  },
};

export const OutlineMobile: StoryObj<ButtonProps> = {
  args: {
    buttonType: 'outline',
    size: 'mobile',
  },
};

export const CustomComponent: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: (
      <button>Button with button</button>
    )
  },
}