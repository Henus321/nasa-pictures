import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DateState {
  date: string;
  today: string;
  formatedFirstAPODDate: string;
}

const initialState: DateState = {
  date: '',
  today: '',
  formatedFirstAPODDate: '1995-06-20',
};

export const dateSlice = createSlice({
  name: '@@date',
  initialState,
  reducers: {
    getTodayDate(state, action: PayloadAction<string>) {
      state.today = action.payload;
    },
    getCurrentDate(state, action: PayloadAction<string>) {
      state.date = action.payload;
    },
    incrementDate(state, action: PayloadAction<string>) {
      state.date = action.payload;
    },
    decrementDate(state, action: PayloadAction<string>) {
      state.date = action.payload;
    },
  },
});

export const { getTodayDate, getCurrentDate, incrementDate, decrementDate } =
  dateSlice.actions;

export const dateReducer = dateSlice.reducer;
