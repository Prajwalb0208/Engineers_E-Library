import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Search from './components/Search/Search';
// import Viewer from './components/Viewer/Viewer';
import Navbar from './components/Navbar/navbar';
import Header from './components/Header/Header';
// import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import BooksGrid from './components/Test/BooksGrid';
// import SearchBar from './components/Search/Search';
import Abc from '../abc';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Header />
        {/* <Body/> */}
        {/* <SearchBar/> */}
        <BooksGrid/>
        <Footer />
        <Abc/>
      </div>
    </Router>
  );
};

export default App;
