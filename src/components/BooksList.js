import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Bookitem from './BookItem';
import { getBooks } from '../redux/books/books';

const Booklist = () => {
  const dispatch = useDispatch();
  const bookDetails = useSelector((state) => state.books.books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
      <div className="book">
        <h2 id="head">Books List</h2>
        {bookDetails && bookDetails.map((book) => <Bookitem key={book.id} book={book} />)}
      </div>
      <div id="line" />
    </>
  );
};

export default Booklist;
