import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getTrendingItemData } from '../../../redux/trendingItem/trendingItemActions';
import { getCast } from '../../../redux/cast/castActions';
import { getTrailer } from '../../../redux/trailer/trailerActions';

import TvView from './TvView';

const Tv = (props) => {
  const {
    getTrendingItemData,
    match,
    trendingItem,
    cast,
    getCast,
    getTrailer,
    trailer,
    loading,
  } = props;

  const TYPE = 'tv';

  useEffect(() => {
    const { id } = match.params;

    getTrendingItemData(id, TYPE);
    getTrailer(id, TYPE);
    getCast(id, TYPE);
  }, []);

  return (
    <TvView
      tv={trendingItem}
      video={trailer}
      cast={cast}
      type='tv'
      loading={loading}
    />
  );
};

const mapStateToProps = (state) => ({
  trendingItem: state.trendingItem.item,
  cast: state.cast.castItems,
  trailer: state.trailer.video,
  loading: state.trendingItem.loading,
});

export default connect(mapStateToProps, {
  getTrendingItemData,
  getCast,
  getTrailer,
})(Tv);
