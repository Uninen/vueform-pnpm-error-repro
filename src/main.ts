import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { createApp, markRaw } from 'vue'
import App from './App.vue'
import './assets/index.postcss'
import router from './router'
import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'

const head = createHead()
const app = createApp(App)

const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})
app.use(pinia)
app.use(router)
app.use(head)
app.use(Vueform, vueformConfig)

app.mount('#app')
