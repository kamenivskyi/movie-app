import React from "react";
import PropTypes from "prop-types";

import StudioItem from "../StudioItem";
import { companiesAndNetworksShape } from "../../utils/sharelablePropTypes";

const Networks = ({ data }) => {
  if (!data) return null;

  const renderNetworks = data.map((item) => (
    <StudioItem item={item} key={`network${item.id}`} />
  ));

  return (
    <>
      <h4 className="section-title text-white">Networks</h4>
      <ul className="companies">{renderNetworks}</ul>
    </>
  );
};

Networks.propTypes = {
  data: PropTypes.arrayOf(companiesAndNetworksShape),
};

export default Networks;
