import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Search from './components/Search/Search';
import Navbar from './components/Navbar/navbar';
import Header from './components/Header/Header';
// import Body from './components/Body/Body';
import BooksGrid from './components/BooksGrid/BooksGrid';
import Footer from './components/Footer/Footer';
// import SearchBar from './components/Search/Search';

const App = () => {

  // const [showLogin,setShowLogin]=useState(false)

  return (
    <Router>
      <div className="app">
        {/* <Navbar setShowLogin={setShowLogin}/> */}
        <Navbar/>
        <Header />
        <BooksGrid/>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
