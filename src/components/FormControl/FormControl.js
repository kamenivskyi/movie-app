import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./FormControl.css";

const FormControl = ({
  id,
  label,
  type,
  classes,
  append,
  error,
  ...restProps
}) => {
  const inputClasses = classNames(["form-control", classes], {
    "is-invalid": error,
  });

  return (
    <div className="form-group">
      <label htmlFor={id}> {label} </label>
      <input className={inputClasses} type={type} id={id} {...restProps} />
      {error && (
        <div id={id} className="invalid-feedback">
          {error}
        </div>
      )}
      {append && append}
    </div>
  );
};

FormControl.defaultProps = {
  type: "text",
};

FormControl.propTypes = {
  label: PropTypes.string,
  classes: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  append: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default FormControl;
