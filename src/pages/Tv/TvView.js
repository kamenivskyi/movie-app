import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import MediaBackground from "../../components/MediaBackground/MediaBackground";
import Cast from "../../components/Cast";
import MediaDescription from "../../components/MediaDescription";
import Studios from "../../components/Studios";
import Companies from "../../components/Companies";
import Networks from "../../components/Networks/Networks";
import BtnShowVideo from "../../components/Video/BtnShowVideo";
import Button from "../../components/Button";

import withSpinner from "../../hocs/withSpinner";
import { API_IMAGE, TV_TYPE } from "../../utils/config";
import { auth, addToDatabaseBookmarks } from "../../firebase/firebaseUtils";
import { castItemShape, mediaView } from "../../utils/commonPropTypes";

import "./TvView.css";

const TvView = ({ tv, cast, video }) => {
  const {
    name,
    poster_path,
    backdrop_path,
    overview,
    genres,
    first_air_date,
    runtime,
    vote_average,
    id,
    production_companies,
    networks,
  } = tv;

  console.log("tv: ", tv);

  const { large } = API_IMAGE;

  const createObj = () => ({
    id,
    name,
    type: TV_TYPE,
    poster_path,
    vote_average,
  });

  const handleAddToBookmarks = () => {
    const tvObject = createObj();
    addToDatabaseBookmarks(tvObject, TV_TYPE);
  };

  return (
    <section>
      <MediaBackground bgUrl={backdrop_path}>
        <div className="container">
          {name && <h3 className="media-view-title">{name}</h3>}
          <div className="media-view-card">
            <div className="row">
              <div className="col-md-3">
                <div className="media-view-card-img">
                  <img src={large + poster_path} alt={name} />
                </div>
              </div>
              <div className="col-md-7">
                <MediaDescription
                  overview={overview}
                  releaseDate={first_air_date}
                  genres={genres}
                  runtime={runtime}
                />
              </div>
              <div className="col-md-1 offset-md-1">
                <div className="media-view-user-buttons">
                  {video && <BtnShowVideo url={video.key} />}
                  {auth.currentUser && (
                    <Button
                      className="btn btn-primary btn-rounded mt-3"
                      onClick={handleAddToBookmarks}
                      data-id={id}
                      data-type={TV_TYPE}
                      label="Add to bookmarks"
                    >
                      <FontAwesomeIcon icon={faBookmark} />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MediaBackground>
      <Studios
        postitionTop={<Companies data={production_companies} />}
        positionBottom={<Networks data={networks} />}
      />
      <Cast data={cast} />
    </section>
  );
};

TvView.propTypes = {
  tv: PropTypes.shape({
    name: PropTypes.string,
    ...mediaView,
  }),
  cast: PropTypes.arrayOf(castItemShape),
  id: PropTypes.string,
  type: PropTypes.string,
};

const TvViewWithSpinner = withSpinner(TvView);

export default TvViewWithSpinner;
