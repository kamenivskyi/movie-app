import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Video from './Video';
import { Button } from '../Button';

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
    <Button className='btn btn-info mt-3' onClick={handleClick}>
      <i className='fas fa-play'></i> &nbsp; Trailer
    </Button>
  );

  if (show) {
    return (
      <>
        <Video url={url} onClick={handleClick} />
        {button}
      </>
    );
  } else {
    return <>{button}</>;
  }
};

BtnShowVideo.propTypes = {
  url: PropTypes.string
};
export default BtnShowVideo;
