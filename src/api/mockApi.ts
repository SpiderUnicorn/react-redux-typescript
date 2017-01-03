import recipes from 'api/recipes';
import { Recipe } from 'model/recipe';

const delayMilliseconds = 1000;

export function fetchAll(): Promise<Recipe[]> {
   return new Promise((resolve, reject) => {
      setTimeout(() => resolve([...recipes]), delayMilliseconds);
   });
}