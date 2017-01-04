import React, {Component } from 'react';
import {Recipe} from 'model/recipe';

/** Props for the <NewRecipeForm> component */
export interface Props {
   submit: (title: string, description: string ) => void;
}

/** Form for adding new recipes */
export default class NewRecipeForm extends Component<Props, Recipe> {

   constructor() {
      super();

      this.state = {
         id: undefined,
         title: '',
         description: ''
      };

      // Binding to allow correct use of "this" within the click-handlers
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

      this.setState({id: undefined, title: '', description: ''});
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
