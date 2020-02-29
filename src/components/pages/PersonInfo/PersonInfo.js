import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  getPerson,
  getPersonPhotos
} from '../../../redux/person/personActions';

import PersonView from './PersonView';

const PersonInfo = ({ match, person, getPerson, photos, getPersonPhotos }) => {
  const { id } = match.params;

  useEffect(() => {
    getPerson(id);
    getPersonPhotos(id);
  }, []);

  return <PersonView general={person} photos={photos} />;
};

const mapStateToProps = state => ({
  person: state.person.personData,
  photos: state.person.personPhotos
});

export default connect(mapStateToProps, { getPerson, getPersonPhotos })(
  PersonInfo
);
