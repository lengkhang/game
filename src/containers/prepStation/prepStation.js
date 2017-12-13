import React from 'react'
import './prepStation.css';

import Ingredients from './components/ingredients/ingredients';
import Smear from './components/smear/smear';
import Compliment from './components/compliment/compliment';


function PrepStation({ addIngredient, ingredients, prepingOrder, smearIngredients, clearPrep }) {
  return (
    <div className="controllerContainer">
      <Ingredients addIngredient={addIngredient} items={ingredients} />
      <Smear prepingOrder={prepingOrder} smearIngredients={smearIngredients} clearPrep={clearPrep} />
      <Compliment />
    </div>
  );
};


export default PrepStation;
