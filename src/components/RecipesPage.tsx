import React, {Component} from 'react';
import {saveRecipe, deleteRecipe} from 'actions';
import {connect} from 'react-redux';
import {ApplicationState} from 'reducers';

import NewRecipeForm from 'components/NewRecipeForm';
import {Recipe as IRecipe} from 'model/recipe';
import Recipe from 'components/Recipe';

interface Props {
    recipes: IRecipe[]
    saveRecipe: Function,
    deleteRecipe: Function
}

class RecipesPage extends Component<Props, any> {

    constructor({recipes, saveRecipe, deleteRecipe}: Props) {
        super();
    }

    private handleDelete(id: number) {
        this.props.deleteRecipe(id);
    }

    private recipeRow(recipe: IRecipe, index, deleteRecipe) {
        return (
            <li className="list-group-item" key={index}>
                    <span
                        className="badge alert-danger"
                        onClick={this.handleDelete.bind(this, recipe.id)}
                    >
                        delete
                    </span>

                    <Recipe
                        title={recipe.title}
                        description={recipe.description}
                    />
            </li>
        );
    }

    public render() {
        return (
            <div>
                <h1>Recipes</h1>

                <ul>
                    {this.props.recipes.map((r, index) => this.recipeRow(r, index, deleteRecipe))}
                </ul>

                <h2>Add a new recipe</h2>
                <NewRecipeForm submit={saveRecipe} />
            </div>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    recipes: state.recipes
});

export default connect(mapStateToProps, {saveRecipe, deleteRecipe})(RecipesPage);
