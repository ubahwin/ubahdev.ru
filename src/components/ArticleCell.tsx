import {Link} from 'react-router-dom'
import React, {BaseSyntheticEvent, EventHandler, SyntheticEvent, useEffect} from 'react'
import '@styles/ArticleCell.scss'
import fallbackThumbnail from '@assets/fallback-thumbnail.jpg?url'
import articles from '@pages/Articles.tsx'

const ArticleCell = (props: { article: ArticlesListItem }) => {
  return (
    <div className="article-cell">
      <Link to={`${props.article.url}`}>
        <div className="article-cell-img">
          <img
            src={`https://raw.githubusercontent.com/ubahwin/articles/main/${props.article.url}/thumbnail.jpg`}
            alt={`Thumbnail for "${props.article.title}"`}
            onError={(e: BaseSyntheticEvent) => {(e.target as HTMLImageElement).src = fallbackThumbnail}}
          />
        </div>
        <div className="article-cell-title">
          <p>{props.article.title}</p>
        </div>
      </Link>
    </div>
  )
}

export default ArticleCell
