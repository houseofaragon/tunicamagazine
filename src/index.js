import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import './css/index.scss';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import App from './App';
import PostPage from './components/PostPage';
import Layout from './components/Layout'
import Studio from './components/Studio'
import Magazine from './components/Magazine'
import ShopPage from './components/ShopPage'
import ProductPage from './components/ProductPage'
import SearchPage from './components/SearchPage'
import Categories from './components/Categories'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  	<Router history={browserHistory}>
  		<Route path='/' component={Layout}>
  			<IndexRoute component={App} />
  				<Route path='/feature/:id' component={PostPage} />
   				<Route path='/magazine' component={Magazine} />
  				<Route path='/magazine/:id' component={PostPage} />
   				<Route path='/shop' component={ShopPage} />
   				<Route path='/shop/:id' component={ProductPage} />
   				<Route path='/search' component={SearchPage} />
   				<Route path='/studio' component={Studio} />
   				<Route path='/studio/about' component={Studio} />
   				<Route path='/studio/contact' component={Studio} />
   				<Route path='/studio/contact' component={Studio} />
   				<Route path='/studio/stockists' component={Studio} />
   				<Route path='/studio/advertising' component={Studio} />
   				<Route path='/studio/gallery' component={Studio} />
   				<Route path='/categories' component={Categories} />

    	</Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
