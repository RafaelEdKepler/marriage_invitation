import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/global'
import Router from './router'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Router />
    </BrowserRouter>
  )
}

export default App
