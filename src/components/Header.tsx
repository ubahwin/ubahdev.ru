import '@styles/Header.scss'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
        <div className="logo"><a href={`/`}>ubahdev.ru</a></div>
        <div className="header-buttons-list">
          <Link to="articles">Articles</Link>
          <a href="https://t.me/ubahdev" target="_blank">Blog</a>
        </div>
      </header>
    </>
  )
}

export default Header
