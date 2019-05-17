import { combineReducers } from 'redux';
import searchBarReducer from './searchBarReducer';
import movieDetailsReducer from './movieDetailsReducer';

export default combineReducers({
  searchBarComponent: searchBarReducer,
  movieDetailsComponent: movieDetailsReducer
});
