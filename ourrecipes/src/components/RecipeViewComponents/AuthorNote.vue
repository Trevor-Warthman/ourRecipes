<template>
  <div ref="note">Author Note {{ noteId }} for Recipe ID {{ recipeId }}</div>
</template>

<script>
export default {
  name: "AuthorNote",
  props: {
    recipeId: String,
    noteId: String,
  },
  components: {},
  //data() {},
  //mounted() {},
};
</script>


<style scoped>
</style>