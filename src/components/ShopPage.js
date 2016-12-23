import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { fetchProducts } from '../actions/actions'
import Product from './Product'

class ShopPage extends Component {
  componentWillMount() {
    this.props.fetchProducts()
  }

  render() {
    const { products } = this.props || {}
    return (
      <div>
	  	<div className='shop-page'>
	      {Object.keys(products).map((product, idx) => 
	        <Product key={products[product.id]} product={products[product]} />  
	      )}
	    </div>
      </div>
    )
  }
}

ShopPage.propTypes = {
  products: PropTypes.object,
  fetchProducts: PropTypes.func
};

const mapStateToProps = (state, props) => ({
  products: state.products
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: bindActionCreators(fetchProducts, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
