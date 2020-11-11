import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getTrendingItemData } from "../../../redux/trendingItem/trendingItemActions";
import { getCast } from "../../../redux/cast/castActions";
import { getTrailer } from "../../../redux/trailer/trailerActions";

import TvView from "./TvView";

const Tv = () => {
  const TYPE = "tv";

  const { trendingItem, cast, trailer, loading } = useSelector(
    ({ trendingItem, cast, trailer }) => ({
      trendingItem: trendingItem.item,
      cast: cast.castItems,
      trailer: trailer.video,
      loading: trendingItem.loading,
    })
  );
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getTrendingItemData(id, TYPE));
    dispatch(getTrailer(id, TYPE));
    dispatch(getCast(id, TYPE));
  }, [id]);

  return (
    <TvView
      tv={trendingItem}
      video={trailer}
      cast={cast}
      type="tv"
      loading={loading}
    />
  );
};

export default Tv;
