import React from 'react'
import './ingredient.css';

function Ingredient({ name, id, onClick, image }) {
  return (
    <div onClick={onClick.bind(this, id)} className="ingredient">
      <img src={image} alt={name} />
    </div>
  );
};

export default Ingredient;