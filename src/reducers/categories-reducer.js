import * as types from '../actions/action-types';

const reduceSetCategories = (state, action) => {
	const newState = {}
	Object.assign(newState, state, {categories: action.categories})
	return newState
}

export default (state = {}, action) => {
  switch (action.type) {
    case types.SET_CATEGORIES:
      return reduceSetCategories(state, action)
    default:
      return state;
  }
};

