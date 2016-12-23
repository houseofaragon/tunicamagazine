import React, { Component } from 'react'
import {connect} from 'react-redux'
import { fetchCategories, fetchPage } from '../actions/actions'
import { Link, browserHistory } from 'react-router'
import {bindActionCreators} from 'redux'

class Footer extends Component {
	handleCategoryClick (id) {
		console.log(id)
		this.props.fetchCategories(id)
		browserHistory.push('categories')
	}
	handleMenuItemClick (slug) {
		this.props.fetchPage(slug)
		browserHistory.push(`/studio/${slug}`)
	}
  render() {
	  return (
	    <div className='footer'>
	      <div id='menu-1'>
	    		<ul><li><h1>Tunica</h1></li></ul>
	      	<ul>
		      	<li><h3>Masterminded by ... </h3></li>
		      	<li><h4>u.s. office: 231 Bowery, <br /> new york</h4></li>
		      </ul>
		    </div>
	    	<div id='menu-2'>
	      	<ul>
		      	<li><a onClick={this.handleMenuItemClick.bind(this, 'about')}><h3>About</h3></a></li>
		      	<li><a onClick={this.handleMenuItemClick.bind(this, 'contact')}><h3>Contact</h3></a></li>
		      	<li><a onClick={this.handleMenuItemClick.bind(this, 'stockists')}><h3>Stockists</h3></a></li>
		      	<li><a onClick={this.handleMenuItemClick.bind(this, 'advertising')}><h3>Advertising</h3></a></li>
		      	<br />
		      	<li><Link to={'shop'}><h3>Shop</h3></Link></li>
		      	<li><a onClick={this.handleMenuItemClick.bind(this, 'gallery')}><h3>Gallery</h3></a></li>
		      	<li><Link to={'studio'}><h3>Studio</h3></Link></li>
		      </ul>
		      <ul>
		      	<li><h3>Tumblr</h3></li>
		      	<li><h3>Facebook</h3></li>
		      	<li><h3>Instagram</h3></li>
		      	<li><h3>Twitter</h3></li>
		      </ul>
	      </div>
	      <div id='menu-3'>
	      	<ul>
		      	<li><a onClick={this.handleCategoryClick.bind(this, 6)}><h3>Fashion</h3></a></li>
		      	<li><a onClick={this.handleCategoryClick.bind(this, 10)}><h3>Events</h3></a></li>
		      	<li><a onClick={this.handleCategoryClick.bind(this, 8)}><h3>Music</h3></a></li>
		      	<li><a onClick={this.handleCategoryClick.bind(this, 11)}><h3>Design</h3></a></li>
		      	<li><a onClick={this.handleCategoryClick.bind(this, 9)}><h3>Illustration</h3></a></li>
		      	<li><a onClick={this.handleCategoryClick.bind(this, 7)}><h3>Architecture</h3></a></li>
		      </ul>
		    </div>
	    </div>
	  )
	}
}

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: bindActionCreators(fetchCategories, dispatch),
  fetchPage: bindActionCreators(fetchPage, dispatch)
})

export default connect(null, mapDispatchToProps)(Footer)
