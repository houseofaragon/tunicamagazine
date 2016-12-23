import React, { PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { fetchProduct } from '../actions/actions'
import ProductPageSideBar from './ProductPageSideBar'

class ProductPage extends Component {

  componentDidMount() {
    this.props.fetchProduct(this.props.params.id)
  }
  render() {

  	const { product } = this.props || {}

    return (
      <div className='product-page'>
      	<ProductPageSideBar product={product}/>
        <div className='product-content'>
        	{product.title.rendered}   
        </div>
      </div>
    )
  }
}

ProductPage.propTypes = {
  product: PropTypes.object,
  fetchProduct: PropTypes.func
};

const mapStateToProps = (state, props) => ({
  product: state.product
})

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: bindActionCreators(fetchProduct, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)
