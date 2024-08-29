import React from 'react';

const Cart = ({ cartItems }) => {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item._id}>
                <span>{item.name}</span>
                <span>{`$${item.price} x ${item.quantity}`}</span>
              </li>
            ))}
          </ul>
          <div className="total">
            <h2>Total: ${totalAmount.toFixed(2)}</h2>
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
