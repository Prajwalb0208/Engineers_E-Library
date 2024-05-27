import React from 'react';
import Navbar from './components/Navbar/navbar';
import Header from './components/Header/Header';
import Search from './components/Search/Search';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Search/>
    </div>
  );
};

export default App;
