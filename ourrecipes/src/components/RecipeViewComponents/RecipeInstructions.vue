<template>
  <div class="recipeInstructions">
    <ol>
      Instructions:
      <li v-for="inst in instructions" :key="inst">
        {{ inst }}
      </li>
    </ol>
    <AuthorNote :recipeId="recipeId" :noteId="instructionsDesc"></AuthorNote>
  </div>
</template>

<script>
import AuthorNote from "./AuthorNote.vue";
export default {
  name: "RecipeInstructions",
  props: {
    recipeId: Number,
    instructions: Array,
    styleObject: Object,
  },
  components: {
    AuthorNote,
  },
  data() {
    return {
      instructionsDesc: "Some description on instructions",
    };
  },
};
</script>


<style scoped>
.recipeInstructions {
  text-align: left;
}
</style>