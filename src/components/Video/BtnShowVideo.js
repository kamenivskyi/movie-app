import React, { useState } from "react";
import PropTypes from "prop-types";

import Video from "./Video";
import Button from "../Button";
import { VIDEO_EMBED_BASE } from "../../utils/config";

const BtnShowVideo = ({ url }) => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setShow(true);

    const isOverlay = e.target.classList.contains("video-overlay");
    const isCross = e.target.classList.contains("fa-times");

    if (isOverlay || isCross) {
      setShow(false);
    }
  };
  return (
    <>
      {show && <Video url={url} onClick={handleClick} />}
      <Button className="btn btn-light mt-3" onClick={handleClick}>
        <i className="fas fa-play"></i> &nbsp; Trailer
      </Button>
    </>
  );
};

BtnShowVideo.propTypes = {
  url: PropTypes.string,
};
export default BtnShowVideo;