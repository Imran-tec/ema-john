import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
const totalPrice = cart.reduce((total, product) => total+ product.price,0)
    

    return (
        <div>
          <h4>Ordered Items: {cart.length}</h4>  
    <h5>Total price: {totalPrice.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;