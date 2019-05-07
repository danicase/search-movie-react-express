import { combineReducers } from 'redux';
import getMoviesReducer from './getMoviesReducer'
import getConfigReducer from './getConfigReducer'
export default combineReducers({
  getMovies: getMoviesReducer,
  getConfig: getConfigReducer
});
