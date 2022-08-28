const getVideoIdString = (pictureOfTheDay) => {
  if (!pictureOfTheDay) return;
  return pictureOfTheDay.url
    .split('/')
    .splice(-1)
    .toString()
    .replace('?rel=0', '');
};

export const fetchAPOD = async (formatedDate) => {
  const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=';
  const API_KEY = process.env.REACT_APP_NASA_API_KEY;

  try {
    const response = await fetch(`${API_URL}${API_KEY}&date=${formatedDate}`);
    const data = await response.json();
    if (data && data.media_type === 'video') {
      const vidId = getVideoIdString(data);
      data.thumbnail = `https://img.youtube.com/vi/${vidId}/sddefault.jpg`;
      data.videoId = vidId;
    }
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
