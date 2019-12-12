import React from 'react';
import Genres from '../Movie/'

 const MovieGeneralDetails = () => {
  return (
    <React.Fragment>
      <div
        className='card movie mb-3'
        style={{
          backgroundImage: `url(${bgImage})`
        }}
      >
      <div className='row no-gutters'>
        <div className='col-md-4'>
          <img src={image} className='card-img' alt={title} />
        </div>
        <div className='col-md-8'>
          <div
            className='card-body'
            style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
          >
            {title && <h5 className='card-title'>{title}</h5>}
            {description}
            <Genres />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default MovieGeneralDetails;