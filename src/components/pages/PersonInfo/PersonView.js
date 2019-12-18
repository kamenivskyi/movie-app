import React from 'react';
import PersonPhotos from './PersonPhotos';
import withSpinner from '../../hoc-helpers/withSpinner';

const PersonView = ({ general, photos }) => {
  const { name, biography, profile_path, birthday, place_of_birth } = general;
  console.log(general);
  console.log(photos);
  return (
    <React.Fragment>
      <div className='card mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img
              src={`https://image.tmdb.org/t/p/w300${profile_path}`}
              className='card-img'
              alt={name}
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>{name}</h5>
              <p className='card-text'>Place of birth: {place_of_birth}</p>
              <p className='card-text'>Birthday: {birthday}</p>
              <p className='card-text'>
                <small className='text-muted'>{biography}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <PersonPhotos data={photos} />
    </React.Fragment>
  );
};
export default withSpinner(PersonView);
