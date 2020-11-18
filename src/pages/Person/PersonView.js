import React from "react";

import PersonPhotos from "./PersonPhotos";
import Href from "../../components/Href";

import { API_IMAGE } from "../../utils/config";
import withSpinner from "../../hocs/withSpinner";

const PersonView = ({ general, photos }) => {
  const {
    name,
    biography,
    profile_path,
    birthday,
    place_of_birth,
    deathday,
    homepage,
  } = general;

  console.log(general);

  const photoUrl = API_IMAGE.medium + profile_path;

  return (
    <section className="person-page">
      <div className="card mb-3 py-2" style={{ borderRadius: "0" }}>
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-4">
              {photoUrl && (
                <img src={photoUrl} className="card-img" alt={name} />
              )}
            </div>
            <div className="col-md-8">
              <div className="card-body">
                {name && <h5 className="card-title">{name}</h5>}

                {homepage && (
                  <Href className="my-2 d-block" link={homepage}>
                    {homepage}
                  </Href>
                )}

                {place_of_birth && (
                  <p className="card-text">Place of birth: {place_of_birth}</p>
                )}

                {birthday && <p className="card-text">Birthday: {birthday}</p>}

                {deathday && (
                  <p>
                    Death{" "}
                    <span role="img" aria-label="sad emodji">
                      😢
                    </span>
                    : {deathday}
                  </p>
                )}

                {biography && (
                  <p className="card-text">
                    <small className="text-muted">{biography}</small>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {photos && <PersonPhotos data={photos} />}
    </section>
  );
};

const PersonViewWithSpinner = withSpinner(PersonView);

export default PersonViewWithSpinner;
