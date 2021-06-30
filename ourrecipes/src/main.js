import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

window['myGlobal'] = process.env.NODE_ENV //type myGlobal in browser console to see what stage of development this Vue app is in
//Vue.config.devtools = true



const app = createApp(App).mount('#app')
app.use(router)
//https://next.router.vuejs.org/guide/#html