import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/global'
import Router from './router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
