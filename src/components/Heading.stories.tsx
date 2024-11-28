import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '../components/Heading'

export default {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Heading with H1',
  },
  argTypes: {
    fontWheight: {
      control: {
        type: 'inline-radio',
        options: ['bold', 'semiBold'],
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<HeadingProps>

export const Title: StoryObj<HeadingProps> = {
  args: {
    color: 'text-gray-100',
    fontSize: 'desktop',
    fontWheight: 'font-bold'
  },
}

export const TitleMobile: StoryObj<HeadingProps> = {
  args: {
    color: 'text-gray-100',
    fontSize: 'mobile',
    fontWheight: 'font-bold'
  },
}

export const Subtitle: StoryObj<HeadingProps> = {
  args: {
    color: 'text-white-200',
    fontSize: 'subtitle',
    fontWheight: 'font-normal'
  },
}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Texto simples</h1>
    )
  },
}
