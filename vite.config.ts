import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replaceOgpMeta from './vite-plugins/replaceOgpMeta'
import {robots} from 'vite-plugin-robots'

export default defineConfig({
  base: '',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@pages': path.resolve(__dirname, 'src/pages')
    }
  },
  plugins: [
    react(),
    replaceOgpMeta({
      title: 'Ivan Vdovin',
      description: 'Личный сайт Ивана Вдовина, визитная карточка и статьи о программировании и разработке',
      imageName: 'green'
    }),
    robots({

    })
  ]
})
