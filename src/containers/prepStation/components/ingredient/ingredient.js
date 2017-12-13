import React from 'react'
import './ingredient.css';

function Ingredient({ name, id, addIngredient, image }) {
  return (
    <div onClick={addIngredient.bind(this, id)} className="ingredient">
      <img src={image} alt={name} />
    </div>
  );
};

export default Ingredient;