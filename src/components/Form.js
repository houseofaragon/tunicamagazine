import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { search } from '../actions/actions'
import { browserHistory } from 'react-router'

class Form extends Component {

  handleChange(event) {
    this.props.search(event.currentTarget.value);
  }

  goToSearch(event) {
    browserHistory.push('search')
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <div className='search'>
          <form onSubmit={this.goToSearch.bind(this)}>
          <input type="text" value={this.props.searchResults.searchTerm} onChange={ this.handleChange.bind(this) } />
          </form>
        </div>
      </div>
    )
  }
}

Form.propTypes = {
  search: PropTypes.func,
  searchResults: PropTypes.object
};

const mapStateToProps = (state, props) => ({
  searchResults: state.searchResults
})

const mapDispatchToProps = (dispatch) => ({
  search: bindActionCreators(search, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
