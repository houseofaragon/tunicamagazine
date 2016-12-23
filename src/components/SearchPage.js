import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux'
import Product from './Product'

class SearchPage extends Component {
  	render() {
  	  const searchResults = this.props.searchResults.searchResults || {}
	  return (
 		<div className='content'>
		  	<div className='shop-page'>
		      {Object.keys(searchResults).map((product, idx) => 
		        <Product key={searchResults[product.id]} product={searchResults[product]} />  
		      )}
		    </div>
	      </div>
	  );
	}
}

SearchPage.propTypes = {
  searchResults: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  searchResults: state.searchResults
})

export default connect(mapStateToProps, null)(SearchPage)
