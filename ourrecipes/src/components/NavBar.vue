<template>
    <div class="nav-container">
      <ul>
        <li v-if="loggedIn">
          <router-link tag="li" to="/createRecipe">Create Recipe</router-link>
        </li>
        <li v-if="loggedIn">
          <router-link tag="li" to="/signout">Sign Out</router-link>
        </li>
        <li v-if="!loggedIn">
          <router-link tag="li" to="/authenticate">Log In/Sign Up</router-link>
        </li>
        <li>
          <router-link tag="li" to="/home">Home</router-link>
        </li>
        <li>
          <router-link tag="li" to="/">Recipes</router-link>
        </li>
        <li>
          <div id="logo">Recipes</div>
        </li>

      </ul>
    </div>

</template>


<script>
// import firebase from 'firebase/compat/app'
import firebase from './firebaseApp'

export default {
  name: "NavBar",
  props: {
    pages: Array,
  }, 
  created() {
    let self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      self.loggedIn = user;
    });
     
  },
  data() {
    return {
      loggedIn: false
    }
  }
};
</script>

<style scoped>
html, body {
  padding: 0;
  margin: 0;
  height: 100%;
}
body {
  display: flex;
  flex-direction: column;
}
.nav-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    background-color: rgb(75, 180, 206);
    border: 1px solid rgb(75, 180, 206);
}

.nav-container ul {
  list-style-type: none;
  padding: 0;
  margin: auto;
  overflow: hidden;
  background-color: rgb(75, 180, 206);
}

.nav-container li a{
  float: right;
}

.nav-container li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  border-left: 1px solid white;
}
.nav-container li a:hover:not(.router-link-active) {
  background-color: rgb(75, 150, 206);
}

.nav-container .router-link-active {
  background-color: white;
  color: rgb(75, 180, 206);
}
.nav-container li #logo {
  float: left;
}
body {
  margin: 0;
}
</style>