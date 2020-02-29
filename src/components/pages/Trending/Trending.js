import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getTrendingList } from '../../../redux/trending/trendingActions';

import MediaItems from '../../layout/MediaItems';
import MediaTabs from '../../layout/MediaTabs';
import PaginationWrapper from '../../layout/PaginationWrapper';
import Spinner from '../../common/Spinner';

const Trending = ({ getTrendingList, items, loading }) => {
  console.log(items);

  const [currentType, setCurrentType] = useState('movie');
  const [currentPeriod, setCurrentPeriod] = useState('week');
  const [currentPage, setCurrentPage] = useState(1);

  const { results, total_results, total_pages } = items;

  useEffect(() => {
    getTrendingList(currentType, currentPeriod);
  }, [currentType, currentPeriod]);

  if (!items.results) return null;

  const updateMedia = async e => {
    e.preventDefault();

    const type = e.target.getAttribute('data-type');
    const period = e.target.getAttribute('data-period');

    if (type) {
      setCurrentType(type);
      getTrendingList(currentType, currentPeriod, currentPage);
    } else {
      setCurrentPeriod(period);
      getTrendingList(currentType, currentPeriod, currentPage);
    }
  };

  const handlePageChange = activePage => {
    console.log(activePage);
    setCurrentPage(activePage);
    getTrendingList(currentType, currentPeriod, activePage);
  };

  return (
    <div className='container-fluid'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <MediaTabs
            onClick={updateMedia}
            type={currentType}
            period={currentPeriod}
          />

          <div className='row'>
            <MediaItems items={results} type={currentType} />

            <PaginationWrapper
              currentPage={currentPage}
              totalItems={total_results}
              totalPages={total_pages}
              onChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.trending.trendingList,
  loading: state.trending.loading
});

export default connect(mapStateToProps, { getTrendingList })(Trending);
