import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './timer.css';

import { tickAction } from '../../../../modules/game';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsRemaining: props.initialCount
    };
  }

  tick() {
    const { secondsRemaining } = this.state;
    const { tickAction } = this.props;

    this.setState({ secondsRemaining: secondsRemaining - 1 });
    tickAction(this.state.secondsRemaining);

    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  }

  componentDidMount() {   
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  strPadLeft(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  }

  render() {
    const { className } = this.props;
    const currentTime = this.state.secondsRemaining;
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime - minutes * 60;

    const time = this.strPadLeft(minutes, '0', 2) + ':' + this.strPadLeft(seconds, '0', 2);

    return (
      <div className={className}><h3>Time remaining: {time}</h3></div>
    );
  }
}

const mapStateToProps = state => ({
  initialCount: state.game.timer,
  // isIncrementing: state.counter.isIncrementing,
  // isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  tickAction
  // incrementAsync,
  // decrement,
  // decrementAsync,
  // changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer)