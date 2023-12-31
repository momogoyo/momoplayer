import { defineConfig } from 'vite'
import path from 'path'
import preact from '@preact/preset-vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
  build: {
    lib: {
      entry: path.join(__dirname, './src/index.ts'),
      name: 'Momoplayer',
      fileName: 'momoplayer',
      formats: ['es', 'umd']
    }
  },
  plugins: [
    preact(),
    vanillaExtractPlugin({
      emitCssInSsr: true
    })
  ],
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
