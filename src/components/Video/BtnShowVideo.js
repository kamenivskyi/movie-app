import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

import Video from "./Video";
import Button from "../Button";

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
      <Button
        className="btn btn-warning btn-rounded mt-3"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faVideo} />
      </Button>
    </>
  );
};

BtnShowVideo.propTypes = {
  url: PropTypes.string,
};
export default BtnShowVideo;
