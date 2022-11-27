import { ComponentProps } from 'react'
import styled from 'styled-components'
import { colors, radii, space } from '@ignite-ui/tokens'

export const Box = styled.div`
  padding: ${space['4']};
  border-radius: ${radii.md};
  background-color: ${colors.gray800};
  border: 1px solid ${colors.gray600};
`

export interface BoxProps extends ComponentProps<typeof Box> {}
