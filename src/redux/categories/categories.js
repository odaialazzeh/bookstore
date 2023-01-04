const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initialState = ['Loading...'];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';

    default:
      return state;
  }
};

export const statusChecker = () => ({
  type: CHECK_STATUS,
});
