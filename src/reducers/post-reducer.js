import * as types from '../actions/action-types';

const initialState = {
	title: {},
	content: {}
}

const reduceSetPost = (state, action) => {
	const newState = {}
	Object.assign(newState, state, action.post)
	return newState
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_POST:
      return reduceSetPost(state, action)
    default:
      return state;
  }
};

