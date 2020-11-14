import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import config from "../../utils/config";

import "./Video.css";

const Video = ({ url, onClick }) => {
  return ReactDOM.createPortal(
    <div className="video-overlay" onClick={onClick}>
      <iframe
        className="video"
        src={config.video + url}
        frameBorder="0"
        allowFullScreen="1"
      />
    </div>,
    document.getElementById("video-portal")
  );
};

Video.propTypes = {
  url: PropTypes.string,
  onClick: PropTypes.func,
};
export default Video;
