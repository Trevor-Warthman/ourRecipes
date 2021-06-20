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
    padding-left: 10px;
    width: 80px;
    height: 20px;
    border-radius: 25px;
    background-color: #EE6C4D;
}
</style>