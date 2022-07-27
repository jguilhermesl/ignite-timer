import {} from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

import { Button } from './components/Button'

import { GlobalStyle } from './styles/global'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
      {/* <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" /> */}
      <GlobalStyle />
    </ThemeProvider>
  )
}
