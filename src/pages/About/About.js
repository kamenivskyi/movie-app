import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const About = () => (
  <Fade left cascade>
    <div className="jumbotron">
      <div className="container">
        <h1 className="section-title text-left">About the app</h1>
        <p className="lead">
          This is a series and movies search application where you can find all
          the latest information about your favorite movie or series
        </p>
        <hr className="my-4" />
        <p>This application was written on react.js by Roman Kamenivskyi</p>
        <p className="lead">
          <Link className="btn btn-primary btn-lg" to="/" role="button">
            Back to home
          </Link>
        </p>
      </div>
    </div>
  </Fade>
);

export default About;
