import React from "react";

import StudioItem from "../StudioItem";
import { companiesAndNetworksPropTypes } from "../../utils/sharelablePropTypes";

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
  data: companiesAndNetworksPropTypes,
};

export default Companies;
