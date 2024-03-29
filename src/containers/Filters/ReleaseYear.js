import React from "react";
import PropTypes from "prop-types";
import { getYears } from "../../utils/helpers";

const ReleaseYear = ({ onChange, year, ...restProps }) => {
  const years = getYears();

  return (
    <div className="form-group year">
      <label>
        <span>Release year: &nbsp;</span>

        <select
          className="form-control"
          value={year}
          onChange={onChange}
          {...restProps}
        >
          <option value="">--Choose a year--</option>
          {years.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

ReleaseYear.propTypes = {
  onChange: PropTypes.func,
  year: PropTypes.number,
};

export default ReleaseYear;
