import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import CheckOut from './Pages/CheckOut/CheckOut';
import LoginPopUp from './Components/LoginPopUp/LoginPopUp';
import UserProfile from './Pages/UserProfile/UserProfile';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/UserProfile' element={<UserProfile />} />
          <Route path='/cart' element={<CheckOut />} />
          <Route path="/signin" element={<LoginPopUp />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
