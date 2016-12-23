import React from 'react'
import { browserHistory } from 'react-router'

const StudioMenu = (props) => {

  const menuItemClick = (slug) => {
  	props.handleMenuItemClick(slug)
  	browserHistory.push(`/studio/${slug}`)
  }

  return (
	<div className='studio-menu'>
  		<ul>
      		<li onClick={menuItemClick.bind(this, 'about')}><h4>about</h4></li>
      		<li onClick={menuItemClick.bind(this, 'contact')}><h4>contact</h4></li>
      		<li onClick={menuItemClick.bind(this, 'stockists')}><h4>stockists</h4></li>
      		<li onClick={menuItemClick.bind(this, 'advertising')}><h4>advertising</h4></li>
      		<li onClick={menuItemClick.bind(this, 'gallery')}><h4>gallery</h4></li>
      		<li onClick={menuItemClick.bind(this, 'studio')}><h4>studio</h4></li>
      	</ul>
    </div>
  )
}

export default StudioMenu
