import React from 'react';

export const Button = props => {
  const { type, children } = props;

  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  children: 'button'
};
