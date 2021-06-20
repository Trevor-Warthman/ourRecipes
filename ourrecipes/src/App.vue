<template>
  <div>
    <h1>Our Recipes</h1>
    <img alt="Vue logo" src="./assets/logo.jpg">
    <LoginModule title="Login Here"></LoginModule>
    <Dashboard type="public" title="Public Recipes"  :recipes="homepageRecipes"></Dashboard>
  </div>
</template>

<script>
import LoginModule from './components/LoginModule'
import Dashboard from './components/Dashboard'

export default {
  name: 'App',
  components: {
    LoginModule,
    Dashboard
  },
  data() {
    return {
      homepageRecipes: [
        {
          name: "Bahn Mi",
          author: "Trevor Warthman",
          tags: ["Vietnam", "Vietnamise", "Sandwich", "Chicken", "Asian", "Trendy"]
        },
        {
          name: "Tuscan Chicken",
          author: "Trevor Warthman",
          tags: ["Italian", "Chicken", "Creamy", "Sauce"]
        },
        {
          name: "Classic Chili",
          author: "Trevor Warthman",
          tags: ["Texan", "Mexican", "Classic", "Easy", "Spicy", "Hot", "Warm"]
        },
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-family: sans-serif;
}
img {
  max-height: 30vh;
}
</style>
