import React, { Component } from "react";
import Order from './Order'

class Restaurant extends Component {



  render() {

    return (
      <div className='container container1' >
        <h3 className='row'>Restaurant Orders</h3>
        <ul className="list-group list-group-flush">
          <Order orderType={'Pizza'} />
          <Order orderType={'Salad'} />
        </ul>
      </div >
    )
  }
}


export default Restaurant;

