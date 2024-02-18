import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '@pages/About.tsx'
import Articles from '@pages/Articles.tsx'
import Header from '@components/Header.tsx'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <div className="wrapper">
        <div className="content-container">
            <Routes>
              <Route
                path="/"
                element={<About/>}
              />
              <Route
                path="/articles"
                element={<Articles/>}
              />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
      <footer>
        <span className="copyright">&copy; Ivan Vdovin, 2024</span>
      </footer>
    </>
  )
}

export default App
