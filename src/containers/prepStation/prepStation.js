import React from 'react'
import './prepStation.css';

import Ingredients from './components/ingredients/ingredients';
import Plate from './components/plate/plate';
import Compliment from './components/compliment/compliment';


function PrepStation({ removeIngredient, addIngredient, ingredients, prepingOrder, smearIngredients, clearPrep }) {
  return (
    <div className="controllerContainer">
      <Ingredients addIngredient={addIngredient} items={ingredients} />
      <Plate removeIngredient={removeIngredient} prepingOrder={prepingOrder} smearIngredients={smearIngredients} clearPrep={clearPrep} />
      <Compliment />
    </div>
  );
};


export default PrepStation;
