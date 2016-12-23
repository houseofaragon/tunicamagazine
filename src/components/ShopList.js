import React, {PropTypes} from 'react';
import Product from './Product';

const Shop = (props) => {
  return (
    <div className='content-shop'>
      {props.products.map((product, idx) => 
        <Product key={product.id} product={product} />  
      )}
    </div>
  );
};

Shop.propTypes = {
  products: PropTypes.array
};

export default Shop;
