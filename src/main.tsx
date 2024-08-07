import React from 'react';
import ReactDOM from 'react-dom/client'
import '@styles/main.scss'
import App from '@/App.tsx'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import photo from '@assets/green.jpg'
import favicon from '@assets/favicon.png'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <Helmet prioritizeSeoTags>
      <link rel="icon" type="image/png" sizes="32x32" href={favicon}/>
      {/*<meta property="og:image" content={photo}/>*/}
    </Helmet>

    <App/>
  </HelmetProvider>
)
