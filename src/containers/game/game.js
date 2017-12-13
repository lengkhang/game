import React, { Component } from 'react'
// import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './game.css';

import Header from '../header/header';
import Customer from '../customer/customer';
import PrepStation from '../prepStation/prepStation';
import { addIngredient, smearIngredients, clearPrep } from '../../modules/game';

class Game extends Component {
  render() {
    const { addIngredient, ingredients, prepingOrder, smearIngredients, clearPrep } = this.props;

    return (
      <div>
        <h1>Game</h1>
        <Header />
        <Customer />
        <div className="barTable">Bar table pic?</div>
        <PrepStation
          addIngredient={addIngredient}
          ingredients={ingredients}
          prepingOrder={prepingOrder}
          smearIngredients={smearIngredients}
          clearPrep={clearPrep} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  ingredients: state.game.data.ingredients,
  prepingOrder: state.game.prepingOrder
  // isIncrementing: state.counter.isIncrementing,
  // isDecrementing: state.counter.isDecrementing
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
