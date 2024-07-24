import React from 'react';
import ReactDOM from 'react-dom/client'
import '@styles/main.scss'
import App from '@/App.tsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <App/>
  </HelmetProvider>
)
