import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Flip from "react-reveal/Flip";

import MediaItemGrid from "../MediaItemGrid";
import CardWrapper from "../CardWrapper";
import DeleteBookmarkButton from "../DeleteBookmarkButton";

import { API_IMAGE } from "../../utils/config";
import { createUniqueItem } from "../../utils/helpers";

import NotFoundImage from "../../assets/images/not-found.jpg";

import "./MediaItem.css";

const MediaItem = ({ data, type }) => {
  const { title, name, poster_path, vote_average, id } = data;

  const image = getItemImage(poster_path);
  const uniqueItemData = createUniqueItem(data, type);
  const link = `/${type}/${id}`;

  const badgeIconClass = classNames("card-item-badge", {
    "bg-warning": vote_average >= 5 && vote_average < 7,
    "bg-danger": vote_average < 5,
    "bg-success": vote_average >= 7,
  });

  if (type === "person") {
    return <MediaItemGrid data={data} />;
  }

  return (
    <CardWrapper>
      <img src={image} alt={title || name} />
      <span className={badgeIconClass}>{vote_average}</span>
      <div className="card-item-content">
        <DeleteBookmarkButton item={uniqueItemData} type={type} />
        <Link to={link} className="card-item-link">
          {title || name}
        </Link>
      </div>
    </CardWrapper>
  );
};

const getItemImage = (path) => {
  return path ? API_IMAGE.large + path : NotFoundImage;
};

export default MediaItem;
