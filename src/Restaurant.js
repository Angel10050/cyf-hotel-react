import React, { Component } from "react";
import RestaurantButton from './RestaurantButton'

class Restaurant extends Component {

  addOrder = () => {
    console.log('agregar pedido')
  }

  render() {
    const pizzas = 0;
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <li>
            Pizzas: {pizzas} <RestaurantButton addOrderSh={this.props.addOrder} />
          </li>
        </ul>
      </div >
    )
  }
}


export default Restaurant;

