import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './customer.css';

import {CUSTOMER_SATISFACTION} from "../../config/data";

class Customer extends Component {
  render() {
    const { currentOrders } = this.props;

    return (
      <div className="customerContainer">
        {
          currentOrders.map((order, index) => {
            if (order.customer) {
              const satisfaction = order.customer.satisfaction.toString();
              const avatars = order.customer.avatars;
              const avatarState = avatars[satisfaction];
              const orderItemName = order.menuItem.name;
              const orderItemImage = order.menuItem.image;

              const avatarStyle = "avatar" + (order.served ? " nudge" : "") + (order.customer.satisfaction === CUSTOMER_SATISFACTION.ANGRY ? " angry" : "");

              return (
                <div className="customerOrderContainer" key={`customer-${index}`} >
                  <div className="orderMenu">{!order.served && <img src={orderItemImage} alt={orderItemName} />}</div>

                  <img className={avatarStyle} src={avatarState} alt={satisfaction} />
                </div>
              )
            }

            return (<div key={`customer-${index}`} className="emptySeat"></div>);
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
