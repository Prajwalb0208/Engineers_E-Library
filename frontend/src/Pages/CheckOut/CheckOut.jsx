import React, { useContext } from 'react';
import './CheckOut.css';
import { CartContext } from '../../context/CartContext';
import Cart from '../../Components/Cart/Cart'; // Import the Cart component

const CheckOut = () => {
  const { cartItems } = useContext(CartContext); // Access cartItems from context

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default CheckOut;
