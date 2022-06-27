import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApiDiscordProvider } from './axiosApis/context/apiDiscord'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiDiscordProvider>
      <App />
    </ApiDiscordProvider>
  </React.StrictMode>
)
