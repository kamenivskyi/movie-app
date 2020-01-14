import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <Fade left cascade>
      <div className='jumbotron'>
        <h1 className='display-3'>About the app</h1>
        <p className='lead'>
          This is a series and movie search application where you find all the
          latest information about your favorite movie or series
        </p>
        <hr className='my-4' />
        <p>
          This application was written as a coursework on react.js by Roman
          Kamenivskyi
        </p>
        <p className='lead'>
          <Link className='btn btn-primary btn-lg' to='/' role='button'>
            Back to home
          </Link>
        </p>
      </div>
    </Fade>
  );
};
export default About;
