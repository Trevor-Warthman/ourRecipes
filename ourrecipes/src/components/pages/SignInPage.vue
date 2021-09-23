<template>
  <div>
    <h1>Our Recipes</h1>
    {{this.userId}}
    {{this.recipeInfo}}
    <button @click="tst">test</button>
    <img alt="Vue logo" src="@/assets/logo.jpg">
    <LoginModule title="Login Here"></LoginModule>
    <router-link to="/Home" type="button">Fake sign in</router-link>
    <Dashboard :type="'type'" :title="'Public Recipes'"  :recipes="homepageRecipes"></Dashboard>
  </div>
</template>

<script>
import db from '../firebaseInit'
import LoginModule from '@/components/LoginModule'
import Dashboard from '@/components/Dashboard'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'SignInPage',
  components: {
    LoginModule,
    Dashboard
  },
  data() {
    return {
      homepageRecipes: [],
    }
  },
  mounted(){
    // Runs before componenet is loaded
  },
  computed: {
    ...mapState({
      recipeInfo: 'recipeInformation',
      userId: 'userId'
    })
    //WHY IS IT A PROXY
  },

  //todo: 
  /*
  After we get all the data into recipeInfo, utilize recipeInfo vuex field within dashboard
  within dashboard, pass a prop to each dashboard recipe to indicate the index of the one we care about
   */
  created() {
    //runs after component is loaded
    db.collection('recipes').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        //doc.id, doc.data, etc.
        const data = {
          author: doc.data().author,
          name: doc.data().name,
          tags: doc.data().tags,
        }
        this.homepageRecipes.push(data)

        const users = db.collection('users');
        //let authorInfo = null;
        users.doc(doc.data().userId).get().then(snapshot => {
          console.log(snapshot)
          let authorInfo = snapshot.data();//authorInfo is coming up undefined
          console.log(authorInfo)
          let recipeInfo = doc.data()
          recipeInfo.authorInfo = authorInfo;
          console.log(authorInfo)
          this.insertRecipeInfo(recipeInfo)
        })
        
      })
    })
  },
  methods: {
    ...mapActions(['insertRecipeInfo']),
    //unused test function
    tst() {
      this.insertRecipeInfo({
        title:'hey',
        desc: 'jjjj',
        author: 'Trevor Warthman',
        ingredients: [
          'green onion, 3 cups',
          'kidney beans, 16 oz',
          'chicken broth, 8 oz'
        ],
        instructions: [
          'First, you should cut up the green onions',
          'Then you should throw them out',
          'Then eat the raw Kidney beans',
          'Last, drink the chicken broth'
        ],
      })
      console.log(this.recipeInfo)
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
