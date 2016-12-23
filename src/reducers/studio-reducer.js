import * as types from '../actions/action-types';

const initialState = {
	title: {},
	content: {}
}

const reduceSetStudioPage = (state, action) => {
	const newState = {}
	Object.assign(newState, state, action.page)
	return newState
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_STUDIO_PAGE:
      return reduceSetStudioPage(state, action)
    default:
      return state;
  }
};

