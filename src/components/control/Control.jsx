import React, { useContext, useEffect, useState } from 'react';
import BookmarksContext from '../../context/bookmarks/BookmarksContext';
import {
  decrementDate,
  getCurrentDate,
  incrementDate,
  formatDate,
} from '../../context/date/DateActions';
import DateContext from '../../context/date/DateContext';
import NasaContext from '../../context/nasa/NasaContext';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Control = () => {
  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      className="px-4 py-3 mx-4 my-3 self-center bg-whiteTransparent rounded-xl enabled:hover:text-white enabled:hover:bg-blue-800 enabled:active:rounded enabled:active:bg-blue-900 disabled:opacity-60"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));

  const [formatedTodayDate, setFormatedTodayDate] = useState('');
  const [todayDate, setTodayDate] = useState('');
  const { date, dispatch: dispatchDate } = useContext(DateContext);
  const { pictureOfTheDay } = useContext(NasaContext);
  const { bookmarks, dispatch: dispatchBookmarks } =
    useContext(BookmarksContext);

  const formatedDate = date && formatDate(date);
  const formatedFirstAPODDate = '1995-06-20';
  const firstAPODDate = new Date(formatedFirstAPODDate);

  if (!todayDate && date) {
    setTodayDate(date);
    setFormatedTodayDate(formatedDate);
  }

  useEffect(() => {
    const currentDate = getCurrentDate();
    dispatchDate({ type: 'GET_CURRENT_DATE', payload: currentDate });
  }, [dispatchDate]);

  const incrementDateHandler = (curDate) => {
    const nextDay = incrementDate(curDate);
    dispatchDate({ type: 'INCREMENT_DATE', payload: nextDay });
  };

  const decrementDateHandler = (curDate) => {
    const prevDay = decrementDate(curDate);
    dispatchDate({ type: 'DECREMENT_DATE', payload: prevDay });
  };

  const pickDateHandler = (inputPick) => {
    if (!inputPick) return;

    dispatchDate({ type: 'PICK_DATE', payload: inputPick });
  };

  const isCurDayToday = () => formatedTodayDate === formatedDate;

  const isFirstAPOD = () => formatedFirstAPODDate === formatedDate;

  const addToBookmarksHandler = () => {
    dispatchBookmarks({ type: 'ADD_TO_BOOKMARKS', payload: pictureOfTheDay });
  };

  const deleteBookmark = () => {
    dispatchBookmarks({ type: 'DELETE_BOOKMARK', payload: pictureOfTheDay });
  };

  const isAPODBookmarked = () => {
    const isBookmarked = bookmarks.filter(
      (bookmark) => bookmark.date === pictureOfTheDay.date
    );
    return isBookmarked.length > 0;
  };

  return (
    <div className="flex flex-col w-full my-4">
      <h1 className="text-center text-white text-xl">Pick a date:</h1>
      <div className="flex mx-auto">
        <button
          onClick={() => decrementDateHandler(date)}
          className="bg-whiteTransparent py-3 px-5 self-center m-3 transition rounded-xl enabled:hover:text-white enabled:hover:bg-blue-800 enabled:active:rounded enabled:active:bg-blue-900 disabled:opacity-60"
          disabled={isFirstAPOD()}
        >
          Back
        </button>
        <DatePicker
          selected={date}
          onChange={(date) => pickDateHandler(date)}
          minDate={firstAPODDate}
          maxDate={todayDate}
          customInput={<CustomInput />}
        />
        <button
          onClick={() => incrementDateHandler(date)}
          className="bg-whiteTransparent py-3 px-5 self-center m-3 transition rounded-xl enabled:hover:text-white enabled:hover:bg-blue-800 enabled:active:rounded enabled:active:bg-blue-900 disabled:opacity-60"
          disabled={isCurDayToday()}
        >
          Forth
        </button>
      </div>
      <button
        className="bg-whiteTransparent py-3 px-5 self-center mt-3 transition rounded-xl hover:text-white hover:bg-blue-800 active:rounded active:bg-blue-900"
        onClick={isAPODBookmarked() ? deleteBookmark : addToBookmarksHandler}
      >
        {isAPODBookmarked() ? 'Delete Bookmark' : 'Add to Bookmarks'}
      </button>
    </div>
  );
};

export default Control;
