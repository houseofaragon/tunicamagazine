import React, {PropTypes} from 'react'
import { Link } from 'react-router'

const Feature = ({feature}) => {
  return (
	    <div id="content-feature">
	      <Link to={`/feature/${feature.id}`}><h1>{feature.title.rendered}</h1></Link>
	      <h2 dangerouslySetInnerHTML={{__html: feature.content.rendered}} />
	    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.object
};

export default Feature;
