import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map(item => (
          <div key={item._id} className="cart-item">
            <img src={`http://localhost:4000/uploads/${item.bookcover}`} alt={item.name} />
            <div>
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <button className="remove-button" onClick={() => removeFromCart(item._id)}>Remove</button>
            </div>
          </div>
        ))
      )}
      <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
