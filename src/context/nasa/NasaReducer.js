const nasaReducer = (state, action) => {
  switch (action.type) {
    case 'SET_APOD':
      return {
        ...state,
        pictureOfTheDay: action.payload,
      };
  }
};

export default nasaReducer;
