import React, { useState, useEffect } from 'react';
import SearchBar from '../Search/Search.jsx';
import BookInfo from '../BookInfo/BookInfo.jsx';
import './BooksGrid.css';
import {books,assets} from '../../assets/assets.js';

const BooksGrid = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBook, setSelectedBook] = useState(null);
  const booksPerPage = 32; // Maximum books per page

  useEffect(() => {
    // Fetch books from the backend API
    fetch('http://localhost:4000/api/book/list')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setBooks(data.data);
          setFilteredBooks(data.data);
          const uniqueCategories = Array.from(new Set(data.data.map(book => book.category)));
          setCategories(uniqueCategories);
        } else {
          console.error('Failed to fetch books');
        }
      })
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  const handleSearch = (searchTerm, selectedCategory) => {
    let filteredResults = books.filter(book =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || book.category === selectedCategory)
    );
    setFilteredBooks(filteredResults);
    setCurrentPage(1); // Reset pagination to first page after search
  };

  const handleBookInfo = (book) => {
    setSelectedBook(book);
  };

  const closeBookInfo = () => {
    setSelectedBook(null);
  };

  // Pagination logic
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id='books-grid'>
      <SearchBar categories={categories} onSearch={handleSearch} />
      <div className="books-grid">
        {currentBooks.length > 0 ? (
          currentBooks.map((book) => (
            <div key={book._id} className="book-card">
              <div className="book-info">
                <i className="info-icon" onClick={() => handleBookInfo(book)}>ℹ</i> {/* Info icon */}
              </div>
              <h2>{book.name}</h2>
              <img src={`http://localhost:4000/uploads/${book.bookcover}`} alt={`Cover of ${book.name}`} />
              <div className="price">{`$${book.price}`}</div>
              <div className="buttons">
                <button className="add-to-cart">Add to Cart</button>
                <button className="favorite">
                  <img src={assets.heart} alt="Favorite" /> {/* Heart-shaped favorite icon */}
                </button>
              </div>
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
      {selectedBook && <BookInfo book={selectedBook} onClose={closeBookInfo} />}
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
