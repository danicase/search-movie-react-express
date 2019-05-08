
export const searchBarTypeActions = {
  GET_MOVIES: 'get Movies',
  GET_CONFIG: 'get config',
  UPDATE_INPUT: 'update search Input'

}

export const getMovieList = (payload = {}) => {
  return {
    type: searchBarTypeActions.GET_MOVIES,
    payload
  }
};

export const getConfig = (payload = {}) => {
  return {
    type: searchBarTypeActions.GET_CONFIG,
    payload
  }
};

export const updateInput = (payload = {}) => {
  return {
    type: searchBarTypeActions.UPDATE_INPUT,
    payload
  }
}
