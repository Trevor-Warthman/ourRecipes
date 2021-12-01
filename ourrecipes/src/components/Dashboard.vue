<template>
  <div class="dashContainer">
    <h1 style="display: inline-block;">{{ title }} </h1><span style="font-size: 10px; float: right;">This is {{ type }}</span>
    <div class="dashBoarder">
      <DashboardRecipe v-for="recipe in recipes" :key="recipe" 
      class="dashRecipe" 
      :name="recipe.name" :author="recipe.author" :tags="recipe.tags">
      </DashboardRecipe>
      <router-link to="/CreateRecipe" type="button">Create New Recipe</router-link>
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
  },
  data() {
    return {
      
    }
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
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
}

.dashContainer {
  border: 1.25px solid grey;
}

.dashBoarder div:nth-child(3n) {
  background-color: #ECEBF3;
}
.dashBoarder div:nth-child(3n -1) {
  background-color: #BC4B51;
}
.dashBoarder div:nth-child(3n -2) {
  background-color: #4A7B9D;
}

router-link{
  background-color: #4A7B9D;
}
</style>