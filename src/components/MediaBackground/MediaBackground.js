import React from "react";
import PropTypes from "prop-types";

import { API_IMAGE } from "../../utils/config";
import reserveBg from "../../assets/images/reserve-bg.jpg";

const MediaBackground = ({ bgUrl, children }) => {
  const bgImage = bgUrl ? API_IMAGE.original + bgUrl : reserveBg;

  return (
    <div className="media-view" style={{ backgroundImage: `url(${bgImage})` }}>
      {children}
    </div>
  );
};

MediaBackground.propTypes = {
  bgUrl: PropTypes.string,
  children: PropTypes.node,
};

export default MediaBackground;
