import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from './game.scss';

const Home = props => (
  <div>
    <h1>Game</h1>
    <img src="/images/contend.png" alt="contend" className={styles.icon}/>
  </div>
)

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
)(Home)
