import { combineReducers } from 'redux';
import searchBarReducer from './searchBarReducer'
export default combineReducers({
  searchBarComponent: searchBarReducer
});
