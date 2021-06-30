<template>
  <div>
    <AuthorNote :recipeId="recipeId" :noteId="recipeDesc"></AuthorNote>
    <RecipeIngredientList :recipeId="recipeId"></RecipeIngredientList>
    <RecipeInstructions :recipeId="recipeId"></RecipeInstructions>
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
    styleObject: Object,
  },
  components: {
    RecipeIngredientList,
    RecipeInstructions,
  },
};
</script>


<style scoped>
</style>