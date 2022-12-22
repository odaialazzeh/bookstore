import React from 'react';

const Bookitem = () => {
  const state = {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  };

  return (
    <div className="items">
      <h2>{state.title}</h2>
      <h3>{state.author}</h3>
      <div className="buttons">
        <button type="button">Comments </button>
        <span> | </span>
        <button type="button">Remove </button>
        <span> | </span>
        <button type="button">Edit </button>
      </div>
    </div>
  );
};

export default Bookitem;
