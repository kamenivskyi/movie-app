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
import { useStorage } from "../../hooks";

const Trending = () => {
  const [currentType, setCurrentType] = useStorage({
    key: "currentType",
    initialValue: MOVIE_TYPE,
  });
  const [currentPeriod, setCurrentPeriod] = useStorage({
    key: "currentPeriod",
    initialValue: WEEK_PERIOD,
  });
  const [currentPage, setCurrentPage] = useStorage({
    key: "currentPage",
    initialValue: DEFAULT_TRENDING_PAGE,
  });
  const { items, loading } = useSelector(({ trendingList }) => trendingList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingList(currentType, currentPeriod, currentPage));
  }, [currentType, currentPeriod, currentPage]);

  const { results, total_results, total_pages, page } = items;

  if (!items.results) return null;

  return (
    <div className="container">
      <MediaTabs
        onChangePeriod={setCurrentPeriod}
        onChangeType={setCurrentType}
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
            onChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default Trending;
