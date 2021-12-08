<template>
  <div> 
    <div v-if="found === true">
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
    <div v-else-if="found === false">
      There was an error, your recipe could not be loaded. Please hit back and try again.
    </div>
    <div v-else>
      LOADING SPINNER
    </div>
  </div>
</template>

<script>

import RecipeHeader from "@/components/RecipeViewComponents/RecipeHeader.vue";
import RecipeBody from "@/components/RecipeViewComponents/RecipeBody.vue";
import db from '../firebaseInit'
import RecipeDBO from '../dbCode';

export default {
  recipeName: "Recipe",
  props: {
  },
  components: {
    RecipeHeader,
    RecipeBody,
  },
  created() {
    let dbo = new RecipeDBO();
    //Set data from param
    this.recipeName = this.$route.params.recipe;
    dbo.find(this.recipeName);

    //Set data from database
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
      if(this.found !== true) {
        console.log("Recipe Not found!");
        this.found = false;
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
    
  },
  watch: {
    $route(to) {
      console.log(to)
      this.recipeName = to;
    }
  },
  data(){
    return{
      recipeName: null,
      author: 'blah blah blah',
      recipeId: 1,
      instructions: [],
      ingredients: [],
      description: '',
      tags: [],
      found: null
    }
  },
};

</script>


<style scoped>
</style>