const nasaReducer = (state, action) => {
  switch (action.type) {
    case 'SET_APOD':
      return {
        ...state,
        isLoading: false,
        pictureOfTheDay: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default nasaReducer;
