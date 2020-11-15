import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import {
  TRENDING_PAGE_PERIODS,
  TRENDING_PAGE_TABS,
} from "../../../utils/config";

const MediaTabs = ({ onClick, type, period }) => {
  return (
    <div className="row my-3" style={{ margin: "0" }}>
      <ul className="col-6 nav nav-pills">
        {TRENDING_PAGE_TABS.map(({ label, tabSlug }) => {
          return (
            <li className="nav-item" key={tabSlug}>
              <a
                className={classNames("nav-link", {
                  active: tabSlug === type,
                })}
                data-type={tabSlug}
                href="#"
                onClick={onClick}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="col-6 nav nav-pills justify-content-center">
        {TRENDING_PAGE_PERIODS.map(({ label, tabPeriod }) => {
          return (
            <li className="nav-item" key={tabPeriod}>
              <a
                className={classNames("nav-link", {
                  active: tabPeriod === period,
                })}
                data-period={tabPeriod}
                href="#"
                onClick={onClick}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

MediaTabs.propTypes = {
  items: PropTypes.array,
  periodItems: PropTypes.array,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default MediaTabs;
