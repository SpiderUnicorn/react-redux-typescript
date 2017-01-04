import React, {Component} from 'react';
import {saveRecipe, deleteRecipe} from 'actions';
import {connect, Action} from 'react-redux';
import {ApplicationState} from 'reducers';

import NewRecipeForm from 'components/NewRecipeForm';
import {Recipe as IRecipe} from 'model/recipe';
import Recipe from 'components/Recipe';

/** Props for the <RecipePage> */
interface Props {
    recipes: IRecipe[];
    saveRecipe: (title: string, description: string) => Action;
    deleteRecipe: (id: number) => Action;
}

/** The page for displaying recipes and their crud-controls */
class RecipesPage extends Component<Props, {}> {

    /** Delegate to the delete action creator 
     * @prop {number} id Id of recipe to delete
     */
    private handleDelete(id: number) {
        this.props.deleteRecipe(id);
    }

    /** Displaying the individual recipes */
    private recipeRow(recipe: IRecipe, deleteRecipe) {
        return (
            <li className="list-group-item" key={recipe.id}>
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
                    {this.props.recipes.map(recipe => this.recipeRow(recipe, deleteRecipe))}
                </ul>

                <h2>Add a new recipe</h2>
                <NewRecipeForm submit={this.props.saveRecipe} />
            </div>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    recipes: state.recipes
});

export default connect(mapStateToProps, {saveRecipe, deleteRecipe})(RecipesPage);
