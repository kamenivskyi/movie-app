import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Button } from '../Button';

import config from '../../../utils/config';

import './Video.css';

const Video = ({ url, onClick }) => (
  <div className='video-overlay' onClick={onClick}>
    <iframe
      className='video'
      src={config.video + url}
      frameBorder='0'
      allowFullScreen='1'
    />
    <Button className='close-video' title='close video' onClick={onClick}>
      <FontAwesomeIcon icon={faTimes} />
    </Button>
  </div>
);

Video.propTypes = {
  url: PropTypes.string,
  onClick: PropTypes.func
};
export default Video;
