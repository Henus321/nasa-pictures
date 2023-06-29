import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookmarksList from '../features/bookmarks/BookmarksList';
import DateControl from '../features/date/DateControl';
import Nasa from '../features/nasa/Nasa';
import { useAppSelector } from '../hooks/redux';

const Home = () => {
  const { date } = useAppSelector((state) => state.nasaReducer.pictureOfTheDay);

  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${date}`);
  }, [navigate, date]);

  return (
    <div className="container flex flex-col font-serif mx-auto">
      <Nasa />
      <DateControl />
      <BookmarksList />
    </div>
  );
};

export default Home;
