
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <---

createApp(App).use(router).mount('#app')

/*import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


//import { createApp } from 'vue'
//import App from './App.vue'
//import Router from './router'

window['myGlobal'] = process.env.NODE_ENV //type myGlobal in browser console to see what stage of development this Vue app is in
//Vue.config.devtools = true


//Route Components
import signInPage from '@/components/pages/SignInPage.vue'
import about from '@/components/pages/AboutPage.vue'
import home from '@/components/pages/HomePage.vue'


const routes = [
      { path: '/', name: "signIn", component: signInPage },
      { path: '/about', name: "about", component: about},
      { path: '/home', name: "home", component: home},
      { path: '*', redirect: '' }
    ]
const router = new VueRouter({
    routes // short for `routes: routes`
})


const app = new Vue({
    router
})
app.$mount('#app')
//createApp(App)
//app.use(Router)
//app.mount('#app')
//https://next.router.vuejs.org/guide/#html

*/