import React from 'react';

/** Props for the <Recipe> component */
export interface Props {
   title: string;
   description: string;
}

/** Component for displaying recipe information */
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
