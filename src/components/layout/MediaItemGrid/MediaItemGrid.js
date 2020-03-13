import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const GridMediaItem = ({ data }) => {
  const { profile_path, name, id } = data;

  const imagePath = classNames({
    [`https://image.tmdb.org/t/p/w500${profile_path}`]: profile_path,
    'https://via.placeholder.com/500': !profile_path
  });

  return (
    <Link to={`/person/${id}`} className='grid-item' title={name}>
      <img src={imagePath} alt={name} />
    </Link>
  );
};

export default GridMediaItem;
