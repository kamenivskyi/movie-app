import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getTrendingItemData } from "../../redux/trendingItem/trendingItemActions";
import { getCast } from "../../redux/cast/castActions";
import { getTrailer } from "../../redux/trailer/trailerActions";
import { TV_TYPE } from "../../utils/config";

import TvView from "./TvView";

const Tv = () => {
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
    dispatch(getTrendingItemData(id, TV_TYPE));
    dispatch(getTrailer(id, TV_TYPE));
    dispatch(getCast(id, TV_TYPE));
  }, [id, dispatch]);

  return (
    <TvView tv={trendingItem} video={trailer} cast={cast} loading={loading} />
  );
};

export default Tv;
