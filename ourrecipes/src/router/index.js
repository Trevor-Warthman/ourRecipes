import Vue from 'vue'
import Router from 'vue-router'



import signInPage from '@/components/pages/SignInPage.vue'
import about from '@/components/pages/AboutPage.vue'
import home from '@/components/pages/HomePage.vue'


Vue.use(Router)

/* 
const signIn = {template: '<div>Sign In</div>'}
const about = {template: '<div>About</div>'}
const home = {template: '<div>Home</div>'}
//const About = {template: '<div>About</div>'}

const routes = [
    { path: '/', component: SignIn},
    { path: '/about', component: about},
    { path: '/home', component: home},
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})
*/

export default new Router({
  routes: [
    { path: '/', name: "signIn", component: signInPage },
    { path: '/about', name: "about", component: about},
    { path: '/home', name: "home", component: home},
  ]
})