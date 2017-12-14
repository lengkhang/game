import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Intro from '../intro/intro';

import { initGame } from '../../modules/game';

const Home = props => (
  <div>
    <Intro onStart={() => {
      props.initGame();
      props.changePage();
    }}/>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  initGame,
  changePage: () => push('/play')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Home)
