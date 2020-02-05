import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import CardWrapper from '../CardWrapper';
import DeleteBookmarkButton from '../DeleteBookmarkButton';
import config from '../../../config';
import NotFoundImage from '../../../assets/images/not-found.jpg';

const MediaItem = ({ data, type }) => {
  const { title, name, poster_path, vote_average, id } = data;
  const image = getItemImage(poster_path);
  const uniqueData = getUniqueData(data, type);
  const link = `/${type}/${id}`;

  const badgeIconClass = classNames('card-item-badge', {
    'bg-warning': vote_average >= 5 && vote_average < 7,
    'bg-danger': vote_average < 5,
    'bg-success': vote_average >= 7
  });

  return (
    <CardWrapper>
      <img src={image} alt={title || name} />
      <span className={badgeIconClass}>{vote_average}</span>
      <div className='card-item-content'>
        <DeleteBookmarkButton item={uniqueData} type={type} />
        <Link to={link} className='card-item-link'>
          {title || name}
        </Link>
      </div>
    </CardWrapper>
  );
};

const getItemImage = path => {
  return path ? config.API_IMAGE.large + path : NotFoundImage;
};

const getUniqueData = (data, type) => {
  const { id, poster_path, title, name, vote_average } = data;
  const standartObj = { id, poster_path, vote_average, type };

  if (type === 'tv') {
    return { ...standartObj, name };
  } else {
    return { ...standartObj, title };
  }
};

export default MediaItem;
