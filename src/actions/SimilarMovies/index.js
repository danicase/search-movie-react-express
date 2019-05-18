export const similarMoviesTypeActions = {
  STORED_SIMILAR_MOVIES: 'Store similar movies'
}

export const storeSimilarMovies = (payload = {}) => {
  return {
    type: similarMoviesTypeActions.STORED_SIMILAR_MOVIES,
    payload
  }
};
