import { createContext, useReducer } from 'react';
import dateReducer from './DateReducer';

const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const initialState = {
    date: '',
    today: '',
    formatedFirstAPODDate: '1995-06-20',
  };

  const [state, dispatch] = useReducer(dateReducer, initialState);

  return (
    <DateContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

export default DateContext;
