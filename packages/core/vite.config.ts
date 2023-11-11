import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: path.join(__dirname, './src/index.ts'),
      name: 'Momoplayer',
      fileName: 'momoplayer',
      formats: ['es', 'umd']
    }
  },
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
