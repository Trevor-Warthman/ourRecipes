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
    padding: 10px;
    width: 80px;
    height: 20px;
    border-radius: 30px;
    background-color: #EE6C4D;
    text-align: center;
}
</style>