import { useEffect, useContext } from 'react';
import { formatDate } from '../../context/date/DateActions';
import DateContext from '../../context/date/DateContext';
import NasaContext from '../../context/nasa/NasaContext';
import BookmarksContext from '../../context/bookmarks/BookmarksContext';
import { fetchAPOD } from '../../context/nasa/NasaActions';

import Control from '../date-control/DateControl';

const Content = () => {
  const { date } = useContext(DateContext);
  const { pictureOfTheDay, dispatch: dispatchNasa } = useContext(NasaContext);
  const { bookmarks, dispatch: dispatchBookmarks } =
    useContext(BookmarksContext);

  const formatedDate = date && formatDate(date);

  useEffect(() => {
    const setAPODData = async () => {
      const data = await fetchAPOD(formatedDate);

      dispatchNasa({ type: 'SET_APOD', payload: data });
    };
    setAPODData();
  }, [formatedDate, dispatchNasa]);

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
    <div className="container flex flex-col w-2/3 bg-slate-200">
      <div className="container flex flex-col">
        {pictureOfTheDay ? (
          <div className="flex flex-col w-full h-full bg-teal-100 p-8">
            <img src={pictureOfTheDay.hdurl} alt="" />
            <p>{pictureOfTheDay.title}</p>
            <button
              className={isAPODBookmarked() ? 'bg-rose-400' : 'bg-cyan-200'}
              onClick={addToBookmarksHandler}
              disabled={isAPODBookmarked()}
            >
              {isAPODBookmarked() ? 'Bookmarked' : 'Add To Bookmarks'}
            </button>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      <Control />
    </div>
  );
};

export default Content;
