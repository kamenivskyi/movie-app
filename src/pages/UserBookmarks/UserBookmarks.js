import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import MediaItems from "../../components/MediaItems";
import Spinner from "../../components/Spinner";
import FormControl from "../../components/FormControl";

import { getBookmarks } from "../../redux/firebase/firebaseActions";
import { checkIsAllArraysEmpty } from "../../utils/helpers";

const UserBookmarks = () => {
  const [query, setQuery] = useState("");
  const { bookmarks, loading } = useSelector(({ firebase }) => ({
    bookmarks: firebase.bookmarks,
    loading: firebase.bookmarksLoading,
  }));
  const dispatch = useDispatch();

  const { tv, movie } = bookmarks;

  useEffect(() => {
    dispatch(getBookmarks());
  }, [dispatch]);

  const getSearchedArr = (array, query, type) => {
    return array.filter((item) =>
      item[type].toLowerCase().includes(query.toLowerCase())
    );
  };

  const visibleMovies = movie && getSearchedArr(movie, query, "title");
  const visibleTvs = tv && getSearchedArr(tv, query, "name");

  const handleChange = ({ target }) => setQuery(target.value);

  const isEmpty = checkIsAllArraysEmpty([tv, movie]);

  return (
    <div className="jumbotron">
      <div className="container">
        <h2 className="section-title mb-3">Bookmarks</h2>
        <FormControl
          type="search"
          placeholder="Type to search.."
          value={query}
          onChange={handleChange}
        />
        <hr className="my-4" />
        <div className="row">
          {loading && <Spinner />}

          {isEmpty && (
            <p className="text-center w-100">Your bookmarks list is empty</p>
          )}

          {visibleMovies && <MediaItems items={visibleMovies} type="movie" />}
          {visibleTvs && <MediaItems items={visibleTvs} type="tv" />}
        </div>
      </div>
    </div>
  );
};

export default React.memo(UserBookmarks);
