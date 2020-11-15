import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Person from "./pages/Person";
import GenreMovies from "./pages/GenreMovies";
import Results from "./pages/Results";
import Trending from "./pages/Trending";
import Tv from "./pages/Tv";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import UserBookmarks from "./pages/UserBookmarks/UserBookmarks";
import ProtectedRoute from "./components/ProtectedRoute";
import { auth } from "./firebase/firebaseUtils";

const Routes = () => {
  const isAuthed = auth.currentUser;
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/movie/:id" component={Movie} exact />
      <Route path="/tv/:id" component={Tv} exact />
      <Route path="/genre/:id" component={GenreMovies} exact />
      <Route path="/person/:id" component={Person} exact />
      <Route path="/trending" component={Trending} exact />
      <Route path="/about" component={About} exact />
      <Route path="/results/:query/:page" component={Results} exact />
      <ProtectedRoute
        path="/profile/bookmarks"
        isAuthenticated={isAuthed}
        component={UserBookmarks}
        exact
      />
      <ProtectedRoute
        path="/profile"
        isAuthenticated={isAuthed}
        component={Profile}
        exact
      />
      <ProtectedRoute
        path="/login"
        isAuthenticated={!isAuthed}
        component={Login}
        exact
      />
      <ProtectedRoute
        path="/signup"
        isAuthenticated={!isAuthed}
        component={Signup}
        exact
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
