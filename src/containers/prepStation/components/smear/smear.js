import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './smear.css';


function Smear({ prepingOrder, smearIngredients }) {
  return (
    <div className="smearContainer">
      Smear
      <div className="prepContainer">
        {
          prepingOrder.map((item, index) => <span key={`ingredient-${index}`}> {item} </span>)
        }
      </div>
      <button className="smearButton" onClick={smearIngredients.bind(this, prepingOrder)}>Smear</button>
    </div>
  );
}

export default Smear;
