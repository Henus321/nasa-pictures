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

  const isAPODBookmarked = () => {
    const isBookmarked = bookmarks.filter(
      (bookmark) => bookmark.date === pictureOfTheDay.date
    );
    return isBookmarked.length > 0;
  };

  return (
    <div className="flex flex-col w-full">
      <h1 className="bg-red-100 text-center">Select Date: </h1>
      <div className="flex justify-around">
        <button
          onClick={() => decrementDateHandler(date)}
          className="py-1 px-4 bg-emerald-200"
          disabled={isFirstAPOD()}
        >
          Prev
        </button>
        <input
          className="py-2 px-4 border-2 border-sky-500"
          type="date"
          onChange={(e) => pickDateHandler(e.target.valueAsDate)}
          min={formatedFirstAPODDate}
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
      <button
        className={isAPODBookmarked() ? 'bg-rose-400' : 'bg-cyan-200'}
        onClick={addToBookmarksHandler}
        disabled={isAPODBookmarked()}
      >
        {isAPODBookmarked() ? 'Bookmarked' : 'Add To Bookmarks'}
      </button>
    </div>
  );
};

export default Control;
