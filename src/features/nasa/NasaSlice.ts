import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INasa } from '../../models/INasa';
import { fetchNasa } from './NasaActionCreators';

interface NasaState {
  pictureOfTheDay: INasa;
  isLoading: boolean;
  error: string;
}

const initialItem: INasa = {
  media_type: '',
  videoId: '',
  url: '',
  title: '',
  explanation: '',
  date: '',
  thumbnail: '',
};

const initialState: NasaState = {
  pictureOfTheDay: initialItem,
  isLoading: false,
  error: '',
};

export const nasaSlice = createSlice({
  name: '@@nasa',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchNasa.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchNasa.fulfilled.type]: (state, action: PayloadAction<INasa>) => {
      state.isLoading = false;
      state.error = '';
      state.pictureOfTheDay = action.payload;
    },
    [fetchNasa.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.pictureOfTheDay = initialItem;
    },
  },
});

export const nasaReducer = nasaSlice.reducer;
