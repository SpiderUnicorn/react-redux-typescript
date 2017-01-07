import { Recipe } from 'model/recipe';

let recipeId = 0;

let recipes = [
   {
      id: ++recipeId,
      title: 'Pasta rosso',
      description: 'Pasta with ketchup'
   },
   {
      id: ++recipeId,
      title: 'Leftovers',
      description: 'Whatever you can find in the fridge'
   }
];

const delayMilliseconds = 1000;

export function fetchAll(): Promise<Recipe[]> {
   return new Promise((resolve, reject) => {
      setTimeout(() => resolve([...recipes]), delayMilliseconds);
   });
}

export function save(recipe: Recipe): Promise<Recipe> {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const newRecipe = Object.assign({}, recipe, {id: ++recipeId});
         recipes = [...recipes, newRecipe];

         return resolve(newRecipe);
      }, delayMilliseconds);
   });
}