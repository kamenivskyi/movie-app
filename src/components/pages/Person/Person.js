import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getPerson } from "../../../redux/person/personActions";
import { getPersonPhotos } from "../../../redux/personPhotos/personPhotosActions";

import PersonView from "./PersonView";

const Person = () => {
  const { person, photos, loading } = useSelector(
    ({ person, personPhotos }) => ({
      person: person.personData,
      photos: personPhotos.photos,
      loading: person.loading,
    })
  );
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPerson(id));
    dispatch(getPersonPhotos(id));
  }, [id]);

  return <PersonView general={person} photos={photos} loading={loading} />;
};

export default Person;
