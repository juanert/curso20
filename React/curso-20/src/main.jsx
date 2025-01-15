import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Button from './components/general/Button'
import "./resources/css/output.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Hola Mundo</h1>
    <Button texto="Hola Mundo" />
    <Button></Button>
  </StrictMode>
)
