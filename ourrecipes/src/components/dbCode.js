import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore' 
import firebaseConfig from './firebaseConfig.js'
export default class RecipeDBO {
    constructor() {
        this.db = firebase.initializeApp(firebaseConfig).firestore()
        this.cookie = "recipe-local-storage-key-id"
    }

    async findAll() {
        return this.db.collection('recipes').get().then(querySnapshot => {
            let recipes = querySnapshot.docs.map((doc) => {
                let data = doc.data();
                return {
                    "name": data.name,
                    "author": data.authorUID,
                    "instructions": data.instructions,
                    "ingredients": data.ingredients,
                    "description": data.description,
                    "tags": data.tags
                }
            });
            let newCache = {};
            recipes.forEach(recipe => {
                newCache[recipe.name] = {
                    "recipeInfo": recipe,
                    "timeCached": Date.now()
                }});
            localStorage.setItem(this.cookie, JSON.stringify(newCache))
            return recipes;
        }).catch(e => console.log(e))
    }

    async find(name) {
        let cache = localStorage.getItem(this.cookie);
        if(cache) {
            let cacheObj = JSON.parse(cache);
            if(name in cacheObj) {
                let timeCreated = cacheObj['timeCached'];
                let timeDiff = Date.now() - timeCreated;
                let timeDiffHrs = timeDiff / 360;
                console.log(timeDiffHrs)
                if (timeDiffHrs < 1) {
                    return this.findFromCache(name)
                } else {
                    this.cache = {}
                    return await this.findFromDB(name)
                }
            }
        }
    }

    findFromCache(name) {
        return this.cache['recipes'].find((recipe) => recipe.name == name);
    }

    async findFromDB(name) {
        return this.findAll().then(recipes => recipes.find((recipe) => recipe.name == name))
    }
    //hi
    add(recipeInfo) {
        //TODO: Implement
        console.log(recipeInfo)

    }

    remove(name) {
        //TODO: Implement
        console.log(name)

    }

    testSet() {
        localStorage.setItem('tmp', 1);
    }
    testGet() {
        console.log('from cache')
        console.log(localStorage.getItem('tmp'))
    }
}
