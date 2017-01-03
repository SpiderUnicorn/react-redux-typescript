import React from 'react';
import {Recipe as IRecipe} from 'model/recipe';

export interface Props {
   title: string;
   description: string;
}

const Recipe = ({title, description}: Props) => (
   <span>
      {title}
      <span> - </span>
      <span className="text-muted">
         {description}
      </span>
   </span>
);

export default Recipe;
