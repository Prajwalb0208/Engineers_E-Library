import React, { useState, forwardRef } from 'react';
import './Search.css';

const SearchBar = forwardRef(({ categories, onSearch }, ref) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      onSearch(searchTerm, selectedCategory);
    }
  };

  return (
    <div ref={ref} className="search-bar-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSearch}
      />
      <select
        className="category-select"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        onKeyDown={handleSearch}
      >
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
});

export default SearchBar;
