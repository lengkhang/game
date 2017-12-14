import React from 'react'
import './plate.css';

import Ingredient from '../ingredient/ingredient'

function Plate({ removeIngredient, prepingOrder, smearIngredients, clearPrep }) {
  return (
    <div className="smearContainer">
      <div className="plate">
        {
          prepingOrder.map((item, index) =>
            <Ingredient key={`ingredient-${index}`}  
              className="prepIngredient" 
              ingredient={item}
              onClick={removeIngredient.bind(null, index)} 
              alt={item} />
            )
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

export default Plate;
