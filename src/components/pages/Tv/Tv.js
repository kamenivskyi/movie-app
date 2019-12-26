import React, { useContext, useEffect, useState } from 'react';
import PopularContext from '../../../context/popular/popularContext';
import MovieContext from '../../../context/movie/movieContext';
import TvView from './TvView';
import MovieService from '../../../services/movie-service';

const Tv = ({ match }) => {
  const [video, setVideo] = useState('');
  const service = new MovieService();
  const popularContext = useContext(PopularContext);
  const movieContext = useContext(MovieContext);
  const { getMedia, itemData } = popularContext;

  useEffect(() => {
    const { id } = match.params;
    service.getVideo(id, 'tv').then(res => setVideo(res));
    getMedia(id, 'tv');
    movieContext.getCast(id);
  }, []);

  return <TvView tv={itemData} video={video} cast={movieContext.cast} />;
};

export default Tv;
