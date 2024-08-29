import React from 'react';
import './Cart.css';

const Cart = ({ cartItems }) => {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item._id}>
                <span>{item.name}</span>
                <span>{`$${item.price}`}</span>
              </li>
            ))}
          </ul>
          <div className="total">
            <h2>Total: ${totalAmount}</h2>
          </div>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
