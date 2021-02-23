import React from 'react'

import { PGThemeProvider, ThemeDefault } from '@paygreen/paygreen-ui'

import './src/styles/GlobalStyles.js'
import Layout from './src/Components/Layout.js'

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export function wrapRootElement({ element }) {
  return <PGThemeProvider theme={ThemeDefault}>{element}</PGThemeProvider>
}
