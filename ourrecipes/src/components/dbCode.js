import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore' 
import firebaseConfig from './firebaseConfig.js'
class RecipeDBO {
    constructor() {
        this.db = firebase.initializeApp(firebaseConfig).firestore()
        this.cache = {}
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
            this.cache['recipeInfo'] = recipes;
            this.cache['time'] = Date.now()
            return recipes;
        }).catch(e => console.log(e))
    }

    find(name) {
        let timeCreated = this.cache['time'];
        let timeDiff = Date.now() - timeCreated;
        let timeDiffHrs = timeDiff / 360;
        console.log(timeDiffHrs)
        if(timeDiffHrs < 1) {
            return this.findFromCache(name)            
        } else {
            this.cache = {}
            return await this.findFromDB(name)
        }
    }

    findFromCache(name) {
        return this.cache['recipes'].find((recipe) => recipe.name == name);
    }

    async findFromDB(name) {
        return this.findAll().then(recipes => recipes.find((recipe) => recipe.name == name))
    }

    add(recipeInfo) {
        //TODO: Implement
    }

    remove(name) {
        //TODO: Implement
    }
}

let dbo = new RecipeDBO();
console.log(dbo.find('Tuscan Chicken'))
