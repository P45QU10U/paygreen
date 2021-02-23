import React from 'react'

import { PGThemeProvider, ThemeDefault } from '@paygreen/paygreen-ui'

import './src/styles/GlobalStyles.js'

export function wrapPageElement({ element, props }) {
  return (
    <PGThemeProvider theme={ThemeDefault} {...props}>
      {element}
    </PGThemeProvider>
  )
}

// export function wrapRootElement({ element }) {
// }
