import { setCurrentDate } from '../../features/date/DateSlice';
import { deleteBookmark } from './BookmarksSlice';
import { useAppDispatch } from '../../hooks/redux';

const BookmarksItem = ({ bookmark }) => {
  const dispatch = useAppDispatch();

  const deleteBookmarkHandler = () => {
    dispatch(deleteBookmark(bookmark));
  };

  const onBookmarkClick = (bookmark) => {
    const date = +new Date(bookmark.date);
    dispatch(setCurrentDate(date));
  };

  const chooseThumbnail = (bookmark) =>
    bookmark.media_type === 'video' ? bookmark.thumbnail : bookmark.url;

  return (
    <div className="relative flex flex-col min-w-max mx-2 bg-white rounded-lg opacity-90 hover:opacity-100">
      <button
        className="absolute font-bold top-0 right-0 px-1.5 bg-white rounded hover:text-white hover:bg-blue-800 active:bg-blue-900"
        onClick={deleteBookmarkHandler}
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
