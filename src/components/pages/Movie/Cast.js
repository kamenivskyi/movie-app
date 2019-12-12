import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const Cast = ({ data }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };
  return (
    <div>
      <Slider {...settings}>
        {data &&
          data.map(actor => {
            const { character, name, profile_path, id } = actor;
            const reserve =
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6DfvAxtkgMG-guIRmXW5YzILyMiX1SpHB9lmio4FUH-BMJwJ4ZQ&s';

            return (
              <Link to={`/person/${id}`} key={id}>
                <img
                  src={`${
                    profile_path
                      ? 'https://image.tmdb.org/t/p/w154' + profile_path
                      : reserve
                  }`}
                  alt={name}
                />
                <h4>{character}</h4>
                <h5>{name}</h5>
              </Link>
            );
          })}
      </Slider>
    </div>
  );
};
export default Cast;
