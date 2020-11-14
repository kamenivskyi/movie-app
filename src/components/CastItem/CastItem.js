import React from "react";
import { Link } from "react-router-dom";

import { API_IMAGE } from "../../utils/config";
import { cutString } from "../../utils/helpers";

import reserveAvatar from "../../assets/images/avatar.jpg";

import "./CastItem.css";

const CastItem = ({ item: { character, name, profile_path, id } }) => {
  const imageUrl = profile_path
    ? API_IMAGE.medium + profile_path
    : reserveAvatar;

  return (
    <div className="cast-item">
      <div className="card border-secondary mb-3">
        <div className="card-header">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="card-body">
          <Link to={`/person/${id}`} className="character">
            {cutString(character, 0, 25)}
          </Link>
          <h4 className="card-title name">{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default CastItem;
