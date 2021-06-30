<template>
  <div>
    <NavBar :pages="home"></NavBar>
    <RecipeHeader
      :name="name"
      :author="this.author"
      :recipeId="1"
    ></RecipeHeader>
    <RecipeBody :recipeId="1"></RecipeBody>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import RecipeHeader from "./RecipeViewComponents/RecipeHeader.vue";
import RecipeBody from "./RecipeViewComponents/RecipeBody.vue";
export default {
  name: "Recipe",
  props: {
    name: String,
    tags: Array,
    author: String,
  },
  components: {
    NavBar,
    RecipeHeader,
    RecipeBody,
  },
};
</script>


<style scoped>
</style>