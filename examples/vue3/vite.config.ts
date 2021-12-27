import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pluginAssets from '../../packages/vite-plugin-global-style/src/index'
import pluginContent from '../../packages/vite-plugin-content/src/index'
import pluginPages from '../../packages/vite-plugin-pages/src/index'
import pluginWasm from '../../packages/vite-plugin-load-wasm/src/index'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    pluginAssets(),
    pluginContent(),
    pluginPages(),
    pluginWasm(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
