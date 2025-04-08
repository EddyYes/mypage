import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeContext.jsx'
import App from './App.jsx'
import './i18n.js' // Импорт i18n.js для инициализации-стандартн.вариант
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
)
