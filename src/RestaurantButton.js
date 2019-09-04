import React from 'react'


const RestaurantButton = (props) => {
    return (
        <button className="btn btn-primary buttonRestaurant" onClick={props.addOrderSh}>add</button>
    )
}
export default RestaurantButton