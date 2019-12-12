import React from 'react';

const Companies = ({ data }) => {
  const reserveImg =
    'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
  return (
    <ul className='companies'>
      {data &&
        data.map(({ name, id, logo_path }) => (
          <li key={id}>
            <img
              src={`${
                logo_path
                  ? 'https://image.tmdb.org/t/p/w500' + logo_path
                  : reserveImg
              }`}
              alt=''
            />
            {name}
          </li>
        ))}
    </ul>
  );
};
export default Companies;
