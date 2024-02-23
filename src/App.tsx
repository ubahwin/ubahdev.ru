import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import About from '@pages/About.tsx'
import Articles from '@pages/Articles.tsx'
import Header from '@components/Header.tsx'
import Article from '@components/Article.tsx'

const App = () => {
  return (
    <>
      <HashRouter>
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
              // TODO: nesting
              <Route
                path="/articles/:title"
                element={<Article/>}
              >
              </Route>
            </Routes>
          </div>
        </div>
      </HashRouter>
      <footer>
        <span className="copyright">&copy; Ivan Vdovin, 2024</span>
      </footer>
    </>
  )
}

export default App
