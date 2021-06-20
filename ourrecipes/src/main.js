import { createApp } from 'vue'
import App from './App.vue'

window['myGlobal'] = process.env.NODE_ENV //type myGlobal in browser console to see what stage of development this Vue app is in
//Vue.config.devtools = true

createApp(App).mount('#app')
