import { createContext, useReducer } from 'react';
import bookmarksReducer from './BookmarksReducer';

const BookmarksContext = createContext();

const getInitialState = () => {
  const bookmarks = localStorage.getItem('bookmarks');
  return bookmarks ? JSON.parse(bookmarks) : [];
};

export const BookmarksProvider = ({ children }) => {
  const initialState = {
    bookmarks: getInitialState(),
  };

  const [state, dispatch] = useReducer(bookmarksReducer, initialState);

  return (
    <BookmarksContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BookmarksContext.Provider>
  );
};

export default BookmarksContext;
