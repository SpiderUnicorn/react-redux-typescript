import * as React from 'react';
import {saveRecipe} from 'actions';
import {connect} from 'react-redux';
import {ApplicationState} from 'reducers';

import Recipes from 'components/Recipes';
import NewRecipeForm from 'components/NewRecipeForm';
import {IRecipe} from 'model/recipe';

interface Props {
    recipes: IRecipe[]
    saveRecipe: Function
}

const RecipesPage = ({recipes, saveRecipe}: Props) => (
   <div>
      <h1>Recipes</h1>

      <Recipes recipes={recipes} />

      <h2>Add a new recipe</h2>
      <NewRecipeForm submit={saveRecipe} />
   </div>
);

const mapStateToProps = (state: ApplicationState) => ({
    recipes: state.recipes
});

export default connect(mapStateToProps, {saveRecipe})(RecipesPage);
