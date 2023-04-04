// Action Types
export const ADD_BOOK = 'books/books/ADD_BOOK';
export const REMOVE_BOOK = 'books/books/REMOVE_BOOK';

// Initial State
const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  isLoading: false,
};

// Reducers
const bookReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return {
        ...state,
        isLoading: false,
        books: [...state.books, payload],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        isLoading: false,
        books: state.books.filter((book) => book.id !== payload),
      };
    default:
      return state;
  }
};

// Actions
export const addBook = (values) => (dispatch) => {
  dispatch({
    type: ADD_BOOK,
    payload: values,
  });
};

export const removeBook = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_BOOK,
    payload: id,
  });
};

export default bookReducer;
