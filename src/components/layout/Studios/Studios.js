import React from 'react';
import PropTypes from 'prop-types';

import './Studios.css';

const Studios = ({ postitionTop, positionBottom }) => (
  <div className='companies-wrapper'>
    <div className='container-fluid'>
      {postitionTop}
      {positionBottom}
    </div>
  </div>
);

Studios.propTypes = {
  postitionTop: PropTypes.node,
  positionBottom: PropTypes.node
};

export default Studios;
