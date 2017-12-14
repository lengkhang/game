import React from 'react'
import Ingredient from '../ingredient/ingredient';

import './ingredients.css';

function Ingredients({ items, addIngredient }) {
  return (
    <div className="ingredients">
      {
        items.map( item => <Ingredient key={item.id} onClick={addIngredient} ingredient={item} />)  
      }
    </div>
  );
}

export default Ingredients;
