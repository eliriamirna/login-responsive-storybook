import { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from '../components/Input';

export default {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Escreva seu e-mail',
    type: 'email'
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta<InputProps>;

export const DefaultDesktop: StoryObj<InputProps> = {
  args: {
    inputType: 'active',
    inputSize: 'desktop',
  },
};

export const DefaultMobile: StoryObj<InputProps> = {
  args: {
    inputType: 'active',
    inputSize: 'mobile',
  },
};

export const ErrorDesktop: StoryObj<InputProps> = {
  args: {
    inputType: 'error',
    inputSize: 'desktop',
  },
};

export const ErrorMobile: StoryObj<InputProps> = {
  args: {
    inputType: 'error',
    inputSize: 'mobile',
  },
};

export const SuccessDesktop: StoryObj<InputProps> = {
  args: {
    inputType: 'success',
    inputSize: 'desktop',
  },
};

export const SuccessMobile: StoryObj<InputProps> = {
  args: {
    inputType: 'success',
    inputSize: 'mobile',
  },
};