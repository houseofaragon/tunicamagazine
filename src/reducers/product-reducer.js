import * as types from '../actions/action-types';

const initialState = {
	title: {},
	content: {}
}
const reduceSetProduct = (state, action) => {
	const newState = {}
	Object.assign(newState, state, action.product)
	return newState
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PRODUCT:
      return reduceSetProduct(state, action)
    default:
      return state;
  }
};

