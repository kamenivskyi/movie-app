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
  const [type, setType] = useStorage({
    key: "currentType",
    initialValue: MOVIE_TYPE,
  });
  const [period, setPeriod] = useStorage({
    key: "currentPeriod",
    initialValue: WEEK_PERIOD,
  });
  const [page, setPage] = useStorage({
    key: "currentPage",
    initialValue: DEFAULT_TRENDING_PAGE,
  });
  const { items, loading } = useSelector(({ trendingList }) => trendingList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingList(type, period, page));
  }, [type, period, page, dispatch]);

  const { results, total_results, total_pages } = items;

  if (!items.results) return null;

  return (
    <div className="container">
      <MediaTabs
        onChangePeriod={setPeriod}
        onChangeType={setType}
        type={type}
        period={period}
      />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <MediaItems items={results} type={type} simpleRow />

          <PaginationWrapper
            activePage={Number(items.page)}
            totalItems={Number(total_results)}
            totalPages={Number(total_pages)}
            onChange={setPage}
          />
        </>
      )}
    </div>
  );
};

export default Trending;
