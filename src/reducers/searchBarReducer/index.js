import { searchBarTypeActions } from '../../actions/SearchBar'
const initialState = {
  movieList: null,
  config: {},
  inputValue: '',
}

const searchBarReducer = (state = initialState, action) => {
  const { GET_MOVIES, GET_CONFIG, UPDATE_INPUT } = searchBarTypeActions;
  switch (action.type) {
    case GET_MOVIES: return { ...state, movieList: action.payload };
    case GET_CONFIG: return { ...state, config: action.payload };
    case UPDATE_INPUT: return { ...state, inputValue: action.payload };
    default: return state;
  }
};

export default searchBarReducer;
