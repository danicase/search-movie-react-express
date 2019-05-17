export const movieDetailsTypeActions = {
  GET_MOVIEDETAILS: 'get Movie details'
}

export const getMovieDetails = (payload = {}) => {
  return {
    type: movieDetailsTypeActions.GET_MOVIEDETAILS,
    payload
  }
};
