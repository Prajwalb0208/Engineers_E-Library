// src/api/openLibraryAPI.js

import axios from 'axios';

const fetchBooks = async (page) => {
  const url = 'https://openlibrary.org/search.json';
  const params = {
    q: 'engineering',
    subject: 'engineering',
    limit: 32, // Fetch 32 books per page
    offset: (page - 1) * 32,
  };

  try {
    const response = await axios.get(url, { params });
    return response.data.docs;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export default fetchBooks;
