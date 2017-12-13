import React from 'react'
import './smear.css';

import data from '../../../../config/data';

function getImageBasedOnId(id) {
  const ingredientConfig = data.ingredients;

  return ingredientConfig.find(item => item.id === id).image;
}

function Smear({ prepingOrder, smearIngredients, clearPrep }) {
  return (
    <div className="smearContainer">
      <div className="prepContainer">
        {
          prepingOrder.map((item, index) =>
            <img key={`ingredient-${index}`} className="prepIngredient"
              src={getImageBasedOnId(item)} alt={item} />)
        }
      </div>
      <button className="smearButton" onClick={smearIngredients.bind(this, prepingOrder)}>Smear</button>
      <button className="clearButton" onClick={clearPrep.bind(this)}>Clear</button>
    </div>
  );
}

export default Smear;
