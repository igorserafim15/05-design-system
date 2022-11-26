import { Button } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
} as Meta

export const Primary: StoryObj = {
  args: {
    children: 'Primario',
  },
}

export const Secondary: StoryObj = {
  args: {
    children: 'Secundário',
  },
}
