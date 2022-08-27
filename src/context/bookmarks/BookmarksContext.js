import { createContext, useReducer } from 'react';
import bookmarksReducer from './BookmarksReducer';

const BookmarksContext = createContext();

export const BookmarksProvider = ({ children }) => {
  const initialState = {
    bookmarks: [],
  };

  const [state, dispatch] = useReducer(bookmarksReducer, initialState);

  return (
    <BookmarksContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BookmarksContext.Provider>
  );
};

export default BookmarksContext;
