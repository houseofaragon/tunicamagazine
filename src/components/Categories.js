import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { fetchCategories } from '../actions/actions'
import Product from './Product'

class Categories extends Component {
  componentWillMount() {
    this.props.fetchCategories()
  }

  render() {
    const categories  = this.props.categories.categories || {}
    return (
      <div className='content'>
  	  	<div className='shop-page'>
  	      {Object.keys(categories).map((category, idx) => 
  	        <Product key={categories[category.id]} product={categories[category]} />  
  	      )}
  	    </div>
      </div>
    )
  }
}

Categories.propTypes = {
  categories: PropTypes.object,
  fetchCategories: PropTypes.func
};

const mapStateToProps = (state, props) => ({
  categories: state.categories
})

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: bindActionCreators(fetchCategories, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
