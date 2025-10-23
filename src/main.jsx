import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from "../src/context/LanguageContext.jsx";
import { ThemeProvider } from '../src/context/ThemeContext.jsx';
import { ScrollProvider } from "./context/ScrollContext"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ScrollProvider>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
    </ScrollProvider>
  </StrictMode>,
)
