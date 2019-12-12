import React from 'react';

const PersonView = ({ data }) => {
  console.log(data);
  return <div>{data.name}</div>;
};
export default PersonView;
