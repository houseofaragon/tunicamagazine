import React, { PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { fetchPage } from '../actions/actions'
import StudioMenu from './StudioMenu'
import StudioPage from './StudioPage'

class Studio extends Component {
  componentWillMount() {
    this.props.fetchPage('about')
  }

  handleMenuItemClick (slug) {
    this.props.fetchPage(slug)
  }
  
  render() {
    return (
      <div className='studio'>
        <StudioMenu handleMenuItemClick={this.handleMenuItemClick.bind(this)} />
        <div className='studio-content'>
          <StudioPage  page={this.props.studioPage}/>
        </div>
      </div>
    )
  }
}

Studio.propTypes = {
  studioPage: PropTypes.object,
  fetchPage: PropTypes.func  
};

const mapStateToProps = (state, props) => ({
  studioPage: state.studioPage
})

const mapDispatchToProps = (dispatch) => ({
  fetchPage: bindActionCreators(fetchPage, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Studio)
