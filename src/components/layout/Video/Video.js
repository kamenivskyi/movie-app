import React from 'react';
import PropTypes from 'prop-types';

import config from '../../../config';
import { Button } from '../../proxy/Button';

import './Video.css';

const Video = ({ url, onClick }) => {
  return (
    <div className='video-overlay' onClick={onClick}>
      <iframe
        className='video'
        src={config.video + url}
        frameBorder='0'
        allowFullScreen='1'
      />
      <Button className='close-video' title='close video' onClick={onClick}>
        <i className='fas fa-times'></i>
      </Button>
    </div>
  );
};

Video.propTypes = {
  url: PropTypes.string,
  onClick: PropTypes.func
};
export default Video;
