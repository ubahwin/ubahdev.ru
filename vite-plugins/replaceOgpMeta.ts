import { Plugin } from 'vite'

interface ReplaceHtmlPluginOptions {
  title: string
  description: string
  imageName: string
}

export default function replaceOgpMeta(options: ReplaceHtmlPluginOptions): Plugin {
  return {
    name: 'replace-ogp-meta',
    enforce: 'post',
    apply: 'build',
    transformIndexHtml(html, { bundle }) {
      let imagePath = ''

      for (const key in bundle) {
        if (key.includes(options.imageName)) {
          imagePath = key
        }
      }

      return html
        .replace(/__TITLE__/g, options.title)
        .replace(/__DESCRIPTION__/g, options.description)
        .replace(/__IMAGE__/g, `https://ubahdev.ru/${imagePath}`)
    }
  }
}
