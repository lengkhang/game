import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './smear.css';


function Smear({ prepingOrder }) {
  return (
    <div className="smearContainer">
      Smear
      <div className="prepContainer">
        {
          prepingOrder.map(item => <span> {item} </span>)
        }
      </div>
      <button className="smearButton">Smear</button>
    </div>
  );
}

export default Smear;
