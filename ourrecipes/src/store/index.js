import { createStore } from "vuex"


const store = createStore({
    state:{
        test: "bingo",
        userId: "guest",
        recipeInformation: [],
    },
    getters:{
        currentRecipesStored: state => {
            return state.recipeInformation.length;
        }
    },
    mutations:{
        INSERT_RECIPE_INFO (state, newRecipeInfo) {
            state.recipeInformation.push(newRecipeInfo)
          },
    },
    actions:{
        insertRecipeInfo({ commit }, newRecipeInfo) {
            commit('INSERT_RECIPE_INFO', newRecipeInfo)
        }
    }
})

export default store