import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { getBookmarks } from "../../../redux/firebase/firebaseActions";
import { auth } from "../../../firebase/firebaseUtils";

import MediaItems from "../../layout/MediaItems";
import Spinner from "../../layout/Spinner";

const UserBookmarks = () => {
  const [term, setTerm] = useState("");
  const { bookmarks, loading } = useSelector(({ firebase }) => ({
    bookmarks: firebase.bookmarks,
    loading: firebase.bookmarksLoading,
  }));
  const dispatch = useDispatch();

  const { tv, movie } = bookmarks;

  useEffect(() => {
    dispatch(getBookmarks());
  }, []);

  const search = (array, term, type) => {
    return array.filter((item) =>
      item[type].toLowerCase().includes(term.toLowerCase())
    );
  };

  const visibleMovies = movie && search(movie, term, "title");
  const visibleTvs = tv && search(tv, term, "name");

  const handleChange = (e) => setTerm(e.target.value);

  const ifArraysEmptyRenderDummy = () => {
    if (tv && tv.length === 0 && movie && movie.length === 0) {
      return <p className="text-center w-100">Your bookmarks list is empty</p>;
    }
  };

  if (auth.currentUser) {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1 className="section-title mb-3">Bookmarks</h1>
          <input
            type="search"
            className="form-control"
            placeholder="Type to search.."
            term={term}
            onChange={handleChange}
          />
          <hr className="my-4" />
          <div className="row">
            {loading && <Spinner />}

            {ifArraysEmptyRenderDummy()}

            {visibleMovies && <MediaItems items={visibleMovies} type="movie" />}
            {visibleTvs && <MediaItems items={visibleTvs} type="tv" />}
          </div>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default UserBookmarks;
