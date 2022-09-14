import axios from 'axios';
import { convertVideoIdString } from '../../helpers/helpers';
import { INasa } from '../../models/INasa';
import { AppDispatch } from '../../store';
import { nasaSlice } from './NasaSlice';

export const fetchNasa =
  (formatedDate: string) => async (dispatch: AppDispatch) => {
    const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=';
    const API_KEY = process.env.REACT_APP_NASA_API_KEY;
    try {
      dispatch(nasaSlice.actions.nasaFetching());
      const response = await axios.get<INasa>(
        `${API_URL}${API_KEY}&date=${formatedDate}`
      );
      const { data } = response;

      if (data && data.media_type === 'video') {
        const vidId = convertVideoIdString(data);
        data.thumbnail = `https://img.youtube.com/vi/${vidId}/sddefault.jpg`;
        if (vidId) data.videoId = vidId;
      }

      dispatch(nasaSlice.actions.nasaFetchingSuccess(data));
    } catch (error: any) {
      dispatch(nasaSlice.actions.nasaFetchingError(error.message));
    }
  };
