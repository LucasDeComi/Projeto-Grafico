import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ElementsProvider } from "./context/ElementsContext.jsx"
import { ColorsProvider } from "./context/ColorsContext.jsx"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorsProvider>
      <ElementsProvider>
        <App />
      </ElementsProvider>
    </ColorsProvider>
  </StrictMode>,
)
