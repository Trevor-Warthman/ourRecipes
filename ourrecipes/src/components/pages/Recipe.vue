<template>
  <div>
    <NavBar :pages="home"></NavBar>
    <RecipeHeader
      :name="name"
      :author="author"
      :recipeId="1"
    ></RecipeHeader>
    <RecipeBody :recipeId="1"></RecipeBody>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import NavBar from "../NavBar.vue";
import RecipeHeader from "@/components/RecipeViewComponents/RecipeHeader.vue";
import RecipeBody from "@/components/RecipeViewComponents/RecipeBody.vue";
export default {
  name: "Recipe",
  props: {
  },
  components: {
    NavBar,
    RecipeHeader,
    RecipeBody,
  },
  mounted() {
    console.log(this.name)
    /*db.collection('recipes').get().then(querySnapshot => {
      querySnapshot.filter(doc => {
        
        ADD "backend" query to get the recipe based on unique name get all other recipe info and display it.
        

      })
    })*/
    
  },
  computed: {
    name: function() {
      const route = useRoute();
      return route.params.recipe
    }
  },
  data(){
    return{
      author: 'STEVE',
      recipeId: 1
    }
  }
};
</script>


<style scoped>
</style>