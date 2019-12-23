import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../../config';
import SliderWrapper from '../../common/SliderWrapper';

const Cast = ({ data }) => {
  return (
    <div className='cast'>
      {data &&
        data.map(actor => {
          const { character, name, profile_path, id } = actor;
          return (
            <Link to={`/person/${id}`} key={id} className='cast-item'>
              <img
                src={`${
                  profile_path
                    ? config.API_IMAGE.small + profile_path
                    : config.mediumReserve
                }`}
                alt={name}
              />
              <h4 className='character'>{character}</h4>
              <h5 className='name'>{name}</h5>
            </Link>
          );
        })}
    </div>
  );
};
export default Cast;
