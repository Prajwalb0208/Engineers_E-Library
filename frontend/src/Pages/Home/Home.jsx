import React, { useContext } from 'react';
import './Home.css';
import BooksGrid from '../../Components/BooksGrid/BooksGrid';
import Header from '../../Components/Header/Header';
import AppDownload from '../../Components/AppDownload/AppDownload';
import { CartContext } from '../../context/CartContext';
import Cart from '../../Components/Cart/Cart';

const Home = () => {
  const { addToCart,cartItems } = useContext(CartContext);

  return (
    <div>
      <Header />
      <BooksGrid addToCart={addToCart} />
      <AppDownload />
      <Cart cartItems={cartItems}/>
    </div>
  );
};

export default Home;
