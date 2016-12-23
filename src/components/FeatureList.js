import React, {PropTypes} from 'react';
import Feature from './Feature';

const FeatureList = (props) => {
  return (
    <div className='content-features'>
      {props.features.map((feature, idx) => 
        <Feature key={feature.id} feature={feature} />  
      )}
    </div>
  );
};

FeatureList.propTypes = {
  features: PropTypes.array
};

export default FeatureList;
