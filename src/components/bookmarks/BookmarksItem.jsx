import { useContext } from 'react';
import BookmarksContext from '../../context/bookmarks/BookmarksContext';
import DateContext from '../../context/date/DateContext';

const BookmarksItem = ({ bookmark }) => {
  const { dispatch: dispatchBookmark } = useContext(BookmarksContext);
  const { dispatch: dispatchDate } = useContext(DateContext);

  const deleteBookmark = () => {
    dispatchBookmark({ type: 'DELETE_BOOKMARK', payload: bookmark });
  };

  const onBookmarkClick = (bookmark) => {
    const date = new Date(bookmark.date);
    dispatchDate({ type: 'SET_DATE', payload: date });
  };

  const chooseThumbnail = (bookmark) =>
    bookmark.media_type === 'video' ? bookmark.thumbnail : bookmark.url;

  return (
    <div className="relative flex flex-col min-w-max mx-2 bg-white rounded-lg">
      <button
        className="absolute font-bold top-0 right-0 px-1.5 bg-white rounded hover:text-white hover:bg-blue-800 active:bg-blue-900"
        onClick={deleteBookmark}
      >
        x
      </button>
      <img
        className="w-20 h-20 object-cover p-2 cursor-pointer"
        src={chooseThumbnail(bookmark)}
        alt={bookmark.date}
        onClick={() => onBookmarkClick(bookmark)}
      />
    </div>
  );
};

export default BookmarksItem;
