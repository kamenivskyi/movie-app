import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getTrendingItemData } from '../../../redux/trending/trendingActions';
import { getCast } from '../../../redux/cast/castActions';

import TvView from './TvView';

import MovieService from '../../../services/movie-service';

const Tv = ({ getTrendingItemData, match, trendingItem, cast, getCast }) => {
  const [video, setVideo] = useState('');
  const { getVideo } = new MovieService();

  useEffect(() => {
    const { id } = match.params;

    getTrendingItemData(id, 'tv');
    getVideo(id, 'tv').then(res => setVideo(res));
    getCast(id, 'tv');
  }, []);

  return <TvView tv={trendingItem} video={video} cast={cast} type='tv' />;
};

const mapStateToProps = state => ({
  trendingItem: state.trending.trendingItem,
  cast: state.cast.castItems
});

export default connect(mapStateToProps, { getTrendingItemData, getCast })(Tv);
