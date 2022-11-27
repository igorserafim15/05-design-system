import { ComponentProps } from 'react'
import styled, { css } from 'styled-components'
import { colors, fonts, fontSizes, lineHeights } from '@ignite-ui/tokens'

interface Props {
  size?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
}

const variants = {
  xxs: fontSizes.xxs,
  xs: fontSizes.xs,
  sm: fontSizes.sm,
  md: fontSizes.md,
  lg: fontSizes.lg,
  xl: fontSizes.xl,
  '2xl': fontSizes['2xl'],
  '4xl': fontSizes['4xl'],
  '5xl': fontSizes['5xl'],
  '6xl': fontSizes['6xl'],
  '7xl': fontSizes['7xl'],
  '8xl': fontSizes['8xl'],
  '9xl': fontSizes['9xl'],
}

export const Text = styled.p<Props>`
  font-family: ${fonts.default};
  line-height: ${lineHeights.base};
  margin: 0;
  color: ${colors.gray100};
  ${({ size }) => css`
    font-size: ${size ? variants[size] : fontSizes.md};
  `}
`

export interface TextProps extends ComponentProps<typeof Text> {}
