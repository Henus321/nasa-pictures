import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INasa } from '../../models/INasa';

interface BookmarksState {
  bookmarks: INasa[];
}

const getInitialState = () => {
  const bookmarks = localStorage.getItem('bookmarks');
  return bookmarks ? JSON.parse(bookmarks) : [];
};

const initialState: BookmarksState = {
  bookmarks: getInitialState(),
};

export const bookmarksSlice = createSlice({
  name: '@@bookmarks',
  initialState,
  reducers: {
    addToBookmarks: (state: BookmarksState, action: PayloadAction<INasa>) => {
      state.bookmarks = [...state.bookmarks, action.payload];
    },
    deleteBookmark: (state: BookmarksState, action: PayloadAction<INasa>) => {
      state.bookmarks = [
        ...state.bookmarks.filter((item) => item.date !== action.payload.date),
      ];
    },
  },
});

export const { addToBookmarks, deleteBookmark } = bookmarksSlice.actions;

export const bookmarksReducer = bookmarksSlice.reducer;
