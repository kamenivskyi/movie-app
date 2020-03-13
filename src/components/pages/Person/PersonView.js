import React from 'react';

import Spinner from '../../common/Spinner';

import PersonPhotos from './PersonPhotos';

// import withSpinner from '../../hoc-helpers/withSpinner';

import config from '../../../utils/config';

const PersonView = ({ general, photos, loading }) => {
  const { name, biography, profile_path, birthday, place_of_birth } = general;
  console.log(general);

  const photoUrl = config.API_IMAGE.medium + profile_path;

  if (loading) return <Spinner />;

  return (
    <>
      <div className='card mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            {photoUrl && <img src={photoUrl} className='card-img' alt={name} />}
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              {name && <h5 className='card-title'>{name}</h5>}

              {place_of_birth && (
                <p className='card-text'>Place of birth: {place_of_birth}</p>
              )}

              {birthday && <p className='card-text'>Birthday: {birthday}</p>}

              {biography && (
                <p className='card-text'>
                  <small className='text-muted'>{biography}</small>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {photos && <PersonPhotos data={photos} />}
    </>
  );
};
export default PersonView;
