import BookmarksList from '../components/bookmarks/BookmarksList';
import DateControl from '../features/date/DateControl';
import Nasa from '../features/nasa/Nasa';

const Home = () => {
  return (
    <div className="container flex flex-col font-serif mx-auto">
      <Nasa />
      {/* <Content /> */}
      <DateControl />
      <BookmarksList />
    </div>
  );
};

export default Home;
