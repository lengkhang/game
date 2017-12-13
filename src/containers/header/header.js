import React, { Component } from 'react'
// import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './header.css';

import Timer from './components/timer/timer';

class Header extends Component {
  render() {
    return (
      <div className="container">
        Score: {this.props.score}
        <Timer className="timerStyle" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  score: state.game.score
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
)(Header)
