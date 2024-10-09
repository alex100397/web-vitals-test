import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './web-vitals.js'
import MainRoutes from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <MainRoutes />
  </StrictMode>,
)
