import { combineReducers } from 'redux';
import searchBarReducer from './searchBarReducer';
import movieDetailsReducer from './movieDetailsReducer';
import similarMoviesReducer from './similarMoviesReducer'

export default combineReducers({
  searchBarComponent: searchBarReducer,
  movieDetailsComponent: movieDetailsReducer,
  similarMoviesComponent: similarMoviesReducer
});
