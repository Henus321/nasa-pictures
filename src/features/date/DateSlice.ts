import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DateState {
  date: number;
  today: number;
  formatedFirstAPODDate: string;
}

const initialState: DateState = {
  date: 0,
  today: 0,
  formatedFirstAPODDate: '1995-06-20',
};

export const dateSlice = createSlice({
  name: '@@date',
  initialState,
  reducers: {
    setTodayDate(state: DateState, action: PayloadAction<number>) {
      state.today = action.payload;
    },
    setCurrentDate(state: DateState, action: PayloadAction<number>) {
      state.date = action.payload;
    },
  },
});

export const { setTodayDate, setCurrentDate } = dateSlice.actions;

export const dateReducer = dateSlice.reducer;
