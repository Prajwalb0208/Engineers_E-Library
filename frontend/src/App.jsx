import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Search from './components/Search/Search';
import Navbar from './components/Navbar/navbar';
import Header from './components/Header/Header';
// import Body from './components/Body/Body';
import BooksGrid from './components/BooksGrid/BooksGrid';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import UserProfile from './components/UserProfile/UserProfile';
// import SearchBar from './components/Search/Search';

const App = () => {

  // const [showLogin,setShowLogin]=useState(false);
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   const uniqueCategories = Array.from(new Set(books.map(book => book.category)));
  //   setCategories(uniqueCategories);
  // }, []);

  return (
    <Router>
      <div className="app">
        {/* <Navbar setShowLogin={setShowLogin}/> */}
        <Navbar/>
        <Header />
        <BooksGrid/>
        {/* <LoginPopup/> */}
        <UserProfile/>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
