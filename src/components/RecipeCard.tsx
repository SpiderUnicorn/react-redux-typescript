import React from 'react';
import {Recipe} from 'model/recipe';

/** Props for the <RecipeCard> component */
export interface RecipeCardProps {
    readonly recipe: Recipe;
    readonly deleteRecipe: Function
}

/** A card view of a recipe */
export const RecipeCard = ({recipe, deleteRecipe}: RecipeCardProps) => {

     /** Used a separate method to access the ID of the recipe. */
    const handleDelete = () => {
        deleteRecipe(recipe.id);
    };

    return (
        <div className="col-sm-4">
            <div className="card">
                <div className="card-block">
                    <h4 className="card-title">{recipe.title}</h4>
                    <p className="card-text">{recipe.description}</p>
                    <a href="#" className="btn btn-sm btn-danger" onClick={handleDelete}>delete</a>
                </div>
            </div>
        </div>
    );
};