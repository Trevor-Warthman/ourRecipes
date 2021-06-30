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
    styleObject: Object,
  },
  components: {
    AuthorNote,
  },
  data() {
    return {
      instructions: [
        "First, you take the dinglebop and they smooth it out with a bunch of schleem.",
        "The Schleem is then repurposed for later batches.",
        "They take the dinglebop and they push it through the grumbo, where the fleeb is rubbed against it.",
        "Then a schlami shows up and he rubs it, and spits on it.",
      ],
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