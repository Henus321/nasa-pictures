import React, { useContext, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import DateContext from '../../context/date/DateContext';

const CustomDatePicker = () => {
  const {
    date,
    today,
    formatedFirstAPODDate,
    dispatch: dispatchDate,
  } = useContext(DateContext);
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
    dispatchDate({ type: 'PICK_DATE', payload: inputPick });
  };

  return (
    <DatePicker
      selected={date}
      onChange={(date) => pickDateHandler(date)}
      minDate={firstAPODDate}
      maxDate={today}
      customInput={<CustomInput />}
    />
  );
};

export default CustomDatePicker;
