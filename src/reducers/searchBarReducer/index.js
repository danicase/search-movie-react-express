import { searchBarTypeActions } from '../../actions/SearchBar'
const initialState = {
  movieList: {},
  config: {},
  inputValue: ''
}
const searchBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case searchBarTypeActions.GET_MOVIES: return Object.assign({}, state, { movieList: action.payload });
    case searchBarTypeActions.GET_CONFIG: return Object.assign({}, state, { config: action.payload });
    case searchBarTypeActions.UPDATE_INPUT: return Object.assign({}, state, { inputValue: action.payload });
    default: return state;
  }
};

export default searchBarReducer;
