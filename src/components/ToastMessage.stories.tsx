import { Meta, StoryObj } from '@storybook/react';
import { ToastMessage, ToastMessageProps } from '../components/ToastMessage';

export default {
  title: 'Components/ToastMessage',
  component: ToastMessage,
  argTypes: {
    title: {
      control: { type: 'text' }, 
      description: 'Texto do título exibido no toast',
    },
    description: {
      control: { type: 'text' }, 
      description: 'Texto opcional para a descrição do toast',
    },
  },
}  as Meta<ToastMessageProps>;


export const Title: StoryObj<ToastMessageProps> = {
    args: {
        title: 'Título do Toast',
        description: 'Descrição opcional do toast.',
    },
}

export const WithoutDescription: StoryObj<ToastMessageProps> = {
    args: {
        title: 'Título sem descrição',
    },
}
