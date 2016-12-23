import * as types from '../actions/action-types';

const initialState = {
	content: [],
	features: [],
	articles: [],
	products: []
}

const reduceSetFeatureList = (state, action) => {
	const newState = []
	Object.assign(newState, state, {features: action.features, articles: action.articles, products: action.products})
	return newState
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CONTENT:
      return reduceSetFeatureList(state, action)
    default:
      return state;
  }
};

