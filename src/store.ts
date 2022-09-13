import { combineReducers, configureStore } from '@reduxjs/toolkit';
import nasaReducer from './features/nasa/NasaSlice';
import { dateReducer } from './features/date/DateSlice';

const rootReducer = combineReducers({
  nasaReducer,
  dateReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
