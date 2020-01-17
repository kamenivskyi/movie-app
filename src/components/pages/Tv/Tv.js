import React, { useContext, useEffect, useState } from 'react';
import TrendingContext from '../../../context/trending/trendingContext';
import MovieContext from '../../../context/movie/movieContext';
import TvView from './TvView';
import MovieService from '../../../services/movie-service';

const Tv = ({ match }) => {
  const [video, setVideo] = useState('');
  const { getVideo } = new MovieService();
  const { getMedia, itemData } = useContext(TrendingContext);
  const { getCast, cast } = useContext(MovieContext);

  useEffect(() => {
    const { id } = match.params;
    getVideo(id, 'tv').then(res => setVideo(res));
    getMedia(id, 'tv');
    getCast(id, 'tv');
  }, []);

  return <TvView tv={itemData} video={video} cast={cast} type='tv' />;
};

export default Tv;
