import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import {
  TRENDING_PAGE_PERIODS,
  TRENDING_PAGE_TABS,
} from "../../../utils/config";

const MediaTabs = ({ onChangePeriod, onChangeType, type, period }) => {
  const handleChangeType = (e, newValue) => {
    e.preventDefault();
    onChangeType(newValue);
  };
  const handleChangePeriod = (e, newValue) => {
    e.preventDefault();
    onChangePeriod(newValue);
  };

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
                onClick={(e) => handleChangeType(e, tabSlug)}
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
                onClick={(e) => handleChangePeriod(e, tabPeriod)}
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
  onChangePeriod: PropTypes.func,
  onChangeType: PropTypes.func,
  period: PropTypes.string,
  type: PropTypes.string,
};

export default MediaTabs;
