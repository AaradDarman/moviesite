export const movieReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_MOVIE":
      return { ...action.payload };
    case "CLEAR_MOVIE":
      return { ...action.payload };
    default:
      return state;
  }
};
