const nasaReducer = (state, action) => {
  switch (action.type) {
    case 'SET_APOD':
      return {
        ...state,
        pictureOfTheDay: action.payload,
      };
    default:
      return state;
  }
};

export default nasaReducer;
