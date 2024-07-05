import React from 'react';
import './BookInfo.css';

const BookInfo = ({ book, onClose }) => {
  return (
    <div className="book-info-popup">
      <div className="book-info-content">
        <button className="close-button" onClick={onClose}>✖</button>
        <h2>{book.title}</h2>
        <p><strong>Author:</strong> {book.author.join(', ')}</p>
        <p><strong>Publisher:</strong> {book.publisher}</p>
        <p><strong>Description:</strong> {book.description}</p>
        <p><strong>Category:</strong> {book.category}</p>
      </div>
    </div>
  );
};

export default BookInfo;
