import React, { useState, useEffect } from 'react';
import fetchBooks from '../../api/openLibraryAPI';
import fetchTotalBooksCount from '../../api/fetchTotalBooksCount';
import './Search.css';
import axios from 'axios';

const ROWS_PER_PAGE = 4;
const COLUMNS_PER_PAGE = 8;
const BOOKS_PER_PAGE = ROWS_PER_PAGE * COLUMNS_PER_PAGE;

const Search = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const loadBooks = async () => {
      setIsLoading(true);
      try {
        const { books: booksData } = await fetchBooks(currentPage, selectedCategory, searchTerm);
        setBooks(booksData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading books:', error);
        setIsLoading(false);
      }
    };

    loadBooks();
  }, [currentPage, selectedCategory, searchTerm]);

  useEffect(() => {
    const calculateTotalPages = async () => {
      try {
        const totalBooksCount = await fetchTotalBooksCount(selectedCategory, searchTerm);
        const calculatedTotalPages = Math.ceil(totalBooksCount / BOOKS_PER_PAGE);
        setTotalPages(calculatedTotalPages);
      } catch (error) {
        console.error('Error loading total pages:', error);
      }
    };

    calculateTotalPages();
  }, [selectedCategory, searchTerm]);

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className='search-container'>
      <div className="search-header">
        <hr />
        <h1>All books</h1>
        <input type="text" placeholder="Search books..." onChange={handleSearch} />
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="mechanical">Mechanical Engineering</option>
          <option value="civil">Civil Engineering</option>
          <option value="cs">Computer Science</option>
          <option value="ece">Electronics and Communication Engineering</option>
          <option value="aerospace">Aerospace Engineering</option>
          <option value="chemical">Chemical Engineering</option>
        </select>
      </div>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <img src={`http://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author_name && book.author_name.join(', ')}</p>
            {/* Log book.pdf_url to check if it exists */}
            {console.log("PDF URL:", book.pdf_url)}
            {book.pdf_url && (
              <>
                <a href={book.pdf_url} download>
                  <button>Download PDF</button>
                </a>
                <a href={`/viewer?url=${encodeURIComponent(book.pdf_url)}`} target="_blank" rel="noopener noreferrer">
                  <button>View E-book</button>
                </a>
              </>
            )}
            <button onClick={() => handleAddToFavorites(book)}>Add to Favorites</button>
            {book.pdf_url && (
              <button onClick={() => handleDownloadPDF(book.pdf_url, book.title)}>Download as PDF</button>
            )}
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
