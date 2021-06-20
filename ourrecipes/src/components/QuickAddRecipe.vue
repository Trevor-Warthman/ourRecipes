<template>
  <div class="quickaddRecipe">
    <span>You can quick-add a recipe here:</span>
    <input ref="quickadd-name" type="text" placeholder="'Chicken Parmesean'">
    <input ref="add-tag" type="text" placeholder="'Chicken Parmesean'">
    <button>Add a tag</button>
    <div ref="added-tags"></div>
    <button ref="submit-quickadd-recipe">Submit Recipe</button>
  </div>
</template>

<script>
export default {
  name: 'QuickAddRecipe',
  props: {
    title: String
  },
  methods: {
      addRecipe(){
        // Add a new document in collection "recipes"
        db.collection("recipes").doc("LA").set({
            name: "efgsr",
            state: "CA",
            country: "USA"
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
      }
  }
}
</script>

<style scoped>
</style>

