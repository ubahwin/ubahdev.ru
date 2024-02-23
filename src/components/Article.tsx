import '@styles/Article.scss'
import {useParams} from 'react-router-dom'
import {useEffect, useRef} from 'react'
import axios from 'axios'
import {Marked} from 'marked'
import {markedHighlight} from 'marked-highlight'
import highlight from 'highlight.js'
import {baseUrl} from 'marked-base-url'

const Article = () => {
  const {title} = useParams<string>()

  const ref = useRef<HTMLElement>(document.createElement('article'))

  const marked = new Marked(
    markedHighlight({
      langPrefix: 'hljs language-',
      highlight(code, lang, info) {
        const language = highlight.getLanguage(lang) ? lang : 'plaintext'
        return highlight.highlight(code, {language}).value
      }
    })
  )

  useEffect(() => {
    loadArticle()
  }, [])

  const loadArticle = () => {
    axios.get<string>(`https://raw.githubusercontent.com/ubahwin/articles/main/${title}/README.md`)
      .then(({data}) => {
        ref.current.innerHTML = parseArticle(data) as string
      })
  }

  const parseArticle = (md: string) => {
    marked.use(baseUrl(`https://raw.githubusercontent.com/ubahwin/articles/main/${title}/`))
    return marked.parse(md)
  }

  return (
    <>
      <h2>Содержание</h2>
      <article ref={ref}></article>
    </>
  )
}

export default Article
