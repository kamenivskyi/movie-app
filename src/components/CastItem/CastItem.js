import React from "react";
import { Link } from "react-router-dom";

import { API_IMAGE } from "../../utils/config";
import { cutString } from "../../utils/helpers";
import { castItemShape } from "../../utils/commonPropTypes";
import reserveAvatar from "../../assets/images/avatar.jpg";

import "./CastItem.css";

const CastItem = ({ item: { character, name, profile_path, id } }) => {
  const image = profile_path ? API_IMAGE.medium + profile_path : reserveAvatar;
  const cuttedCharacter = cutString(character, 0, 25);

  return (
    <div className="cast-item">
      <div className="card-header">
        <img src={image} alt={name} />
      </div>
      <div className="card-body">
        <Link to={`/person/${id}`} className="character">
          {cuttedCharacter}
        </Link>
        <h4 className="card-title name">{name}</h4>
      </div>
    </div>
  );
};

CastItem.propTypes = {
  item: castItemShape,
};

export default CastItem;
