import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../../config';
import avatar from './avatar.jpg';
import SliderWrapper from '../../common/SliderWrapper';

const Cast = ({ data }) => {
  return (
    <ul className='cast'>
      {data &&
        data.map(actor => {
          const { character, name, profile_path, id } = actor;

          return (
            <li className='cast-item' key={id}>
              <img
                src={`${
                  profile_path ? config.API_IMAGE.medium + profile_path : avatar
                }`}
                alt={name}
              />
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
