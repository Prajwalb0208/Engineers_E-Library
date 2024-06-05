import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Search/Search';
import Viewer from './components/Viewer/Viewer';
import Navbar from './components/Navbar/navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/viewer" element={<Viewer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
