import React, { Component } from 'react'
// import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './prepStation.css';

import Ingredients from './components/ingredients/ingredients';
import Smear from './components/smear/smear';
import Compliment from './components/compliment/compliment';

class PrepStation extends Component {
  render() {
    return (
      <div className="controllerContainer">
        <Ingredients items={this.props.ingredients} />
        <Smear />
        <Compliment />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  ingredients: state.game.data.ingredients
  // isIncrementing: state.counter.isIncrementing,
  // isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  // increment,
  // incrementAsync,
  // decrement,
  // decrementAsync,
  // changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrepStation)
