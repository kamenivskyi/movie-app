import React from "react";
import PropTypes from "prop-types";

import StudioItem from "../StudioItem";
import { companiesAndNetworksShape } from "../../utils/commonPropTypes";

const Companies = ({ data }) => {
  const renderCompanies = data?.map((item) => (
    <StudioItem item={item} key={`company${item.id}`} />
  ));

  console.log(data);

  return data && data.length ? (
    <>
      <h4 className="section-title text-white">Companies</h4>
      <ul className="studios">{renderCompanies}</ul>
    </>
  ) : null;
};

Companies.propTypes = {
  data: PropTypes.arrayOf(companiesAndNetworksShape),
};

export default Companies;
