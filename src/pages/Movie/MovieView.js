import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import MediaDescription from "../../components/MediaDescription";
import Finances from "../../components/Finances";
import Cast from "../../components/Cast";
import Studios from "../../components/Studios";
import Companies from "../../components/Companies";
import Networks from "../../components/Networks/Networks";
import BtnShowVideo from "../../components/Video/BtnShowVideo";
import Button from "../../components/Button";
import { API_IMAGE, MOVIE_TYPE } from "../../utils/config";
import { castItemShape, mediaView } from "../../utils/commonPropTypes";
import { auth, addToDatabaseBookmarks } from "../../firebase/firebaseUtils";

import withSpinner from "../../hocs/withSpinner";
import MediaBackground from "../../components/MediaBackground/MediaBackground";

const MovieView = ({ movie, cast, video, id }) => {
  const {
    title,
    poster_path,
    backdrop_path,
    overview,
    genres,
    budget,
    revenue,
    release_date,
    runtime,
    vote_average,
    production_companies,
    networks,
  } = movie;

  const { large } = API_IMAGE;

  const createMovieObj = () => ({
    id,
    title,
    type: MOVIE_TYPE,
    poster_path,
    vote_average,
  });

  console.log(movie);

  const handleAddToBookmarks = () => {
    const movieObject = createMovieObj();
    addToDatabaseBookmarks(movieObject, MOVIE_TYPE);
  };

  return (
    <section>
      <MediaBackground bgUrl={backdrop_path}>
        <div className="container">
          {title && <h3 className="media-view-title">{title}</h3>}
          <div className="media-view-card">
            <div className="row">
              <div className="col-md-3">
                <div className="media-view-card-img">
                  <img src={large + poster_path} alt={title} />
                </div>
              </div>
              <div className="col-md-7">
                <MediaDescription
                  overview={overview}
                  releaseDate={release_date}
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
                      data-type={MOVIE_TYPE}
                      leabel="Add to bookmarks"
                    >
                      <FontAwesomeIcon icon={faBookmark} /> &nbsp;
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Finances budget={budget} revenue={revenue} />
        </div>
        <Studios
          postitionTop={<Companies data={production_companies} />}
          positionBottom={<Networks data={networks} />}
        />
      </MediaBackground>
      <Cast data={cast} />
    </section>
  );
};

MovieView.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    ...mediaView,
  }),
  cast: PropTypes.arrayOf(castItemShape),
  id: PropTypes.string,
  type: PropTypes.string,
};

const MovieViewWithSpinner = withSpinner(MovieView);

export default MovieViewWithSpinner;
