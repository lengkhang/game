import React, { Component } from 'react'
// import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './game.css';

class Game extends Component {
  render() {
    return (
      <div>
        <h1>Game</h1>
        <img className="icon" src={require("../static/images/icon/contend.png")} alt="contend" />
      </div>
    );
  }
}

// const Home = props => (
//   <div>
//     <h1>Game</h1>
//     <img src={require("../static/images/icon/contend.png")} className={styles.icon} />
//   </div>
// )

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
)(Game)
