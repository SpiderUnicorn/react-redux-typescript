import { throws } from 'assert';
import React, {Component} from 'react';
import {saveRecipe, deleteRecipe} from 'actions';
import {Action} from 'redux';
import {connect } from 'react-redux';
import {ApplicationState} from 'reducers';
import {NewRecipeForm} from 'components/NewRecipeForm';
import {Recipe} from 'model/recipe';
import {RecipeCard} from 'components/RecipeCard';

/** Props for the <RecipePage> */
interface RecipesPageProps {
    readonly recipes: ReadonlyArray<Recipe>;
    readonly saveRecipe: (recipe: Recipe) => Action;
    readonly deleteRecipe: (id: number) => Action;
    readonly loading: boolean;
}

/** Map the recipes to the state in the store */
const mapStateToProps = (state: ApplicationState) => ({
    recipes: state.recipes,
    loading: state.saveLoading
});

/** The page for displaying recipes and their crud-controls */
@connect(mapStateToProps, {saveRecipe, deleteRecipe})
export class RecipesPage extends Component<RecipesPageProps, any> {

    private toRecipeCard = (recipe: Recipe) => (
        <RecipeCard
            recipe={recipe}
            deleteRecipe={this.props.deleteRecipe}
        />
    )

    public render() {
        return (
            <div>
                <h1>Recipes</h1>
                <hr />

                <div className="row">
                    {this.props.recipes.map(this.toRecipeCard)}
                </div>

                <hr />
                <div className="col-sm-4">
                    <h2>Add a new recipe</h2>
                    <NewRecipeForm submit={this.props.saveRecipe} loading={this.props.loading} />
                </div>

            </div>
        );
    }
}