<template>
  <span class="recipeTag">
      {{tagTitle}}
  </span>
</template>

<script>
export default {
  name: 'RecipeTag',
  props: {
    tagTitle: String
  }
}
</script>

<!--  -->
<style scoped>
.recipeTag {
    width: 60px;
    height: 20px;
    border-radius: 25px;
    background-color: #EE6C4D;
}
</style>