import { combineReducers } from "redux";
import { moviesReducer } from "./movies";
import { movieReducer } from "./movie";
export const reducers = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
});
