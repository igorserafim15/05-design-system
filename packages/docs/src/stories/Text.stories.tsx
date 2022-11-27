import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typografy/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adip',
    size: 'xl',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
