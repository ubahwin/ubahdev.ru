import '@styles/Article.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import highlight from 'highlight.js'
import { baseUrl } from 'marked-base-url'
import { gfmHeadingId } from 'marked-gfm-heading-id'
import { Helmet } from 'react-helmet-async'

const Article = () => {
  const { title } = useParams<string>()

  const ref = useRef<HTMLElement>(document.createElement('article'))

  const [articleTitle, setArticleTitle] = useState<string>('')

  const marked = new Marked(
    markedHighlight({
      langPrefix: 'hljs language-',
      highlight(code, lang) {
        const language = highlight.getLanguage(lang) ? lang : 'plaintext'
        return highlight.highlight(code, { language }).value
      }
    }),
    gfmHeadingId(),
    baseUrl(`https://raw.githubusercontent.com/ubahwin/articles/main/${title}/`)
  )

  useEffect(() => {
    loadArticle()
  }, [])

  const loadArticle = () => {
    axios.get<string>(`https://raw.githubusercontent.com/ubahwin/articles/main/${title}/README.md`)
      .then(({ data }) => {
        const parsedArticle = parseArticle(data) as string
        ref.current.innerHTML = parsedArticle

        const extractedTitle = extractTitle(parsedArticle)
        setArticleTitle(extractedTitle)
      })
  }

  const extractTitle = (html: string) => {
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = html

    const h1 = tempDiv.querySelector('h1')
    return h1 ? h1.textContent || 'No Title' : 'No Title'
  }

  const parseArticle = (md: string) => {
    return marked.parse(md)
  }

  return (
    <>
      <Helmet>
        <title>{articleTitle}</title>
        <meta property="og:title" content={articleTitle}/>
        <meta property="og:image" content={`https://raw.githubusercontent.com/ubahwin/articles/main/${title}/thumbnail.jpg`}/>
      </Helmet>

      <h2>Содержание</h2>
      <article ref={ref}></article>
    </>
  )
}

export default Article
