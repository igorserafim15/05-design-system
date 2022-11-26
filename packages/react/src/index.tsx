import { colors, fonts, radii, space } from '@ignite-ui/tokens'
import styled from 'styled-components'

export const Button = styled.button`
  font-family: ${fonts.default};
  background-color: ${colors.ignite500};
  border-radius: ${radii.md};
  padding: ${space['4']} ${space['6']};
  color: ${colors.white};
  border: none;
  font-weight: bold;
`
