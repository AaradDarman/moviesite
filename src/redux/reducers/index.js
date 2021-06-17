import { combineReducers } from "redux";
import { moviesReducer } from "./movies";
import { movieReducer } from "./movie";
import { tvShowsReducer } from "./tvshows";
export const reducers = combineReducers({
  movies: moviesReducer,
  tvShows: tvShowsReducer,
  movie: movieReducer,
});
