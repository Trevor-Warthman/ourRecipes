<template>
  <div> 
    <NavBar :pages="home"></NavBar>
    <RecipeHeader
      :name="recipeName"
      :tags="tags"
      :author="author"
      :recipeId="1"
    ></RecipeHeader>
    <RecipeBody 
      :recipeId="1" 
      :instructions="instructions"
      :ingredients="ingredients"
    ></RecipeBody>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import NavBar from "../NavBar.vue";
import RecipeHeader from "@/components/RecipeViewComponents/RecipeHeader.vue";
import RecipeBody from "@/components/RecipeViewComponents/RecipeBody.vue";
import db from '../firebaseInit'

export default {
  recipeName: "Recipe",
  props: {
  },
  components: {
    NavBar,
    RecipeHeader,
    RecipeBody,
  },
  mounted() {
    db.collection('recipes').get().then(querySnapshot => {
      for(let i = 0; i < querySnapshot.docs.length; i += 1) {
        if(this.recipeName == querySnapshot.docs[i].data().name) {
          let recipeInfo = querySnapshot.docs[i].data();
          this.author = recipeInfo.authorUID;
          this.instructions = recipeInfo.instructions;
          this.ingredients = recipeInfo.ingredients;
          this.description = recipeInfo.description;
          this.tags = recipeInfo.tags;
          this.found = true;
          break;
        }
      }
      if(!this.found) {
        console.log("Recipe Not found!");
      }

      // let recipeInfo = querySnapshot.docs.find((doc) => doc.data().name === this.recipeName).data()
      // console.log(recipeInfo)
      // this.author = recipeInfo.authorUID;
      // this.instructions = recipeInfo.instructions;
      // this.ingredients = recipeInfo.ingredients;
      // this.description = recipeInfo.description;
      // this.tags = recipeInfo.tags;
    })
    
  },
  computed: {
    recipeName: function() {
      const route = useRoute();
      return route.params.recipe
    }
  },
  data(){
    return{
      author: 'blah blah blah',
      recipeId: 1,
      instructions: [],
      ingredients: [],
      description: '',
      tags: [],
      found: true
    }
  },
};

</script>


<style scoped>
</style>