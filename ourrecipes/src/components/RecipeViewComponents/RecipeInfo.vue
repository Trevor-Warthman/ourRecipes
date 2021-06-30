<template>
  <div>Example Info for recipe {{ recipeId }}</div>
</template>

<script>
export default {
  name: "RecipeInfo",
  props: {
    recipeId: Number,
  },
};
</script>


<style scoped>
</style>