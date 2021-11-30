import { createStore } from "vuex"


const store = createStore({
    state:{
        userId: "guest",
        featuredRecipes: [],
    },
    getters:{
        featuredRecipes: state => {
            return state.featuredRecipes.length;
        }
    },
    mutations:{
        INSERT_FEATURED_RECIPE (state, newRecipeInfo) {
            state.featuredRecipes.push(newRecipeInfo)
          },
    },
    actions:{
        insertFeaturedRecipe({ commit }, newRecipeInfo) {
            commit('INSERT_FEATURED_RECIPE', newRecipeInfo)
        }
    }
})

export default store