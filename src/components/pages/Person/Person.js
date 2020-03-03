import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPerson } from '../../../redux/person/personActions';
import { getPersonPhotos } from '../../../redux/personPhotos/personPhotosActions';

import PersonView from './PersonView';

const Person = ({ match, person, getPerson, photos, getPersonPhotos }) => {
  const { id } = match.params;

  useEffect(() => {
    getPerson(id);
    getPersonPhotos(id);
  }, []);

  return <PersonView general={person} photos={photos} />;
};

const mapStateToProps = state => ({
  person: state.person.personData,
  photos: state.personPhotos.photos
});

export default connect(mapStateToProps, { getPerson, getPersonPhotos })(Person);