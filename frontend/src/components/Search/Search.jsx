import React, { useState, useEffect } from 'react';
import fetchBooks from '../../api/openLibraryAPI';
import fetchTotalBooksCount from '../../api/fetchTotalBooksCount';
import './Search.css';

const ROWS_PER_PAGE = 4;
const COLUMNS_PER_PAGE = 8;
const BOOKS_PER_PAGE = ROWS_PER_PAGE * COLUMNS_PER_PAGE;

const Search = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadBooks = async () => {
      setIsLoading(true);
      try {
        const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
        const booksData = await fetchBooks(currentPage);
        setBooks(booksData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading books:', error);
        setIsLoading(false);
      }
    };

    loadBooks();
  }, [currentPage]);

  useEffect(() => {
    const calculateTotalPages = async () => {
      try {
        const totalBooksCount = await fetchTotalBooksCount();
        const calculatedTotalPages = Math.ceil(totalBooksCount / BOOKS_PER_PAGE);
        setTotalPages(calculatedTotalPages);
      } catch (error) {
        console.error('Error loading total pages:', error);
      }
    };

    calculateTotalPages();
  }, []);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      console.log("Already on the last page");
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      console.log("Already on the first page");
    }
  };

  return (
    <div className='search-container'>
      <div className="search-header">
        <hr />
        <h1>All books</h1>
      </div>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <img src={`http://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author_name && book.author_name.join(', ')}</p>
          </div>
        ))}
        {isLoading && <div>Loading...</div>}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default Search;
