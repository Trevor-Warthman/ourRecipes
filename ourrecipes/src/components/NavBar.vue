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
          <router-link tag="li" to="/authenticate">Log In</router-link>
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
.nav-container {
  width: 95%;
  top: 0;
  position: fixed;
  margin-right: 50px;
  padding: 2px;
  z-index:100;

}
.nav-container ul {
  height: 100%;
  list-style-type: none;
  width: 100%;
  padding: 0;
  overflow: hidden;
  background-color: rgb(75, 180, 206);
  border: 1px solid white;
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