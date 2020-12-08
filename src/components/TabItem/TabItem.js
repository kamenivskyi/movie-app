import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./TabItem.css";

const TabItem = ({ children, className, activeIf, ...restProps }) => (
  <li className="nav-item">
    <button
      className={classNames("tab-button", className, {
        active: activeIf,
      })}
      {...restProps}
    >
      {children}
    </button>
  </li>
);

TabItem.propTypes = {
  activeIf: PropTypes.bool,
  children: PropTypes.node,
};

TabItem.defaultProps = {
  className: "nav-link",
};

export default TabItem;
