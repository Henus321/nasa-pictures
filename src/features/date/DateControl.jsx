import { useContext, useEffect, useState } from 'react';
import BookmarksContext from '../../context/bookmarks/BookmarksContext';
import {
  getTodayDate,
  getCurrentDate,
  incrementDate,
  decrementDate,
} from '../../features/date/DateSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { formatDate } from '../../helpers/helpers';

import 'react-datepicker/dist/react-datepicker.css';
import CustomDatePicker from './CustomDatePicker';

const DateControl = () => {
  const { date, today, formatedFirstAPODDate } = useAppSelector(
    (state) => state.dateReducer
  );
  const { pictureOfTheDay } = useAppSelector((state) => state.nasaReducer);

  const dispatch = useAppDispatch();

  const { bookmarks, dispatch: dispatchBookmarks } =
    useContext(BookmarksContext);

  const [formatedTodayDate, setFormatedTodayDate] = useState('');
  const formatedDate = date && formatDate(date);

  useEffect(() => {
    const currentDate = +new Date();
    console.log(currentDate);
    if (!today) {
      dispatch(getTodayDate(currentDate));
      setFormatedTodayDate(formatDate(currentDate));
    }
    dispatch(getCurrentDate(currentDate));
  }, [today]);

  const incrementDateHandler = (curDate) => {
    const date = new Date(curDate);
    const nextDay = date.setDate(date.getDate() + 1);
    dispatch(incrementDate(nextDay));
  };

  const decrementDateHandler = (curDate) => {
    const date = new Date(curDate);
    const prevDay = date.setDate(date.getDate() - 1);
    dispatch(decrementDate(prevDay));
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
        <CustomDatePicker />
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

export default DateControl;
