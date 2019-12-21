import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../../config';
import SliderWrapper from '../../common/SliderWrapper';

const Cast = ({ data }) => {
  return (
    <SliderWrapper>
      {data &&
        data.map(actor => {
          const { character, name, profile_path, id } = actor;
          const reserve =
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6DfvAxtkgMG-guIRmXW5YzILyMiX1SpHB9lmio4FUH-BMJwJ4ZQ&s';

          return (
            <Link to={`/person/${id}`} key={id} className='cast-item'>
              <img
                src={`${
                  profile_path ? config.API_IMAGE.small + profile_path : reserve
                }`}
                alt={name}
              />
              <h4 className='character'>{character}</h4>
              <h5 className='name'>{name}</h5>
            </Link>
          );
        })}
    </SliderWrapper>
  );
};
export default Cast;
