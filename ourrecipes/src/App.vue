<template>
  <div>
    <h1>Our Recipes</h1>
    <img alt="Vue logo" src="./assets/logo.jpg">
    <LoginModule title="Login Here"></LoginModule>
    <Dashboard type="public" title="Public Recipes" v-bind:heightPercOfWidth="60"></Dashboard>
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
}
img {
  max-height: 30vh;
}
</style>
