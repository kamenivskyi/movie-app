import React, { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import MovieContext from '../../../context/movie/movieContext';
import { getTrendingItemData } from '../../../redux/trending/trendingActions';

import TvView from './TvView';

import MovieService from '../../../services/movie-service';

const Tv = ({ getTrendingItemData, match, trendingItem }) => {
  const [video, setVideo] = useState('');
  const { getVideo } = new MovieService();

  const { getCast, cast } = useContext(MovieContext);

  useEffect(() => {
    const { id } = match.params;

    getTrendingItemData(id, 'tv');
    getVideo(id, 'tv').then(res => setVideo(res));
    getCast(id, 'tv');
  }, []);

  return <TvView tv={trendingItem} video={video} cast={cast} type='tv' />;
};

const mapStateToProps = state => ({
  trendingItem: state.trending.trendingItem
});

export default connect(mapStateToProps, { getTrendingItemData })(Tv);
