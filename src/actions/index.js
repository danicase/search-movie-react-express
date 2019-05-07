import movieDBBaseURL from '../apis/MoviesDatabase'
// WRONG!!! they work with the middleware only, need to be implemented! 
export const fetchMovies = name => async dispatch => {
  const response = await movieDBBaseURL.get(`/search/${name}`);
  dispatch({ type: 'FETCH_MOVIE', payload: response.data });
}

export const fetchConfig = () => async dispatch => {
  const response = await movieDBBaseURL.get(`/getConfig`);
  dispatch({ type: 'FETCH_CONFIG', payload: response.data });
}
