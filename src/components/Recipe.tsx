import * as React from 'react'

export default ({title, description}) => (
   <li className="list-group-item">
      {title} 
      <span> - </span>
      <span className="text-muted">
         {description}
      </span>
   </li>
)