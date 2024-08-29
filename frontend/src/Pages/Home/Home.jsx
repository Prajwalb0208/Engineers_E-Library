import React, { useState } from 'react';
import './Home.css';
import BooksGrid from '../../Components/BooksGrid/BooksGrid';
import Header from '../../Components/Header/Header';
import AppDownload from '../../Components/AppDownload/AppDownload';
import Cart from '../../Components/Cart/Cart';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (book) => {
    setCartItems((prevItems) => {
      // Check if the item is already in the cart
      const existingItem = prevItems.find(item => item._id === book._id);
      if (existingItem) {
        // If item already exists, increase quantity (or other logic)
        return prevItems.map(item =>
          item._id === book._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If item does not exist, add it to the cart
        return [...prevItems, { ...book, quantity: 1 }];
      }
    });
  };

  return (
    <div>
      <Header />
      <BooksGrid addToCart={addToCart} />
      <AppDownload />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default Home;
