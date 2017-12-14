import React from 'react'
import './ingredient.css';

function Ingredient({ onClick, ingredient, className }) {
  const  { image, name } = ingredient;

  return (
    <div onClick={onClick.bind(null, { ...ingredient} )} className={`ingredient ${className || ''}`}>
      <img src={image} alt={name} />
    </div>
  );
};

export default Ingredient;