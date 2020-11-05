import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import LuckDraw from 'vue-luck-draw/vue3'

createApp(App)
  .use(router)
  .use(LuckDraw)
  .mount('#app')
