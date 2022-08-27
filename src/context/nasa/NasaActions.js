export const fetchAPOD = async (formatedDate) => {
  const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=';
  const API_KEY = process.env.REACT_APP_NASA_API_KEY;

  try {
    const response = await fetch(`${API_URL}${API_KEY}&date=${formatedDate}`);
    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
};
