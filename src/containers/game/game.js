import React, { Component } from 'react'
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
    const { addIngredient, ingredients, prepingOrder, smearIngredients, clearPrep, compliment } = this.props;

    return (
      <div>
        <header>
          <Link to="/">restart</Link>
        </header>
        <div className="gameContainer">
          <div className="prepStationContainer">
            <Header />
            <Customer />
            <div className="complimentText"><h3 className="customH3">&nbsp;{compliment}</h3></div>
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
  prepingOrder: state.game.prepingOrder,
  compliment: state.game.compliment
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
