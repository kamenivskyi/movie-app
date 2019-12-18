import React, { useContext, useEffect } from 'react';
import MovieContext from '../../../context/movie/movieContext';
import PersonView from './PersonView';

const PersonInfo = ({ match }) => {
  const movieContext = useContext(MovieContext);
  const { getPerson, person, getPhoto, photos } = movieContext;

  useEffect(() => {
    const { id } = match.params;
    getPerson(id);
    getPhoto(id);
  }, []);

  console.log(person);
  return <PersonView general={person} photos={photos} />;
};
export default PersonInfo;
