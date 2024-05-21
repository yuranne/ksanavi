import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'home.html'),
        language: resolve(__dirname, 'language.html'),
        schedule: resolve(__dirname, 'schedule.html'),
        navigation: resolve(__dirname, 'navigation.html'),
        campus_map: resolve(__dirname, 'campus_map.html'),
        schedule_setting: resolve(__dirname, 'schedule_setting.html')
      }
    }
  }
})
