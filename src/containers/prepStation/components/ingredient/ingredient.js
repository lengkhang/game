import React, { Component } from 'react'
import './ingredient.css';


function Ingredient({ name }) {
  return (
    <div className="ingredient">
      {name}
    </div>
  );
};


export default Ingredient;
