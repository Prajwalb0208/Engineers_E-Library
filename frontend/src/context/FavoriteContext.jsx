// src/context/FavoriteContext.jsx

import React, { createContext, useState, useEffect } from 'react';

// Create a context for managing favorites
export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteBooks(storedFavorites);
  }, []);

  // Save favorites to localStorage whenever the favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteBooks));
  }, [favoriteBooks]);

  // Function to add a book to favorites
  const addToFavorites = (book) => {
    const isFavorite = favoriteBooks.some(favoriteBook => favoriteBook._id === book._id);
    if (isFavorite) {
      alert('This book is already in your favorites!');
    } else {
      setFavoriteBooks([...favoriteBooks, book]);
      alert(`${book.name} has been added to your favorites!`);
    }
  };

  // Function to remove a book from favorites
  const removeFromFavorites = (bookId) => {
    const updatedFavorites = favoriteBooks.filter(book => book._id !== bookId);
    setFavoriteBooks(updatedFavorites);
  };

  return (
    <FavoriteContext.Provider value={{ favoriteBooks, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};
