import React, { Component } from 'react'
// import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './customer.css';

class Customer extends Component {
  render() {
    const { currentOrders } = this.props;

    return (
      <div className="customerContainer">
        {
          currentOrders.map((order, index) => {
            const satisfaction = order.customer.satisfaction.toString();
            const avatars = order.customer.avatars;
            const avatarState = avatars[satisfaction];

            return (<img key={index} className="avatar" src={avatarState} alt={satisfaction} />)
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentOrders: state.game.currentOrders
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
