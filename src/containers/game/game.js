import React, { Component } from 'react'
// import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './game.css';

import Header from '../header/header';
import Customer from '../customer/customer';
import PrepStation from '../prepStation/prepStation';
import { addIngredient, smearIngredients, clearPrep } from '../../modules/game';
import { Link } from 'react-router-dom'

class Game extends Component {

  render() {
    const { addIngredient, ingredients, prepingOrder, smearIngredients, clearPrep } = this.props;

    return (
      <div>
        <header>
          <Link to="/">restart</Link>
        </header>
        <div className="gameContainer">
          <div className="prepStationContainer">
            <Header />
            <Customer />
            <PrepStation
              addIngredient={addIngredient}
              ingredients={ingredients}
              prepingOrder={prepingOrder}
              smearIngredients={smearIngredients}
              clearPrep={clearPrep} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.game.data.ingredients,
  prepingOrder: state.game.prepingOrder
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addIngredient,
  smearIngredients,
  clearPrep
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)
