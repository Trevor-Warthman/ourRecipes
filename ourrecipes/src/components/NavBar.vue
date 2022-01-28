<template>
    <div class="nav-container">
      <ul>
        <li>
          <div style="cursor: pointer;" onclick="window.location='/';" class="nav-logo">OurRecipes (rename)
          </div>
        </li>
        <li v-if="loggedIn">
          <router-link class="nav-container-signOut" to="/signout">Sign Out</router-link>
        </li>
        <li v-if="!loggedIn">
          <router-link class="nav-container-signIn" to="/authenticate">Log In/Sign Up</router-link>
        </li>
        <li v-if="loggedIn">
          <router-link class="nav-container-create" to="/createRecipe">Create Recipe</router-link>
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
  height: fit-content;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  background-color: #ffb600;
}

.nav-container ul {
  list-style-type: none;
  padding: 0;
  margin: 7.5px;
  overflow: hidden;
  background-color: #ffb600;
  
}

.nav-container li a{
  font-size: 18px;
  border: 2px solid #ffb600;
  margin-right: 25px;
  border-radius: 25px;
  font-weight: 500;
  color: white;
  text-align: center;
  padding: 10px 16px;
  text-decoration: none;
  float: right;
}

.nav-container-create {
  background-color: #1abd43;
  color: white;
}

.nav-container-signOut {
  background-color: #ff6464;
  color: white;
  border: 2px solid #ff2d2d;
}

.nav-container-signIn {
  background-color: #1abd43;
  color: white;
}

.nav-container-create:hover {
  background-color: #1abd43;
  color: white;
  border: 2px solid #009124;
}

.nav-container-signOut:hover {
  background-color: #ff6464;
  color: white;
  border: 2px solid #ff2d2d;
}

.nav-container-signIn:hover {
  background-color: #1abd43;
  color: white;
  border: 2px solid #009124;
}

.nav-container .router-link-active {
  visibility: hidden;
}
.nav-logo {
  position: absolute;
  padding-top: 7.5px;
  margin-left:50px;
  font-size: 24px;
  font-weight: 600;
  color: #fff1d4;
}
body {
  margin: 0;
}
</style>