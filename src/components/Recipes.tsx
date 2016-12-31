import * as React from 'react'

import Recipe from 'components/Recipe'
import {IRecipe} from 'model/recipe'

interface IProps {
   recipes: Array<IRecipe>
}

const Recipes = ({recipes}: IProps) => ( 
   <ul className="list-group">
      {recipes.map(recipeRow)}
   </ul>
)

const recipeRow = (recipe, index) => (
   <Recipe 
      title={recipe.title} 
      description={recipe.description} 
      key={index} 
   />
)

export default Recipes