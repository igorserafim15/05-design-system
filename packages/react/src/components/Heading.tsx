import { ComponentProps } from 'react'
import styled, { css } from 'styled-components'
import { colors, fonts, fontSizes, lineHeights } from '@ignite-ui/tokens'

interface Props {
  size?: 'sm' | 'md' | 'lg' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
}

const variants = {
  sm: fontSizes.xl,
  md: fontSizes['2xl'],
  lg: fontSizes['4xl'],
  '2xl': fontSizes['5xl'],
  '3xl': fontSizes['6xl'],
  '4xl': fontSizes['7xl'],
  '5xl': fontSizes['8xl'],
  '6xl': fontSizes['9xl'],
}

export const Heading = styled.h2<Props>`
  font-family: ${fonts.default};
  line-height: ${lineHeights.shorter};
  margin: 0;
  color: ${colors.gray100};
  ${({ size }) => css`
    font-size: ${size ? variants[size] : fontSizes.md};
  `}
`

export interface HeadingProps extends ComponentProps<typeof Heading> {}
