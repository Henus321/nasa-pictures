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
    setTodayDate(state, action: PayloadAction<string>) {
      state.today = action.payload;
    },
    setCurrentDate(state, action: PayloadAction<string>) {
      state.date = action.payload;
    },
  },
});

export const { setTodayDate, setCurrentDate } = dateSlice.actions;

export const dateReducer = dateSlice.reducer;
