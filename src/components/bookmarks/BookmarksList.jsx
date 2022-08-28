import { useContext, useEffect, useRef } from 'react';
import BookmarksContext from '../../context/bookmarks/BookmarksContext';

import BookmarksItem from './BookmarksItem';
import { v4 as uuidv4 } from 'uuid';
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';

const BookmarksList = () => {
  const { bookmarks } = useContext(BookmarksContext);
  const containerEl = useRef();

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks), [bookmarks]);
  });

  const scroll = (scrollOffset) => {
    console.log(1);
    containerEl.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="relative container flex mb-10">
      <button
        className="my-4 p-1 rounded-lg bg-white hover:text-white hover:bg-blue-800 active:rounded active:bg-blue-900"
        onClick={() => scroll(-100)}
      >
        <FaChevronLeft />
      </button>
      <div
        ref={containerEl}
        className="relative flex m-2 py-2 w-full overflow-hidden scroll-smooth"
      >
        {bookmarks.length > 0 ? (
          bookmarks.map((bookmark) => (
            <BookmarksItem bookmark={bookmark} key={uuidv4()} />
          ))
        ) : (
          <div>No items...</div>
        )}
      </div>
      <button
        className="my-4 p-1 rounded-lg bg-white hover:text-white hover:bg-blue-800 active:rounded active:bg-blue-900"
        onClick={() => scroll(100)}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default BookmarksList;
