<template>
  <div @Click="goToRecipeView" class="dashRecipe" @mouseover="hover = true" @mouseleave="hover = false">
    <span class="recipeHead"><span class="recipeTitle">{{name}}</span> <span class="recipeAuthor">By: {{author}}</span></span> 
    <span ref="tagContainer">
      <RecipeTag v-for="tag in tags" :key="tag" 
        class="recipeTag"
        :tagTitle="tag">
      </RecipeTag>
    </span>
    <span v-show="ownsRecipe" class='deleteButton'>
      <button @Click="handleDelete" class="delete">X</button>
    </span>
    <div v-show="hover" class="recipeIngredients">
        <h3>Ingredients</h3>
        <ul>
          <li class="ingredient-ele" v-for="i in ingredients" :key="i"> {{i}} </li>
        </ul>
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
      ownsRecipe: false,
      hover: false,
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

<style scoped>
/*.dashRecipe:hover {*/
/*}*/
.dashRecipe {
    vertical-align: center;
    border-radius: 10px;
    width: 20%;
    height: 50%;

}
.dashRecipe:hover {
  height: max-content;
  cursor: pointer;
}

.ingredient-ele {
  font-size: 18px;
}
.recipeHead{ 
  float: left;
}
.recipeTitle {
  font-weight: bold;
  font-size: 18px;
}
.recipeAuthor {
  font-size: 18px;
  padding-left: 10px;
  vertical-align: center;
}

.recipeTag {
  color: black;
  margin-left: 10px;
}

.recipeIngredients {
  text-align: left;
}

span.deleteButton {
  float: right;
}

.delete {
  background-color: red;
  color: white;
  margin-right: 10px;
}

.delete:hover {
  /* cursor: crosshair;  */
  background-color: rgb(150, 0, 0);
  color: white;
  box-shadow: 3px 3px #000000;
  margin-right: 12px;
}

</style>