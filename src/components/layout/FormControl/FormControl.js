import React from 'react';
import PropTypes from 'prop-types'

import './FormControl.css';

const FormControl = ({ 
  id, 
  label, 
  type,
  classes,
  append,
  error,  
  ...restProps 
}) => {

  return (
    <div className='form-group'>
      <label htmlFor={id}> {label} </label>
      <input 
        className={`form-control ${classes} ${error && 'is-invalid'}`}  
        type={type} 
        id={id} 
        {...restProps} 
      />
      {error && (
        <div id={id} className="invalid-feedback">
          {error}
        </div>
      )}
      {append && append}
    </div>
  );
}

FormControl.defaultProps = {
  type: 'text',
};

FormControl.propTypes = {
  label: PropTypes.string,
};

export default FormControl;
