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
    padding: 5px;
    border-radius: 30px;
    background-color: lightcoral;
    text-align: middle;
    vertical-align: middle;
}
</style>