<template>
  <div class="dashContainer">
    <h1 style="display: inline-block;">{{ title }} </h1><span style="font-size: 10px; float: right;">This is {{ type }}</span>
    <div class="dashBoarder">
      <DashboardRecipe v-for="recipe in recipes" :key="recipe" 
      class="dashRecipe" 
      :name="recipe.name" :author="recipe.author" :tags="recipe.tags">
      </DashboardRecipe>
    </div>
  </div>
</template>

<script>
import DashboardRecipe from './DashboardRecipe.vue'
export default {
  name: 'Dashboard',
  components: {
    DashboardRecipe
  },
  props: {
    type: String,
    title: String,
    recipes: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.dashBoarder {
    border: 2px solid black;
    /* Sets height to 35% of width*/
    width: 100%;
    height: 0;
    padding-bottom: 35%;
}
.dashRecipe {
  padding: 10px;
}

.dashContainer {
  border: 1.25px solid grey;
}
</style>