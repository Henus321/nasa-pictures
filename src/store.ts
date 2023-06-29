import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { nasaReducer } from './features/nasa/NasaSlice';
import { dateReducer } from './features/date/DateSlice';
import { bookmarksReducer } from './features/bookmarks/BookmarksSlice';

const rootReducer = combineReducers({
  nasaReducer,
  dateReducer,
  bookmarksReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
