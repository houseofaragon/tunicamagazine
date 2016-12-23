import React from 'react'
import MagazineSideBar from './MagazineSideBar'

const ProductPageSideBar = (props) => {
  const menuItemClick = (slug) => {
  	props.handleMenuItemClick(slug)
  }
  return (
	<div className='product-menu'>
  		<ul>
      		<li className='product-info'>
              <h3>{props.product.id}</h3>
          </li>
          <li className='magazine-issue'
              onClick={menuItemClick.bind(this, 'about')}>
            <div>
              issue 2 info
            </div>
          </li>
          <li className='magazine-issue'
              onClick={menuItemClick.bind(this, 'about')}>
            <div>
              issue 3 info
            </div>
          </li>
      	</ul>
        <MagazineSideBar />
    </div>
  )
}

ProductPageSideBar.propTypes = {
  product: React.PropTypes.object
};

export default ProductPageSideBar
