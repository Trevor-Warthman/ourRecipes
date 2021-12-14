<template>
  <div>
    <h1>ourRecipes home</h1>
    <Dashboard type="public" title="Public Recipes"  :recipes="homepageRecipes"></Dashboard>
  </div>
</template>

<script>
import db from './components/firebaseInit'
import QuickAddRecipe from './components/QuickAddRecipe'
import Dashboard from './components/Dashboard'

export default {
  name: 'Main',
  components: {
    Dashboard,
    QuickAddRecipe
  },
  data() {
    return {
      
    }
  },
  //created() {
  //}
}
</script>



<style>

</style>
