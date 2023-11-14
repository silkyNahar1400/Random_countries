import React from "react";
import "./cart.css";

const Cart = (props) => {
    const cart = props.cart;
    const population= cart.reduce((previousValue, cart) =>  previousValue + cart.population, 0);
    return (
        <div className="cart">
            <h3>Country Added: {cart.length}</h3>
            <h3>Total Population :{population}  </h3>
        </div>
    );
}
export default Cart;