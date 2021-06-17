export const setTvShows = (data) => {
  return async (dispatch) => {
    await dispatch({ type: "SET_TVSHOWS", payload: data });
  };
};