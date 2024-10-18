import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globalstyles/index.css'
import './globalstyles/reset.css'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
