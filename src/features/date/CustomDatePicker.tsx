import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setCurrentDate } from './DateSlice';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';

interface Props extends Omit<ReactDatePickerProps, 'onChange'> {
  onClick?(): void;
  onChange?(): void;
}

const CustomDatePicker: React.FC = () => {
  const { date, today, formatedFirstAPODDate } = useAppSelector(
    (state) => state.dateReducer
  );
  const dispatch = useAppDispatch();
  const dateFormated = new Date(date);
  const todayDateFormated = new Date(today);

  const CustomInput = React.forwardRef<HTMLButtonElement>(
    ({ value, onClick }: Props, ref) => (
      <button
        className="px-4 py-3 mx-4 my-3 self-center bg-whiteTransparent rounded-xl enabled:hover:text-white enabled:hover:bg-blue-800 enabled:active:rounded enabled:active:bg-blue-900 disabled:opacity-60"
        onClick={onClick}
        ref={ref}
      >
        {value}
      </button>
    )
  );
  const firstAPODDate = new Date(formatedFirstAPODDate);

  const pickDateHandler = (inputPick: any) => {
    if (!inputPick) return;
    const date = +new Date(inputPick);
    dispatch(setCurrentDate(date));
  };

  return (
    <DatePicker
      selected={dateFormated}
      onChange={(date) => pickDateHandler(date)}
      minDate={firstAPODDate}
      maxDate={todayDateFormated}
      dateFormat="dd/MM/yyyy"
      customInput={<CustomInput />}
    />
  );
};

export default CustomDatePicker;
