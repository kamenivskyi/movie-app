import React from 'react';

export const Button = props => {
  const { type, children } = props;

  return (
    <button type={type || 'button'} {...props}>
      {children}
    </button>
  );
};
