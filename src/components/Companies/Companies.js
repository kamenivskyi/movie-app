import React from "react";
import PropTypes from "prop-types";

import StudioItem from "../StudioItem";

const Companies = ({ data }) => {
  if (!data) return null;

  const renderCompanies = data.map((item) => (
    <StudioItem item={item} key={`company${item.id}`} />
  ));

  return (
    data && (
      <>
        <h4 className="section-title text-black">Companies</h4>
        <ul className="studios">{renderCompanies}</ul>
      </>
    )
  );
};

Companies.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      logo_path: PropTypes.string,
    })
  ),
};

export default Companies;
