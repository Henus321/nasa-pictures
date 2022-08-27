import { useEffect, useState, useContext } from 'react';
import { formatDate } from '../../context/date/DateActions';
import DateContext from '../../context/date/DateContext';

import Control from '../date-control/DateControl';

const Content = () => {
  const { date } = useContext(DateContext);
  const formatedDate = date && formatDate(date);

  const [content, setContent] = useState(null);

  useEffect(() => {
    const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=';
    const API_KEY = process.env.REACT_APP_NASA_API_KEY;
    const fetchNasaAPOD = async () => {
      try {
        const response = await fetch(
          `${API_URL}${API_KEY}&date=${formatedDate}`
        );
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchNasaAPOD();
  }, [formatedDate]);

  return (
    <div className="container flex flex-col w-2/3 bg-slate-200">
      <div className="container flex flex-col">
        {content ? (
          <div className="flex flex-col w-full h-full bg-teal-100 p-8">
            <img src={content.hdurl} alt="" />
            <p>{content.title}</p>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      <Control />
    </div>
  );
};

export default Content;
