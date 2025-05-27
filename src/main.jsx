import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Wrapper from './Context/Wrapper.jsx'
import { registerSW } from 'virtual:pwa-register';

registerSW()
createRoot(document.getElementById('root')).render(
  <>
  <Wrapper>
<BrowserRouter>
  <App />
  </BrowserRouter>
  </Wrapper>
  
    
  </>,
)
