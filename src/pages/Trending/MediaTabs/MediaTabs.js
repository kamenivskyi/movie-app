import React from "react";
import PropTypes from "prop-types";

import TabItem from "../../../components/TabItem/TabItem";
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
        {TRENDING_PAGE_TABS.map(({ label, tabSlug }) => (
          <TabItem
            activeIf={tabSlug === type}
            onClick={(e) => handleChangeType(e, tabSlug)}
            key={tabSlug}
          >
            {label}
          </TabItem>
        ))}
      </ul>

      <ul className="col-6 nav nav-pills justify-content-center">
        {TRENDING_PAGE_PERIODS.map(({ label, tabPeriod }) => (
          <TabItem
            activeIf={tabPeriod === period}
            onClick={(e) => handleChangePeriod(e, tabPeriod)}
            key={tabPeriod}
          >
            {label}
          </TabItem>
        ))}
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

export default React.memo(MediaTabs);
