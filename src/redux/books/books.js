const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const idCounter = 0;
const initialState = [];

const remove = (state, bookID) => {
  state.filter((book) => book.id !== bookID);
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: idCounter + 1,
          title: action.title,
          author: action.author,
        }];
    case REMOVE_BOOK:
      return remove(state, action.id);
    default: return state;
  }
};

export const addBook = (title, author) => ({
  type: ADD_BOOK,
  title,
  author,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
