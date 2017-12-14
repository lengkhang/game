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

const mapDispatchToProps = dispatch => bindActionCreators({
  giveCompliment
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Compliment)
