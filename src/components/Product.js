import React, {PropTypes} from 'react';
import { Link } from 'react-router'

const Product = ({product}) => {
  return (
    <div key={product.id} id='content-product'>
      <Link to={`/shop/${product.id}`}><h1>{product.title.rendered}</h1></Link>
      <h2 dangerouslySetInnerHTML={{__html: product.content.rendered}} />
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object
};

export default Product;
