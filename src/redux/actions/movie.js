export const setMovie = (movie) => {
  return async (dispatch) => {
    await dispatch({ type: "SET_MOVIE", payload: movie });
  };
};

export const clearMovie = () => {
  return async (dispatch) => {
    await dispatch({ type: "CLEAR_MOVIE", payload: {} });
  };
};
