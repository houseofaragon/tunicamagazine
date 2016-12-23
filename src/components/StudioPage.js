import React, {PropTypes}  from 'react'

const StudioPage = (props) => {
  return (
  	<div>
      <div id='studio-page-header'>
        <p>{props.page.slug} </p>
      </div>
      <p dangerouslySetInnerHTML={{__html: props.page.content.rendered}} />

    </div>
  )
}

StudioPage.propTypes = {
  page: PropTypes.object
};

export default StudioPage
