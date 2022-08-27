const bookmarksReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BOOKMARKS':
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };
    case 'DELETE_BOOKMARK':
      const filteredBookmarks = state.bookmarks.filter(
        (item) => item.date !== action.payload.date
      );
      return {
        ...state,
        bookmarks: [...filteredBookmarks],
      };
    default:
      return state;
  }
};

export default bookmarksReducer;
