<template>
  <div>
    <h1>Our Recipes</h1>
    <img alt="Vue logo" src="./assets/logo.jpg">
    <LoginModule></LoginModule>
  </div>
</template>

<script>
import LoginModule from './components/LoginModule'

export default {
  name: 'App',
  components: {
    LoginModule
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
