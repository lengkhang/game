import React, { Component } from 'react'
import './ingredient.css';

function Ingredient({ name, id, addIngredient, image }) {
  return (
    <div onClick={addIngredient.bind(this, id)} className="ingredient">
      <img className="" src={image} />
    </div>
  );
};


export default Ingredient;
