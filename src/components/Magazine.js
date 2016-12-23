import React, { PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { fetchPage } from '../actions/actions'
import MagazineSideBar from './MagazineSideBar'
import MagazinePage from './MagazinePage'
import PostSubHeader from './PostSubHeader'

class Magazine extends Component {
  componentWillMount() {
    this.props.fetchPage('issue5')
  }
  handleMenuItemClick (slug) {
    this.props.fetchPage(slug)
  }
  render() {
    return (
      <div>
        <PostSubHeader post={this.props.studioPage} />
        <div className='magazine'>            
          <MagazineSideBar handleMenuItemClick={this.handleMenuItemClick.bind(this)} />
          <MagazinePage page={this.props.studioPage}  />
        </div>
      </div>
    )
  }
}

Magazine.propTypes = {
  studioPage: PropTypes.object,
  fetchPage: PropTypes.func  
};

const mapStateToProps = (state, props) => ({
  studioPage: state.studioPage
})

const mapDispatchToProps = (dispatch) => ({
  fetchPage: bindActionCreators(fetchPage, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Magazine)
