import { useContext } from 'react';
import BookmarksContext from '../../context/bookmarks/BookmarksContext';

const BookmarksItem = ({ bookmark }) => {
  const { dispatch } = useContext(BookmarksContext);
  const { date, url } = bookmark;

  const deleteBookmark = () => {
    dispatch({ type: 'DELETE_BOOKMARK', payload: bookmark });
  };
  return (
    <div className="relative flex flex-col min-w-max mx-2 bg-white rounded-lg">
      <button
        className="absolute font-bold top-0 right-0 px-1.5 bg-white rounded hover:text-white hover:bg-blue-800 active:bg-blue-900"
        onClick={deleteBookmark}
      >
        x
      </button>
      <img className="w-20 h-20 object-cover p-2" src={url} alt={date} />
    </div>
  );
};

export default BookmarksItem;
