import React, { useEffect } from 'react';
import { formatDate } from '../../helpers/helpers';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchNasa } from './NasaActionCreators';
import YouTube from 'react-youtube';

import Spinner from '../../components/Spinner';

const Nasa: React.FC = () => {
  const { dateReducer, nasaReducer } = useAppSelector((state) => state);
  const { date } = dateReducer;
  const { pictureOfTheDay, isLoading, error } = nasaReducer;

  const dispatch = useAppDispatch();

  const formatedDate = date && formatDate(date);

  useEffect(() => {
    if (formatedDate) dispatch(fetchNasa(formatedDate));
  }, [formatedDate, dispatch]);

  return (
    <div className="container flex flex-col w-full mt-0 lg:mt-4 lg:flex-row">
      {error && (
        <div className="flex justify-center items-center mx-auto p-6 w-5/6 min-h-[40vh] bg-white/50 rounded-xl">
          <h2 className="text-black">{error}</h2>
        </div>
      )}
      {!error && pictureOfTheDay && (
        <>
          <div className="flex flex-col w-full px-4 lg:px-0 lg:w-1/2">
            {isLoading ? (
              <Spinner />
            ) : (
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
            )}
          </div>

          <div className="relative flex flex-col w-full text-white overflow-auto rounded-2xl lg:w-1/2">
            <div className=" py-4 px-6 text-justify lg:absolute">
              <h2 className="text-2xl font-semibold">
                {pictureOfTheDay.title}
              </h2>
              <p>{pictureOfTheDay.explanation}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Nasa;
