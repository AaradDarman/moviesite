export const setMovies = (data) => {
  return async (dispatch) => {
    await dispatch({ type: "SET_MOVIES", payload: data });
  };
};