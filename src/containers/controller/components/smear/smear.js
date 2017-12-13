import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './smear.css';

class Smear extends Component {
  render() {
    return (
      <div className="smearContainer">
        Smear
        <div className="prepContainer">Prep items</div>
        <button className="smearButton">Smear</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
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
)(Smear)
