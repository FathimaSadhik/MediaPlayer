import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './bootstrap.min (1).css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* app nne browserrouter nte child akanm engille 
    path define cheyaan pattollu */}
    <App />
    </BrowserRouter>
    
  </StrictMode>,
)
