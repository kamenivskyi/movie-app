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

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/movie/:id" component={Movie} />
    <Route exact path="/tv/:id" component={Tv} />
    <Route exact path="/genre/:id" component={GenreMovies} />
    <Route exact path="/person/:id" component={Person} />
    <Route exact path="/trending/:page?" component={Trending} />
    <Route exact path="/about" component={About} />
    <Route exact path="/results/:query/:page" component={Results} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/profile/bookmarks" component={UserBookmarks} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
