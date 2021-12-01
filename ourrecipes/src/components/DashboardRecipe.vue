<template>
  <div @Click="goToRecipeView" class="dashRecipe">
    <span class="recipeHead"><span class="recipeTitle">{{name}}</span> <span class="recipeAuthor">By: {{author}}</span></span> 
    <span ref="tagContainer">
      <RecipeTag v-for="tag in tags" :key="tag" 
        class="recipeTag"
        :tagTitle="tag">
      </RecipeTag>
    </span>
    <span class='deleteButton'><button @Click="handleDelete" class="delete">X</button></span>
  </div>
</template>

<script>
import RecipeTag from './RecipeTag.vue'
import db from './firebaseInit'

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
    docId: {
      type: String,
      required: true
    }, 
  },
  components: {
    RecipeTag
  },
  data() {
    return {
      deletePressed: false
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
    }
  },
}
</script>

<style>

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

span.deleteButton {
  float: right;
}

.delete {
  cursor: pointer; 
  background-color: red;
  color: white;
}
</style>