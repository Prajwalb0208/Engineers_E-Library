import axios from 'axios';

const fetchTotalBooksCount = async () => {
  const url = 'https://openlibrary.org/search.json';
  const params = {
    q: 'engineering',
    subject: 'engineering',
    limit: 1, // Only need to fetch one book to get the total count
    has_fulltext: true, // Only count books with fulltext available
  };

  try {
    const response = await axios.get(url, { params });
    const { numFound } = response.data;
    return numFound;
  } catch (error) {
    console.error('Error fetching total books count:', error);
    throw error;
  }
};

export default fetchTotalBooksCount;
