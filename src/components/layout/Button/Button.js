import React from 'react';

export const Button = props => {
  const { type, classes, children } = props;

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  children: 'button',
  classes: 'btn'
};
