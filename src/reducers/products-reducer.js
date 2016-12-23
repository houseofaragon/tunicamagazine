import * as types from '../actions/action-types';

const reduceSetProducts = (state, action) => {
	const newState = {}
	Object.assign(newState, state, action.products)
	return newState
}

export default (state = {}, action) => {
  switch (action.type) {
    case types.SET_PRODUCTS:
      return reduceSetProducts(state, action)
    default:
      return state;
  }
};

