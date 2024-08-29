// src/App.jsx

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import CheckOut from './Pages/CheckOut/CheckOut';
import LoginPopUp from './Components/LoginPopUp/LoginPopUp';
import UserProfile from './Pages/UserProfile/UserProfile';
import { FavoriteProvider } from './context/FavoriteContext';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <FavoriteProvider>
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/UserProfile' element={<UserProfile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/cart' element={<CheckOut />} />
          <Route path="/signin" element={<LoginPopUp />} />
        </Routes>
        <Footer />
      </div>
    </FavoriteProvider>
  );
};

export default App;
