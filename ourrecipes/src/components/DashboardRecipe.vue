<template>
  <div class="dashRecipe">
    <span class="recipeHead"><span class="recipeTitle">{{name}}</span> <span class="recipeAuthor">By: {{author}}</span></span> 
    <span ref="tagContainer">
      <RecipeTag v-for="tag in tags" :key="tag" 
      class="recipeTag"
      :tagTitle="tag"></RecipeTag>
    </span>
  </div>
</template>

<script>
import RecipeTag from './RecipeTag.vue'
export default {
  name: 'DashboardRecipe',
  props: {
    name: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    } 
  },
  components: {
    RecipeTag
  },
  methods: {
      //insertTags() {
      //  this.tags.forEach((tag) => {
      //    d = document.createElement("div")
      //    this.$refs['tagsContainer'].appendChild()
      //  });
      //}
  },
}
</script>

<style scoped>

.dashRecipe {
    border: 1px solid grey;
    width: 90%;
    height: 30px;
    vertical-align: center;
}

.recipeHead{ 
  float: left;
}
.recipeTitle {
  font-weight: bold;
  font-size: 18px;
}
.recipeAuthor {
  font-size: 14px;
  padding-left: 10px;
}

.recipeTag {
  margin: .25vw;
  border: 1px solid black;
  color: black;
}
</style>