import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Bookitem = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeBook(book.id));
  };

  return (
    <div className="items">
      <h2>{book.bookTitle}</h2>
      <h3>{book.bookAuthor}</h3>
      <div className="buttons">
        <button type="button">Comments</button>
        <span> | </span>
        <button type="button" onClick={handleRemove}>Remove</button>
        <span> | </span>
        <button type="button">Edit</button>
      </div>
    </div>
  );
};

Bookitem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    bookAuthor: PropTypes.string.isRequired,
  }).isRequired,
};

export default Bookitem;
