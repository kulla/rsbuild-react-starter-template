import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

const mode = process.env.NODE_ENV || 'development'

export default defineConfig({
  html: {
    title: 'Prototype',
  },
  output: {
    assetPrefix: '/rsbuild-react-bun-biome-starter-template/',
    sourceMap: {
      js: mode === 'development' ? 'eval-source-map' : 'source-map',
      css: true,
    },
  },
  plugins: [pluginReact()],
})
