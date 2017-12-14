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
      <div className="smearActionContainer">
        <div onClick={smearIngredients.bind(this, prepingOrder)}>
          <img className="smearButton" src={require("../../../../static/images/icon/smear_button.svg")} alt="smear and serve"/>
        </div>
        <div onClick={clearPrep.bind(this)}>
          <img className="discardButton" src={require("../../../../static/images/icon/discard_button.svg")} alt="discard"/>
        </div>
      </div>
    </div>
  );
}

export default Smear;
