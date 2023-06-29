import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { convertVideoIdString } from '../../helpers/helpers';
import { INasa } from '../../models/INasa';

const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=';
const API_KEY = process.env.REACT_APP_NASA_API_KEY;

export const fetchNasa = createAsyncThunk(
  '@@nasa/fetchNasa',
  async (formatedDate: string, thunkAPI) => {
    try {
      const response = await axios.get<INasa>(
        `${API_URL}${API_KEY}&date=${formatedDate}`
      );
      const { data } = response;

      if (data && data.media_type === 'video') {
        const vidId = convertVideoIdString(data);
        data.thumbnail = `https://img.youtube.com/vi/${vidId}/sddefault.jpg`;
        if (vidId) data.videoId = vidId;
      }

      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
