import { createContext, useReducer } from 'react';
import nasaReducer from './NasaReducer';

const NasaContext = createContext();

export const NasaProvider = ({ children }) => {
  const initialState = {
    pictureOfTheDay: {},
    isLoading: false,
  };

  const [state, dispatch] = useReducer(nasaReducer, initialState);

  return (
    <NasaContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NasaContext.Provider>
  );
};

export default NasaContext;
