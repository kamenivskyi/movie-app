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
          <Link to={`/${type || 'tv'}/${id}`} className='py-2'>
            <img className='img-fluid' src={image} alt={name} />
            <span className='badge badge-success card-item-badge'>
              Rating: {vote_average}
            </span>
            <div className='card-item-content'>
              <DeleteBookmarkButton item={obj} type='tvs' />
              <h5 className='card-item-link'>{name}</h5>
            </div>
          </Link>
        </Card>
      );
    })
  );
};
export default TvItemsView;
