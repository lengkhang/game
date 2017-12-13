import React, { Component } from 'react'
import Ingredient from '../ingredient/ingredient';

import './ingredients.css';

function Ingredients({ items, addIngredient }) {
  return (
    <div className="ingredients">
      {
        items.map( ({name, id}) => 
          <Ingredient addIngredient={addIngredient} id={id} key={id} name={name} /> 
        )  
      }
    </div>
  );
}

export default Ingredients;
