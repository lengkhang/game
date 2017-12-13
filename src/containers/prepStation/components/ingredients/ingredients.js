import React from 'react'
import Ingredient from '../ingredient/ingredient';

import './ingredients.css';

function Ingredients({ items, addIngredient }) {
  return (
    <div className="ingredients">
      {
        items.map( ({name, id, image}) => 
          <Ingredient addIngredient={addIngredient} id={id} key={id} name={name} image={image} /> 
        )  
      }
    </div>
  );
}

export default Ingredients;
