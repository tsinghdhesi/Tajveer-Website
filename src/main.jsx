import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/global.css'
import './styles/animations.css'

// BrowserRouter included for future page routing; current nav is anchor-based.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Tajveer-Website">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
