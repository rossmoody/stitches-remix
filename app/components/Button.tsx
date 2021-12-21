import { styled, darkTheme } from '../../stitches.config'

export const Button = styled('button', {
  padding: '24px',
  color: '$bgBody',
  backgroundColor: '$text',
  [`${darkTheme}`]: {},
})

// Need to pass dark theme into Button component or the dark
// theme variables aren't compiled and added to :root. This isn't
// normally necessary.
