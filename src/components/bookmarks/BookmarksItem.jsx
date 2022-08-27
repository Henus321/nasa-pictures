import { useContext } from 'react';
import BookmarksContext from '../../context/bookmarks/BookmarksContext';

const BookmarksItem = ({ bookmark }) => {
  const { dispatch } = useContext(BookmarksContext);
  const { date, url } = bookmark;

  const deleteBookmark = () => {
    dispatch({ type: 'DELETE_BOOKMARK', payload: bookmark });
  };
  return (
    <div className="relative flex flex-col">
      <button
        className="absolute top-0 right-0 py-0.5 px-1 bg-white"
        onClick={deleteBookmark}
      >
        x
      </button>
      <img className="w-full h-20" src={url} alt={date} />
      <span>{date}</span>
    </div>
  );
};

export default BookmarksItem;
