import React, { Component } from 'react'
// import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './customer.css';

class Customer extends Component {
  render() {
    return (
      <div className="customerContainer">
        <div className="empty-seat"/>
        <div className="empty-seat"/>
        <div className="empty-seat"/>
        <div className="empty-seat"/>

        {/* <img className="icon" src={require("../../static/images/icon/contend.png")} alt="contend" /> */}
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
)(Customer)
