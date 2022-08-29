import { useEffect, useContext } from 'react';
import { formatDate } from '../../context/date/DateActions';
import DateContext from '../../context/date/DateContext';
import NasaContext from '../../context/nasa/NasaContext';
import { fetchAPOD } from '../../context/nasa/NasaActions';
import YouTube from 'react-youtube';

import Spinner from '../layout/Spinner';

const Content = () => {
  const { date } = useContext(DateContext);
  const {
    pictureOfTheDay,
    isLoading,
    dispatch: dispatchNasa,
  } = useContext(NasaContext);

  const formatedDate = date && formatDate(date);

  useEffect(() => {
    dispatchNasa({ type: 'SET_LOADING' });
    const setAPODData = async () => {
      const data = await fetchAPOD(formatedDate);

      dispatchNasa({ type: 'SET_APOD', payload: data });
    };
    setAPODData();
  }, [formatedDate, dispatchNasa]);

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

export default Content;
