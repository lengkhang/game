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
            if (order.customer) {
              const satisfaction = order.customer.satisfaction.toString();
              const avatars = order.customer.avatars;
              const avatarState = avatars[satisfaction];
              const orderItemName = order.menuItem.name;

              const avatarStyle = "avatar" + (order.served ? " nudge" : "");

              return (
                <div>
                  <div className="orderMenu">{orderItemName}</div>
                  <img key={`customer-${index}`} className={avatarStyle} src={avatarState} alt={satisfaction} />
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
