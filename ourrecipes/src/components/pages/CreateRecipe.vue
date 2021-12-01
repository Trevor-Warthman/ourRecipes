<template>
  <div> 
    <NavBar :pages="createRecipe"></NavBar>
    <p>Recipe Name: <input id="name" v-model="message" placeholder="enter recipe name"></p>
    <p>Recipe Description: <textarea id="desc" v-model="message" placeholder="Enter recipe description"></textarea></p>
    <p id="tagList">Tags: 
      <input id="tag1" v-on:click="updateList" v-model="message" placeholder="Enter tag name">
    </p>
    <p>Instructions: <textarea id="instruction" v-model="message" placeholder="Enter Recipe Instructions"></textarea></p>
    <p>Ingredients: <textarea id="ingredient" v-model="message" placeholder="Enter Recipe Ingredients"></textarea></p>
    <button v-on:click="submitRecipe">Add Recipe</button>
  </div>
</template>

<script>
import NavBar from "../NavBar.vue";
// import db from '../firebaseInit'

export default {
  recipeName: "Recipe",
  props: {
  },
  components: {
    NavBar,
  },
  data(){
    return{
      author: 'blah blah blah',
      recipeId: 1,
      instructions: [],
      ingredients: [],
      description: '',
      tags: [],
      found: true
    }
  },
  methods: {
    submitRecipe: function() {
      const data = {
        "name": document.getElementById("name").value,
        "description": document.getElementById("desc").value,
        "tags": [document.getElementById("tag").value],
        "instructions": [document.getElementById("instruction").value],
        "ingredients": [document.getElementById("ingredient").value],
        "authorUID":"1",
        "created": Date.now()
      }
      console.log(data)
      //db.collection('recipes').doc('testUpload').set(data)
    },

    updateList: function(e) {
      let clickedElement = e.srcElement;
      let parent = clickedElement.parentElement;
      let listType = parent.id.replace('List', '')
      let idx = clickedElement.id.replace(listType, '')
      if(idx == parent.childElementCount) {
        let newNode = document.createElement("input")
        newNode['id'] = listType + ((idx - 0) + 1);
        newNode.setAttribute('onClick', "updateList");
        newNode.setAttribute('placeholder', `Enter ${listType} name`);
        parent.appendChild(newNode)
      }
    }
  }
};

</script>


<style scoped>
</style>