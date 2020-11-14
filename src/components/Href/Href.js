import React from "react";

const Href = ({ link = "#", children, ...restProps }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" {...restProps}>
    {children}
  </a>
);

export default Href;
