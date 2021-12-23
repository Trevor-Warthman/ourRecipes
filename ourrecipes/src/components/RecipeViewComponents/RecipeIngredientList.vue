<template>
  <div class="recipeIngredients">
    <ul>
      Ingredients:
      <li v-for="ing in ingredients" :key="ing">
        {{ ing }}
      </li>
    </ul>
    <AuthorNote :recipeId="recipeId" :noteId="ingredientsDesc"></AuthorNote>
  </div>
</template>

<script>
//get db query for this recipe and set some things. Maybe do that in data?
import AuthorNote from "./AuthorNote.vue";
export default {
  name: "RecipeIngredientList",
  props: {
    recipeId: Number,
    ingredients: Array,
    styleObject: Object,
  },
  components: {
    AuthorNote,
  },
  mounted() {},
  data() {
    return {
      ingredientsDesc: "some desc of ings",
    };
  },
};
</script>


<style scoped>
.recipeIngredients {
  text-align: left;
}
</style>