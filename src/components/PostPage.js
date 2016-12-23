/* This is an stand alone article or feature page */
import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { fetchPost } from '../actions/actions'
import PostSubHeader from './PostSubHeader'
import RelatedPosts from './RelatedPosts'

class PostPage extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id)
  }

  render() {
    const { post } = this.props || {}

    return (
      <div>
        <PostSubHeader post={post}/>
        <div className='post'>
          <div id='post-col-1'>
          </div>
          <div id='post-col-2'>
            <div id='post-image'>
            </div>
            <div id='post-main-image-caption'>
            </div>
            <div id='post-main-content'>
              <p dangerouslySetInnerHTML={{__html: post.content.rendered}} />
            </div>
          </div>
          <div id='post-col-3'>
            <h3>shop</h3>
          </div>
          <RelatedPosts />
        </div>
      </div>
    )
  }
}

PostPage.propTypes = {
  post: PropTypes.object,
  fetchPost: PropTypes.func
};

const mapStateToProps = (state, props) => ({
  post: state.post
})

const mapDispatchToProps = (dispatch) => ({
  fetchPost: bindActionCreators(fetchPost, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
