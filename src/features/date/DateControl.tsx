import React, { useEffect, useState } from 'react';
import { setTodayDate, setCurrentDate } from './DateSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { formatDate } from '../../helpers/helpers';
import { addToBookmarks, deleteBookmark } from '../bookmarks/BookmarksSlice';

import 'react-datepicker/dist/react-datepicker.css';
import CustomDatePicker from './CustomDatePicker';

const DateControl: React.FC = () => {
  const { dateReducer, bookmarksReducer, nasaReducer } = useAppSelector(
    (state) => state
  );
  const { date, today, formatedFirstAPODDate } = dateReducer;
  const { bookmarks } = bookmarksReducer;
  const { pictureOfTheDay } = nasaReducer;

  const dispatch = useAppDispatch();

  const [formatedTodayDate, setFormatedTodayDate] = useState('');
  const formatedDate = date && formatDate(date);

  useEffect(() => {
    const currentDate = +new Date();
    if (!today) {
      dispatch(setTodayDate(currentDate));
      setFormatedTodayDate(formatDate(currentDate));
    }
    dispatch(setCurrentDate(currentDate));
  }, [today, dispatch]);

  const incrementDateHandler = (curDate: number) => {
    const date = new Date(curDate);
    const nextDay = date.setDate(date.getDate() + 1);
    dispatch(setCurrentDate(nextDay));
  };

  const decrementDateHandler = (curDate: number) => {
    const date = new Date(curDate);
    const prevDay = date.setDate(date.getDate() - 1);
    dispatch(setCurrentDate(prevDay));
  };

  const isCurDayToday = () => formatedTodayDate === formatedDate;

  const isFirstPicture = () => formatedFirstAPODDate === formatedDate;

  const addToBookmarksHandler = () => {
    dispatch(addToBookmarks(pictureOfTheDay));
  };

  const deleteBookmarkHandler = () => {
    dispatch(deleteBookmark(pictureOfTheDay));
  };

  const isPictureBookmarked = () => {
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
          disabled={isFirstPicture()}
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
        onClick={
          isPictureBookmarked() ? deleteBookmarkHandler : addToBookmarksHandler
        }
      >
        {isPictureBookmarked() ? 'Delete Bookmark' : 'Add to Bookmarks'}
      </button>
    </div>
  );
};

export default DateControl;
