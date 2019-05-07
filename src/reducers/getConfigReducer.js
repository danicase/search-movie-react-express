export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CONFIG': return [...state, action.payload];
    default: return state;
  }
};
