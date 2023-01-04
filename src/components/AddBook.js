import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const BookInput = () => {
  const dispatch = useDispatch();
  const [bookTitle, setTitle] = useState('');
  const [bookAuthor, setAuthor] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    if (bookTitle.trim() !== '' && bookAuthor.trim() !== '') {
      const payload = { id: uuidv4(), bookTitle, bookAuthor };
      dispatch(addBook(payload));
      setTitle('');
      setAuthor('');
    } else {
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="add-book">
      <h2>ADD NEW BOOK</h2>
      <div className="inputs">
        <input type="text" name="title" value={bookTitle} onChange={(e) => setTitle(e.target.value)} placeholder="Book Title" id="title" required />
        <input type="text" name="author" value={bookAuthor} onChange={(e) => setAuthor(e.target.value)} placeholder="Book Author" id="author" required />
        <button type="submit" onClick={handleForm}>ADD BOOK</button>
      </div>
    </div>
  );
};

export default BookInput;
