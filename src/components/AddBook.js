import React from 'react';

const BookInput = () => (

  <div className="add-book">
    <h2>ADD NEW BOOK</h2>
    <div className="inputs">
      <input type="text" placeholder="Book title" name="title" id="title" />
      <input type="text" placeholder="Author" name="author" id="author" />
      <button type="button">Add Book</button>
    </div>
  </div>
);

export default BookInput;
