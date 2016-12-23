import * as types from './action-types';

import fetch from 'isomorphic-fetch'

export const setContent = (data1, data2, data3) => {
  return {
    type: types.SET_CONTENT,
    features: data1,
    articles: data2,
    products: data3,
  };
}

export const setPost = (data) => {
  return {
    type: types.SET_POST,
    post: data
  };
}

export const setStudioPage = (data) => {
  return {
    type: types.SET_STUDIO_PAGE,
    page: data
  };
}

export const setProducts = (data) => {
  return {
    type: types.SET_PRODUCTS,
    products: data
  };
}

export const setProduct = (data) => {
  return {
    type: types.SET_PRODUCT,
    product: data
  };
}

export const setSearchResults = (data, value) => {
  return {
    type: types.SET_SEARCH_RESULTS,
    results: data,
    searchTerm: value
  };
}

export const setCategories = (data) => {
  return {
    type: types.SET_CATEGORIES,
    categories: data
  };
}

export const fetchContent = () => (dispatch) => {
	const featureURL = 'http://localhost:8888/tunica/wp-json/wp/v2/posts?categories=3'
	const articleURL = 'http://localhost:8888/tunica/wp-json/wp/v2/posts?categories=4'
	const productURL = 'http://localhost:8888/tunica/wp-json/wp/v2/posts?categories=5'

	const fetchFeatures = (url) => {
		return fetch(url)
			.then(response => response.json())
			.then(data => data)
			.catch(error => console.log('request failed', error))
	}

	const fetchArticles = (url) => {
		return fetch(url)
			.then(response => response.json())
			.then(data => data)
			.catch(error => console.log('request failed', error))
	}

	const fetchProducts = (url) => {
		return fetch(url)
			.then(response => response.json())
			.then(data => data)
			.catch(error => console.log('request failed', error))
	}

	Promise.all([fetchFeatures(featureURL), fetchArticles(articleURL), fetchProducts(productURL)])
		.then(results => {
			dispatch(setContent(results[0], results[1], results[2]))
		})
		.catch(error => console.log('request failed', error))
}

export const fetchPost = (id) => (dispatch) => {
	console.log(id)
	const url = `http://localhost:8888/tunica/wp-json/wp/v2/posts/${id}`
	fetch(url)
		.then(response => response.json())
		.then(data => {
			console.log('data', data)
			dispatch(setPost(data))
		})
		.catch(error => console.log('request failed', error))
}

export const fetchPage = (slug) => (dispatch) => {
	console.log(slug)
	const url = `http://localhost:8888/tunica/wp-json/wp/v2/pages?slug=${slug}`
	fetch(url)
		.then(response => response.json())
		.then(data => {
			console.log('data', data)
			dispatch(setStudioPage(data[0]))
		})
		.catch(error => console.log('request failed', error))
}

export const fetchProducts = () => (dispatch) => {
		const url = 'http://localhost:8888/tunica/wp-json/wp/v2/posts?categories=5'
		fetch(url)
			.then(response => response.json())
			.then(data => {
				console.log(data)
				dispatch(setProducts(data))
			})
			.catch(error => console.log('request failed', error))
}

export const fetchCategories = (category) => (dispatch) => {
		/*
			WP API 2
			fashion = 6
			architecture = 10
			design = 8
			events = 11
			illustration = 9
			music = 7
		*/
		console.log(category)
		let url
		if (category) { url = `http://localhost:8888/tunica/wp-json/wp/v2/posts?tags=${category}` }
		else { url = 'http://localhost:8888/tunica/wp-json/wp/v2/posts' }
		fetch(url)
			.then(response => response.json())
			.then(data => dispatch(setCategories(data)))
			.catch(error => console.log('request failed', error))
}


export const fetchProduct = (id) => (dispatch) => {
	console.log(id)
	const url = `http://localhost:8888/tunica/wp-json/wp/v2/posts/${id}`
	fetch(url)
		.then(response => response.json())
		.then(data => {
			console.log(data)
			dispatch(setProduct(data))
		})
		.catch(error => console.log('request failed', error))
}


export const search = (value) => (dispatch) => {
	const url = `http://localhost:8888/tunica/wp-json/wp/v2/posts?search=${value}`
	fetch(url)
		.then(response => response.json())
		.then(data => dispatch(setSearchResults(data, value)))
		.catch(error => console.log('request failed', error))
}

