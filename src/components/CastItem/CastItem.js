import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { API_IMAGE } from "../../utils/config";
import { cutString } from "../../utils/helpers";
import { castItemPropTypes } from "../../utils/sharelablePropTypes";

import reserveAvatar from "../../assets/images/avatar.jpg";

import "./CastItem.css";

const CastItem = ({ item: { character, name, profile_path, id } }) => {
  const image = profile_path ? API_IMAGE.medium + profile_path : reserveAvatar;

  return (
    <div className="cast-item">
      <div className="card-header">
        <img src={image} alt={name} />
      </div>
      <div className="card-body">
        <Link to={`/person/${id}`} className="character">
          {cutString(character, 0, 25)}
        </Link>
        <h4 className="card-title name">{name}</h4>
      </div>
    </div>
  );
};

CastItem.propTypes = {
  item: PropTypes.shape(castItemPropTypes),
};

export default CastItem;
