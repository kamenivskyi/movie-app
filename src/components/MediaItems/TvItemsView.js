import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../layout/Card';
import DeleteBookmarkButton from '../layout/DeleteBookmarkButton';
import config from '../../config';
import NotFound from './not-found.jpg';

const TvItemsView = ({ array, type }) => {
  const { large } = config.API_IMAGE;

  return (
    array &&
    array.map(item => {
      console.log(item);
      const { name, poster_path, vote_average, id } = item;
      const image = poster_path ? large + poster_path : NotFound;
      const obj = { id, poster_path, name, type: 'tv', vote_average };

      return (
        <Card key={`tv${id}`}>
          <img className='img-fluid' src={image} alt={name} />
          <span className='badge badge-success position-absolute my-1'>
            Rating: {vote_average}
          </span>
          <DeleteBookmarkButton item={obj} type='tvs' />
          <Link to={`/${type || 'tv'}/${id}`} className='py-2'>
            {name}
          </Link>
        </Card>
      );
    })
  );
};
export default TvItemsView;
