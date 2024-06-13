import React, { useState } from 'react';
import SearchBar from '../Search/Search.jsx';
import { books } from '../../assets/Mini project/assets.js';
import './BooksGrid.css';

const BooksGrid = () => {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const categories = Array.from(new Set(books.map(book => book.category))); // Extract unique categories

  const handleSearch = (searchTerm, selectedCategory) => {
    let filteredResults = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || book.category === selectedCategory)
    );
    setFilteredBooks(filteredResults);
  };

  return (
    <div>
      <SearchBar categories={categories} onSearch={handleSearch} />
      <div className="books-grid">
        {filteredBooks.map(book => (
          <div key={book.id} className="book-card">
            <h2>{book.title}</h2>
            <img src={book.bookcover} alt={`Cover of ${book.title}`} />
            <p>Author: {book.author.join(', ')}</p>
            <p>Publisher: {book.publisher}</p>
            <p>Description: {book.description}</p>
            <a href={book.pdf} target="_blank" rel="noopener noreferrer" download>Download PDF</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksGrid;
