<template>
  <div>
    <AuthorNote :recipeId="recipeId" :noteId="recipeDesc"></AuthorNote>
    <RecipeIngredientList :recipeId="recipeId" :ingredients="ingredients"></RecipeIngredientList>
    <RecipeInstructions   :recipeId="recipeId" :instructions="instructions"></RecipeInstructions>
    <AuthorNote :recipeId="recipeId" :noteId="recipeStory"></AuthorNote>
  </div>
</template>

<script>
import RecipeIngredientList from "./RecipeIngredientList.vue";
import RecipeInstructions from "./RecipeInstructions.vue";
import AuthorNote from "./AuthorNote.vue";

export default {
  name: "RecipeBody",
  props: {
    recipeId: Number,
    instructions: Array,
    ingredients: Array,
    styleObject: Object,
  },
  components: {
    AuthorNote,
    RecipeIngredientList,
    RecipeInstructions,
  },
};
</script>


<style scoped>
</style>