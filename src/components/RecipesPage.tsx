import * as React from 'react'
import {saveRecipe} from 'actions'
import {connect} from 'react-redux'
import {IApplicationState} from 'reducers'

import Recipes from 'components/Recipes'
import NewRecipeForm from 'components/NewRecipeForm'
import {IRecipe} from 'model/recipe'

interface IProps {
    recipes: Array<IRecipe>
    saveRecipe: Function
}

const RecipesPage = ({recipes, saveRecipe}: IProps) => (
   <div>
      <h1>Recipes</h1>

      <Recipes recipes={recipes} />

      <h2>Add a new recipe</h2>
      <NewRecipeForm submit={saveRecipe} />
   </div>
)

const mapStateToProps = (state:IApplicationState) => ({
    recipes: state.recipes
})

export default connect(mapStateToProps, {saveRecipe})(RecipesPage)
