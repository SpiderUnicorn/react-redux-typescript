import * as React from 'react';
import {IRecipe} from 'model/recipe';

const Recipe = ({title, description}: IRecipe) => (
   <li className="list-group-item">
      {title}
      <span> - </span>
      <span className="text-muted">
         {description}
      </span>
   </li>
);

export default Recipe;
