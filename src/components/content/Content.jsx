import { useEffect, useContext } from 'react';
import { formatDate } from '../../context/date/DateActions';
import DateContext from '../../context/date/DateContext';
import NasaContext from '../../context/nasa/NasaContext';
import { fetchAPOD } from '../../context/nasa/NasaActions';

const Content = () => {
  const { date } = useContext(DateContext);
  const { pictureOfTheDay, dispatch: dispatchNasa } = useContext(NasaContext);

  const formatedDate = date && formatDate(date);

  useEffect(() => {
    const setAPODData = async () => {
      const data = await fetchAPOD(formatedDate);

      dispatchNasa({ type: 'SET_APOD', payload: data });
    };
    setAPODData();
  }, [formatedDate, dispatchNasa]);

  // console.log(pictureOfTheDay);

  return (
    <div className="container flex w-full bg-slate-200">
      <div className="flex flex-col w-1/2">
        {pictureOfTheDay ? (
          <div className="flex flex-col w-full h-full bg-teal-100 p-6">
            <img src={pictureOfTheDay.url} alt="" />
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      <div className="flex flex-col w-1/2 bg-cyan-300 p-6">
        <h2 className="text-2xl font-semibold">{pictureOfTheDay.title}</h2>
        <p>{pictureOfTheDay.explanation}</p>
      </div>
    </div>
  );
};

export default Content;
