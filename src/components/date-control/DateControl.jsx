import { createRef, useContext, useEffect, useState } from 'react';
import {
  decrementDate,
  getCurrentDate,
  incrementDate,
  formatDate,
} from '../../context/date/DateActions';
import DateContext from '../../context/date/DateContext';

const Control = () => {
  const [formatedTodayDate, setFormatedTodayDate] = useState('');
  const { date, dispatch } = useContext(DateContext);
  const formatedDate = date && formatDate(date);
  const firstAPODDate = '1995-06-16';

  if (!formatedTodayDate && formatedDate) {
    setFormatedTodayDate(formatedDate);
  }

  useEffect(() => {
    const currentDate = getCurrentDate();
    dispatch({ type: 'GET_CURRENT_DATE', payload: currentDate });
  }, [dispatch]);

  const incrementDateHandler = (curDate) => {
    const nextDay = incrementDate(curDate);
    dispatch({ type: 'INCREMENT_DATE', payload: nextDay });
  };

  const decrementDateHandler = (curDate) => {
    const prevDay = decrementDate(curDate);
    dispatch({ type: 'DECREMENT_DATE', payload: prevDay });
  };

  const pickDateHandler = (inputPick) => {
    dispatch({ type: 'PICK_DATE', payload: inputPick });
  };

  const isCurDayToday = () => formatedTodayDate === formatedDate;

  return (
    <div className="flex flex-col w-full">
      <h1 className="bg-red-100 text-center">Select Date: </h1>
      <div className="flex justify-around">
        <button
          onClick={() => decrementDateHandler(date)}
          className="py-1 px-4 bg-emerald-200"
        >
          Prev
        </button>
        <input
          className="py-2 px-4 border-2 border-sky-500"
          type="date"
          onChange={(e) => pickDateHandler(e.target.valueAsDate)}
          min={firstAPODDate}
          max={formatedTodayDate}
          value={formatedDate}
        />
        <button
          onClick={() => incrementDateHandler(date)}
          className="py-1 px-4 bg-emerald-200"
          disabled={isCurDayToday()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Control;
