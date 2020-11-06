import React from 'react'
import MediaItems from '../../layout/MediaItems';

import withSpinner from '../../../hoc-helpers/withSpinner';

const MoviesView = ({ items }) => {
  return (
    <MediaItems items={items} type='movie' />
  )
}

export default withSpinner(MoviesView);
