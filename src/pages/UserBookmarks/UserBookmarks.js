import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getBookmarks } from "../../redux/firebase/firebaseActions";
import MediaItems from "../../components/MediaItems";
import Spinner from "../../components/Spinner";

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

  const handleChange = ({ target }) => setTerm(target.value);

  const ifBookmarksListEmptyRenderDummy = () => {
    if (tv && tv.length === 0 && movie && movie.length === 0) {
      return <p className="text-center w-100">Your bookmarks list is empty</p>;
    }
  };

  return (
    <div className="jumbotron">
      <div className="container">
        <h2 className="section-title mb-3">Bookmarks</h2>
        <input
          type="search"
          className="form-control"
          placeholder="Type to search.."
          value={term}
          onChange={handleChange}
        />
        <hr className="my-4" />
        <div className="row">
          {loading && <Spinner />}

          {ifBookmarksListEmptyRenderDummy()}

          {visibleMovies && <MediaItems items={visibleMovies} type="movie" />}
          {visibleTvs && <MediaItems items={visibleTvs} type="tv" />}
        </div>
      </div>
    </div>
  );
};

export default UserBookmarks;
