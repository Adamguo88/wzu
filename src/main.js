import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import lazyPlugin from 'vue3-lazy'
import loading from '@/assets/loading.gif'
// createApp(App).use(router).mount('#app')

const app = createApp(App)
app.use(router)
app.use(lazyPlugin,{
  loading:loading,
  error:"https://cdn.picpng.com/error/error-cross-icon-symbol-70859.png"
})
app.mount('#app')
