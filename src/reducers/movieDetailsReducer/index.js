
import { movieDetailsTypeActions } from '../../actions/MovieDetails'
const initialState = {
  movieDetails: null
}
const movieDetailsReducer = (state = initialState, action) => {
  if (action.type === movieDetailsTypeActions.GET_MOVIEDETAILS) {
    return { ...state, movieDetails: action.payload };
  }
  return state
};

export default movieDetailsReducer;
