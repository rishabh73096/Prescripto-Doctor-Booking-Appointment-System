import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppConetextProvider from './Context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppConetextProvider>
    <App />
    </AppConetextProvider>
  </BrowserRouter>,
)