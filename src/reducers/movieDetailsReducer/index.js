
import { movieDetailsTypeActions } from '../../actions/MovieDetails'
const initialState = {
  movieDetails: {}
}
const movieDetailsReducer = (state = initialState, action) => {
  if (action.type === movieDetailsTypeActions.GET_MOVIEDETAILS) {
    return { ...state, movieDetails: action.payload };
  }
  return state
};

export default movieDetailsReducer;
