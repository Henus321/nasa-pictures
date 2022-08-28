import { useContext, useEffect, useState } from 'react';
import BookmarksContext from '../../context/bookmarks/BookmarksContext';
import {
  decrementDate,
  getCurrentDate,
  incrementDate,
  formatDate,
} from '../../context/date/DateActions';
import DateContext from '../../context/date/DateContext';
import NasaContext from '../../context/nasa/NasaContext';

const Control = () => {
  const [formatedTodayDate, setFormatedTodayDate] = useState('');
  const { date, dispatch: dispatchDate } = useContext(DateContext);
  const { pictureOfTheDay } = useContext(NasaContext);
  const { bookmarks, dispatch: dispatchBookmarks } =
    useContext(BookmarksContext);

  const formatedDate = date && formatDate(date);
  const formatedFirstAPODDate = '1995-06-20';
  const firstAPODDate = new Date(formatedFirstAPODDate);
  const todayDate = new Date(formatedTodayDate);

  if (!formatedTodayDate && formatedDate) {
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

  const isValidFormat = (inputPick) => {
    if (!inputPick) return false;
    const formatedDate = formatDate(inputPick);

    return formatedDate.match(/(\d{4})-(\d{2})-(\d{2})/);
  };

  const isInValidTimeGates = (inputPick) => {
    return inputPick < todayDate && inputPick > firstAPODDate;
  };

  const pickDateHandler = (inputPick) => {
    if (!inputPick) return;
    if (!isValidFormat(inputPick)) return;
    if (!isInValidTimeGates(inputPick)) return;

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
    <div className="flex flex-col w-full py-3">
      <h1 className="text-center text-white text-xl">Pick a date:</h1>
      <div className="flex justify-center">
        <button
          onClick={() => decrementDateHandler(date)}
          className="bg-white py-3 px-5 self-center m-3 transition rounded-xl enabled:hover:text-white enabled:hover:bg-blue-800 enabled:active:rounded enabled:active:bg-blue-900 disabled:opacity-75"
          disabled={isFirstAPOD()}
        >
          Back
        </button>
        <input
          className="bg-white py-2 px-4 my-3 mx-4 border-2 rounded-xl"
          type="date"
          onChange={(e) => pickDateHandler(e.target.valueAsDate)}
          min={formatedFirstAPODDate}
          max={formatedTodayDate}
          value={formatedDate}
        />
        <button
          onClick={() => incrementDateHandler(date)}
          className="bg-white py-3 px-5 self-center m-3 transition rounded-xl enabled:hover:text-white enabled:hover:bg-blue-800 enabled:active:rounded enabled:active:bg-blue-900 disabled:opacity-50"
          disabled={isCurDayToday()}
        >
          Forth
        </button>
      </div>
      <button
        className="bg-white py-3 px-5 self-center mt-3 transition rounded-xl hover:text-white hover:bg-blue-800 active:rounded active:bg-blue-900"
        onClick={isAPODBookmarked() ? deleteBookmark : addToBookmarksHandler}
      >
        {isAPODBookmarked() ? 'Delete Bookmark' : 'Add to Bookmarks'}
      </button>
    </div>
  );
};

export default Control;
