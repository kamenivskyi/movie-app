import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../layout/Card';
import DeleteBookmarkButton from '../layout/DeleteBookmarkButton';
import config from '../../config';
import NotFoundImage from './not-found.jpg';
import './MediaItems.css';

const MovieItemView = ({ array, type }) => {
  const { large } = config.API_IMAGE;
  console.log('render');
  return (
    array &&
    array.map(({ title, poster_path, vote_average, id }) => {
      const image = poster_path ? large + poster_path : NotFoundImage;
      const obj = { id, poster_path, title, type: 'movie', vote_average };

      return (
        <Card key={`movie${id}`}>
          <Link to={`/${type || 'movie'}/${id}`}>
            <img src={image} alt={title} />
            <span className='badge badge-success card-item-badge'>
              Rating: {vote_average}
            </span>
            <div className='card-item-content'>
              <DeleteBookmarkButton item={obj} type='movies' />
              <h5 className='card-item-link'>{title}</h5>
            </div>
          </Link>
        </Card>
      );
    })
  );
};
export default MovieItemView;
