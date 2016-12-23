import content from './feature-reducer.js'
import post from './post-reducer.js'
import studioPage from './studio-reducer.js'
import products from './products-reducer.js'
import product from './product-reducer.js'
import searchResults from './search-reducer.js'
import categories from './categories-reducer.js'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  content,
  post,
  studioPage,
  products,
  product,
  searchResults,
  categories
});

export default rootReducer;
