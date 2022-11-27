import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typografy/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adip',
    size: 'lg',
    as: 'h2',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
