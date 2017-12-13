import React, { Component } from 'react'
import './ingredient.css';

function Ingredient({ name, id, addIngredient }) {
  return (
    <div onClick={addIngredient.bind(this, id)} className="ingredient">
      {name}
    </div>
  );
};


export default Ingredient;
