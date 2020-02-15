import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../../config';
import reserveAvatar from '../../../assets/images/avatar.jpg';

const Cast = ({ data }) => {
  if (!data) return null;

  return (
    <ul className='cast'>
      {data.map(actor => {
        const { character, name, profile_path, id } = actor;
        const imageUrl = profile_path
          ? config.API_IMAGE.medium + profile_path
          : reserveAvatar;

        return (
          <li className='cast-item' key={Math.random()}>
            <img src={imageUrl} alt={name} />
            <Link to={`/person/${id}`} className='character'>
              {character}
            </Link>
            <h5 className='name'>{name}</h5>
          </li>
        );
      })}
    </ul>
  );
};
export default Cast;
