import { useEffect, useContext } from 'react';
import { formatDate } from '../../context/date/DateActions';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchNasa } from './NasaActionCreators';
import DateContext from '../../context/date/DateContext';
import YouTube from 'react-youtube';

import Spinner from '../../components/layout/Spinner';

const Nasa = () => {
  const dispatch = useAppDispatch();
  // TOO MESSY
  const { date } = useAppSelector((state) => state.dateReducer);
  const { pictureOfTheDay, isLoading } = useAppSelector(
    (state) => state.nasaReducer
  );

  // ERROR HANDLE

  // TOO MESSY
  const formatedDate = date && formatDate(new Date(date));

  useEffect(() => {
    dispatch(fetchNasa(formatedDate));
  }, [formatedDate, dispatch]);

  return (
    <div className="container flex flex-col w-full mt-0 lg:mt-4 lg:flex-row">
      <div className="flex flex-col w-full px-4 lg:px-0 lg:w-1/2">
        {pictureOfTheDay &&
          (!isLoading ? (
            <div className="flex flex-col w-full h-full p-4 bg-whiteTransparent rounded-xl">
              {pictureOfTheDay.media_type === 'video' ? (
                <YouTube
                  className="flex justify-center items-center"
                  videoId={pictureOfTheDay.videoId}
                ></YouTube>
              ) : (
                <img src={pictureOfTheDay.url} alt={pictureOfTheDay.title} />
              )}
            </div>
          ) : (
            <Spinner />
          ))}
      </div>
      <div className="relative flex flex-col w-full text-white overflow-auto rounded-2xl lg:w-1/2">
        <div className=" py-4 px-6 text-justify lg:absolute">
          <h2 className="text-2xl font-semibold">{pictureOfTheDay.title}</h2>
          <p>{pictureOfTheDay.explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default Nasa;
