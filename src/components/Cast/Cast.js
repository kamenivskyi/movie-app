import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";

import CastItem from "../CastItem/CastItem";
import { sliderSettings } from "../../utils/config";
import { castItemShape } from "../../utils/commonPropTypes";

import "./Cast.css";

const Cast = ({ data }) => {
  return (
    data &&
    data.length > 0 && (
      <section className="cast">
        <h3 className="section-title text-black">Cast</h3>
        <Slider {...sliderSettings.multipleItems}>
          {data.map((item) => (
            <CastItem item={item} key={item.id} />
          ))}
        </Slider>
      </section>
    )
  );
};

Cast.propTypes = {
  data: PropTypes.arrayOf(castItemShape),
};

export default Cast;
