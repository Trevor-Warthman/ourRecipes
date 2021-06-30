<template>
  <div class="recipeIngredients">
    <ul>
      Ingredients:
      <li v-for="ing in recipeIngs" :key="ing">
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
    styleObject: Object,
  },
  components: {
    AuthorNote,
  },
  mounted() {},
  data() {
    return {
      recipeIngs: [
        "Chicken, 1.5 pounds",
        "1 bunch of cilantro",
        "6 buns",
        "4 tbsp soy sauce",
        "1 red onion",
        "etc",
      ],
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