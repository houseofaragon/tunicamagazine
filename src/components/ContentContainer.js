import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { fetchContent } from '../actions/actions'
import FeatureList from './FeatureList'
import ArticleList from './ArticleList'
import ShopList from './ShopList'
import Ticker from './Ticker'

class ContentContainer extends Component {
  componentWillMount() {
    this.props.fetchContent()
  }

  render() {
    const { features } = this.props.content || {}
    const { articles } = this.props.content || {}
    const { products } = this.props.content || {}

    return (
      <div>
        <Ticker />
        <div className='content'>
          <FeatureList features={features} />
          <ArticleList articles={articles} />
          <ShopList products={products} />
        </div>
      </div>
    )
  }
}

ContentContainer.propTypes = {
  features: PropTypes.array,
  articles: PropTypes.array,
  content: PropTypes.array,
  products: PropTypes.array,
  fetchContent: PropTypes.func
};

const mapStateToProps = (state, props) => ({
  features: state.features,
  articles: state.articles,
  content: state.content,
  products: state.products
})

const mapDispatchToProps = (dispatch) => ({
  fetchContent: bindActionCreators(fetchContent, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer)
