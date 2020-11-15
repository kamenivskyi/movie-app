import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTrendingList } from "../../redux/trendingList/trendingListActions";
import MediaItems from "../../components/MediaItems";
import MediaTabs from "./MediaTabs";
import PaginationWrapper from "../../components/PaginationWrapper";
import Spinner from "../../components/Spinner";
import {
  DEFAULT_TRENDING_PAGE,
  MOVIE_TYPE,
  WEEK_PERIOD,
} from "../../utils/config";
import { useLocalStorage } from "../../hooks";

const Trending = () => {
  const [currentType, setCurrentType] = useLocalStorage(
    "currentType",
    MOVIE_TYPE
  );
  const [currentPeriod, setCurrentPeriod] = useLocalStorage(
    "currentPeriod",
    WEEK_PERIOD
  );
  const [currentPage, setCurrentPage] = useLocalStorage(
    "currentPage",
    DEFAULT_TRENDING_PAGE
  );
  const { items, loading } = useSelector(({ trendingList }) => trendingList);
  const dispatch = useDispatch();

  const { results, total_results, total_pages, page } = items;

  useEffect(() => {
    dispatch(getTrendingList(currentType, currentPeriod, currentPage));
  }, [currentType, currentPeriod, currentPage]);

  if (!items.results) return null;

  const updateMedia = async (e) => {
    e.preventDefault();

    const type = e.target.getAttribute("data-type");
    const period = e.target.getAttribute("data-period");

    if (type) {
      setCurrentType(type);
    } else if (period) {
      setCurrentPeriod(period);
    }
  };

  const handlePageChange = (activePage) => setCurrentPage(activePage);

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
