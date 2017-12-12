import React, { Component } from 'react'
import { connect } from 'react-redux'
import './timer.css';

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsRemaining: props.initialCount
    };
  }

  tick() {
    const { secondsRemaining } = this.state;

    this.setState({ secondsRemaining: secondsRemaining - 1 });

    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  }

  componentDidMount() {
    const { secondsRemaining } = this.state;

    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  strPadLeft(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  }

  render() {
    const currentTime = this.state.secondsRemaining;
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime - minutes * 60;

    const time = this.strPadLeft(minutes,'0',2)+':' + this.strPadLeft(seconds,'0',2);

    return (
      <div>Seconds Remaining: {time}</div>
    );
  }
}