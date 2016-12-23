import React, {PropTypes}  from 'react'

const MagazinePage = (props) => {
  return (
    <div className='magazine-content'>
      <div dangerouslySetInnerHTML={{__html: props.page.content.rendered}} />
    </div>
  )
}

MagazinePage.propTypes = {
  page: PropTypes.object
};

export default MagazinePage
