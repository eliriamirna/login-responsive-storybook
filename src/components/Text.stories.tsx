import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '../components/Text'

export default {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Text with p',
  },
  argTypes: {
    fontSize: {
      control: {
        type: 'select',
        options: ['text-xs', 'text-sm', 'text-md',],
      },
    },
    fontWheight: {
      control: {
        type: 'inline-radio',
        options: ['font-semibold', 'font-normal'],
      },
    },
    color: {
      control: {
        type: 'inline-radio',
        options: ['green', 'red'],
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {
  args: {
    color: 'text-white-300',
    fontSize: 'text-md',
    fontWheight: 'font-normal'
  },
}

export const TextSmall: StoryObj<TextProps> = {
  args: {
    color: 'text-gray-200',
    fontSize: 'text-sm',
    fontWheight: 'font-semibold'
  },
}

export const TextXSmall: StoryObj<TextProps> = {
  args: {
    color: "text-white-200",
    fontSize: "text-xs",
    fontWheight: 'font-normal'
  },
}

export const TextError: StoryObj<TextProps> = {
  args: {
    color: 'text-red-500',
    fontSize: "text-md",
    fontWheight: 'font-normal'
  },
}

export const TextSuccess: StoryObj<TextProps> = {
  args: {
    color: 'text-green-500',
    fontSize: "text-md",
    fontWheight: 'font-normal'
  },
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Texto simples</p>
    )
  },
}
