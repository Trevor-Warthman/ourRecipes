<template>
  <div @Click="goToRecipeView" class="dashRecipe" @mouseover="showDiv" @mouseleave="hideDiv">
    <span class="recipeHead"><span class="recipeTitle">{{name}}</span> <span class="recipeAuthor">By: {{author}}</span></span> 
    <span ref="tagContainer">
      <RecipeTag v-for="tag in tags" :key="tag" 
        class="recipeTag"
        :tagTitle="tag">
      </RecipeTag>
    </span>
    <span class='deleteButton'><button @Click="handleDelete" class="delete">X</button></span>
    <div class="recipeIngredients">
      {{ ingredients }}
    </div>
  </div>
</template>

<script>
import RecipeTag from './RecipeTag.vue'
import db from './firebaseInit'
import firebase from './firebaseApp'

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
    },
    ingredients: {
      type: Array,
      required: true
    },
    docId: {
      type: String,
      required: true
    }, 
  },
  components: {
    RecipeTag
  },
  created() {
    let self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      self.ownsRecipe = user.email == self.author;
    });
     
  },
  data() {
    return {
      deletePressed: false,
      ownsRecipe: false
    }
  },
  methods: {
    goToRecipeView(){
      if(!this.deletePressed) {
        this.$router.push(this.name);
      } 
      this.deletePressed = false;
    },
    handleDelete() {
      this.deletePressed = true;
      console.log('deleting: ' + this.docId)
      if(confirm(`are you sure you wanna delete ${this.name}?`)) {
        db.collection('recipes').doc(this.docId).delete().then(() =>{
          location.reload();
        }, err => console.error(err));
      }
    },
    showDiv(e) {
      e.srcElement.getElementsByClassName('recipeIngredients')[0].style.visibility = "visible";
    },
    hideDiv(e) {
      e.srcElement.getElementsByClassName('recipeIngredients')[0].style.visibility = "hidden";
    }
  },
}
</script>

<style>
/*.dashRecipe:hover {*/
/*}*/
.dashRecipe {
    border: 1px solid grey;
    width: 90%;
    height: 30px;
    vertical-align: center;
}
.dashRecipe:hover {
  height: 100px;
  
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

.recipeIngredients {
  visibility: hidden;
}

span.deleteButton {
  float: right;
}

.delete {
  cursor: pointer; 
  background-color: red;
  color: white;
}
</style>