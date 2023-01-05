import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const BookInput = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const reset = () => {
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && author.trim() !== '' && category.trim() !== '') {
      const payload = {
        id: uuidv4(),
        title,
        author,
        category,
      };
      dispatch(addBook(payload));
      reset();
    } else {
      reset();
    }
  };

  return (
    <div className="add-book">
      <h2>ADD NEW BOOK</h2>
      <div className="inputs">
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book Title" id="title" required />
        <input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Book Author" id="author" required />
        <input type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Book Category" id="author" required />
        <button type="submit" onClick={handleForm}>ADD BOOK</button>
      </div>
    </div>
  );
};

export default BookInput;
