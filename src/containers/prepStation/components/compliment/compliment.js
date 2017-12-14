import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './compliment.css';

import { giveCompliment } from '../../../../modules/game';

class Compliment extends Component {
  render() {
    return (
      <div className="complimentContainer">
        <div className="complimentButton" onClick={this.props.giveCompliment.bind(this)}>
          <img src={require("../../../../static/images/icon/compliment_button.svg")} alt="compliment" />
        </div>
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
  giveCompliment
  // incrementAsync,
  // decrement,
  // decrementAsync,
  // changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Compliment)
