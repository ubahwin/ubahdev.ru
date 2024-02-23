import {Link} from 'react-router-dom'
import React from 'react'

const ArticleCell = (props: { article: ArticlesListItem }) => {
  return (
    <div className="article-cell">
      <Link to={`${props.article.url}`}>
        <div className="article-cell-img">
          <img src={`https://raw.githubusercontent.com/ubahwin/articles/main/${props.article.url}/thumbnail.jpg`}/>
        </div>
        <div className="article-cell-title">
          <a>{props.article.title}</a>
        </div>
      </Link>
    </div>
  )
}

export default ArticleCell
