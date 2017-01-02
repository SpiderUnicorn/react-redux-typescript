import React, {Component, FormEvent} from 'react';
import {IRecipe} from 'model/recipe';

export interface Props {
   submit: Function
}

export default class NewRecipeForm extends Component<Props, IRecipe> {

   constructor() {
      super();

      this.state = {
         title: '',
         description: ''
      };

      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   private handleTitleChange(event) {
      const recipe = this.state;
      recipe.title = event.target.value;
      this.setState(recipe);
    }

    private handleDescriptionChange(event) {
      const recipe = this.state;
      recipe.description = event.target.value;
      this.setState(recipe);
    }

    private handleSubmit(event) {
      event.preventDefault();

      this.props.submit(
          this.state.title,
          this.state.description
        );

      this.setState({title: '', description: ''});
    }

   public render() {
      return (
         <form>
            <div className="form-group">
               <label htmlFor="recipeTitle">Title</label>
               <input
                  id="recipeTitle"
                  placeholder="Title"
                  className="form-control"
                  type="text"
                  value={this.state.title}
                  onChange={this.handleTitleChange}
               />
            </div>

            <div className="form-group">
               <label htmlFor="recipeDescription">Description</label>
               <input
                  id="recipeDescription"
                  placeholder="Description"
                  className="form-control"
                  type="text"
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
               />
            </div>

            <button
               className="btn btn-info"
               onClick={this.handleSubmit}
            >
               Add Recipe
            </button>
         </form>
      );
   }
}
