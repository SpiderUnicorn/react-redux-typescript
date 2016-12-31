import * as React from 'react'
import {IRecipe} from 'model/recipe'

export default ({title, description}: IRecipe) => (
   <li className="list-group-item">
      {title} 
      <span> - </span>
      <span className="text-muted">
         {description}
      </span>
   </li>
)