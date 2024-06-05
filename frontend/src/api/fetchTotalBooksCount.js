// src/api/fetchTotalBooksCount.js

import fetchBooks from './openLibraryAPI';

const TOTAL_BOOKS_TO_FETCH = 3200;

const fetchTotalBooksCount = async () => {
  try {
    const allBooks = await fetchBooks(1); // Fetch books for the first page
    const totalBooksCount = allBooks.numFound || 800; // Extract total count from API response
    return Math.min(totalBooksCount, TOTAL_BOOKS_TO_FETCH); // Return the minimum of actual count and the limit
  } catch (error) {
    console.error('Error fetching total books count:', error);
    throw error;
  }
};

export default fetchTotalBooksCount;
