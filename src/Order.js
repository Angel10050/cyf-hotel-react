import React, { Component } from 'react'
import RestaurantButton from './RestaurantButton'



class Order extends Component {
    constructor(props) {
        super(props)
        this.state = { orders: 0 }
    }

    addOrder = () => {
        console.log('agregar pedido')
        this.setState((stateprev) => {
            return { orders: stateprev.orders + 1 }
        })
    }
    render() {
        return (
            <li className="list-group-item">
                {this.props.orderType}:{this.state.orders}
                <RestaurantButton addOrderSh={this.addOrder} />
            </li>
        )
    }
}

export default Order
