import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import BookmarksItem from './BookmarksItem';
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import { useAppSelector } from '../../hooks/redux';

const BookmarksList: React.FC = () => {
  const { bookmarks } = useAppSelector((state) => state.bookmarksReducer);
  const containerEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  });

  const scroll = (scrollOffset: number) => {
    containerEl.current!.scrollLeft += scrollOffset;
  };

  return (
    <div className="relative container flex mb-10 px-4 lg:px-0">
      <button
        className={
          bookmarks.length > 0
            ? 'my-4 p-1 rounded-lg h-20 bg-whiteTransparent hover:text-white hover:bg-blue-800 active:rounded active:bg-blue-900'
            : 'my-4 p-1 rounded-lg h-20 bg-white opacity-50 cursor-auto'
        }
        onClick={() => scroll(-100)}
      >
        <FaChevronLeft />
      </button>
      <div
        ref={containerEl}
        className="relative flex m-2 py-2 w-full bg-white/50 rounded-xl overflow-hidden scroll-smooth"
      >
        {bookmarks.length > 0 ? (
          bookmarks.map((bookmark) => (
            <BookmarksItem bookmark={bookmark} key={uuidv4()} />
          ))
        ) : (
          <div className="m-auto self-center">No Bookmarks...</div>
        )}
      </div>
      <button
        className={
          bookmarks.length > 0
            ? 'my-4 p-1 rounded-lg h-20 bg-whiteTransparent hover:text-white hover:bg-blue-800 active:rounded active:bg-blue-900'
            : 'my-4 p-1 rounded-lg h-20 bg-white opacity-50 cursor-auto'
        }
        onClick={() => scroll(100)}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default BookmarksList;
