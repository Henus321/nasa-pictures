import { useContext, useEffect } from 'react';
import BookmarksContext from '../../context/bookmarks/BookmarksContext';

import BookmarksItem from './BookmarksItem';
import { v4 as uuidv4 } from 'uuid';

const BookmarksList = () => {
  const { bookmarks } = useContext(BookmarksContext);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks), [bookmarks]);
  });

  return (
    <div className="container flex w-full bg-yellow-200">
      {bookmarks.length > 0 ? (
        bookmarks.map((bookmark) => (
          <BookmarksItem bookmark={bookmark} key={uuidv4()} />
        ))
      ) : (
        <div>No items...</div>
      )}
    </div>
  );
};

export default BookmarksList;
