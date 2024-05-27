import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        language: resolve(__dirname, 'language.html'),
        home: resolve(__dirname, 'ko/home.html'),
        schedule: resolve(__dirname, 'ko/schedule.html'),
        navigation: resolve(__dirname, 'ko/navigation.html'),
        navigation_js: resolve(__dirname, 'ko/navigation.js'),
        campus_map: resolve(__dirname, 'ko/campus_map.html'),
        schedule_setting: resolve(__dirname, 'ko/schedule_setting.html'),
        home_en: resolve(__dirname, 'en/home.html'),
        schedule_en: resolve(__dirname, 'en/schedule.html'),
        navigation_en: resolve(__dirname, 'en/navigation.html'),
        campus_map_en: resolve(__dirname, 'en/campus_map.html'),
        schedule_setting_en: resolve(__dirname, 'en/schedule_setting.html')
      }
    }
  }
})
