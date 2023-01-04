const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [{
  id: '1',
  bookTitle: 'The Forty Rules of Love',
  bookAuthor: 'Elif Shafak',
},
{
  id: '2',
  bookTitle: 'The Hunger Games',
  bookAuthor: 'Suzanne Collins',
}];

const remove = (state, bookID) => state.filter((book) => book.id !== bookID);

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return remove(state, action.id);
    default: return state;
  }
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
