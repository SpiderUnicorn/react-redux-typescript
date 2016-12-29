import * as React from 'react'

import Recipe from 'components/Recipe'

const recipeRow = (r, index) => (
   <Recipe 
      title={r.title} 
      description={r.description} 
      key={index} 
   />
)

export default ({recipes}) => ( 
   <ul className="list-group">
      {recipes.map(recipeRow)}
   </ul>
)