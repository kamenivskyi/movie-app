import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";
import Slider from "react-slick";

import { getBannerMovies } from "../../redux/banner/bannerActions";

import { API_IMAGE, MOVIE_TYPE } from "../../utils/config";
import { cutString } from "../../utils/helpers";
import { singleItem } from "../../utils/sliderSettings";

import "./Banner.css";

const Banner = () => {
  const items = useSelector(({ banner }) => banner.bannerItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBannerMovies(MOVIE_TYPE, "week", 1));
  }, []);

  const { original } = API_IMAGE;

  if (!items) return null;

  return (
    <Flip left>
      <Slider {...singleItem}>
        {items.map((item) => {
          const { title, backdrop_path, overview, id } = item;

          const clippedTitle = cutString(title, 0, 30);
          const clippedOverview = cutString(overview, 0, 140);

          return (
            <div className="banner-item" key={`banner${Math.random()}`}>
              <img src={`${original}${backdrop_path}`} alt={title} />
              <div className="banner-content">
                <h2 className="section-title">
                  <Link to={`movie/${id}`} className="banner-link">
                    {clippedTitle}
                  </Link>
                </h2>

                <div className="banner-description">{clippedOverview}</div>
              </div>
            </div>
          );
        })}
      </Slider>
    </Flip>
  );
};

export default Banner;
