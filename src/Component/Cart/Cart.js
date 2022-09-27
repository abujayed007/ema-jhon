import React from 'react';


const Cart = (props) => {
   const {cart} = props;
    return (
        <div>
            <h3>Selected Items: {cart.length}</h3>
        </div>
    );
};

export default Cart;