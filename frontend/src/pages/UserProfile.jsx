import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/Footer';
import UserProfile from './components/UserProfile/UserProfile';

const App = () => {

  return (
    <Router>
      <div className="app">
        <Navbar/>
        <UserProfile/>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
