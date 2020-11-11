import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { getTrendingList } from "../../../redux/trendingList/trendingListActions";
import MediaItems from "../../layout/MediaItems";
import MediaTabs from "../../layout/MediaTabs";
import PaginationWrapper from "../../layout/PaginationWrapper";
import Spinner from "../../layout/Spinner";

const Trending = () => {
  const [currentType, setCurrentType] = useState("movie");
  const [currentPeriod, setCurrentPeriod] = useState("week");
  const [currentPage, setCurrentPage] = useState(1);
  const { items, loading } = useSelector(({ trendingList }) => trendingList);
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const { results, total_results, total_pages, page } = items;

  useEffect(() => {
    getTypeFromSessionStorage("trendingType");
    getPeriodFromSessionStorage("trendingPeriod");

    setCurrentPage(params.page);
  }, []);

  useEffect(() => {
    dispatch(getTrendingList(currentType, currentPeriod, currentPage));
  }, [currentType, currentPeriod, currentPage]);

  const getTypeFromSessionStorage = (key) => {
    const typeFromSessionStorage = sessionStorage.getItem(key);

    if (typeFromSessionStorage) {
      setCurrentType(typeFromSessionStorage);
    }
  };

  const getPeriodFromSessionStorage = (key) => {
    const periodFromSStorage = sessionStorage.getItem(key);
    if (periodFromSStorage) {
      setCurrentPeriod(periodFromSStorage);
    }
  };

  const setToSessionStorage = (value, key) =>
    sessionStorage.setItem(value, key);

  if (!items.results) return null;

  const updateMedia = async (e) => {
    e.preventDefault();

    const type = e.target.getAttribute("data-type");
    const period = e.target.getAttribute("data-period");

    if (type) {
      setCurrentType(type);
      setToSessionStorage("trendingType", type);
    } else if (period) {
      setCurrentPeriod(period);
      setToSessionStorage("trendingPeriod", period);
    }
  };

  const handlePageChange = (activePage) => {
    setCurrentPage(activePage);
    history.push(`/trending/${activePage}`);
  };

  console.log("render");

  return (
    <div className="container">
      <MediaTabs
        onClick={updateMedia}
        type={currentType}
        period={currentPeriod}
      />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <MediaItems items={results} type={currentType} simpleRow />

          <PaginationWrapper
            currentPage={Number(page)}
            totalItems={total_results}
            totalPages={total_pages}
            onChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Trending;
