import React, { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setCurrentDate } from './DateSlice';
import DatePicker from 'react-datepicker';

const CustomDatePicker = memo(() => {
  const { date, today, formatedFirstAPODDate } = useAppSelector(
    (state) => state.dateReducer
  );
  const dispatch = useAppDispatch();

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      className="px-4 py-3 mx-4 my-3 self-center bg-whiteTransparent rounded-xl enabled:hover:text-white enabled:hover:bg-blue-800 enabled:active:rounded enabled:active:bg-blue-900 disabled:opacity-60"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));
  const firstAPODDate = new Date(formatedFirstAPODDate);

  const pickDateHandler = (inputPick) => {
    if (!inputPick) return;
    const date = +new Date(inputPick);
    dispatch(setCurrentDate(date));
  };

  return (
    <DatePicker
      selected={date}
      onChange={(date) => pickDateHandler(date)}
      minDate={firstAPODDate}
      maxDate={today}
      dateFormat="dd/MM/yyyy"
      customInput={<CustomInput />}
    />
  );
});

export default CustomDatePicker;
