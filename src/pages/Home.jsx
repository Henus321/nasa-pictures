import BookmarksList from '../components/bookmarks/BookmarksList';
import Content from '../components/content/Content';
import Control from '../components/control/Control';

const Home = () => {
  return (
    <div className="container flex flex-col font-serif mx-auto">
      <Content />
      <Control />
      <BookmarksList />
    </div>
  );
};

export default Home;
