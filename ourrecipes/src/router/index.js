import { createWebHistory, createRouter } from "vue-router";
import signInPage from '@/components/pages/SignInPage.vue'
import about from '@/components/pages/AboutPage.vue'
import home from '@/components/pages/HomePage.vue'
import recipe from '@/components/pages/Recipe.vue'
import createRecipe from '@/components/pages/CreateRecipe.vue'
import login from '@/components/pages/Login.vue'
import signOut from '@/components/pages/SignOut.vue'

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: signInPage,
  },
  {
    path: "/authenticate",
    name: "Authenticate",
    component: login,
  },
  {
    path: "/signout",
    name: "SignOut",
    component: signOut,
  },
  {
    path: "/about",
    name: "About",
    component: about,
  },
  {
    path: "/home",
    name: "Home",
    component: home
  },
  {
    path: "/createRecipe",
    name: "CreateRecipe",
    component: createRecipe
  },
  {
    path: "/:recipe",
    name: "Recipe",
    component: recipe
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;