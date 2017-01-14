import React, {Component, SyntheticEvent } from 'react';
import {Recipe} from 'model/recipe';

/** Props for the <NewRecipeForm> component */
export interface NewRecipeFormProps {
   readonly submit: (recipe: Recipe) => void;
   readonly loading: boolean;
}

/** Form for adding new recipes */
export class NewRecipeForm extends Component<NewRecipeFormProps, Recipe> {

  /** Using property initializer to set the state of the instance
   * A concise alternative to using constructors
   */
  public state = {title: '', description: ''};

  private handleTitleChange = (event) => {
    const recipe = this.state;
    recipe.title = event.target.value;
    this.setState(recipe);
  }

  private handleDescriptionChange = (event) => {
    const recipe = this.state;
    recipe.description = event.target.value;
    this.setState(recipe);
  }

  private handleSubmit = (event) => {
    event.preventDefault();

    this.props.submit({
        title: this.state.title,
        description: this.state.description
    });

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
              className="btn btn-info btn-block"
              onClick={this.handleSubmit}
          >
              Add Recipe
              {this.props.loading ? <i className="fa fa-circle-o-notch fa-spin fa-fw" aria-hidden="true" /> : ''}
          </button>
        </form>
    );
  }
}
