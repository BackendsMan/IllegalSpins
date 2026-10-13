import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Spin from './pages/Spin'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Spin />
  </StrictMode>,
)
