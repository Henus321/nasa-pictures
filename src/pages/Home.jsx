import BookmarksList from '../components/bookmarks/BookmarksList';
import Content from '../components/content/Content';

const Home = () => {
  return (
    <div className="container flex mx-auto">
      <Content />
      <BookmarksList />
    </div>
  );
};

export default Home;
