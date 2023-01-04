import React from 'react';
import { useSelector } from 'react-redux';
import Bookitem from './BookItem';

const Booklist = () => {
  const bookDetails = useSelector((state) => state.books);

  return (
    <>
      <div className="book">
        {bookDetails.map((book) => <Bookitem key={book.id} book={book} />)}
      </div>
      <div id="line" />
    </>
  );
};

export default Booklist;
