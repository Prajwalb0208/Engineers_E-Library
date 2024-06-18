import React, { useState, useEffect } from 'react';
import SearchBar from '../Search/Search.jsx';
import { books } from '../../assets/Mini project/assets.js';
import './BooksGrid.css';

const BooksGrid = () => {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 32; // Maximum books per page
  const maxBooksPerRow = 4; // Maximum books per row

  useEffect(() => {
    const uniqueCategories = Array.from(new Set(books.map(book => book.category)));
    setCategories(uniqueCategories);
    setFilteredBooks(books);
  }, []);

  const handleSearch = (searchTerm, selectedCategory) => {
    let filteredResults = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || book.category === selectedCategory)
    );
    setFilteredBooks(filteredResults);
    setCurrentPage(1); // Reset pagination to first page after search
  };

  // Pagination logic
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id='books-grid'>
      <h2>All Books</h2>
      <SearchBar categories={categories} onSearch={handleSearch} />
      <div className="books-grid">
        {currentBooks.length > 0 ? (
          currentBooks.map((book, index) => (
            <div key={book.id} className="book-card">
              <h2>{book.title}</h2>
              <img src={book.bookcover} alt={`Cover of ${book.title}`} />
              <p>Author: {book.author.join(', ')}</p>
              <p>Publisher: {book.publisher}</p>
              <p>Description: {book.description}</p>
              <a href={book.pdf} target="_blank" rel="noopener noreferrer" download>Download PDF</a>
            </div>
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
      {filteredBooks.length > booksPerPage && (
        <Pagination
          booksPerPage={booksPerPage}
          totalBooks={filteredBooks.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

const Pagination = ({ booksPerPage, totalBooks, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className={number === currentPage ? 'page-item active' : 'page-item'}>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BooksGrid;
