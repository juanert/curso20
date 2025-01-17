import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import "./resources/css/output.css"
import Test from './pages/Test'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Test />
  </StrictMode>
)
