<template>
  <div class="container"> 
    <!-- <NavBar :pages="createRecipe"></NavBar> -->
    <p>Recipe Name: <input id="name" v-model="message" placeholder="Enter recipe name"></p>
    <p>Recipe Description: <input id="desc" v-model="message" placeholder="Enter recipe description"></p>
    <p id="tagList">Tags: 
      
      <input id="tag1" v-on:click="updateList" v-model="message" placeholder="Enter tag name">
    </p>
    <p id="ingredientList">Ingredients:
      
      <input id="ingredient1" v-on:click="updateList" v-model="message" placeholder="Enter ingredient name">
    </p>
    <p id="instructionList">Instructions: 
      
      <input id="instruction1" v-on:click="updateList" v-model="message" placeholder="Enter instruction name">
    </p>
    <button v-on:click="submitRecipe" class="createRecipe">Add Recipe</button>
  </div>
  <p id="submitting"></p>
</template>

<script>
import db from '../firebaseInit';
import firebase from '../firebaseApp'

import RecipeDBO from '../dbCode';

export default {
  recipeName: "Recipe",
  props: {
  },
  components: {
    // NavBar,
  },
  mounted() {
    let initTag = document.getElementById('tag1');
    initTag.addEventListener('click', () => this.updateList(initTag))

    let initInstruction = document.getElementById('instruction1');
    initInstruction.addEventListener('click', () => this.updateList(initInstruction))

    let initIngredient = document.getElementById('ingredient1');
    initIngredient.addEventListener('click', () => this.updateList(initIngredient))

    document.addEventListener('click', this.handleClickAwayFromInputList, true);

    let recipeDB = new RecipeDBO();
    recipeDB.testSet();

  },
  data(){
    return{
      author: '',
      recipeId: 1,
      instructions: [],
      ingredients: [],
      description: '',
      tags: [],
      tmpInp: null
    }
  },
  methods: {
    submitRecipe: function() {
      const data = {
        "name": document.getElementById("name").value,
        "description": document.getElementById("desc").value,
        "tags": [...document.getElementById('tagList').children].map(inp => inp.value),
        "instructions": [...document.getElementById('instructionList').children].map(inp => inp.value),
        "ingredients": [...document.getElementById('ingredientList').children].map(inp => inp.value),
        "authorUID":firebase.auth().currentUser.email,
        "created": (new Date()).toLocaleString()
      }
      let invalidInputs = []
      for(let key in data) {
        if(data[key] == '' || data[key] == []) {
          invalidInputs.push(key)
        }
      }

      if(invalidInputs.length > 0) {
        alert('the following fields cannot be empty:\n  - ' + invalidInputs.join('\n  - '))
      }
      else {
        let submitMsg = document.getElementById('submitting');
        submitMsg.innerHTML = 'Adding Recipe...';

        db.collection('recipes').add(data).then(() => {
          submitMsg.innerHTML = 'Added!';
          this.$router.push('/');
        }, err => {
          submitMsg.innerHTML = 'Failed :(';
          console.error(err);
        })
      }
    },

    updateList: function(clickedElement) {
      let parent = clickedElement.parentElement;
      let listType = parent.id.replace('List', '')
      let idx = clickedElement.id.replace(listType, '')
      if(idx == parent.childElementCount) {
        let newNode = document.createElement("input")
        newNode['id'] = listType + ((idx - 0) + 1);
        newNode.setAttribute('placeholder', `Enter additional ${listType} name`);
        newNode.setAttribute('class', 'fakeInp');

        newNode.addEventListener('click', () => this.updateList(newNode));
        parent.appendChild(newNode)
        if(this.tmpInp != null) {
          this.tmpInp.setAttribute('class', '')
        }
        this.tmpInp = newNode
      }
    }, 
    handleClickAwayFromInputList(e) {
      if(this.tmpInp != null) {
        let parentNode = e.srcElement.parentElement;
        if(parentNode.id !== this.tmpInp.parentElement.id) {
          this.tmpInp.remove()
        }
      }
    },
  }
};

</script>


<style>
input.fakeInp {
  border: 1px dashed black;
  background: transparent;
}
input {
  width: 100%;
  padding: 12px 20px;
  font-size: 18px;
  margin: 8px 0;
  display: inline-block;
  border: 2px solid #e3a320;
  border-radius: 10px;
  box-sizing: border-box;
}

div.container {
  border-radius: 5px;
  background-color: #ffe5b4;
  padding: 20px;
  margin: 10px;
}

button.createRecipe {
  width: 100%;
  background-color: #1abd43;
  font-size: 18px;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer; 
}

button.createRecipe:hover {
  background-color: #009124;
  font-size: 18px;
}

p {
  font-size: 18px;
  font-weight: 600;
  color: #009124;
  text-align: left;
}
</style>