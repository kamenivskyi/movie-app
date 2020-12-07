import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const TabItem = ({ children, className, activeIf, ...restProps }) => (
  <li className="nav-item">
    <a
      href="#"
      className={classNames(className, {
        active: activeIf,
      })}
      {...restProps}
    >
      {children}
    </a>
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
