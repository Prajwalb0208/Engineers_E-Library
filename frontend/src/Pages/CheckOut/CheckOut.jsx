import React, { useContext } from 'react';
import './CheckOut.css';
import { StoreContext } from '../../context/StoreContext';
import Cart from '../../Components/Cart/Cart'; // Import the Cart component

const CheckOut = () => {
  const { cartItems } = useContext(StoreContext); // Access cartItems from context

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <Cart cartItems={cartItems} /> {/* Pass cartItems to the Cart component */}
    </div>
  );
};

export default CheckOut;
