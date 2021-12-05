import { createWebHistory, createRouter } from "vue-router";
import signInPage from '@/components/pages/SignInPage.vue'
import about from '@/components/pages/AboutPage.vue'
import home from '@/components/pages/HomePage.vue'
import recipe from '@/components/pages/Recipe.vue'
import createRecipe from '@/components/pages/CreateRecipe.vue'

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: signInPage,
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