import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBookmark } from '../../models/IBookmark';

interface BookmarksState {
  bookmarks: IBookmark[];
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
    addToBookmarks: (state, action: PayloadAction<IBookmark>) => {
      state.bookmarks = [...state.bookmarks, action.payload];
    },
    deleteBookmark: (state, action: PayloadAction<IBookmark>) => {
      state.bookmarks = [
        ...state.bookmarks.filter(
          (item: IBookmark) => item.date !== action.payload.date
        ),
      ];
    },
  },
});

export const { addToBookmarks, deleteBookmark } = bookmarksSlice.actions;

export const bookmarksReducer = bookmarksSlice.reducer;
