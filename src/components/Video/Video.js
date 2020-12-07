import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { VIDEO_EMBED_BASE } from "../../utils/config";

import "./Video.css";

const Video = ({ url, onClick }) =>
  ReactDOM.createPortal(
    <div className="video-overlay" onClick={onClick}>
      <iframe
        className="video"
        title="Watch video trailer"
        src={VIDEO_EMBED_BASE + url}
        frameBorder="0"
        allowFullScreen="1"
      />
    </div>,
    document.getElementById("video-portal")
  );

Video.propTypes = {
  url: PropTypes.string,
  onClick: PropTypes.func,
};
export default Video;
