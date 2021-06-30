//Add prop background color and text color and array tag colors (10)

<template>
  <div class="recipe-header">
    <h1 ref="name">{{ name }}</h1>
    <h2 ref="author">by {{ author }}</h2>
    <RecipeInfo :recipeId="recipeId"></RecipeInfo>
    <RecipeTags></RecipeTags>
  </div>
</template>

<script>
import RecipeTags from "../RecipeTags.vue";
import RecipeInfo from "./RecipeInfo.vue";
export default {
  name: "RecipeHeader",
  props: {
    name: String,
    tags: Array,
    author: String,
    recipeId: Number,
  },
  components: {
    RecipeTags,
    RecipeInfo,
  },
};
</script>


<style scoped>
h1 {
  font-size: 24px;
}
h2 {
  font-size: 14px;
}
.recipe-header {
  text-align: center;
  width: 80%;
  margin: auto;
  border: 1px solid grey;
}
</style>