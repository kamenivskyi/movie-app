import React from "react";
import PropTypes from "prop-types";

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
import { mediaPropTypes } from "../../utils/mediaViewPropTypes";

import reserveBg from "../../assets/images/reserve-bg.jpg";

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

  const { original, medium } = API_IMAGE;

  const image = backdrop_path ? original + backdrop_path : reserveBg;

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
      <div className="movie" style={{ backgroundImage: `url(${image})` }}>
        {name && <h3 className="movie-title">{name}</h3>}
        <div className="item-row">
          <div className="movie-img-wrapp">
            <img className="movie-img" src={medium + poster_path} alt={name} />
            {video && <BtnShowVideo url={video.key} />}
            {auth.currentUser && (
              <Button
                className="btn btn-primary mt-3"
                onClick={handleAddToBookmarks}
                data-id={id}
                data-type={TV_TYPE}
              >
                <i className="fas fa-bookmark"></i> &nbsp; To bookmarks
              </Button>
            )}
          </div>
          <MediaDescription
            overview={overview}
            releaseDate={first_air_date}
            genres={genres}
            runtime={runtime}
          />
        </div>
      </div>
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
    ...mediaPropTypes,
  }),
  cast: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string,
  type: PropTypes.string,
};

const TvViewWithSpinner = withSpinner(TvView);

export default TvViewWithSpinner;
