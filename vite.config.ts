import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import 'src/assets/styles/common/variable.scss';@import 'src/assets/styles/common/themes.scss';"
      }
    }
  }
})
