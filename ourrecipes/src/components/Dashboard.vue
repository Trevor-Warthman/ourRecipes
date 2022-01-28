<template>
  <div class="dashContainer">
    <!--<h1 style="display: inline-block;">{{ title }} </h1>-->
    <div class="dashBoarder">
      <DashboardRecipe v-for="recipe in recipes" :key="recipe" 
      class="dashRecipe" 
        :name="recipe.name" 
        :author="recipe.author" 
        :tags="recipe.tags" 
        :ingredients="recipe.ingredients"
        :docId="recipe.docId">
      </DashboardRecipe>
      <!-- <router-link to="/CreateRecipe" type="button">Create New Recipe</router-link> -->
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
    type: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    recipes: {
      type: Array,
      required: true
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.dashBoarder {
  border-radius: 10px;
  background-color: #ffb581;
  width: 90%;
  margin: auto;
  height: max-content;
  padding: 5px;
}
.dashRecipe {
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: auto;
}

.dashContainer {
  border: 0px solid grey;
}

.dashBoarder div:nth-child(3n) {
  background-color: white;
}
.dashBoarder div:nth-child(3n -1) {
  background-color: white;
}
.dashBoarder div:nth-child(3n -2) {
  background-color: white;
}

router-link{
  background-color: #4A7B9D;
}
</style>