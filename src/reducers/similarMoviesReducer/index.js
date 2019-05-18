import { similarMoviesTypeActions } from '../../actions/SimilarMovies'
const initialState = {
  similarMovies: null
}
const movieDetailsReducer = (state = initialState, action) => {
  if (action.type === similarMoviesTypeActions.STORED_SIMILAR_MOVIES) {
    return { ...state, similarMovies: action.payload };
  }
  return state
};

export default movieDetailsReducer;
