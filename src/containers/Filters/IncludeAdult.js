import React from "react";
import PropTypes from "prop-types";

const IncludeAdult = ({ value, onChange, ...restProps }) => (
  <div className="form-check">
    <label className="form-check-label">
      <input
        className="form-check-input"
        type="checkbox"
        value={value}
        checked={value}
        onChange={onChange}
        {...restProps}
      />
      Include adult?
    </label>
  </div>
);

IncludeAdult.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
};

export default IncludeAdult;
