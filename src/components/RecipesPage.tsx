import { throws } from 'assert';
import React, {Component} from 'react';
import {saveRecipe, deleteRecipe} from 'actions';
import {connect, Action} from 'react-redux';
import {ApplicationState} from 'reducers';
import {NewRecipeForm} from 'components/NewRecipeForm';
import {Recipe as IRecipe} from 'model/recipe';
import {Recipe} from 'components/Recipe';

/** Props for the <RecipePage> */
interface RecipesPageProps {
    recipes: IRecipe[];
    saveRecipe: (title: string, description: string) => Action;
    deleteRecipe: (id: number) => Action;
}

const mapStateToProps = (state: ApplicationState) => ({
    recipes: state.recipes
});

/** The page for displaying recipes and their crud-controls */
@connect(mapStateToProps, {saveRecipe, deleteRecipe})
export class RecipesPage extends Component<RecipesPageProps, any> {

    /** Delegate to the delete action creator 
     * @prop {number} id Id of recipe to delete
     */
    private handleDelete = (id: number) => this.props.deleteRecipe(id);

    /** Displaying the individual recipes */
    private displayRecipe(recipe: IRecipe, deleteRecipe) {
        return (
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-block">
                        <h4 className="card-title">{recipe.title}</h4>
                        <p className="card-text">{recipe.description}</p>
                        <a href="#" className="btn btn-sm btn-danger" onClick={deleteRecipe}>delete</a>
                    </div>
                </div>
            </div>
        );
    }

    public render() {
        return (
            <div>
                <h1>Recipes</h1>
                <hr />

                <div className="row">
                    {this.props.recipes.map(recipe => this.displayRecipe(recipe, deleteRecipe))}
                </div>

                <hr />
                <div className="col-sm-4">
                    <h2>Add a new recipe</h2>
                    <NewRecipeForm submit={this.props.saveRecipe} />
                </div>

            </div>
        );
    }
}