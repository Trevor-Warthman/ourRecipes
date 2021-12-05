<template>
  <div>
    <h1>Our Recipes</h1>
    <img alt="Vue logo" src="@/assets/logo.jpg">
    <LoginModule title="Login Here"></LoginModule>
    HYE
    <router-link to="/Home" type="button">Fake sign in</router-link>
    <Dashboard type="public" title="Public Recipes"  :recipes="homepageRecipes"></Dashboard>
  </div>
</template>

<script>
// import db from '../firebaseInit'
import LoginModule from '@/components/LoginModule'
import Dashboard from '@/components/Dashboard'

export default {
  name: 'SignInPage',
  components: {
    LoginModule,
    Dashboard
  },
  data() {
    return {
      homepageRecipes: []
    }
  },
  created() {
    // db.collection('recipes').get().then(querySnapshot => {
    //   querySnapshot.forEach(doc => {
    //     //doc.id, doc.data, etc.
    //     const data = {
    //       'author': doc.data().author,
    //       'name': doc.data().name,
    //       'tags': doc.data().tags,
    //       'docId': doc.id
    //     }
    //     this.homepageRecipes.push(data)
    //   })
    // })
  }
}

/*
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
*/ 
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
