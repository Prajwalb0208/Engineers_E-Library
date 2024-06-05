import axios from 'axios';

const fetchBooks = async (page) => {
  const url = 'https://openlibrary.org/search.json';
  const params = {
    q: 'engineering',
    subject: 'engineering',
    limit: 32, // Fetch 32 books per page
    offset: (page - 1) * 32,
    has_fulltext: true, // Only fetch books with fulltext available
  };

  try {
    const response = await axios.get(url, { params });
    const { docs, numFound } = response.data;

    // Fetch PDF URLs for each book
    const booksWithPDFs = await Promise.all(docs.map(async (book) => {
      try {
        const detailsResponse = await axios.get(`https://openlibrary.org${book.key}.json`);
        const pdf = detailsResponse.data.formats?.['application/pdf'];
        book.pdf_url = pdf ? pdf.url : null;
      } catch (err) {
        console.error(`Error fetching details for book ${book.key}:`, err);
        book.pdf_url = null;
      }
      return book;
    }));

    return { books: booksWithPDFs, total: numFound };
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export default fetchBooks;
