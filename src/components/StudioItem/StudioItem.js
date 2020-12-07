import React from "react";

import { API_IMAGE } from "../../utils/config";
import { companiesAndNetworksShape } from "../../utils/commonPropTypes";

import "./StudioItem.css";

const StudioItem = ({ item: { logo_path, name } }) => (
  <li className="studio-item">
    {logo_path ? (
      <div className="studio-img-wrapper">
        <img src={API_IMAGE.little + logo_path} alt={name} title={name} />
      </div>
    ) : (
      <span className="studio-name">{name}</span>
    )}
  </li>
);

StudioItem.propTypes = {
  item: companiesAndNetworksShape,
};

export default StudioItem;
