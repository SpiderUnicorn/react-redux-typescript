import React from 'react';

/** Props for the <Recipe> component */
export interface RecipeProps {
   title: string;
   description: string;
}

/** Component for displaying recipe information */
export const Recipe = ({title, description}: RecipeProps) => (
   <span>
      {title}
      <span> - </span>
      <span className="text-muted">
         {description}
      </span>
   </span>
);
