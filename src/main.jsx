import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Globals from './Globals.style.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Globals />
  </React.StrictMode>,
)
