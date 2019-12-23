import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Video from './Video';

const BtnShowVideo = ({ url }) => {
  const [show, setShow] = useState(false);

  const handleClick = e => {
    setShow(true);

    const { classList } = e.target;
    if (classList.contains('video-overlay') || classList.contains('fa-times')) {
      setShow(false);
    }
  };
  const button = (
    <button className='btn btn-danger mt-3' onClick={handleClick}>
      <i className='fas fa-play'></i> &nbsp; Trailer
    </button>
  );
  if (show) {
    return (
      <>
        <Video url={url} onClick={handleClick} />
        {button}
      </>
    );
  }
  return <>{button}</>;
};

BtnShowVideo.propTypes = {
  url: PropTypes.string
};
export default BtnShowVideo;
