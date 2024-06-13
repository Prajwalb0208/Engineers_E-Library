// src/components/AdminPanel.js
import React, { useState } from 'react';
import axios from 'axios';
import './AdminPanel.css';

const AdminPanel = () => {
    const [book, setBook] = useState({
        id: '',
        title: '',
        author: [],
        authorId: '',
        bookcover: '',
        publisher: '',
        description: '',
        category: '',
        pdf: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleAuthorsChange = (e) => {
        setBook({ ...book, author: e.target.value.split(',') });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/books', book);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="id" value={book.id} onChange={handleChange} placeholder="ID" required />
            <input type="text" name="title" value={book.title} onChange={handleChange} placeholder="Title" required />
            <input type="text" name="author" value={book.author.join(',')} onChange={handleAuthorsChange} placeholder="Authors (comma separated)" required />
            <input type="number" name="authorId" value={book.authorId} onChange={handleChange} placeholder="Author ID" required />
            <input type="text" name="bookcover" value={book.bookcover} onChange={handleChange} placeholder="Book Cover URL" required />
            <input type="text" name="publisher" value={book.publisher} onChange={handleChange} placeholder="Publisher" required />
            <input type="text" name="description" value={book.description} onChange={handleChange} placeholder="Description" required />
            <input type="text" name="category" value={book.category} onChange={handleChange} placeholder="Category" required />
            <input type="text" name="pdf" value={book.pdf} onChange={handleChange} placeholder="PDF URL" required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AdminPanel;
