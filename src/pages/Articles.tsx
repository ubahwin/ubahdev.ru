import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ArticleCell from '@components/ArticleCell.tsx'
import '@styles/Articles.scss'

const Articles = () => {
  const [articles, setArticles] = useState<ArticlesListItem[]>([])

  useEffect(() => {
    loadArticles()
  }, [])

  const loadArticles = () => {
    axios.get<string>('https://raw.githubusercontent.com/ubahwin/articles/main/README.md')
      .then(({data}) => {
        parseArticlesTitles(data)
      })
  }

  const parseArticlesTitles = (md: string) => {
    const articlesPattern = /- \[(.+)]\(\.\/(.+)\/README.md\)/g

    const articles = md.matchAll(articlesPattern)

    let result: ArticlesListItem[] = []

    for (let article of articles) {
      result.push({
        url: article[2],
        title: article[1]
      })
    }

    setArticles(result)
  }

  return (
    <>
      <h1>Статьи</h1>
      <div className="articles-container">{
        articles.map((article, idx) => (
          <ArticleCell article={article} key={idx}/>
        ))
      }</div>
    </>
  )
}

export default Articles
