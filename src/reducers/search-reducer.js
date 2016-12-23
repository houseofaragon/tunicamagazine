import * as types from '../actions/action-types';
const initialState = {
  searchResults: {},
  searchTerm: ''
}
const reduceSetSearchResults = (state, action) => {
	const newState = {}
	Object.assign(newState, state, { searchResults: action.results, searchTerm: action.searchTerm })
	return newState
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_RESULTS:
      return reduceSetSearchResults(state, action)
    default:
      return state;
  }
};

