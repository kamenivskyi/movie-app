import React, { useContext, useEffect } from 'react';
import MovieContext from '../../../context/movie/movieContext';
import PersonView from './PersonView';

const PersonInfo = ({ match }) => {
  const movieContext = useContext(MovieContext);
  const { getPerson, person } = movieContext;

  useEffect(() => {
    getPerson(match.params.id);
  }, []);

  console.log(person);
  return <PersonView data={person} />;
};
export default PersonInfo;
