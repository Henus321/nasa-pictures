import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INasa } from '../../models/INasa';

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
  reducers: {
    nasaFetching(state) {
      state.isLoading = true;
    },
    nasaFetchingSuccess(state, action: PayloadAction<INasa>) {
      state.isLoading = false;
      state.error = '';
      state.pictureOfTheDay = action.payload;
    },
    nasaFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.pictureOfTheDay = initialItem;
    },
  },
});

export const nasaReducer = nasaSlice.reducer;
