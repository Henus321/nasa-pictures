const dateReducer = (state, action) => {
  switch (action.type) {
    case 'GET_CURRENT_DATE':
      return {
        ...state,
        date: action.payload,
      };
    case 'GET_TODAY':
      return {
        ...state,
        today: action.payload,
      };
    case 'INCREMENT_DATE':
      return {
        ...state,
        date: action.payload,
      };
    case 'DECREMENT_DATE':
      return {
        ...state,
        date: action.payload,
      };
    case 'PICK_DATE':
      return {
        ...state,
        date: action.payload,
      };
    case 'SET_DATE':
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
};

export default dateReducer;
